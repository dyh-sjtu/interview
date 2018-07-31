// function getMax(N, K, num_arr) {
// 	for (var i = 0; i < N; i++) {
// 		var res_arr = [];
// 		var len = num_arr.length;
// 		for (var j = 0; j < len; j++) {
// 			for (var k = j+1; k < len; k++) {
// 				var obj = {
// 					key:num_arr[j] + '/' + num_arr[k],
// 					value:parseInt(num_arr[j])/parseInt(num_arr[k])
// 				}
// 				res_arr.push(obj);
// 			}
// 		}
// 		res_arr.sort((a,b) => a.value-b.value)
// 		return res_arr[K-1].key.split('/')[0] + " " + res_arr[K-1].key.split('/')[1]
// 	}
// }
//
// console.log(getMax(1, 3, [1,2,3,5]))


// function getStep(str, Q, N, M, X, Y) {
// 	for (var i = 0; i < Q; i++) {
// 		var obj = {
// 			row: X,
// 			col: Y
// 		}
// 		var step = 0;
// 		function res(str, obj, step) {
// 			for (var j = 0, len = str.length; j < len; j++) {
// 				if (str[j] === "u") {
// 					obj.col += 1;
// 					step++;
// 					if (obj.col > N) break;
// 				} else if (str[j] === "d") {
// 					obj.col -= 1;
// 					step++;
// 					if (obj.col < 1) break;
// 				} else if (str[j] === "r") {
// 					obj.row += 1;
// 					step++;
// 					if (obj.row > M) break;
// 				} else if (str[j] === "l") {
// 					obj.col -= 1;
// 					step++;
// 					if (obj.row < 1) break;
// 				}
// 			}
// 			return step
// 		}
// 		step = res(str, obj, step)
// 		return step + "\n"
// 	}
// }
//
// console.log(getStep('uuurrdddddl', 1, 6, 6, 4, 2));
//
// console.log(Object.assign({a: 1, b: 2}, {c: null}, {d: undefined}, {e: ''}, {f: 0}, {g: []}, {h: {}}, {i: {name: 'dyh', age: 23}}))
//
//
// class test {
// 	constructor(x, y) {
// 		this.x = x;
// 		this.y = y
// 	}
//
// 	toString() {
// 		console.log('{x: ' + this.x + ', y: ' + this.y + '}')
// 	}
// }
//
// console.log(typeof test);
// console.log(test)
// console.log(test.__proto__)
// console.log(test.constructor)
// console.log(test.prototype)
// console.log(test.prototype.constructor)
//
// function person(name, age) {
// 	this.name = name;
// 	this.age = age;
// }
//
// console.log(person.__proto__ === Function.prototype);
// console.log(Function.__proto__ === Function.prototype);


// let a = b => c => d => b+c+d;
// let fn1 = a(1);
// let fn2 = fn1(2);
// console.log(fn2(3));

function buildList(list) {
	let res = [];
	for (var i = 0; i < list.length; i++) {
		var item = 'item' + list[i];
		res.push(function () {
			console.log(item + ' ' + list[i]);
		})
	}
	return res;
}

(function testList() {
	var fnlist = buildList([1, 2, 3]);
	for (var j = 0; j < fnlist.length; j++) {
		fnlist[j]();
	}
})()

