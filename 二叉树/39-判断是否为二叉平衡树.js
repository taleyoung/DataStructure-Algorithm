/**
 * 输入二叉树的根节点，求二叉树的深度 即最长的路径长度
 */

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * 题一。求二叉树的深度 即最长的路径长度
 */

function getBTreeDepth(node) {
  if (!node) {
    return 0;
  }
  let left = getBTreeDepth(node.left);
  let right = getBTreeDepth(node.right);
  return left > right ? left + 1 : right + 1;
}

/**
 * 判断是否为二叉平衡树。
 * 二叉平衡树：一个二叉树的任意节点的左右子树深度差不超过1
 */

//有重复计算
function isBalanced(root) {
  if (!root) {
    return 0;
  }
  let left = getBTreeDepth(root.left);
  let right = getBTreeDepth(root.right);
  let diff = Math.abs(left - right);
  if (diff > 1) {
    return false;
  }
  return isBalanced(left) && isBalanced(right);
}

//优化版，无重复计算
//即先计算子树 再向上计算父节点

function isBalanced2(root, obj = {}) {
  if (!root) {
    obj.depth = 0;
    return 0;
  }
  //相当于父节点的obj，
  let left = {},
    right = {};
  if (isBalanced2(root.left, left) && isBalanced2(root.right, right)) {
    let diff = Math.abs(left.depth - right.depth);
    if (diff > 1) {
      return false;
    }
    //这里表示计算出子节点的深度之后，父节点再计算深度
    obj.depth = 1 + left.depth > right.depth ? left.depth : right.depth;
    return true;
  } else {
    return false;
  }
}
