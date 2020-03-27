import DotUnstuffingStreamSearch from "../src/DotUnstuffingStreamSearch"
//import * as DotUnstuffingStreamSearch from "streamsearch";

test("MLDB", () => {
    let s = new DotUnstuffingStreamSearch(Buffer.from("\r\n.\r\n")),
        chunks = [
            Buffer.from('foo'),
            Buffer.from(' bar'),
            Buffer.from('\r'),
            Buffer.from('\n'),
            Buffer.from('.'),
            Buffer.from('\r'),
            Buffer.from('\n'),
            Buffer.from('baz, hello\r\n.\r'),
            Buffer.from('\n world.'),
            Buffer.from('\r\n.\r\n Node.JS rules!!\r\n.\r\n\r\n.\r\n')
        ];
    let results: { data: string, isMatch: boolean }[] = []
    s.on('info', function (isMatch: boolean, data: Buffer, start: number, end: number) {
        let result = { data: "", isMatch: isMatch }
        if (data)
            result.data = data.toString('ascii', start, end);
        results.push(result);
    });
    for (var i = 0, len = chunks.length; i < len; ++i)
        s.push(chunks[i]);
    expect(results).toEqual([
        { data: "foo", isMatch: false },
        { data: " bar", isMatch: false },
        { data: "", isMatch: true },
        { data: "baz, hello", isMatch: false },
        { data: "", isMatch: true },
        { data: " world.", isMatch: false },
        { data: "", isMatch: true },
        { data: " Node.JS rules!!", isMatch: true },
        { data: "", isMatch: true }
    ])
})
test("MLDB unstuffing", () => {
    let s = new DotUnstuffingStreamSearch(Buffer.from("\r\n.\r\n")),
        chunks = [
            Buffer.from('foo'),
            Buffer.from(' bar'),
            Buffer.from('\r'),
            Buffer.from('\n'),
            Buffer.from('..'),
            Buffer.from('\r'),
            Buffer.from('\n'),
            Buffer.from('baz, hello\r\n.b\r'),
            Buffer.from('\n world.'),
            Buffer.from('\r\n.\r\n Node.JS rules!!\r\n.\r\n\r\n.\r\n')
        ];
    let results: { data: string, isMatch: boolean }[] = []
    s.on('info', function (isMatch: boolean, data: Buffer, start: number, end: number) {
        let result = { data: "", isMatch: isMatch }
        if (data)
            result.data = data.toString('ascii', start, end);
        results.push(result);
    });
    for (var i = 0, len = chunks.length; i < len; ++i)
        s.push(chunks[i]);
    expect(results).toEqual([
        { data: "foo", isMatch: false },
        { data: " bar", isMatch: false },
        { data: "\r\n", isMatch: false },
        { data: ".", isMatch: false },
        { data: "\r\n", isMatch: false },
        { data: "baz, hello", isMatch: false },
        { data: "\r\n", isMatch: false },
        { data: "b", isMatch: false },
        { data: "\r\n", isMatch: false },
        { data: " world.", isMatch: false },
        { data: "", isMatch: true },
        { data: " Node.JS rules!!", isMatch: true },
        { data: "", isMatch: true }
    ])
})