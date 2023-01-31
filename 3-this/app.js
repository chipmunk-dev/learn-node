// 함수에서의 this는 global을 가르킨다.
function hello() {
	console.log(this);
	console.log(this === global);
}

hello();

// class의 this는 오브젝트를 가르킨다.
class A {
	constructor(num) {
		this.num = num;
	}

	memberFunction() {
		console.log("--- Class ---");
		console.log(this);
		console.log(this === global);
	}
}

const a = new A(10);
a.memberFunction();

// global의 this는 module.exports를 가르킨다.
console.log("--- Global Scope ---");
console.log(this);
console.log(this === module.exports);
