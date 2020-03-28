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

export interface BasicResponse {
    /** Response code. See [RFC 3977 section 3.2](https://tools.ietf.org/html/rfc3977#section-3.2). */
    code: number;
    /** Response message */
    message: string;
}
export interface DataResponse extends BasicResponse {
    /** Content of multi line data block. */
    data?: Buffer;
}
export interface StatResponse {
    /** Response code. See [RFC 3977 section 3.2](https://tools.ietf.org/html/rfc3977#section-3.2). */
    code: number;
    /** Number of selected article. */
    articleNumber: number;
    /** Message id of selected article.  */
    articleId: string;

}
/** NNTP post headers */
export type Headers = Record<string, string>;

export interface NntpConnectionConstructorOptions {
    /** Whether dot unstuffing should be performed. (Default: true) */
    dotUnstuffing?: boolean;
}

export interface SteamResponse {
    response: Promise<BasicResponse>;
    stream: Readable;
}


/** 
* Emitted when socket is closed.
* @asMemberOf NntpConnection
* @event
*/
export declare function end(): void;

/** 
 * Emitted when an socket or protocoll error occurs.
 * @asMemberOf NntpConnection
 * @event
 */
export declare function error(error: Error): void;

/** 
 * Emitted when socket timeouts.
 * @asMemberOf NntpConnection
 * @event
 */
export declare function timeout(): void;

/**
 * @noInheritDoc
 */
export class NntpConnection extends EventEmitter {
    /** @private */
    _connected: boolean;
    /** @private */
    _connectedResponse: BasicResponse;
    /** @private */
    _socket: net.Socket;

    /** @private */
    _responseQueue: ResponseHandler[] = [];

    /** @private */
    _buffer: Buffer[] = [];
    /** @private */
    _delimiterSearchType: Delimiter = Delimiter.CRLF;

    /** @private */
    _streamsearchCRLF: StreamSearch;
    /** @private */
    _streamsearchMLDB: DotUnstuffingStreamSearch;


