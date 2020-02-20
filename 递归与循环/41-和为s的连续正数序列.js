/**
 * 题目一，输入一个递增数组和数字s，数组中查找两个数，使和为s
 */

function findNumWithSum(arr, s) {
  if (!arr) {
    return null;
  }
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === s) {
      return [arr[i], arr[j]];
    } else if (sum < s) {
      i++;
    } else {
      j--;
    }
  }
  return [null, null];
}

/**
 * 题目二，输入一个整数s，打印所有和为s的连续正数序列（至少两个数字)
 * 如 15=1+2+3+4+5 = 4+5+6 = 7+8
 * 教训是没理解连续正数序列的含义，而"连续" 正是能用left，right指针行走的关键
 */

function print(arr, left, right) {
  for (let i = left; i <= right; i++) {
    console.log(arr[i] + ",");
  }
  console.log("\n");
}

function findArrWithSum(s) {
  let left = 0,
    right = 1;
  let arr = [];
  for (let i = 1; i < s; i++) {
    arr[i - 1] = i;
  }
  let sum = arr[left] + arr[right];
  //这步的判断主要是依据正数序列至少是两个数字
  let mid = (arr.length + 1) >> 1;
  while (left < mid) {
    if (sum === s) {
      print(arr, left, right);
      right++;
      sum += arr[right];
    } else if (sum < s) {
      right++;
      sum += arr[right];
    } else {
      sum -= arr[left];
      left++;
    }
  }
}

findArrWithSum(9);
