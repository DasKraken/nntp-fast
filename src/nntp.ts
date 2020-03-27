import * as net from "net";
import { PassThrough, Readable } from "stream";
import * as util from "util";
import * as StreamSearch from "streamsearch";
import DotUnstuffingStreamSearch from "./DotUnstuffingStreamSearch";
import { EventEmitter } from "events";


enum Delimiter {
    CRLF, // \r\n
    MLDB  // multiline datablock \r\n.\r\n
}

const RES_CODE_ML = [100, 101, 215, 220, 221, 222, 224, 225, 230, 231];

interface ResponseHandler {
    handleResponse: (code: number, message: string, data?: Buffer) => void;
    decideMldb?: (code: number) => boolean;
    MldbStream?: PassThrough;
}

interface BasicResponse {
    code: number;
    message: string;
}
interface DataResponse extends BasicResponse {
    data?: Buffer;
}
interface StatResponse {
    code: number;
    articleNumber: number;
    articleId: string;

}
type Headers = Record<string, string>;


export class NntpConnection extends EventEmitter {

    _connected: boolean;
    _connectedResponse: BasicResponse;
    socket: net.Socket;

    responseQueue: ResponseHandler[] = [];

    _buffer: Buffer[] = [];
    _delimiterSearchType: Delimiter = Delimiter.CRLF;

    _streamsearchCRLF: StreamSearch;
    _streamsearchMLDB: DotUnstuffingStreamSearch;
    constructor(options?: { dotUnstuffing?: boolean }) {
        super();
        if (!options) options = {};
        if (options.dotUnstuffing === undefined) options.dotUnstuffing = true;

        this._streamsearchCRLF = new StreamSearch(Buffer.from("\r\n"));
        if (options.dotUnstuffing) {
            this._streamsearchMLDB = new DotUnstuffingStreamSearch(Buffer.from("\r\n.\r\n"));
        } else {
            this._streamsearchMLDB = new StreamSearch(Buffer.from("\r\n.\r\n"));
        }
        this._streamsearchCRLF.maxMatches = 1;
        this._streamsearchMLDB.maxMatches = 1;
        this._streamsearchCRLF.on("info", this._onInfoCRLF.bind(this));
        this._streamsearchMLDB.on("info", this._onInfoMLDB.bind(this));
    }

    connect(host: string, port: number): Promise<BasicResponse> {
        if (this._connected) {
            return Promise.resolve(this._connectedResponse);
        }
        return new Promise((resolve, reject) => {

            // Initial Handler
            const handler: ResponseHandler = {
                handleResponse: (code: number, message: string) => {
                    this._connected = true;
                    this._connectedResponse = { code, message };
                    resolve({ code, message });
                }
            }
            this.responseQueue = [handler];

            this.socket = net.createConnection({ host: host, port: port }, () => {
                // 'connect' listener.

            });
            this.socket.on('data', (data) => { this._onData(data) });
            this.socket.on('end', () => {
                this._connected = false;
                this.emit("end");
            });
            this.socket.on('error', (err) => {
                this._connected = false;
                reject();
                this.emit("error", err);
            });
            this.socket.on('timeout', () => {
                this._connected = false;
                this.socket.end();
                this.emit("timeout");
            });
        })
    }


    _onData(data: Buffer): void {
        let r: number;
        if (this._delimiterSearchType == Delimiter.CRLF) {
            r = this._streamsearchCRLF.push(data);
            if (this._streamsearchCRLF.matches == 1) {
                if (this._handleResponse(Buffer.concat(this._buffer).toString())) {
                    // returns true if multi line data block is expected
                    this._delimiterSearchType = Delimiter.MLDB;
                } else {
                    this.responseQueue.splice(0, 1);
                }
                this._buffer = [];
                this._streamsearchCRLF.reset();
            }
        } else {
            r = this._streamsearchMLDB.push(data);
            if (this._streamsearchMLDB.matches == 1) {
                const stream = this.responseQueue[0].MldbStream;
                stream?.end();
                this.responseQueue.splice(0, 1);
                this._delimiterSearchType = Delimiter.CRLF;
                this._streamsearchMLDB.reset();
            }
        }

        if (r < data.length) {
            // Data after delimiter
            this._onData(data.slice(r));
        }
    }

    _onInfoCRLF(isMatch: boolean, data: Buffer, start: number, end: number): void {
        if (data) {
            if (start == 0 && end == data.length) {
                this._buffer.push(data);
            } else {
                this._buffer.push(data.slice(start, end));
            }
        }

        // Note: never call reset() inside this callback

    }
    _onInfoMLDB(isMatch: boolean, data: Buffer, start: number, end: number): void {
        const stream = this.responseQueue[0].MldbStream;
        if (data) {
            if (start == 0 && end == data.length) {
                stream?.write(data);
            } else {
                stream?.write(data.slice(start, end));
            }
        }

        // Note: never call reset() inside this callback

    }

