import * as net from "net";
import { PassThrough, Writable, Readable } from "stream";
import * as util from "util";
import * as StreamSearch from "streamsearch";
import DotUnstuffingStreamSearch from "./DotUnstuffingStreamSearch";


enum Delimiter {
    CRLF, // \r\n
    MLDB  // multiline datablock \r\n.\r\n
}
enum DelimiterSearchState {
    START,
    CR,
    CR_LF,
    CR_LF_DOT,
    CR_LF_DOT_CR
}

const CR = "\r".charCodeAt(0);
const LF = "\n".charCodeAt(0);
const DOT = ".".charCodeAt(0);
const RES_CODE_ML = [100, 101, 215, 220, 221, 222, 224, 225, 230, 231];

interface ResponseHandler {
    handleResponse: (code: number, message: string, data?: Buffer) => void;
    decideMldb?: (code: number) => boolean;
    MldbStream?: PassThrough;
}

export class NntpConnection {

    connected: boolean;
    connected_response: { code: number, message: string };
    socket: net.Socket;

    responseQueue: ResponseHandler[] = [];

    buffer: Buffer[] = [];
    delimiter_search_type: Delimiter = Delimiter.CRLF;
    stripDots: boolean = true;

    streamsearch_CRLF: StreamSearch;
    streamsearch_MLDB: DotUnstuffingStreamSearch;
    constructor() {
        this.streamsearch_CRLF = new StreamSearch(Buffer.from("\r\n"));
        this.streamsearch_MLDB = new DotUnstuffingStreamSearch(Buffer.from("\r\n.\r\n"));
        this.streamsearch_CRLF.maxMatches = 1;
        this.streamsearch_MLDB.maxMatches = 1;
        this.streamsearch_CRLF.on("info", this.onInfoCRLF.bind(this));
        this.streamsearch_MLDB.on("info", this.onInfoMLDB.bind(this));
    }

    connect(host: string, port: number): Promise<{ code: number, message: string }> {
        if (this.connected) {
            return Promise.resolve(this.connected_response);
        }
        return new Promise((resolve, reject) => {

            // Initial Handler
            const handler: ResponseHandler = {
                handleResponse: (code: number, message: string) => {
                    this.connected = true;
                    this.connected_response = { code, message };
                    resolve({ code, message });
                }
            }
            this.responseQueue = [handler];

            this.socket = net.createConnection({ host: host, port: port }, () => {
                // 'connect' listener.

            });
            this.socket.on('data', (data) => { this.onData(data) });
            this.socket.on('end', () => {
                this.connected = false;
                console.log('disconnected from server');
            });
            this.socket.on('error', (err) => {
                this.connected = false;
                console.log('error from server');
                console.log(err);
                reject();
            });
            this.socket.on('timeout', () => {
                this.connected = false;
                console.log('timeout from server');
                this.socket.end();
            });
        })
    }


    onData(data: Buffer) {
        //console.log(util.inspect(data.toString()));
        let r: number;
        //console.log(util.inspect(data.toString("ascii", 0, 50)))
        if (this.delimiter_search_type == Delimiter.CRLF) {
            //console.log(data.length + " to CRLF")
            r = this.streamsearch_CRLF.push(data);
            //console.log(r+"/"+data.length)
            if (this.streamsearch_CRLF.matches == 1) {
                if (this.handleResponse(Buffer.concat(this.buffer).toString())) {
                    // returns true if multi line data block is expected
                    //console.log("switch to MLDB")
                    this.delimiter_search_type = Delimiter.MLDB;
                } else {
                    this.responseQueue.splice(0, 1);
                }
                this.buffer = [];
                this.streamsearch_CRLF.reset();
            }
        } else {
            //console.log(data.length + " to MLDB")
            r = this.streamsearch_MLDB.push(data);
            //console.log(r+"/"+data.length)
            if (this.streamsearch_MLDB.matches == 1) {
                let stream = this.responseQueue[0].MldbStream;
                stream?.end();
                this.responseQueue.splice(0, 1);
                //console.log("switch to CRLF")
                this.delimiter_search_type = Delimiter.CRLF;
                this.streamsearch_MLDB.reset();
            }
        }

        if (r < data.length) {
            // Data after delimiter
            //console.log("redirext more")
            this.onData(data.slice(r));
        }
    }

