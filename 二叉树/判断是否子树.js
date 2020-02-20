/**
 * 判断二叉树p1是否包含二叉树p2
 */

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function doesTree1HasTree2(p1, p2) {
  //p2提前遍历完
  if (!p2) {
    return true;
  }
  //p2还没遍历完，p1就遍历完了
  if (!p1 || p1.value !== p2.value) {
    return false;
  }
  return (
    doesTree1HasTree2(p1.left, p2.left) && doesTree1HasTree2(p1.right, p2.right)
  );
}

function hasSubTree(p1, p2) {
  let result = false;
  if (p1 && p2) {
    if (p1.value === p2.value) {
      result = doesTree1HasTree2(p1, p2);
    }
    if (!result) {
      result = hasSubTree(p1.left, p2);
    }
    if (!result) {
      result = hasSubTree(p1.right, p2);
    }
  }

  return result;
}
