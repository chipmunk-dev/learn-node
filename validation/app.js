import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();

app.use(express.json());

const validate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		return next();
	}
	return res.status(400).json({ message: errors.array() });
};

app.post(
	"/users",
	[
		body("name").notEmpty().isLength({ min: 2 }).withMessage("이름은 두글자 이상"),
		body("age").notEmpty().isInt().withMessage("숫자 입력"),
		body("email").isEmail().withMessage("이메일 양식을 입력"),
		body("job.name").notEmpty(),
		validate,
	],
	(req, res) => {
		return res.sendStatus(201);
	}
);

app.get("/:email", [param("email").isEmail().withMessage("이메일을 입력"), validate], (req, res) => {
	res.send("📨");
});

app.listen(8080);
