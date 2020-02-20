/**
 * 出入一个二叉树和一个整数，打印二叉树中节点和为输入整数的所有路径,
 * 从根节点开始一直到叶子节点行成一条路径
 */

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findPath(root, target) {
  let sum = 0;
  let allPath = [];
  function _findPath(node, path) {
    if (node === null) {
      return;
    }

    //将当前节点放入路径中
    sum += node.value;
    path.push(node);

    //找到符合的路径：叶子节点且和为target
    let isLeafNode = node.left === null && node.right === null;
    if (isLeafNode && sum === target) {
      allPath.push([...path]);
    }

    //递归遍历左右子树
    if (node.left) {
      _findPath(node.left, path);
    }
    if (node.right) {
      _findPath(node.right, path);
    }

    //返回父节点之前，删除此节点
    path.pop();
    sum = sum - node.value;
  }
  _findPath(root, []);
  return allPath;
}
const root = new Node(1, new Node(2), new Node(3, null, new Node(-1)));

console.log(findPath(root, 3));
