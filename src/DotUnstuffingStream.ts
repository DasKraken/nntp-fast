import { Transform } from "stream";
import * as StreamSearch from "streamsearch";

const CRLF = Buffer.from("\r\n");
export default class DotUnstuffingStream extends Transform {
    _streamsearch: StreamSearch;
    constructor() {
        super();
        this._streamsearch = new StreamSearch(Buffer.from("\r\n."));
        this._streamsearch.on("info", (isMatch: boolean, data: Buffer, start: number, end: number) => {
            if (data) {
                if (start == 0 && end == data.length) {
                    this.push(data);
                } else {
                    this.push(data.slice(start, end));
                }
            }
            if (isMatch) {
                this.push(CRLF);
            }
        })

    }
    _transform(chunk: Buffer, encoding: string, callback: Function): void {
        this._streamsearch.push(chunk);
        callback();
    }
}