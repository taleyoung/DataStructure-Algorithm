/**
 * 从上到下打印二叉树，即打印第一层，第二层，第三层
 */

/**
 * 很明显，需要借助队列这种数据结构
 * 在js中通过[]的push和shift模拟队列
 * 更需注意的是判断数组书否为空是通过arr.length!!!!
 */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function printBiTree(root) {
  if (!root) {
    return null;
  }
  let queue = [];
  queue.push(root);
  while (queue.length) {
    const top = queue.shift();
    console.log(top.value);
    if (top.left) {
      queue.push(top.left);
    }
    if (top.right) {
      queue.push(top.right);
    }
  }
}

let root = new Node(
  0,
  new Node(1, new Node(3, null), new Node(4, null)),
  new Node(2, new Node(5, null), new Node(6, null))
);
printBiTree(root);
