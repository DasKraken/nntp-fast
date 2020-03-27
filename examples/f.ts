import { NntpConnection } from "../src/nntp";
//import { UsenetConnection } from "../src/index";
import * as fs from "fs";

function fsStat(path, options, callback) {

}

async function main() {
    const conn = new NntpConnection();
    await conn.connect("news.newsgroup.ninja", 23);

    console.log(await conn.runCommand("AUTHINFO USER <username>"));
    console.log(await conn.runCommand("AUTHINFO PASS <password>"));

    console.log(await conn.group("de.rec.sf.misc"));
    //console.log(await conn.listgroup("de.rec.sf.misc"));
    console.log(await conn.article(23131));
    console.log(await conn.date());
    console.log(await conn.capabilities());


    //let r = await conn.article("<LdLzChDgKsNlZzVrEnKeUjKe-1574437321735@nyuu>") as { headers, body }
    //let r = await conn.article("<uQ8vBCAo$st$uyOmdX$ZKLpHez9@iu6bkwQcawtRbODe>") as { headers, body }
    //console.log(r.headers);
    //console.log(r.body.toString().slice(0, 200));


    console.log(await conn.runCommand("QUIT"));

}


main().then(console.log, console.log);