    getCode(response: string): BasicResponse {
        const res = /^([0-9]{3}) ([^\r\n]*)$/.exec(response);
        if (res) {
            return { code: parseInt(res[1]), message: res[2] };
        } else {
            throw new Error("couldnt parse response: " + response);
        }
    }

    parseHeader(headString: string): Headers {
        const headers: Headers = {};
        for (const entry of headString.split("\r\n")) {
            const firstColon = entry.indexOf(': ');
            headers[entry.substr(0, firstColon)] = entry.substr(firstColon + 2);
        }
        return headers;
    }

    _handleResponse(response: string): boolean {
        const { code, message } = this.getCode(response);
        const responseHandler = this.responseQueue[0];
        if (this.responseQueue.length == 0) {
            this.emit("error", new Error(`Unexpected response: ${code} ${message}`));
            return false;
        }

        if (RES_CODE_ML.includes(code) || (responseHandler.decideMldb && responseHandler.decideMldb(code))) {
            if (responseHandler.MldbStream) {
                responseHandler.handleResponse(code, message);
            } else {
                // mldb not expected but given: wait for end before calling callback
                responseHandler.MldbStream = new PassThrough();
                const responseData: Buffer[] = []
                responseHandler.MldbStream.on("data", (data) => { responseData.push(data) })
                responseHandler.MldbStream.on("end", () => {
                    responseHandler.handleResponse(code, message, Buffer.concat(responseData));
                })
            }
            return true;
        } else {
            responseHandler.handleResponse(code, message);
            responseHandler.MldbStream?.end();
            return false;
        }

    }

    runCommand(command: string, decideMldb?: (code: number) => boolean): Promise<DataResponse> {
        return new Promise((resolve) => {
            const handler: ResponseHandler = {
                handleResponse: (code: number, message: string, data?: Buffer) => {
                    resolve({ code, message, data });
                },
                decideMldb: decideMldb
            }

            this.responseQueue.push(handler);
            this.socket.write(command + "\r\n");
        });
    }
    runCommandStream(command: string, decideMldb?: (code: number) => boolean): { stream: Readable; response: Promise<BasicResponse> } {
        const stream = new PassThrough();
        const response = new Promise<BasicResponse>((resolve): void => {
            const handler: ResponseHandler = {
                handleResponse: (code: number, message: string) => {
                    resolve({ code, message });
                },
                MldbStream: stream,
                decideMldb: decideMldb
            }
            this.responseQueue.push(handler);
            this.socket.write(command + "\r\n");
        });


        return { stream, response };
    }

