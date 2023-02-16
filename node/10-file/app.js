const fs = require("fs");

// 3가지 형태
// rename(..., callback(error, data)) -> 비동기
// renameSync(....) -> 동기 + try catch 사용
// promises.rename().then().catch -> 비동기

try {
	fs.renameSync("./text.txt", "./file-new.txt");
} catch (error) {
	console.error(error);
}

fs.rename("./file-new.txt", "./text.txt", err => {
	console.error(err);
});
console.log("hello");

fs.promises
	.rename("./text2.txt", "./text-new.txt")
	.then(() => console.log("Done!"))
	.catch(console.error);
