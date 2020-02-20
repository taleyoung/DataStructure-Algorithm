/**
 * 输入一个整数数组，调整该数组中数字的顺序，
 * 使得所有奇数位于数组前半部分，所有偶数位于后半部分
 */

/**
 * 拓展性更好的代码，完成满足fn函数的放在前半部分，不满足的在后部分
 * 典型的双指针数组
 */

function swap1(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
  return arr;
}
//利用数组的解构可以完成这样的swap函数
const swap2 = (arr, left, right) =>
  ([arr[left], arr[right]] = [arr[right], arr[left]]);

function reOrderOddEven(arr, fn) {
  let resArr = [...arr];
  let length = resArr.length;
  let left = 0,
    right = length - 1;
  while (left < right) {
    while (left < right && fn(resArr[left])) {
      left++;
    }
    while (right >= 0 && !fn(resArr[right])) {
      right--;
    }
    if (left < right) {
      swap2(resArr, left, right);
      left++;
      right--;
    }
  }
  return resArr;
}

//判断奇数
const fn = num => (num & 1) === 1;
/**
 * 偶数 & 1 ===0
 * 奇数 & 1 ===1
 */
// const fn = num => num % 2 === 0;

console.log(reOrderOddEven([1, 2, 3, 4, 5, 6], fn));
