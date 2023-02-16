console.log("logging....");
console.clear();

// log level
console.log("log"); // 개발
console.info("info"); // 정보
console.warn("warn"); // 경보
console.error("error"); // 에러, 사용자 에러, 시스템 에러

console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

const student = { name: "quokka", age: 30, compony: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student);

console.time("for liip");
for (let i = 0; i < 1000; i++) {}
console.timeEnd("for liip");

function a() {
	console.count("a function");
}

a();
console.countReset("a function");
a();

function a1() {
	a2();
}

function a2() {
	a3();
}

function a3() {
	console.log("hello world");
	console.trace();
}

a1();