    async capabilities(keyword?: string): Promise<{ code: number; message: string; body?: Buffer }> {
        const res = await this.runCommand("CAPABILITIES" + (keyword ? " " + keyword : ""));
        if (res.code == 101) {
            return res;
        } else {
            throw res;
        }

    }
    async modeReader(): Promise<BasicResponse> {
        const res = await this.runCommand("MODE READER");
        if ([200, 201/*, 502*/].includes(res.code)) {
            return res;
        } else {
            throw res;
        }

    }
    async quit(): Promise<BasicResponse> {
        const res = await this.runCommand("QUIT");
        if (205 == res.code) {
            return res;
        } else {
            throw res;
        }

    }
    async group(group: string): Promise<{ code: number; number: number; low: number; high: number; group: string }> {
        const res = await this.runCommand("GROUP " + group);
        if (res.code == 211) {
            const m = /^([0-9]+) ([0-9]+) ([0-9]+) (.+)$/.exec(res.message);
            if (m == null) {
                throw "cant parse " + util.inspect(res.message);
            }
            return {
                code: res.code,
                number: parseInt(m[1]),
                low: parseInt(m[2]),
                high: parseInt(m[3]),
                group: m[4]
            };
        } else {
            throw res;
        }

    }
    async listgroup(group?: string, range?: string): Promise<{ code: number; message: string; articles: number[] }> {
        const res = await this.runCommand("LISTGROUP" + (group ? " " + group + (range ? " " + range : "") : ""), code => code == 211); // Multiline data if code 221 returned
        if (res.code == 211) {
            // let m = /^([0-9]+) ([0-9]+) ([0-9]+) (.+)$/.exec(res.message);
            // ^ not on all servers supportes
            if (!res.data) throw new Error("no data on listgroup");
            return {
                code: res.code,
                message: res.message,
                articles: res.data.toString().split("\r\n").map((n: string): number => parseInt(n))
            };
        } else {
            throw res;
        }

    }
    async last(): Promise<StatResponse> {
        const res = await this.runCommand("LAST");
        if ([223/*, 412, 420, 422*/].includes(res.code)) {
            const m = /^([0-9]+) (<[^ ]+>)/.exec(res.message);
            if (m == null) {
                throw "cant parse " + util.inspect(res.message);
            }
            return {
                code: res.code,
                articleNumber: parseInt(m[1]),
                articleId: m[2]
            };
        } else {
            throw res;
        }

    }
    async next(): Promise<StatResponse> {
        const res = await this.runCommand("NEXT");
        if ([223/*, 412, 420, 422*/].includes(res.code)) {
            const m = /^([0-9]+) (<[^ ]+>)/.exec(res.message);
            if (m == null) {
                throw "cant parse " + util.inspect(res.message);
            }
            return {
                code: res.code,
                articleNumber: parseInt(m[1]),
                articleId: m[2]
            };
        } else {
            throw res;
        }

    }
    async article(messageid?: string | number): Promise<{ code: number; headers: Headers; body: Buffer }> {
        const res = await this.runCommand("ARTICLE" + (messageid ? " " + messageid : ""));
        if ([220/*, 430, 412, 423, 420*/].includes(res.code)) {
            if (!res.data) throw new Error("no data on article");

            const headBodySeparation = res.data.indexOf("\r\n\r\n");

            return {
                code: res.code,
                headers: this.parseHeader(res.data.slice(0, headBodySeparation).toString()),
                body: res.data.slice(headBodySeparation + 4)
            };
        } else {
            throw res;
        }

    }
    async head(messageid?: string | number): Promise<{ code: number; headers: Headers }> {
        const res = await this.runCommand("HEAD" + (messageid ? " " + messageid : ""));
        if ([221/*, 430, 412, 423, 420*/].includes(res.code)) {

            if (!res.data) throw new Error("no data on head");
            return {
                code: res.code,
                headers: this.parseHeader(res.data.toString())
            };

        } else {
            throw res;
        }

    }
    async body(messageid?: string | number): Promise<{ code: number; body: Buffer }> {
        const res = await this.runCommand("BODY" + (messageid ? " " + messageid : ""));
        if ([222/*, 430, 412, 423, 420*/].includes(res.code)) {
            if (!res.data) throw new Error("no data on body");
            return {
                code: res.code,
                body: res.data
            };
        } else {
            throw res;
        }

    }
    bodyStream(messageid?: string | number): { stream: Readable; response: Promise<BasicResponse> } {
        return this.runCommandStream("BODY" + (messageid ? " " + messageid : ""));

    }
    async stat(messageid?: string | number): Promise<StatResponse> {
        const res = await this.runCommand("STAT" + (messageid ? " " + messageid : ""));
        if ([223/*, 430, 412, 423, 420*/].includes(res.code)) {
            const m = /^([0-9]+) (<[^ ]+>)/.exec(res.message);
            if (m == null) {
                throw "cant parse " + util.inspect(res.message);
            }
            return {
                code: res.code,
                articleNumber: parseInt(m[1]),
                articleId: m[2]
            };
        } else {
            throw res;
        }

    }
    /*async post(headers: Headers, data: Buffer): Promise<BasicResponse> {
        throw new Error("Not implemented");

    }
    async ihave(message_id: string, headers: Headers, data: Buffer): Promise<BasicResponse> {
        throw new Error("Not implemented");

    }*/
    async date(): Promise<{ code: number; date: Date }> {
        const res = await this.runCommand("DATE");
        if (res.code == 111) {
            const date = /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})/.exec(res.message);
            if (!date) throw new Error("cant parse date: " + res.message);
            return {
                code: res.code,
                date: new Date(Date.UTC(parseInt(date[1]), parseInt(date[2]) - 1, parseInt(date[3]), parseInt(date[4]), parseInt(date[5]), parseInt(date[6])))
            };
        } else {
            throw res;
        }

    }
    async help(): Promise<BasicResponse> {
        const res = await this.runCommand("HELP");
        if (res.code == 100) {
            return res;
        } else {
            throw res;
        }

    }
    async newsgroups(date: Date): Promise<DataResponse>
    async newsgroups(date: string, time: string, gmt?: boolean): Promise<DataResponse>
    async newsgroups(date: Date | string, time?: string, gmt?: boolean): Promise<DataResponse> {
        if (date instanceof Date) {
            time = date.getUTCHours().toString().padStart(2, "0") + date.getUTCMinutes().toString().padStart(2, "0") + date.getUTCSeconds().toString().padStart(2, "0");
            date = date.getUTCFullYear().toString().padStart(4, "0") + (date.getUTCMonth() + 1).toString().padStart(2, "0") + date.getUTCDay().toString().padStart(2, "0");
            gmt = true;
        }
        if (!time) {
            time = "000000"
        }


        const res = await this.runCommand(`NEWGROUPS ${date} ${time}` + (gmt ? " GMT" : ""));
        if (res.code == 231) {
            return res;
        } else {
            throw res;
        }

    }
}