const jwt = require("jsonwebtoken");

const secretKey = "fasfsdfnhjskdj$%51asda";

const token = jwt.sign(
	{
		id: "userId",
		isAdmin: true,
	},
	secretKey,
	{ expiresIn: 2 }
);

setTimeout(() => {
	jwt.verify(token, secretKey, (error, decoded) => {
		console.log(error, decoded);
	});
}, 3000);
