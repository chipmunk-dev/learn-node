const fs = require("fs");

const writeStream = fs.createWriteStream("./file3.txt");

writeStream.on("finish", () => {
	console.log("finish!!");
});

writeStream.write("Hello!");
writeStream.write("Hello!");
writeStream.write("Hello!");

writeStream.end();
