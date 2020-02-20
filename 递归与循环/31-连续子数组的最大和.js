/**
 * 数组中有整数也有负数，数组中一个或连续多个整数组成一个子树组
 * 求所有子数组中和的最大值
 * 要求复杂度为o(n)
 */

/**
 * 一个个模拟运算 以及运用动态规划的思想
 * f(i) = f(i-1) + currSum.  [f(i-1)>0]
 * f(i) = currSum [f(i-1)<=0]
 *
 * 如果以第i-1结尾的所有数字和小于0，加上arr[i]后肯定和变小了
 * 所以不应该加上f(i-1)
 */

function maxSumOfSubArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return;
  }
  let currentSum = 0,
    //maxSum初始值应该设置为一个最小值
    maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (currentSum <= 0) {
      currentSum = arr[i];
    } else {
      currentSum += arr[i];
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

console.log(maxSumOfSubArray([1, -2, 3, 10, -4, 7, 2, -5]));
