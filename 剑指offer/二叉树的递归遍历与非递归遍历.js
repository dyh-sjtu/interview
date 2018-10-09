function TreeNode(val) {  // 树节点构造方式
	this.val = val;
	this.left = null;
	this.right = null;
}

function generateTree() {
	let root = new TreeNode(10);
	let left1 = new TreeNode(5);
	let left2 = new TreeNode(4);
	let left3 = new TreeNode(7);
	let right1 = new TreeNode(12);
	let right2 = new TreeNode(11);
	let right3 = new TreeNode(15);
	let right4 = new TreeNode(13);
	root.left = left1;
	left1.left = left2;
	left1.right = left3;
	root.right = right1;
	right1.left = right2;
	right1.right = right3;
	right3.left = right4;
	return root;
}

function visit(node) {  // 遍历方式-打印出来
	console.log(node.val);
}

// 递归方式
// 前(先)序遍历递归方式
function DLR_recursion(root) {
	root && visit(root);
	root.left && DLR_recursion(root.left);
	root.right && DLR_recursion(root.right);
}

// 中序遍历递归方式
function LDR_recursion(root) {
	root.left && LDR_recursion(root.left);
	root && visit(root);
	root.right && LDR_recursion(root.right);
}

// 后序遍历递归方式
function RDL_recursion(root) {
	root.left && RDL_recursion(root.left);
	root.right && RDL_recursion(root.right);
	root && visit(root);
}

// 非递归方式
// 前(先)序遍历非递归方式
function DLR(root) {
	let arr = [];  // 维护一个栈
	root && arr.push(root);
	while (arr.length !== 0) {
		let temp = arr.pop();
		visit(temp);
		if (temp.right !== null) {  // 这里入栈顺序是先右后左，这样由于先进后出，所以符合右子树后出，为先序遍历
			arr.push(temp.right);
		}
		if (temp.left !== null) {
			arr.push(temp.left);
		}
	}
}

// 中序非递归遍历
function LDR(root) {
	let arr = [];
	while (true) {
		while (root !== null) {
			arr.push(root);
			root = root.left;
		}
		// 循环的结束条件是数组长度为0，遍历完成
		if (arr.length === 0) {
			break;
		}
		let temp = arr.pop();
		visit(temp); // 访问左子树的根节点
		root = temp.right; // 左子树的右子节点
	}
}

// 后序非递归遍历(与前序遍历相反)
function RDL(root) {
	let arr = [], res = [];
	root && arr.push(root);
	while (arr.length !== 0) {
		let temp = arr.pop();
		res.push(temp);
		if (temp.left !== null) {
			arr.push(temp.left);
		}
		if (temp.right !== null) {
			arr.push(temp.right);
		}
	}
	res.reverse();
	res.forEach(item => visit(item));
}


function run() {
	let tree = generateTree();
	console.log("前(先)序递归遍历", DLR_recursion(tree));
	console.log("前(先)序递归遍历", DLR(tree));
	
	console.log("中序递归遍历", LDR_recursion(tree));
	console.log("中序非递归遍历", LDR(tree));
	
	console.log("后序递归遍历", RDL_recursion(tree));
	console.log("后序非递归遍历", RDL(tree));
	
}

run();