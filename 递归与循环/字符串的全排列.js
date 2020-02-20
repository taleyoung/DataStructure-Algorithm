/**
 * 输入一个字符串，求出字符串所有排列结果
 * 如输入abc,结果为abc,acb,bac,bca,cab,cba
 */

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
//检查arr[start]到arr[end]是否有重复元素
function check(arr, start, end) {
  for (let i = start; i < end; ++i) {
    if (arr[end] === arr[i]) {
      return false;
    }
  }
  return true;
}
/**
 * 书上的思想是每次选择第一位，由剩下的与他交换，不好理解
 * 不如直接理解为第一轮递归要确定第0位的数，第二轮确定第1位...
 * 直到n==length 表示每一位都确定了，即是一种排列
 */
function permutation(arr = [], n = 0) {
  let length = arr.length;
  if (n === length) {
    console.log(arr.join(" "));
    return;
  }
  for (let i = n; i < length; i++) {
    if (check(arr, n, i)) {
      swap(arr, n, i);
      permutation(arr, n + 1);
      swap(arr, n, i);
    }
  }
}
permutation(["a", "b", "c"], 0);
