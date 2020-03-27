import { NntpConnection } from "..";

async function main() {
    const conn = new NntpConnection();
    await conn.connect("news.newsgroup.ninja", 23);

    await conn.runCommand("AUTHINFO USER <username>");
    await conn.runCommand("AUTHINFO PASS <password>");

    let r = await conn.bodyStream("<uQ8vBCAo$st$uyOmdX$ZKLpHez9@iu6bkwQcawtRbODe>");

    r.stream.on("data", (data) => console.log(data.length));
    r.stream.on("end", () => conn.runCommand("QUIT"))

}
main().then(console.log, console.log);
