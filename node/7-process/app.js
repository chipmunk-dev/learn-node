const process = require("process");

// 실행 경로
console.log(process.execPath);
// node version
console.log(process.version);
// 프로세스의 식별 아이디
console.log(process.pid);
// 현재 프로세스의 부모 프로세스 식별 아이디
console.log(process.ppid);
// Node.js의 바이너리가 컴파일된 운영 체제 플랫폼을 식별하는 문자열
console.log(process.platform);
// node의 환경변수
console.log(process.env);
// 얼마나 실행한지에 대한 시간
console.log(process.uptime());
// 현재 프로젝트의 절대경로
console.log(process.cwd());
console.log(process.cpuUsage());

// 비동기 콜백
setTimeout(() => {
	console.log("setTimeout");
}, 0);

// 우선순위가 비동기 콜백
process.nextTick(() => {
	console.log("nextTick");
});

for (let i = 0; i < 100; i++) {
	console.log("for loop");
}
