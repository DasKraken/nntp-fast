import * as net from "net";
import { Readable } from "stream";

let dta = Buffer.alloc(64 * 1024);
for (let i = 0; i < dta.length; i++) {
	dta[i] = Math.floor(Math.random() * 256);
	if (dta[i] == '\r'.charCodeAt(0) || dta[i] == '\n'.charCodeAt(0) || dta[i] == '.'.charCodeAt(0)) {
		dta[i] = 65;
	}

}
class RandData extends Readable {
	size: number;
	constructor(size: number) {
		super();
		this.size = size;
	}
	_read(size: number) {
		while (size > 0 && this.size > 0) {
			this.push(dta);
			size -= dta.length;
			this.size -= dta.length;
		}
		if (this.size <= 0) {
			this.push("a\r\n.\r\n");
			this.push(null);
		}
	}
}

var server = net.createServer(function (socket) {
	socket.setNoDelay(true);
	socket.write("200 Welcome (Test Server)\r\n");

	const queue: string[] = [];
	let in_answer = false;
	async function answer() {
		if (in_answer) return;
		in_answer = true;
		while (queue.length > 0) {
			const data = queue.splice(0, 1)[0]
			//console.log("answer", data)
			if (data.startsWith("AUTHINFO USER")) {
				socket.write("381 PASS required\r\n");
			} else if (data.startsWith("AUTHINFO PASS")) {
				socket.write("281 Welcome to Test Server (No Posting)\r\n");
			} else if (data.startsWith("GROUP")) {
				socket.write("211 8083 23131 31213 " + data.trim().split(" ")[1] + "\r\n");
			} else if (data.startsWith("DATE")) {
				socket.write("111 20200326123244\r\n");
			} else if (data.startsWith("QUIT")) {
				socket.end("205 Goodbye\r\n");
			} else if (data.startsWith("BODY")) {
				socket.write("222 23131 <smth@smth.smth>\r\n");
				let dataObject = new RandData(1024 * 1024);
				await new Promise((resolve, reject) => {
					dataObject.pipe(socket, { end: false });
					dataObject.on("end", resolve)
				});
			} else if (data.startsWith("ARTICLE")) {
				socket.write("220 23131 <smth@smth.smth>\r\n");
				socket.write('Path: not-for-mail\r\n' +
					'From: huh dfikjn <djnjd@fjdk.dd>\r\n' +
					'Newsgroups: ds.grg.cef\r\n' +
					'Subject: Lorem\r\n' +
					'Date: Sun, 17 Aug 2008 22:40:28 +0200\r\n' +
					'Organization: unkn\r\n\r\n');
				let dataObject = new RandData(1024 * 1024);
				await new Promise((resolve, reject) => {
					dataObject.pipe(socket, { end: false });
					dataObject.on("end", resolve)
				});
			} else if (data.startsWith("CAPABILITIES")) {
				socket.write('101 Capabilities list:\r\n' +
					'VERSION 1\r\n' +
					'MODE-READER\r\n' +
					'READER\r\n' +
					'LIST COUNTS OVERVIEW.FMT ACTIVE ACTIVE.TIMES NEWSGROUPS\r\n' +
					'XHDR\r\n' +
					'XOVER\r\n' +
					'XZVER\r\n' +
					'XZHDR\r\n' +
					'XFEATURE-COMPRESS GZIP TERMINATOR\r\n' +
					'.\r\n');
			} else {
				console.log("Unknown: " + data);
			}
		}
		in_answer = false;
	}
	let buffer = "";
	socket.on("data", (d: Buffer) => {
		const data = buffer + d.toString().toUpperCase();
		let els = data.split("\r\n")
		buffer = els.splice(els.length - 1, 1)[0];
		queue.push(...els);
		answer();
	})
	socket.on("error", (err) => { console.log(err) })

});

server.listen(1337, '127.0.0.1');