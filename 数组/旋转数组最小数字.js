/**
 * 输入一个递增排序数组的一个旋转，输出旋转数组的最小值
 * 如数组[3,4,5,1,2]是[1,2,3,4,5]的一个旋转，该数组的最小值为1
 */

//处理特殊情况
function searchMin(arr, left, right) {
  let min = arr[left];
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
/**
 * 二分双指针对比移动的思想，很常用
 */
function getMinFromRotateArr(arr) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (i === j - 1) {
      return arr[j];
    }
    let mid = Math.floor((i + j) / 2);
    if (arr[i] === arr[mid] && arr[mid] === arr[j]) {
      return searchMin(arr, i, j);
    }
    if (arr[i] <= arr[mid]) {
      i = mid;
    } else {
      j = mid;
    }
  }
  return arr[j];
}

const res = getMinFromRotateArr([5, 1, 2, 3, 4]);
console.log(res);
