/**
 * E.27.移除元素
 * 给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
 *
 */

// A1: 双指针法
const TwoPointer = (arr, val) => {
  let i = 0;
  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] !== val) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
};
//A2：交换法
const change = (arr, val) => {
  let i = 0;
  let n = arr.length;
  while (i < n) {
    if (arr[i] === val) {
      arr[i] = arr[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
};

const res = change([3, 2, 2, 3, 3], 3);
console.log("res", res);
