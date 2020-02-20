/**
 * 输入n个整数，找出其中比最小的k个数字
 */

/**
 * 此函数的作用是返回right, 保证right之前都比第一个小，
 * right之后都比第一个大
 */
function partition(arr = [], start, end) {
  if (!arr.length) {
    return null;
  }
  let lenth = arr.length;
  let v = arr[start];
  let left = start + 1,
    right = end;

  while (1) {
    while (left <= end && arr[left] <= v) left++;
    while (right >= start + 1 && arr[right] >= v) right--;

    if (left >= right) {
      break;
    }

    [arr[right], arr[left]] = [arr[left], arr[right]];

    left++;
    right--;
  }

  [arr[right], arr[start]] = [arr[start], arr[right]];

  console.log(arr, right);
  return right;
}

/**
 * 方案一，o(n),利用partition
 */

function getKthNum(arr, k) {
  if (!Array.isArray(arr)) {
    return;
  }
  if (!arr.length) {
    return;
  }
  let length = arr.length;
  let start = 0,
    end = length - 1;
  let index = partition(arr, start, end);

  while (index !== k - 1) {
    if (index > k - 1) {
      end = index - 1;
      index = partition(arr, start, end);
    } else {
      start = index + 1;
      index = partition(arr, start, end);
    }
  }

  let result = [];
  for (let i = 0; i < k; i++) {
    result[i] = arr[i];
  }
  return result;
}

console.log(getKthNum([6, 3, 6, 24, 2, 4, 5], 4));

/**
 * 方案二，o(nlogn)
 * 用一个大小为k的容器存放，容器内维护一个大顶堆，遍历数组，
 * 若有比大顶堆最大值小的 则删除最大值，插入大顶堆
 * 需要在容器中完成 1，找到并删除最大数 2，插入一个新的数字
 */
