function TreeNode(x) {
	this.val = x;
	this.left = null;
	this.right = null;
}

// function reConstructBinaryTree(pre, vin) {
// 	// 判断二叉树数据的有效性
// 	if (pre === null || vin === null || pre.length !== vin.length || pre.length < 1) {
// 		return null;
// 	}
// 	return constructTree(pre, 0, pre.length - 1, vin, 0, vin.length - 1);
// }
//
// function construct(pre, ps, pe, vin, vs, ve) {
// 	if (ps > pe) {
// 		return null;
// 	}
// 	let value = pre[ps];
// 	let index = vs;
// 	while (index <= ve && vin[index] !== value) {
// 		index++;  // 找到根节点
// 	}
// 	if (index > ve) {
// 		print("数据不合法");
// 	}
// 	let node = new TreeNode(value);
// 	node.left = constructTree(pre, ps + 1, ps + index - vs, vin, vs, index - 1);
// 	node.right = constructTree(pre, ps + index - vs + 1, pe, vin, index + 1, ve);
// 	return node;
// }
//
// function rectCover(number)
// {
// 	// write code here
// 	// 类似于青蛙跳台阶
// 	let dp = [1, 2];
// 	if (number < 3) return dp[number-1];
// 	let i = 3;
// 	while(i <= number) {
// 		dp[i] = dp[i-1] + dp[i-2];
// 	}
// 	return dp[number-1];
// }
//
// console.log(rectCover(5));
//
// function PrintFromTopToBottom(root)
// {
// 	// write code here
// 	// 维护一个容器队列，在打印一个根节点后，把他的左右子节点放入队列中，一次打印，先入先出
// 	let temp = [];
// 	temp.push(root);
// 	let cur = null;
// 	while(temp.length>0) {
// 		cur = temp.shift();
// 		print(cur.val);
// 		if(cur.left){
// 			temp.push(cur.left);
// 		}
// 		if(cur.right) {
// 			temp.push(cur.right);
// 		}
// 	}
// }
//
// function VerifySquenceOfBST(sequence)
// {
// 	// write code here
// 	// 先假设该数组是二叉搜索树的的后序遍历结果，这样最后一个数字为根节点，
// 	// 比根节点小的为左子树，比根节点大的为右子树；再在左子树的最后一个节点确定为左子树的根节点；
// 	// 右子树的最后一个节点为右子树的根节点
// 	if(sequence === null || sequence.length === 0) {
// 		return false;
// 	}
// 	return isBSTTree(sequence, 0, sequence.length-1);
// }
//
// function isBSTTree(arr, start, end) {
// 	if(start >= end) {
// 		return true;
// 	}
// 	let root = arr[end];
//     let i = start;
// 	for(; i < end; i++) {
// 		if(arr[i]>root) {
// 			break;
// 		}
// 	}
// 	let j = i;
// 	for(; j < end; j++) {
// 		if(arr[j] < root) {
// 			return false;
// 		}
// 	}
// 	let left = true, right = true;
// 	if(start < i) {
// 		left = isBSTTree(arr, start, i-1)
// 	}
// 	if(i < end) {
// 		right = isBSTTree(arr, i, end-1)
// 	}
// 	return left && right;
// }

function FindPath(root, expectNumber)
{
	// write code here
	// 深度搜索,由于是整数，可能为负值，因此只能暴力求解每条路径之和，存入结果数组
	let result = [], res = [];
	if(root === null) return result;
	return sumPath(root, expectNumber, res, result);
	function sumPath(root, expectNumber, res, result) {
		res.push(root.val);
		expectNumber -= root.val;
		console.log("||||||||||",expectNumber);
		if(expectNumber === 0 && root.left === null && root.right === null) {
			// 和为目标整数并且当前节点为叶节点
			console.log("<<<<<>>>>>", expectNumber, res);
			result.push(Array.from(res)); // push res的副本是因为res在后面会一直变，所以要保存当前res的副本
		}
		if (root.left !== null) {
			sumPath(root.left, expectNumber, res, result)
		}
		if (root.right !== null) {
			sumPath(root.right, expectNumber, res, result)
		}
		res.pop();
		return result;
	}
}

let node1 = new TreeNode(10);
let node2 = new TreeNode(5);
let node3 = new TreeNode(12);
let node4 = new TreeNode(4);
let node5 = new TreeNode(7);
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;

console.log(FindPath(node1, 22));

function findAll(root, arr) {  // 中序遍历二叉树
	if(root.left) findAll(root.left, arr);
	arr.push(root.val);
	if(root.right) findAll(root.right, arr);
	return arr;
}

console.log(findAll(node1, []));

