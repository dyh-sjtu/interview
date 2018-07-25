// 生成用于测试的数组
// 初始化数组
function test() {
	let initArr = Array.from({length: 20}, (item, index) => index + 2);
	let generateArr = initArr.sort((a, b) => Math.random() > 0.5 ? 1 : -1);
	console.log("排序前: " + '[' + generateArr + ']');
	return generateArr;
}

// 冒泡排序
Array.prototype.bubbleSort = function () {
	let self = this;
	let len = self.length;
	for (let i = 0; i < len; i++) {  // 每次冒泡
		for (let j = 0; j < len - i - 1; j++) {  // 冒泡区间逐渐减小
			if (self[j] > self[j + 1]) [self[j], self[j + 1]] = [self[j + 1], self[j]];  // 交换相邻两个数，一次冒泡流程结束完成最大值一定在最右边
		}
	}
	console.log("排序后: " + '[' + self + ']');
	return self;
};

// 短路冒泡排序
Array.prototype.shortBubbleSort = function () {
	let self = this;
	let len = self.length;
	let isSort = false;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len - i - 1; j++) {
			if (self[j] > self[j + 1]) {
				[self[j], self[j + 1]] = [self[j + 1], self[j]];
				isSort = true;
			}
		}
		if (!isSort) {
			console.log("排序后: " + '[' + self + ']');
			return self;
		}
	}
	console.log("排序后: " + '[' + self + ']');
	return self;
};

// 选择排序
Array.prototype.selectSort = function () {
	let self = this;
	let len = self.length;
	let maxIndex;
	for (let i = 0; i < len - 1; i++) { // 需要比较len-1趟循环，每一次循环需要比较的数目减一，最后一次循环只有一个数，所以无需比较
		maxIndex = 0; // 选取第一个数作为起始比较数
		for (let j = 1; j < len - i; j++) {  // 每次循环需要比较的数目随着i增大而减小
			if (self[j] > self[maxIndex]) {
				maxIndex = j  // 保存最大数的索引
			}
		}
		[self[len - i - 1], self[maxIndex]] = [self[maxIndex], self[len - i - 1]];
	}
	console.log("排序后: " + '[' + self + ']');
	return self;
};

// 插入排序
Array.prototype.insertSort = function () {
	let self = this;
	let len = self.length;
	let temp;
	for (let i = 1; i < len; i++) {
		temp = self[i];
		let j = i - 1;
		while (self[j] > temp) {
			self[j + 1] = self[j];
			j--;
		}
		self[j + 1] = temp;
	}
	console.log("排序后: " + '[' + self + ']');
	return self;
};

// 二分法插入排序
Array.prototype.binaryInsertSort = function () {
	let self = this;
	let len = self.length;
	let temp;
	for (let i = 1; i < len; i++) {
		temp = self[i];
		let left = 0, right = i - 1;
		while (left <= right) {
			let middle = parseInt((left + right) / 2);
			if (temp < self[middle]) {
				right = middle - 1;
			} else {
				left = middle + 1;
			}
		}
		for (let j = i - 1; j >= left; j--) {
			self[j + 1] = self[j];
		}
		self[left] = temp;
	}
	console.log("排序后: " + '[' + self + ']');
	return self;
};

// 希尔排序
Array.prototype.shellSort = function () {
	let self = this;
	let len = self.length;
	let gap = Math.floor(len / 2);
	while (gap >= 1) {
		for (let i = gap; i < len; i++) {
			let temp = self[i];
			let j = i - gap;
			while (j >= 0 && temp < self[j]) {
				self[j + gap] = self[j];
				j -= gap;
			}
			self[j + gap] = temp;
		}
		gap = Math.floor(gap / 2)
	}
	console.log("排序后: " + '[' + self + ']');
	return self;
};

Array.prototype.mergeSort = function () {
	let self = this;
	let len = self.length;
	if (len < 2) return self;
	let middle = Math.floor(len/2);
	let left = self.slice(0, middle);
	let right = self.slice(middle);
	return merge(left.mergeSort(), right.mergeSort());
};

function merge(left, right) {
	let result = [];
	while(left.length && right.length) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		}else {
			result.push(right.shift())
		}
	}
	while (left.length) {
		result.push(left.shift())
	}
	while (right.length) {
		result.push(right.shift())
	}
	return result;
}

// 快速排序
// 阮一峰版快排
Array.prototype.quickSort = function () {
	let self = this;
	let len = self.length;
	if (len <= 1) return self;
	let middleIndex = Math.floor(len/2);
	let middle = self.splice(middleIndex, 1)[0];  // splice函数将中间基准数取出来，这里比较耗性能，其他版本不取出来，直接用下标读取；
	let left = [], right = []; // 每一次递归都会开辟两个数组去储存数据，性能
	for (let i = 0, _len = self.length; i < _len; i++) {
		if (self[i] <= middle) {
			left.push(self[i])
		}else {
			right.push(self[i])
		}
	}
	return [...left.quickSort(), middle, ...right.quickSort()];
};

// 另一个版本的快排
function quickSort(arr) {
	return quick(arr, 0, arr.length - 1);
}

function quick(arr, left, right) {
	let middleIndex;
	if (arr.length <= 1) return arr;
	middleIndex = partition(arr, left, right);
	if (left < middleIndex-1) {
		quick(arr, left, middleIndex-1)
	}
	if (right > middleIndex){
		quick(arr, middleIndex, right)
	}
	return arr;
}

function partition(arr, left, right) {
	const middle = arr[Math.floor((left+right)/2)];
	let i = left, j = right;
	while (i <= j) {
		while (arr[i] < middle) {
			i++;
		}
		while (arr[j] > middle) {
			j--;
		}
		if (i <= j) {
			[arr[i], arr[j]] = [arr[j], arr[i]];
			i++;
			j--;
		}
	}
	return i;
}

test().bubbleSort();
test().selectSort();
test().insertSort();
test().binaryInsertSort();
test().shellSort();
console.log('排序后: [' + test().mergeSort() + ']');
console.log('快速排序1后: [' + test().quickSort() + ']');
console.log('快速排序2后: [' + quickSort(test()) + ']');







