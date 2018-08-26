let findMax = function (a, b, c) {
	return Math.max.apply(null, [a+b+c,a*b+c, a*(b+c), (a+b)*c, a*b*c, a+b*c])
};
console.log(findMax(1,2,3));


function question2(res) {
	res.sort((a, b) => a[0] - b[0]);
	let result = [res[0]];
	for (let i = 1, len = res.length; i < len; i++) {
		let _len = result.length;
		if (result[_len-1][1] >= res[i][0]) {
			result[_len-1][1] = res[i][1];
		}else {
			result.push(res[i]);
		}
	}
	let resStr = result.reduce((prev, cur, index, arr) => {
		prev = (index === arr.length-1) ? (prev + cur.join(",")) :(prev + cur.join(",") + ';');
		return prev;
	}, '');
	return resStr
}

console.log(question2([[1,10],[32,45],[78,94],[5,16], [80,100],[200,220],[16,32]]));

function findN(a, b, n) {
	let res = 0;
	for (let i = 0; i < n; i++) {
		for (let j = i; j < n; j++) {
			let aMax = Math.max.apply(null, a.slice(i,j+1));
			let bMin = Math.min.apply(null, b.slice(i,j+1));
			res = aMax < bMin ? res + 1 : res;
		}
	}
	return res;
}

console.log(findN([3, 2, 1], [3, 3, 3], 3));