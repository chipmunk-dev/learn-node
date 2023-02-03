const EventEmitter = require("events");
const emitter = new EventEmitter();

const callback = args => {
	console.log("first callback - ", args);
};

emitter.on("quokka", callback);

emitter.on("quokka", args => {
	console.log("second callback - ", args);
});

emitter.emit("quokka", { message: 1 });
emitter.emit("quokka", { message: 2 });
emitter.removeAllListeners();
emitter.emit("quokka", { message: 3 });
