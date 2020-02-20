/**
 * 0,1,…,n-1 这 n 个数字排成一个圆圈，从数字 0 开始每次从这个圆圈里删除第 m 个数字。
 * 求出这个圆圈里剩下的最后一个数字。
 */

function main(n, m) {
  let nums = [];
  for (let i = 0; i < n; ++i) {
    nums[i] = i;
  }
  let start = 0;
  while (nums.length > 1) {
    start = (start + m - 1) % nums.length;
  }

  return nums.shift();
}
console.log(main(5, 3));
