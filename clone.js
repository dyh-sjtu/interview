// 深度克隆与浅克隆

// shallow clone
function shallowClone(sourceObj) {
	let obj = Object.create(null);
	for (let prop in sourceObj) {
		obj[prop] = sourceObj[prop]
	}
	return obj
	// return Object.assign({}, sourceObj)
}


function deepCone(sourceObj) {
	// 可以使用 JSON.parse(JSON.stringify(sourceObj)) 但是这样不能复制对象属性为函数的对象
	// 这里采用递归的方式去深复制
	let newObj = Object.prototype.toString.call(sourceObj) === '[object Array]' ? [] : {};
	for (let prop in sourceObj) {
		newObj[prop] = typeof sourceObj[prop] === 'object' ? deepCone(sourceObj[prop]) : sourceObj[prop];
	}
	return newObj;
}

let testObj = {name: 'dyh', age: 23, likes: ['play', 'sing', 'dance'], relation: {wife: 'gj', age: '24'}, say: () => {
	console.log('I can say!!')
}};

let shallowObj = shallowClone(testObj)
let deepObj = deepCone(testObj);
console.log(shallowObj);
console.log(deepObj);

testObj.likes[2] = 'running';
console.log(shallowObj);
console.log(deepObj);



let obj = {name: 'dyh', age: 23};
console.log(Object.entries(obj))