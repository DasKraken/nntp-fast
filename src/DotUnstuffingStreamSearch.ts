import { EventEmitter } from "events";

enum DelimiterSearchState {
    START,
    CR,
    CR_LF,
    CR_LF_DOT,
    CR_LF_DOT_CR
}
enum Delimiter {
    CRLF, // \r\n
    MLDB  // multiline datablock \r\n.\r\n
}

const CR = "\r".charCodeAt(0);
const LF = "\n".charCodeAt(0);
const DOT = ".".charCodeAt(0);

export default class DotUnstuffingStreamSearch extends EventEmitter {
    _bufpos: number;
    _needle: Delimiter;
    _searchState: DelimiterSearchState;
    matches: number;
    maxMatches: number;

    constructor(needle: Buffer) {
        super();
        if (needle.toString() != "\r\n.\r\n") {
            "unsupported CRLF needle in DotUnstuffingStreamSearch"
        }
        this._needle = Delimiter.MLDB;
        this.maxMatches = Infinity;
        this.reset();
    }
    reset(): void {
        this._bufpos = 0;
        this._searchState = DelimiterSearchState.START;
        this.matches = 0;
    }
    push(chunk: Buffer, pos?: number): number {
        let r = 0;
        if (!Buffer.isBuffer(chunk))
            chunk = Buffer.from(chunk, 'binary');
        const chlen = chunk.length;
        this._bufpos = pos || 0;
        while (r != chlen && this.matches < this.maxMatches) {
            r = this._feed(chunk);
        }
        return r;
    }
    _feed(data: Buffer): number {
        let startData = this._bufpos;
        let lastData = this._bufpos - 1;
        while (this._bufpos < data.length) {
            const symbol = data[this._bufpos];

            switch (this._searchState) {
                case DelimiterSearchState.START:
                    if (symbol == CR) {
                        this._searchState = DelimiterSearchState.CR;
                    } else {
                        lastData = this._bufpos;
                    }
                    break;
                case DelimiterSearchState.CR:
                    if (symbol == LF) {
                        if (this._needle == Delimiter.CRLF) {
                            // Found CRLF
                            console.log("unsupported CRLF needl in DotUnstuffingStreamSearch")
                            this._searchState = DelimiterSearchState.START;
                        } else {
                            this._searchState = DelimiterSearchState.CR_LF;
                        }
                    } else {
                        console.log("Malformed Data: Standalone CR character not allowed")
                        // Allow anyway
                        if (startData <= lastData) {
                            this.emit("info", false, data, startData, lastData + 1);
                        }
                        this.emit("info", false, Buffer.from("\r"), 0, 1);

                        if (symbol == CR) {
                            this._searchState = DelimiterSearchState.CR;
                        } else {
                            startData = this._bufpos;
                            lastData = this._bufpos;
                            this._searchState = DelimiterSearchState.START;
                        }
                    }
                    break;
                case DelimiterSearchState.CR_LF:
                    if (symbol == DOT) {
                        this._searchState = DelimiterSearchState.CR_LF_DOT;
                    } else {
                        if (symbol == CR) {
                            this._searchState = DelimiterSearchState.CR;
                        } else {
                            //false alarm
                            if (startData <= lastData) {
                                this.emit("info", false, data, startData, lastData + 1);
                            }
                            this.emit("info", false, Buffer.from("\r\n"), 0, 2);
                            startData = this._bufpos;
                            lastData = this._bufpos;
                            this._searchState = DelimiterSearchState.START;
                        }
                    }
                    break;
                case DelimiterSearchState.CR_LF_DOT:
                    if (symbol == CR) {
                        this._searchState = DelimiterSearchState.CR_LF_DOT_CR;
                    } else {
                        this._searchState = DelimiterSearchState.START;

                        // dot stuffing must be undone https://tools.ietf.org/html/rfc3977#section-3.1.1

                        if (startData <= lastData) {
                            this.emit("info", false, data, startData, lastData + 1);
                        }
                        this.emit("info", false, Buffer.from("\r\n"), 0, 2);
                        return this._bufpos;


                    }
                    break;
                case DelimiterSearchState.CR_LF_DOT_CR:
                    if (symbol == LF) {
                        // Found MLDB delimiter

                        this.matches++;
                        this._searchState = DelimiterSearchState.START;
                        this.emit("info", true, data, startData, lastData + 1);

                        startData = this._bufpos + 1;
                        lastData = this._bufpos;
                        this._bufpos++;
                        return this._bufpos

                    } else {
                        console.log("Malformed Data: Standalone CR character not allowed (after dot)")
                        // Allow anyway
                        //false alarm
                        if (startData <= lastData) {
                            this.emit("info", false, data, startData, lastData + 1);
                        }
                        this.emit("info", false, Buffer.from("\r"), 0, 1);

                        if (symbol == CR) {
                            this._searchState = DelimiterSearchState.CR;
                        } else {
                            this._searchState = DelimiterSearchState.START;
                            startData = this._bufpos;
                            lastData = this._bufpos;
                        }
                    }
                    break;

                default:
                    break;
            }

            this._bufpos++;
        }
        if (startData <= lastData) {
            this.emit("info", false, data, startData, lastData + 1);
        }
        return this._bufpos;
    }
}