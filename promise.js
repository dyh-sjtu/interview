// 实现一个基本的promise
// 基本用法
//  let p = new Promise((resolve, reject) => {
// 	setTimeout(() => resolve('1>>>>'), 1000);
// 	console.log('1s后异步操作完成!!!')
//  });
//
// p.then(value => console.log(value));

// 基本版本的promise-v1


// 一个promise必须有3个状态，pending，fulfilled(resolved)，rejected
// 当处于pending状态的时候，可以转移到fulfilled(resolved)或者rejected状态。
// 当处于fulfilled(resolved)状态或者rejected状态的时候，就不可变。
// 一个promise必须有一个then方法，then方法接受两个参数：promise.then(onFulfilled,onRejected)
// 其中onFulfilled方法表示状态从pending——>fulfilled(resolved)时所执行的方法，
// 而onRejected表示状态从pending——>rejected所执行的方法。
// 为了实现链式调用，then方法必须返回一个promise
// promise2=promise1.then(onFulfilled,onRejected)

function myPromise(constructor) {
	let self = this;
	self.status = 'pending';  // 定义状态改变前的初始状态
	self.value = undefined;  // 定义状态为resolved的时候的状态
	self.reason = undefined;  // 定义状态为rejected的时候的状态
	self.Resolve = function (value) {
		//两个==="pending"，保证了状态的改变是不可逆的
		if (self.status === 'pending') {
			self.status = 'resolved';
			self.value = value;
		}
	};
	
	self.Reject = function (reason) {
		if (self.status === 'pending') {
			self.status = 'rejected';
			self.reason = reason
		}
	};
	
	try {
		constructor(self.Resolve, self.Reject)
	}catch(err) {
		self.Reject(err)
	}
}

myPromise.prototype.then = function (onFullfilled, onRejected) {
	let self = this;
	switch (self.status) {
		case 'resolved':
			onFullfilled(self.value);
			break;
		case 'rejected':
			onRejected(self.reason);
			break;
		default:
	}
};

new myPromise(resolve => {
	resolve('1');  // 只能处理同步问题
	// setTimeout(() => resolve('1'), 1000);  // 不能处理这类异步问题，接下来要用观察者模式实现异步的问题
}).then(value => console.log(value));


// v2.0基于观察模式实现

function myPromise_2(constructor) {
	let self = this;
	self.status = 'pending';
	self.value = undefined;
	self.reason = undefined;
	self.onFullfilledArray = [];
	self.onRejectedArray = [];
	
	self.Resolve = function (value) {
		if (self.status === 'pending') {
			self.status = 'resolved';
			self.value = value;
			self.onFullfilledArray.map(fn => fn(self.value))
		}
	};
	
	self.Reject = function (reason) {
		if (self.status === 'pending') {
			self.status = 'rejected';
			self.reason = reason;
			self.onRejectedArray.map(fn => fn(self.reason))
		}
	};
	
	try {
		constructor(self.Resolve, self.Reject);
	}catch (err) {
		self.Reject(err)
	}
}

myPromise_2.prototype.then = function (onFullfilled, onRejected) {
	let self = this;
	switch (self.status) {
		case 'pending':
			self.onFullfilledArray.push((value) => onFullfilled(value));
			self.onRejectedArray.push((reason) => onRejected(reason));
			break;
		case 'resolved':
			onFullfilled(self.value);
			break;
		case 'rejected':
			onRejected(self.reason);
			break;
		default:
	}
};

new myPromise_2((resolve, reject) => {
	console.log('我是同步结果');
	setTimeout(() => resolve('我是异步结果'), 2000);
}).then(value => {
	let res = value + 'hahaha';
	console.log(res)
});