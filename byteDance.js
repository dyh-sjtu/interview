// function getMaxLenSonString(str) {
// 	let res = [];
// 	let len = str.length;
// 	if (len === 0) return 0;
// 	if (len === 1) return 1;
// 	for (let i = 0; i < len; i++) {
// 		let temp = [str[i]];
// 		for (let j = i + 1; j < len; j++) {
// 			if (temp.indexOf(str[j]) === -1) {
// 				temp.push(str[j]);
// 			}else{
// 				break;
// 			}
// 		}
// 		res.push(temp);
// 	}
// 	let maxLen = res[0].length;
// 	for (let k = 1, _len = res.length; k < _len; k++) {
// 		if (res[k].length > maxLen) maxLen = res[k].length;
// 	}
// 	return maxLen
// }
//
// console.log(getMaxLenSonString("abcabcbb"));
//
//
// function getDouYinHongRen(N, M, str) {
// 	let arr = str.split(" ").map(item => parseInt(item));
// 	let mapArr = [];
// 	for(let i = 0, len = arr.length; i < len; i++) {
// 		if (i%2 === 1) {
// 			mapArr.push([arr[i-1], arr[i]]);
// 		}
// 	}
// 	let obj = mapArr.reduce((prev, cur, index) => {
// 		if (!prev[cur[1]]) {
// 			prev[cur[1]] = [cur[0]];
// 		}else {
// 			prev[cur[1]].push(cur[0]);
// 		}
// 		return prev;
// 	}, {});
// 	let res = {};
// 	for (let item in obj) {
// 		let fans = [parseInt(item)];
// 		if (obj[item].length >= 1) {
// 			let tempArr = obj[item];
// 			tempArr.forEach((_item, _index) => {
// 				fans.push(_item);
// 				getOtherFans(obj, fans, _item);
// 			})
// 		}
// 		res[item] = fans;
// 	}
// 	let count = 0;
// 	Object.keys(res).forEach(item => {
// 		if (res[item].length >= N) {
// 			count++;
// 		}
// 	});
// 	function getOtherFans(obj, fans, item) {
// 		if (obj[item].length >= 1) {
// 			obj[item].forEach(_item => {
// 				if (fans.indexOf(_item) === -1) {
// 					fans.push(_item);
// 					getOtherFans(obj, fans, _item);
// 				}
// 			})
// 		}
// 	}
// }
//
// getDouYinHongRen(3, 3, "1 2 2 1 2 3");


function getEnergy(s, p) {
	let slen = s.length, plen = p.length;
	let start = 0;
	let res = [];
	if(s.indexOf(p, start) === -1) console.log(0);
	while(s.indexOf(p, start) > -1) {
		start = s.indexOf(p, start);
		console.log(start)
		let end = start;
		let tempIndex = 1;
		while(tempIndex <= plen) {
			while(s.indexOf(p, end+tempIndex) === end+tempIndex) {
				end = end + plen;
			}
			tempIndex++;
		}
		if (start !== end) {
			res.push(s.slice(start, end+plen));
		}else {
			res.push(p);
		}
		start = end+plen;
	}
	let energy = res.reduce((prev, cur) => prev + cur.length*cur.length, 0);
	console.log(energy);
}

getEnergy('c', 'cc');


(function (callback) {
	let city = {name: "hangzhou"};
	callback(city);
	console.log(city.name)
})(function (obj) {
	obj.name = "shanghai";
	obj = {name: "beijing"};
	console.log(obj)
});