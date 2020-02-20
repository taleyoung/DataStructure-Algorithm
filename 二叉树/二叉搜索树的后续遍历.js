/**
 * 给定一个数组，判断该数组是不是某二叉搜索树后序遍历的结果
 */

/**
 * 1.注意递归的发挥条件，这里是arr.length不为0
 * 既是对传入参数的判断，也是递归到最后的判断条件
 */
function checkIsBST(arr) {
  if (!arr.length) {
    return true;
  }

  const length = arr.length;
  const root = arr[length - 1];
  //i表示前半部分 即左子树，j表示后半部分 即右子树
  let i, j;

  for (i = 0; i < length && arr[i] < root; i++);
  for (j = i; j < length && arr[j] > root; j++);

  //如果j没循环到最后一个，说明数组不是二叉搜索树标准的左边全是小的
  //右边全是大的，即返回false
  if (j !== length - 1) {
    return false;
  }

  //对左子树和右子树分别递归，将左右取&&返回
  let left = checkIsBST(arr.slice(0, i));
  let right = checkIsBST(arr.slice(i, length - 1));
  return left && right;
}
console.log(checkIsBST([5, 7, 6, 9, 11, 10, 8]));
console.log(checkIsBST([4, 3, 2, 1]));
console.log(checkIsBST([7, 4, 6, 5]));
