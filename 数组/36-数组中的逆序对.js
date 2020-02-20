/**
 * 在数组中，如果前一个数字大于后面的一个数字,则这两个数字组成逆序对
 * 如[7,5,6,4]的逆序对5个：76,75,74,64,54
 */

function findInversePairNum(arr, start, end) {
  if (start === end) {
    return 0;
  }
  let copy = [];
  let length = (end - start) >> 1;
  let left = findInversePairNum(arr, start, start + length),
    right = findInversePairNum(arr, start + length + 1, end);

  let i = start + length,
    j = end,
    count = 0,
    copyIndex = end - start;

  while (i >= start && j >= start + length + 1) {
    if (arr[i] > arr[j]) {
      count += j - start - length;
      copy[copyIndex--] = arr[i--];
    } else {
      copy[copyIndex--] = arr[j--];
    }
  }

  while (i >= start) {
    copy[copyIndex--] = arr[i--];
  }

  while (j >= start + length) {
    copy[copyIndex--] = arr[j--];
  }

  for (let i = 0; i < end - start + 1; i++) {
    arr[i + start] = copy[i];
  }

  return left + right + count;
}

const arr = [7, 5, 6, 4];
console.log(findInversePairNum(arr, 0, arr.length - 1)); // output: 5
console.log(arr); // output: [4, 5, 6, 7]
