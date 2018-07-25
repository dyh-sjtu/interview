let box = document.getElementById('container');
let originLeft, originTop;
let flag = false;
box.onmousedown = function (event) {  // 当鼠标按下时， 需要获取
	let bound = box.getBoundingClientRect();
	originLeft = event.offsetX || (event.clientX - bound.left);
	originTop = event.offsetY || (event.clientY - bound.top);
	flag = true;
};

box.onmousemove = function (event) {  // 鼠标移动时，需要获取当前鼠标的位置，
	let clientX = event.clientX;
	let clientY = event.clientY;
	if (flag) {
		box.style.left = (clientX - originLeft) + 'px';
		box.style.top = (clientY - originTop) + 'px';
	}
};

box.onmouseup = function () {
	flag = false
};


function drop(event) {
	event.preventDefault()
	let data = event.dataTransfer.getData('Text');
	event.target.appendChild(document.getElementsByClassName(data)[0]);
}

function allowDrop(event) {
	event.preventDefault()
}

function drag(event) {
	event.dataTransfer.setData('Text', event.target.className)
}