const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
	highWaterMark: 8,
	encoding: "utf-8",
});

const data = [];

readStream
	.on("data", chunk => {
		data.push(chunk);
	})
	.on("end", () => {
		console.log(data.join(""));
	})
	.on("error", error => {
		console.error(error);
	});