    onInfoCRLF(isMatch: boolean, data: Buffer, start: number, end: number) {
        if (data) {
            if (start == 0 && end == data.length) {
                this.buffer.push(data);
            } else {
                this.buffer.push(data.slice(start, end));
            }
        }

        // Note: never call reset() inside this callback

    }
    onInfoMLDB(isMatch: boolean, data: Buffer, start: number, end: number) {
        let stream = this.responseQueue[0].MldbStream;
        if (data) {
            if (start == 0 && end == data.length) {
                stream?.write(data);
            } else {
                stream?.write(data.slice(start, end));
            }
        }

        // Note: never call reset() inside this callback

    }

    getCode(response: string) {
        const res = /^([0-9]{3}) ([^\r\n]*)$/.exec(response);
        if (res) {
            return { code: parseInt(res[1]), message: res[2] };
        } else {
            throw new Error("couldnt parse response: " + response);
        }
    }

    parseHeader(head_string: string) {
        const headers: any = {};
        for (const entry of head_string.split("\r\n")) {
            const first_colon = entry.indexOf(': ');
            headers[entry.substr(0, first_colon)] = entry.substr(first_colon + 2);
        }
        return headers;
    }

    handleResponse(response: string) {
        //console.log("response: " + util.inspect(response));
        const { code, message } = this.getCode(response);
        const responseHandler = this.responseQueue[0];
        if (this.responseQueue.length == 0) {
            console.log(`Unexpected response: ${code} ${message}`)
            return;
        }

        if (RES_CODE_ML.includes(code) || (responseHandler.decideMldb && responseHandler.decideMldb(code))) {
            //handler.MldbStream = new PassThrough();
            // handler.MldbStream.on('data', (chunk) => { console.log("MLDB: " + util.inspect(chunk.toString())); });
            if (responseHandler.MldbStream) {
                responseHandler.handleResponse(code, message);
            } else {
                // mldb not expected but given: wait for end before calling callback
                responseHandler.MldbStream = new PassThrough();
                let responseData: Buffer[] = []
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

    runCommand(command: string, decideMldb?: (code: number) => boolean): Promise<{ code: number, message: string, data?: Buffer }> {
        return new Promise((resolve, reject) => {
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
    runCommandStream(command: string, decideMldb?: (code: number) => boolean): { stream: Readable, promise: Promise<{ code: number, message: string }> } {
        const stream = new PassThrough();
        const promise = new Promise<{ code: number, message: string }>((resolve, reject) => {
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


        return { stream, promise };
    }

    async capabilities(keyword?: string) {
        const res = await this.runCommand("CAPABILITIES" + (keyword ? " " + keyword : ""));
        if (res.code == 101) {
            return res;
        } else {
            throw res;
        }

    }
    async modeReader() {
        const res = await this.runCommand("MODE READER");
        if ([200, 201, 502].includes(res.code)) {
            return res;
        } else {
            throw res;
        }

    }
    async quit() {
        const res = await this.runCommand("QUIT");
        if (205 == res.code) {
            return res;
        } else {
            throw res;
        }

    }
    async group(group: string) {
        const res = await this.runCommand("GROUP " + group);
        if (res.code == 211) {
            let m = /^([0-9]+) ([0-9]+) ([0-9]+) (.+)$/.exec(res.message);
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
    async listgroup(group?: string, range?: string) {
        const res = await this.runCommand("LISTGROUP" + (group ? " " + group : ""), code => code == 211); // Multiline data if code 221 returned
        if (res.code == 211) {
            // let m = /^([0-9]+) ([0-9]+) ([0-9]+) (.+)$/.exec(res.message);
            // ^ not on all servers supportes
            return {
                code: res.code,
                message: res.message,
                artices: res.data?.toString().split("\r\n").map(n => parseInt(n))
            };
        } else {
            throw res;
        }

    }
    async last() {
        const res = await this.runCommand("LAST");
        if ([223, 412, 420, 422].includes(res.code)) {
            if (res.code == 223) {
                let m = /^([0-9]+) (<[^ ]+>)/.exec(res.message);
                if (m == null) {
                    throw "cant parse " + util.inspect(res.message);
                }
                return {
                    code: res.code,
                    article_number: parseInt(m[1]),
                    article_id: m[2]
                };
            } else {
                return res;
            }
        } else {
            throw res;
        }

    }
    async next() {
        const res = await this.runCommand("NEXT");
        if ([223, 412, 420, 422].includes(res.code)) {
            if (res.code == 223) {
                let m = /^([0-9]+) (<[^ ]+>)/.exec(res.message);
                if (m == null) {
                    throw "cant parse " + util.inspect(res.message);
                }
                return {
                    code: res.code,
                    article_number: parseInt(m[1]),
                    article_id: m[2]
                };
            } else {
                return res;
            }
        } else {
            throw res;
        }

    }
    async article(messageid?: string | number) {
        const res = await this.runCommand("ARTICLE" + (messageid ? " " + messageid : ""));
        if ([220, 430, 412, 423, 420].includes(res.code)) {
            if (res.code == 220) {
                if (!res.data) throw new Error("no data on article");

                const head_body_separation = res.data.indexOf("\r\n\r\n");

                return {
                    code: res.code,
                    headers: this.parseHeader(res.data.slice(0, head_body_separation).toString()),
                    body: res.data.slice(head_body_separation + 4)
                };
            } else {
                return res;
            }
        } else {
            throw res;
        }

    }
    async head(messageid?: string | number) {
        const res = await this.runCommand("HEAD" + (messageid ? " " + messageid : ""));
        if ([221, 430, 412, 423, 420].includes(res.code)) {
            if (res.code == 221) {
                if (!res.data) throw new Error("no data on head");
                return {
                    code: res.code,
                    headers: this.parseHeader(res.data.toString())
                };
            } else {
                return res;
            }
        } else {
            throw res;
        }

    }
    async body(messageid?: string | number) {
        const res = await this.runCommand("BODY" + (messageid ? " " + messageid : ""));
        if ([222, 430, 412, 423, 420].includes(res.code)) {
            if (res.code == 222) {
                if (!res.data) throw new Error("no data on body");
                return {
                    code: res.code,
                    body: res.data
                };
            } else {
                return res;
            }
        } else {
            throw res;
        }

    }
    bodyStream(messageid?: string | number) {
        return this.runCommandStream("BODY" + (messageid ? " " + messageid : ""));

    }
    async stat(messageid?: string | number) {
        const res = await this.runCommand("STAT" + (messageid ? " " + messageid : ""));
        if ([223, 430, 412, 423, 420].includes(res.code)) {
            if (res.code == 223) {
                let m = /^([0-9]+) (<[^ ]+>)/.exec(res.message);
                if (m == null) {
                    throw "cant parse " + util.inspect(res.message);
                }
                return {
                    code: res.code,
                    article_number: parseInt(m[1]),
                    article_id: m[2]
                };
            } else {
                return res;
            }
        } else {
            throw res;
        }

    }
    async post(headers, data) {
        throw new Error("Not implemented");

    }
    async ihave(message_id, headers, data) {
        throw new Error("Not implemented");

    }
    async date() {
        const res = await this.runCommand("DATE");
        if (res.code == 111) {
            let date = /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})/.exec(res.message);
            if (!date) throw new Error("cant parse date: " + res.message);
            return {
                code: res.code,
                date: new Date(Date.UTC(parseInt(date[1]), parseInt(date[2]) - 1, parseInt(date[3]), parseInt(date[4]), parseInt(date[5]), parseInt(date[6])))
            };
        } else {
            throw res;
        }

    }
    async help() {
        const res = await this.runCommand("HELP");
        if (res.code == 100) {
            return res;
        } else {
            throw res;
        }

    }
    async newsgroups(date: Date)
    async newsgroups(date: string, time: string, gmt?: boolean)
    async newsgroups(date: Date | string, time?: string, gmt?: boolean) {
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


    _ping() {
        // ping to keep connection alive
        //conn.socket.write("DATE\r\n");
    }
}