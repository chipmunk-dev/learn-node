import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(
	cors({
		origin: "*",
		optionsSuccessStatus: 200,
		credentials: true,
	})
);
app.use(helmet());

app.get("/", (req, res) => {
	console.log(req.body);
	console.log(req.cookies);
	res.send("Welcome!");
});

app.listen(8080, () => {
	console.log("connected...");
});
