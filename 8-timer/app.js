let num = 1;
const time = setInterval(() => {
	console.log(num++);
}, 1000);

setTimeout(() => {
	console.log("Timeout!");
	clearInterval(time);
}, 6000);
