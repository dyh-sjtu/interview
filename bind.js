// 实现一个bind方法

Function.prototype.bind = function (obj) {
	let newArgs = Array.prototype.slice.call(arguments, 1);  // 这里arguments指的是绑定之前bind()里面的传参，去除第一个环境对象
	let context = this;
	let bound = function () {
		console.log(arguments);
		newArgs = newArgs.concat(Array.prototype.slice.call(arguments));  // 这里arguments指的是绑定后返回函数的传参
		return context.apply(obj, newArgs)
	};
	// 考虑继承原函数的原型
	let F=function(){};
	//这里需要一个寄生组合继承
	F.prototype=context.prototype;
	bound.prototype=new F();
	return bound;
};

let a = {
	name: 'dyh',
	say: function () {
		console.log(this.name)
	}
};

let b = {
	name: 'gj'
};

console.log(a.say());
console.log(a.say.bind(b, {age: 24})(1));