    /**
     * 
     * @param options.dotUnstuffing Whether dot unstuffing should be performed.
     */
    constructor(options?: NntpConnectionConstructorOptions) {
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
    /**
     * Connect to nntp server
     * @param host
     * @param port
     */
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
            this._responseQueue = [handler];

            this._socket = net.createConnection({ host: host, port: port }, () => {
                // 'connect' listener.

            });
            this._socket.on('data', (data) => { this._onData(data) });
            this._socket.on('end', () => {
                this._connected = false;
                this.emit("end");
            });
            this._socket.on('error', (err) => {
                this._connected = false;
                reject();
                this.emit("error", err);
            });
            this._socket.on('timeout', () => {
                this._connected = false;
                this._socket.end();
                this.emit("timeout");
            });
        })
    }

    /**
     * @private
     * @param data 
     */
    _onData(data: Buffer): void {
        let r: number;
        if (this._delimiterSearchType == Delimiter.CRLF) {
            r = this._streamsearchCRLF.push(data);
            if (this._streamsearchCRLF.matches == 1) {
                if (this._handleResponse(Buffer.concat(this._buffer).toString())) {
                    // returns true if multi line data block is expected
                    this._delimiterSearchType = Delimiter.MLDB;
                } else {
                    this._responseQueue.splice(0, 1);
                }
                this._buffer = [];
                this._streamsearchCRLF.reset();
            }
        } else {
            r = this._streamsearchMLDB.push(data);
            if (this._streamsearchMLDB.matches == 1) {
                const stream = this._responseQueue[0].MldbStream;
                stream?.end();
                this._responseQueue.splice(0, 1);
                this._delimiterSearchType = Delimiter.CRLF;
                this._streamsearchMLDB.reset();
            }
        }

        if (r < data.length) {
            // Data after delimiter
            this._onData(data.slice(r));
        }
    }
    /**
     * @private
     * @param isMatch 
     * @param data 
     * @param start 
     * @param end 
     */
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
    /**
     * @private
     * @param isMatch 
     * @param data 
     * @param start 
     * @param end 
     */
    _onInfoMLDB(isMatch: boolean, data: Buffer, start: number, end: number): void {
        const stream = this._responseQueue[0].MldbStream;
        if (data) {
            if (start == 0 && end == data.length) {
                stream?.write(data);
            } else {
                stream?.write(data.slice(start, end));
            }
        }

        // Note: never call reset() inside this callback

    }

    /**
     * @private
     * @param response 
     */
    _getCode(response: string): BasicResponse {
        const res = /^([0-9]{3}) ([^\r\n]*)$/.exec(response);
        if (res) {
            return { code: parseInt(res[1]), message: res[2] };
        } else {
            throw new Error("couldnt parse response: " + response);
        }
    }
    /**
     * @private
     * @param headString 
     */
    _parseHeader(headString: string): Headers {
        const headers: Headers = {};
        for (const entry of headString.split("\r\n")) {
            const firstColon = entry.indexOf(': ');
            headers[entry.substr(0, firstColon)] = entry.substr(firstColon + 2);
        }
        return headers;
    }
    /**
     * @private
     * @param response 
     */
    _handleResponse(response: string): boolean {
        const { code, message } = this._getCode(response);
        const responseHandler = this._responseQueue[0];
        if (this._responseQueue.length == 0) {
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
    /**
     * Sends command to server.
     * @param command command to execute
     * @param decideMldb optional function that decides from response code whether a 
     * multi line data block is to be expected
     */
    runCommand(command: string, decideMldb?: (code: number) => boolean): Promise<DataResponse> {
        return new Promise((resolve) => {
            const handler: ResponseHandler = {
                handleResponse: (code: number, message: string, data?: Buffer) => {
                    resolve({ code, message, data });
                },
                decideMldb: decideMldb
            }

            this._responseQueue.push(handler);
            this._socket.write(command + "\r\n");
        });
    }
    /**
     * Sends command to server. Creates a stream for the multi line data block.
     * @param command command to execute
     * @param decideMldb optional function that decides from response code whether a 
     * multi line data block is to be expected
     */
    runCommandStream(command: string, decideMldb?: (code: number) => boolean): SteamResponse {
        const stream = new PassThrough();
        const response = new Promise<BasicResponse>((resolve): void => {
            const handler: ResponseHandler = {
                handleResponse: (code: number, message: string) => {
                    resolve({ code, message });
                },
                MldbStream: stream,
                decideMldb: decideMldb
            }
            this._responseQueue.push(handler);
            this._socket.write(command + "\r\n");
        });


        return { stream, response };
    }
    /**
     * The CAPABILITIES command allows a client to determine the
     * capabilities of the server at any given time.
     * 
     * See [RFC 3977 Section 3.3](https://tools.ietf.org/html/rfc3977#section-3.3)
     * @param keyword 
     */
    async capabilities(keyword?: string): Promise<DataResponse> {
        const res = await this.runCommand("CAPABILITIES" + (keyword ? " " + keyword : ""));
        if (res.code == 101) {
            return res;
        } else {
            throw res;
        }

    }
    /**
     * The MODE READER command instructs a mode-switching server to switch
     * modes, as described in [RFC 3977 Section 3.4.2](https://tools.ietf.org/html/rfc3977#section-3.4.2).
     */
    async modeReader(): Promise<BasicResponse> {
        const res = await this.runCommand("MODE READER");
        if ([200, 201/*, 502*/].includes(res.code)) {
            return res;
        } else {
            throw res;
        }

    }
    /**
     * The client uses the QUIT command to terminate the session.
     */
    async quit(): Promise<BasicResponse> {
        const res = await this.runCommand("QUIT");
        if (205 == res.code) {
            return res;
        } else {
            throw res;
        }

    }
    /**
     * The GROUP command selects a newsgroup as the currently selected
     * newsgroup and returns summary information about it.
     * @param group 
     */
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

    /**
     * The LISTGROUP command selects a newsgroup in the same manner as the
     * GROUP command but also provides a list of article
     * numbers in the newsgroup.  If no group is specified, the currently
     * selected newsgroup is used.
     * 
     * @param group 
     * @param range 
     */
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
    /**
     * The current article number will be set to the previous article in
     * that newsgroup
     */
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

    /**
     * The current article number will be set to the next article in
     * that newsgroup
     */
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
    /**
     * The ARTICLE command selects an article according to the arguments and
     * presents the entire article (that is, the headers, and the body) to 
     * the client.
     * 
     * @param messageid 
     */
    async article(messageid?: string | number): Promise<{ code: number; headers: Headers; body: Buffer }> {
        const res = await this.runCommand("ARTICLE" + (messageid ? " " + messageid : ""));
        if ([220/*, 430, 412, 423, 420*/].includes(res.code)) {
            if (!res.data) throw new Error("no data on article");

            const headBodySeparation = res.data.indexOf("\r\n\r\n");

            return {
                code: res.code,
                headers: this._parseHeader(res.data.slice(0, headBodySeparation).toString()),
                body: res.data.slice(headBodySeparation + 4)
            };
        } else {
            throw res;
        }

    }
    /**
     * The HEAD command selects an article according to the arguments and
     * presents the headers to the client.
     * 
     * @param messageid 
     */
    async head(messageid?: string | number): Promise<{ code: number; headers: Headers }> {
        const res = await this.runCommand("HEAD" + (messageid ? " " + messageid : ""));
        if ([221/*, 430, 412, 423, 420*/].includes(res.code)) {

            if (!res.data) throw new Error("no data on head");
            return {
                code: res.code,
                headers: this._parseHeader(res.data.toString())
            };

        } else {
            throw res;
        }

    }
    /**
     * The BODY command selects an article according to the arguments and
     * presents the body to the client.
     * 
     * @param messageid 
     */
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

    /**
     * The BODY command selects an article according to the arguments and
     * presents the body to the client. Body is given as stream.
     * @param messageid 
     */
    bodyStream(messageid?: string | number): SteamResponse {
        return this.runCommandStream("BODY" + (messageid ? " " + messageid : ""));

    }

    /**
    * The STAT command selects an article according to the arguments.
    * This command allows the client to determine whether an article exists
    * and what its message-id is, without having to process an arbitrary 
    * amount of text.
    * 
    * @param messageid 
    */
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

    /**
     * This command exists to help clients find out the current Coordinated
     * Universal Time from the server's perspective.
     */
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
    /**
     * This command provides a short summary of the commands that are
     * understood by this implementation of the server.
     */
    async help(): Promise<BasicResponse> {
        const res = await this.runCommand("HELP");
        if (res.code == 100) {
            return res;
        } else {
            throw res;
        }

    }

    /**
     * This command returns a list of newsgroups created on the server since
     * the specified date and time.
     * @param date 
     */
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