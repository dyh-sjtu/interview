// 等价于Object.create(原型prototype);
if (!('create' in Object)) {
	Object.create = function () {
		let arg = arguments[0];
		function F() {}
		F.prototype = arg;
		return new F();
	}
}

// 彻底理解继承
// 原型链继承 子类的原型指向父类的实例
// 由于原型链继承共享属性实例属性的缺点，属于引用类型传值，引用副本实例属性的修改必然会引起其他副本实例属性的修改，所以不常使用；
function SuperType() {
    this.colors = ['red', 'blue', 'green'];
}

function SubType() {}
SubType.prototype = new SuperType();
let instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors);
let instance2 = new SubType();
console.log(instance2.colors);

// 借用构造函数继承, 在执行Child构造函数的时候，子类的实例各自得到一份构造函数的副本，属于值传递，所以子类之间的属性修改是互不相关的；
// 缺点：单独使用无法达到函数复用，因为每一个函数和属性都需要在构造函数中定义，没法复用
function Parent() {
	this.colors = ['red', 'blue', 'green'];
}

function Child() {
	Parent.call(this);
}

let instance3 = new Child();
instance3.colors.push('white');
console.log(instance3.colors);

let instance4 = new Child();
console.log(instance4.colors);

// 组合继承模式 常用 原型链继承+构造函数继承
// 原型链继承共享属性(属性方法和属性)， 构造函数继承父类构造函数的实例属性
// 缺点: 调用了两次父类构造函数，生成了两份实例
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.action = ['speak', 'run', 'eat'];
    console.log('我被调用了');
}
Person.prototype.say = function () {
	console.log(`my name is ${this.name} and I am ${this.age} years old!`);
};

function Student(name, age, score) {
    Person.call(this, name, age);  // 借用构造函数, 第一次调用父类构造函数
    this.score = score;
}

Student.prototype = new Person();  // 原型链继承, 第二次调用父类构造函数
Student.prototype.constructor = Student;  // 将实例的原型上的构造函数指定为当前子类的构造函数
Student.prototype.showScore = function () {
	console.log(`my score is ${this.score}`);
};

let xiaoming = new Student('xiaoming', 23, '88');
xiaoming.action.push('panio');
console.log(xiaoming.action);
xiaoming.say();
xiaoming.showScore();

let xiaohua = new Student('xiaohua', 24, '99');
console.log(xiaohua.action);
xiaohua.say();
xiaohua.showScore();

// 最好的方法，最理想的方法 寄生组合式继承
// 解决了两次调用父类构造函数问题
function Person_1(name, age) {
	this.name = name;
	this.age = age;
	this.action = ['speak', 'run', 'eat'];
	console.log('我被调用了');
}
Person_1.prototype.say = function () {
	console.log(`my name is ${this.name} and I am ${this.age} years old!`);
};

function Student_1(name, age, score) {
	Person_1.call(this, name, age);  // 借用构造函数, 第一次调用父类构造函数
	this.score = score;
}

Student_1.prototype = Object.create(Person_1.prototype);
Student_1.prototype.constructor  = Student_1;
Student_1.prototype.showScore = function () {
	console.log(`my score is ${this.score}`);
};

let xiaoming_1 = new Student('xiaoming_1', 23, '78');
xiaoming_1.action.push('panio');
console.log(xiaoming_1.action);
xiaoming_1.say();
xiaoming_1.showScore();

let xiaohua_1 = new Student('xiaohua_1', 24, '89');
console.log(xiaohua_1.action);
xiaohua_1.say();
xiaohua_1.showScore();

// 类class注意点

// Map 和 Set, weakSet和weakMap




统计数字

/*问题描述

计算数字k在0到n中的出现的次数，k可能是0~9的一个值
例如n=12，k=1，在 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]，我们发现1出现了5次 (1, 10, 11, 12)

解析： 最简单的方法就是遍历了，当然高级方法这里不探讨。那么简单的遍历又有什么问题呢？ 那就是遇到了比如111这样的数字。

我们可以使用indexOf来判断是否出现过，但是出现了多少次该怎么判断？

说一个思路，使用split方法，具体实现如下*/

const digitCounts = function (k, n) {
	let num = 0;
	for(let i = 0; i<=n;i++){
		if(String(i).indexOf(k) !== -1) {
			num += (String(i).split(k).length-1)
		}
	}
	return num
};
