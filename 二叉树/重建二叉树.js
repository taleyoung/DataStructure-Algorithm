/**
 * 输入二叉树的前序遍历和中序遍历，重建出二叉树
 */

//二叉树的节点
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//重建二叉树
function reBuild(preOrder, inOrder) {
  if (!preOrder.length || !inOrder.length) {
    return null;
  }

  let node = new Node(preOrder[0]);

  let i = 0;
  for (; i < inOrder.length; ++i) {
    if (inOrder[i] === preOrder[0]) {
      break;
    }
  }

  // 通过变量i可以确定在 前序遍历 / 中序遍历中 确定 左 / 右子树的长度
  node.left = reBuild(preOrder.slice(1, i + 1), inOrder.slice(0, i));
  node.right = reBuild(preOrder.slice(i + 1), inOrder.slice(i + 1));

  return node;
}

const preArr = [1, 2, 4, 7, 3, 5, 6, 8];
const midArr = [4, 7, 2, 1, 5, 3, 8, 6];
const binTree = reBuild(preArr, midArr);
console.log(binTree);
