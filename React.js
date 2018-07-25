
function Person() {}
function Animal() {}
let p1 = new Person();
let a1 = new Animal();
p1.name = 'aaaa';
let newName;
Object.defineProperty(a1, 'name', {
	configurable: true,
	enumerable: true,
	get: function () {
		return newName = p1.name
	},
	set: function (value) {
		newName = value
	}
});
// a1.name = 'dyh';
console.log(a1.name);
Object.defineProperty(p1, 'key', {
	value: 1
});
p1.key = 2;
console.log(p1.key);


function Events() {
	this.on = function (eventName, callback) {
		if (!this.handles) {
			this.handles = {};
		}
		if (!this.handles[eventName]) {
			this.handles[eventName] = [];
		}
		this.handles[eventName].push(callback);
	};
	
	this.emit = function (eventName, message) {
		if (this.handles) {
			if (!this.handles[eventName]) {
				throw new Error(`${eventName}事件未注册!`);
			}
			for (let i = 0; i < this.handles[eventName].length; i++) {
				this.handles[eventName][i](message);
			}
		}
	};
	return this;
}

let test1 = new Events();
let test2 = new Events();
test1.on('speak', (msg) => console.log(msg));
test1.on('say', (msg) => console.log(`I am ${msg.name} and I am ${msg.age} years old!`));
test1.emit('speak', {name: 'dyh', age: 23});
test1.emit('say', {name: 'dyh', age: 23});

test2.on('say', (msg) => console.log(msg));
test2.emit('say', 'I love you');

function* test() {
	yield 1;
	return 2
}

let res = test();
console.log(res.next())
console.log(res.next())
console.log(res.next())



