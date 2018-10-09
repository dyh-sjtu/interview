function TreeNode(x) {
	this.val = x;
	this.left = null;
	this.right = null;
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

function FindPath(root, expectNumber) {
	let listAll = [], list = [], sum = 0;
	if (root === null) return listAll;
	findSumPath(root, expectNumber, listAll, list, sum);
	return listAll;
}

function findSumPath(root, target, listAll, list, sum) {
    list.push(root.val);
    sum += root.val;
    if(sum === target && root.left === null && root.right === null) {
    	// 和为目标值并且当前节点为叶节点
	    listAll.push(list.concat());
    }
    if(root.left) {
    	findSumPath(root.left, target, listAll, list, sum);
    }
    if(root.right) {
    	findSumPath(root.right, target, listAll, list, sum);
    }
    list.pop();  // 回溯继续找下一个可以相加之和为目标整数的路径;
}