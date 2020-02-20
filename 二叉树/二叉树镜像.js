/**
 * 求二叉树的镜像
 */

/**
 * 此题看上去花里胡哨的，但其实自习分析，很简单，代码量也很少
 * 思路为前序遍历，节点的左右子节点互换
 */

class Node {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function mirrorBiTree(root) {
  if (!root) {
    return null;
  }
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  if (root.left) {
    mirrorBiTree(root.left);
  }
  if (root.right) {
    mirrorBiTree(root.right);
  }
}

const root = new Node(0, new Node(1, new Node(3)), new Node(2));
mirrorBiTree(root);
console.log(root);
