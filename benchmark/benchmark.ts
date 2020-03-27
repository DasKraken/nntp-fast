import { NntpConnection } from "..";
import * as NNTP from "nntp";
import * as node_NNTP from "node-nntp";
import * as util from "util";
import entepe_NNTP, { interfaces } from 'entepe'
require("./NNTPTestServer");


// Hotfix
import * as ResponseNN from "node-nntp/lib/response";
ResponseNN.createFromString = function (string) {
    var matches = /^(\d{3}) ([\S\s]+)$/g.exec(string.toString().trim());
    if (!matches) {
        throw new Error('Invalid response given: ' + string);
    }

    if (parseInt(matches[1]) < 100 || parseInt(matches[1]) >= 600) {
        throw new Error('Invalid status code given: ' + matches[1]);
    }

    return new ResponseNN(parseInt(matches[1], 10), matches[2]);
};

async function nntp_fast() {
    const conn = new NntpConnection({ dotUnstuffing: false });
    await conn.connect("127.0.0.1", 1337);

    let count = 0;
    let start = Date.now();

    let prev_promise = Promise.resolve();

    for (let i = 0; i < 2000; i++) {
        let promise = new Promise<void>(async (resolve, reject) => {
            const body = conn.bodyStream(23131)
            //console.log(await body.promise);
            body.stream.on("end", () => {
                resolve();
            });
            body.stream.on("error", (err) => {
                console.log(err)
            });
            body.stream.on("data", (data) => { count += data.length; /*console.log(util.inspect(data.toString()))*/ })
        });
        await prev_promise;
        prev_promise = promise;

    }
    await prev_promise;

    let end = Date.now();
    console.log("nntp-fast (without dot unstuffing): " + (count / 1024 / 1024) / ((end - start) / 1000) + " MiB/s")
    await conn.runCommand("QUIT")
}
async function nntp_fast_unstuffing() {
    const conn = new NntpConnection({ dotUnstuffing: true });
    await conn.connect("127.0.0.1", 1337);

    let count = 0;
    let start = Date.now();

    let prev_promise = Promise.resolve();

    for (let i = 0; i < 2000; i++) {
        let promise = new Promise<void>(async (resolve, reject) => {
            const body = conn.bodyStream(23131)
            //console.log(await body.promise);
            body.stream.on("end", () => {
                resolve();
            });
            body.stream.on("error", (err) => {
                console.log(err)
            });
            body.stream.on("data", (data) => { count += data.length; /*console.log(util.inspect(data.toString()))*/ })
        });
        await prev_promise;
        prev_promise = promise;

    }
    await prev_promise;

    let end = Date.now();
    console.log("nntp-fast (with dot unstuffing): " + (count / 1024 / 1024) / ((end - start) / 1000) + " MiB/s");
    await conn.runCommand("QUIT")
}

function main_nntp() {
    return new Promise((resolve, reject) => {
        var c = new NNTP();
        c.on('ready', async function () {
            let count = 0;
            let start = Date.now();
            let prev_promise = Promise.resolve();
            for (let i = 0; i < 2000; i++) {
                let promise = new Promise<void>(async (resolve2, reject) => {
                    c.body("23131", function (err, n, id, body) {
                        if (err) throw err;
                        count += body.length;
                        //console.log(util.inspect(body.toString()));
                        resolve2();
                    });
                });
                await prev_promise
                prev_promise = promise;
            }
            await prev_promise;
            let end = Date.now();
            console.log("nntp (without dot unstuffing): " + (count / 1024 / 1024) / ((end - start) / 1000) + " MiB/s");
            c.end();

        });
        c.on('error', function (err) {
            console.log('Error: ' + err);
        });
        c.on('close', function (had_err) {
            resolve();
        });
        c.connect({
            host: '127.0.0.1',
            port: 1337
        });
    });
}
async function main_node_nntp() {
    return new Promise((resolve, reject) => {
        var c = new node_NNTP({
            host: '127.0.0.1',
            port: 1337
        });
        c.connect(async function () {
            let count = 0;
            let start = Date.now();

            for (let i = 0; i < 100; i++) {
                await new Promise(async (resolve2, reject) => {
                    c.article("23131", function (err, response) {
                        if (err) throw err;
                        count += response.body[0].length;
                        //console.log(util.inspect(response.body));
                        resolve2();
                    });
                });
            }
            let end = Date.now();
            console.log("node-nntp (without dot unstuffing): " + (count / 1024 / 1024) / ((end - start) / 1000) + " MiB/s");

            c.disconnect(resolve);
        });
    });

}
async function main_newsie() {
    const Client = require('newsie').default
    const client = new Client({
        host: '127.0.0.1',
        port: 1337
    })
    await client.connect()
    let count = 0;
    let start = Date.now();
    for (let i = 0; i < 100; i++) {
        let response = await client.body("23131")
        count += response.article.body[0].length;
        //console.log(util.inspect(response.article.body));
    }
    //console.log(response)
    let end = Date.now();
    console.log("newsie (with dot unstuffing): " + (count / 1024 / 1024) / ((end - start) / 1000) + " MiB/s");
    await client.quit();

}
async function main_entepe() {
    const connection = new entepe_NNTP({
        host: '127.0.0.1',
        port: 1337
    })
    await connection.connect()
    let count = 0;
    let start = Date.now();
    for (let i = 0; i < 10; i++) {
        let response = await connection.getArticleBody("23131")
        count += response.raw.length;
        //console.log(util.inspect(response.raw));
    }
    //console.log(response)
    let end = Date.now();
    console.log("entepe (without dot unstuffing): " + (count / 1024 / 1024) / ((end - start) / 1000) + " MiB/s");

    await connection.quit();

}


nntp_fast().then(nntp_fast_unstuffing).then(main_nntp).then(main_node_nntp).then(main_newsie).then(main_entepe).then(console.log, console.log);