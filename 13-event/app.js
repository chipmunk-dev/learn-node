const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("quokka", args => {
	console.log("first callback -> ", args);
});

emitter.on("quokka", args => {
	console.log("first callback -> ", args);
});

emitter.emit("quokka", { message: 1 });
emitter.emit("quokka", { message: 2 });
emitter.emit("quokka", { message: 3 });
