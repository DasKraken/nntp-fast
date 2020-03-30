[nntp-fast](README.md) › [Globals](globals.md)

# nntp-fast

nntp-fast 
========= 
A lightweight nntp client for node made with attention to speed and ease of use. Works with promises and streams.

[Documentation](./docs/classes/_nntp_.nntpconnection.md)

## Install
```
npm install --save nntp-fast
```

Example
=======
Example that fetches an aritcle from _news.php.net_ newsserver:

``` typescript
import { NntpConnection } from "nntp-fast";

async function main() {
    const conn = new NntpConnection();
    await conn.connect("news.php.net", 119);

    // get date from server
    console.log(await conn.date());

    // switch to group php.general
    await conn.group("php.general");

    // get article
    const article = await conn.article(23131);
    console.log(article.headers);
    console.log(article.body.toString());

    await conn.runCommand("QUIT");
}

main()
```

Example using streams and secure (TLS) connection:

``` typescript
import { NntpConnection } from "nntp-fast";

async function main() {
    const conn = new NntpConnection({ dotUnstuffing: false });
    await conn.connect("news.newsgroup.ninja", 563, true);

    // authentificate
    await conn.runCommand("AUTHINFO USER <username>");
    await conn.runCommand("AUTHINFO PASS <password>");

    // get body as stream
    const r = await conn.bodyStream("<uQ8vBCAo$st$uyOmdX$ZKLpHez9@iu6bkwQcawtRbODe>");

    r.stream.on("data", (data) => console.log(data.length));
    r.stream.on("end", () => conn.runCommand("QUIT"))

}
main()
```

Benchmark
=========
**Method**: See [benchmark](./benchmark/).

**Machine 1**: Windows 10, Intel(R) Core(TM) i5-7300U CPU @ 2.60GHz

**Machine 2**: Ubuntu 18.04.4, Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz

**Results:**
| package                                              | dot-unstuffing | speed (Machine 1) | speed (Machine 2) |
|------------------------------------------------------|----------------|-------------------|-------------------|
| nntp-fast (this)                                     | ✗              | 183.87 MiB        | 324.20 MiB        |
| nntp-fast (this)                                     | ✓              | 176.44 MiB        | 140.80 MiB        |
| [nntp](https://www.npmjs.com/package/nntp)           | ✗              | 179.89 MiB        | 19.31 MiB         |
| [newsie](https://www.npmjs.com/package/newsie)       | ✓              | 25.53 MiB         | 28.51 MiB         |
| [node-nntp](https://www.npmjs.com/package/node-nntp) | ✗              | 3.85 MiB          | 4.46  MiB         |
| [entepe](https://www.npmjs.com/package/entepe)       | ✗              | 1.04 MiB          | 1.0 MiB           |

License
=======
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
