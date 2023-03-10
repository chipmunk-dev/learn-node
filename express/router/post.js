import express from "express";

const router = express.Router();

router.get((req, res, next) => {
	res.status(201).send("GET: /posts");
});

router.post((req, res, next) => {
	res.status(201).send("POST: /posts");
});

router.put((req, res, next) => {
	res.status(201).send("PUT: /posts/:id");
});

router.delete((req, res, next) => {
	res.status(201).send("DELETE: /posts/:id");
});

export default router;
