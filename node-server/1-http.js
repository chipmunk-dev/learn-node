const http = require("http");

const server = http.createServer((req, res) => {
	console.log("icoming..");
	console.log(req.headers);
	console.log(req.httpVersion);
	console.log(req.method);
	console.log(req.url);
	res.write("welcome!");
	res.end();
});

server.listen(8080);
