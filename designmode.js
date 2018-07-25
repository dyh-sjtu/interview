// 观察者模式或者说订阅模式， 它定义了对象间的一种一对多的关系，让多个观察者对象同时监听某一个主题对象，
// 当一个对象发生改变时，所有依赖于它的对象都将得到通知
// node中的events模块就是通过观察者模式实现的


const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('say', (name) => console.log(`${name}, 快来吃饭啦！！！`))
eventEmitter.emit('say', '段永洪');

// eventEmitter 发出(emit)say事件， 通过on监听事件，一旦say事件发射，就会接受到， 并处理相应事件注册程序

// 简单实现events模块的on 和 emit方法

function Events() {
	this.on = function (eventName, cb) {
		if (!this.handles) {
			this.handles = {};
		}
		if (!this.handles[eventName]) {
			this.handles[eventName] = [];
		}
		this.handles[eventName].push(cb);  // 将某个事件名称下的事件注册程序push到数组中存起来
	};

	this.emit = function (eventName, obj) {
		try {
			if (!this.handles[eventName]) {  // 如事件未注册, 抛出错误提示
				throw new TypeError(`找不到${eventName}事件`);
			}else {
				for (let i = 0, len = this.handles[eventName].length; i < len; i++) {  // 遍历事件池的每个事件，并传入参数触发他们
					this.handles[eventName][i](obj);
				}
			}
		}catch (err) {
			console.log('err', err);
		}
	};

	return this;
}

let test1 = new Events();
test1.on('speak', (obj) => {
	console.log(`My name is ${obj.name} and I am ${obj.age} years old!`)
});


test1.emit('say', {name: '高瑾', age: '24'});
test1.emit('speak', {name: '高瑾', age: '24'});



// 单例模式, 典型案例，创建弹窗， 一般弹窗在点击之后出来，然后关闭之后再点击就不会重新创建，而是拿的全局的实例，即单例模式

// let flag = false;
// let getSingle = function (fn) {
// 	let res;
// 	return function () {  // 这里使用了闭包， res这个变量一直保存着，在使用，不能被垃圾回收器回收占用的内存
// 		let context = this;
// 		let args = Array.prototype.slice.call(arguments);
// 		console.log(res);
// 		return res || (res = fn.apply(context, args));
// 	}
// };
//
// let createPopup = function () {
// 	let div = document.createElement('div');
// 	div.innerHTML = '<div>我是弹窗！！！</div>'
// 	div.style.display = 'none';
// 	document.body.appendChild(div);
// 	return div;
// };
//
// let createSinglePopup = getSingle(createPopup);
//
// document.getElementById('show-pop').onclick = function () {
// 	let myPopup = createSinglePopup();
// 	if (!flag) {
// 		myPopup.style.display = 'block';
// 		flag = true;
// 	}else {
// 		myPopup.style.display = 'none';
// 		flag = false;
// 	}
// };




