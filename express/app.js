import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());

app.get("/file", (req, res) => {
	fs.readFile("/file1.txt", (err, data) => {
		if (err) {
			res.sendStatus(404);
		}
	});
});

app.get("/file1", (req, res) => {
	try {
		const data = fs.readFileSync("/file1.txt");
		res.send(data);
	} catch (error) {
		res.sendStatus(404);
	}
});

app.post("/", (req, res, next) => {
	console.log(req.body);
});

app.listen(8080);
