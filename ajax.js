let myAjax = function (url) {
	let xhr;
	return new Promise((resolve, reject) => {
		if (window.XMLHttpRequest) {  // 标准浏览器支持
			xhr = new XMLHttpRequest();
		}else if(window.ActiveXObject('Microsoft.XMLHTTP')) {  // IE5, 6支持
			xhr = new ActiveXObject('Microsoft.XMLHTTP')
		}
		xhr.open('get', url, true);
		xhr.send(null);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
					resolve(JSON.parse(xhr.responseText));
				}
			}else {
				reject('error')
			}
		}
	})
};


function Person() {
	let name = 'dyh';
	this.getName = function () {
		return name;
	}
}

let person = new Person();
console.log(person.name);
console.log(person.getName())

// setTimeout模拟setInterval

// setTimeout(function () {
// 	console.log('1')
// 	setTimeout(arguments.callee, 1000)
// }, 1000);

// 实现sleep效果
// function sleep(ms) {
// 	let start = Date.now();
// 	let expire = start + ms;
// 	while(Date.now() < expire);
// 	console.log('5s过了');
// 	return;
// }
//
// sleep(5000);

// 采用promise模拟sleep
function sleepPromise(ms) {
	let temp = new Promise((resolve, reject) => {
		console.log('11111');
		setTimeout(resolve, ms);
	});
	return temp;
}

sleepPromise(5000).then(res => {
	console.log('我在5后打印出来！！！！！')
});

