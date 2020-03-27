nntp-fast
=========
A lightweight made with attention to speed and ease of use. Works with promises and streams.

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

Example using streams:

``` typescript
import { NntpConnection } from "nntp-fast";

async function main() {
    const conn = new NntpConnection({ dotUnstuffing: false });
    await conn.connect("news.newsgroup.ninja", 23);

    // authentificate
    await conn.runCommand("AUTHINFO USER <username>");
    await conn.runCommand("AUTHINFO PASS <password>");

    // get body stream
    let r = await conn.bodyStream("<uQ8vBCAo$st$uyOmdX$ZKLpHez9@iu6bkwQcawtRbODe>");

    r.stream.on("data", (data) => console.log(data.length));
    r.stream.on("end", () => conn.runCommand("QUIT"))

}
main()
```

Benchmark
=========
See [benchmark](./benchmark/) how it was made.

Windows Laptop:
| package                                              | dot-unstuffing                     | speed (Windows laptop)                      | speed (Linux server)                        |
|------------------------------------------------------|------------------------------------|---------------------------------------------|---------------------------------------------|
| <span style="color:green">nntp-fast</span>           | <span style="color:red">✗</span>   | <span style="color:green">183.87 MiB</span> | <span style="color:green">324.20 MiB</span> |
| <span style="color:green">nntp-fast</span>           | <span style="color:green">✓</span> | <span style="color:green">176.44 MiB</span> | <span style="color:green">140.80 MiB</span> |
| [node-nntp](https://www.npmjs.com/package/node-nntp) | <span style="color:red">✗</span>   | 3.85 MiB                                    | 4.46  MiB                                   |
| [newsie](https://www.npmjs.com/package/newsie)       | <span style="color:green">✓</span> | 25.53 MiB                                   | 28.51 MiB                                   |
| [nntp](https://www.npmjs.com/package/nntp)           | <span style="color:red">✗</span>   | 179.89 MiB                                  | 19.31 MiB                                   |
| [entepe](https://www.npmjs.com/package/entepe)       | <span style="color:red">✗</span>   | 1.04 MiB                                    | 1.0 MiB                                     |


