import { NntpConnection } from "..";

async function main() {
    const conn = new NntpConnection();
    await conn.connect("news.php.net", 119);

    console.log(await conn.date());

    await conn.group("php.general");
    const article = await conn.article(23131);
    console.log(article.headers);
    console.log(article.body.toString());

    await conn.runCommand("QUIT");
}

main().then(console.log, console.log);
