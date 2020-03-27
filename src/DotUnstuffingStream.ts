import { Transform } from "stream";
import * as StreamSearch from "streamsearch";

const CRLF = Buffer.from("\r\n");
export default class DotUnstuffingStream extends Transform {
    streamsearch_CRLF: StreamSearch;
    constructor() {
        super();
        this.streamsearch_CRLF = new StreamSearch(Buffer.from("\r\n."));
        this.streamsearch_CRLF.on("info", (isMatch: boolean, data: Buffer, start: number, end: number) => {
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
    _transform(chunk: Buffer, encoding: string, callback: Function) {
        this.streamsearch_CRLF.push(chunk);
        callback();
    }
}