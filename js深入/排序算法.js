//快速排序
const quickSort = arr => {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [],
    right = [];
  for (let i = 1; i < arr.length; i++) {
    arr[i] >= pivot ? right.push(arr[i]) : left.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

//冒泡排序
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

//选择排序
function select(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

//归并
function mergeSort(arr) {
  const len = arr.length;

  if (len < 2) {
    return arr;
  }

  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }

  return result.concat(left, right);
}
console.log("mergeSort()", mergeSort([4, 2, 52, 6, 3, 7]));
