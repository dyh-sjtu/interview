const {performance} = require('perf_hooks');

function main(fn, item, arr) {
	let prev = performance.now();
	fn(item, arr);
	let current = performance.now();
	console.log(current-prev);
}

function test1(item, arr) {
	for (let i = 0, len = arr.length; i < len; i++) {
		if (arr[i] === item) return i;
	}
	return -1;
}

function test2(item, arr) {
	return arr.indexOf(item)
}

function test3(item, arr) {
	return !!~arr.indexOf(item)
}

function generateRandom(max, len) {  // 产生0~max的随机数和随机数组(长度为200)
	let obj = {};
	obj.arr = [];
	obj.item = ~~Math.random()*max;
	let temp;
	for (let i = 0; i < len; i++) {
		do {
			temp = ~~(Math.random()*max)
		}while (obj.arr.indexOf(temp) > -1);
		obj.arr.push(temp);
	}
	return obj
}

let obj = generateRandom(1000000, 50000);

main(test1, obj.item, obj.arr);
main(test2, obj.item, obj.arr);
main(test3, obj.item, obj.arr);



