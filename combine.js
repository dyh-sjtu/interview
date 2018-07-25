// function combine(arr) {
// 	let newArr = arr.slice();
// 	let result = [];
// 	while (newArr.length) {
// 		let index = 0;
// 		while(++index < newArr.length) {
// 			let preArr = newArr.slice(0, index);
// 			let nextArr = newArr.slice(index);
// 			let preStr = preArr.join('-');
// 			let i = 0;
// 			while (i < nextArr.length) {
// 				result.push(preStr + '-' + nextArr[i++]);  // 注意运算符优先级
// 			}
// 		}
// 		newArr.shift();
// 	}
// 	return result;
// }
// console.log(combine([3,2,6,9]));

// 函数去抖(事件监听，键盘输入文字搜索监听，节省响应资源)，函数调用n秒后才会执行，如果函数在n秒内被调用的话则函数不执行，重新计算执行时间
function debounce(fn, delay) {
	let timer = null;
	return function () {
		let context = this;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, arguments)
		}, delay)
	}
}

function log() {
	console.log('1')
}

// 函数节流(懒加载滚动事件监听), 函数预先设定一个执行周期，当调用动作的时刻大于等于执行周期则执行该动作，然后进入下一个新周期
function throttle(fn, duration) {
	let prev = new Date();
	return function () {
		let context = this;
		let current = new Date();
		if (current - prev > duration) {
			fn.apply(context, arguments);
			prev = current;
		}
	}
}

// 函数的节流和函数的去抖都是通过减少实际逻辑处理过程的执行来提高事件处理函数运行性能的手段，并没有实质上减少事件的触发次数

document.onscroll = debounce(log, 1000);