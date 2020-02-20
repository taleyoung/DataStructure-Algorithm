/**
 * 求数字在排序数组中出现的次数
 */

/**
 * 方案一，递归的做法
 * 注意3/2=1.5 而不是1 js中应用Math.floor(3/2) 为1
 */
function getFirstAndLast(arr, start, end, k, mode) {
  if (start > end) {
    return 0;
  }

  let mid = (end + start) >> 1;
  if (arr[mid] === k) {
    if (mode === "left") {
      if ((mid > 0 && arr[mid - 1] != k) || mid === 0) {
        return mid;
      }
      end = mid - 1;
    } else {
      if (mid > 0 && arr[mid + 1] != k) {
        return mid;
      }
      start = mid + 1;
    }
  } else if (arr[mid] > k) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
  return getFirstAndLast(arr, start, end, k, mode);
}

/**
 * 方案二，循环的做法
 *
 */

function findBoundry(arr, k, mode) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let mid = (left + right) >> 1;

    if (arr[mid] < k) {
      left = mid + 1;
    } else if (arr[mid] > k) {
      right = mid - 1;
    } else if (mode === "left") {
      if (mid === 0 || arr[mid - 1] !== k) {
        return mid;
      }
      right = mid - 1;
    } else if (mode === "right") {
      if (mid === arr.length - 1 || arr[mid + 1] !== k) {
        return mid;
      }
      left = mid + 1;
    }
  }
  if (arr[left] === k) {
    return left;
  }
}

function getNum(arr, k) {
  if (!Array.isArray(arr) || !arr.length) {
    return 0;
  }
  //递归
  let first = getFirstAndLast(arr, 0, arr.length - 1, k, "left");
  let last = getFirstAndLast(arr, 0, arr.length - 1, k, "right");

  //循环
  let left = findBoundry(arr, k, "left");
  let right = findBoundry(arr, k, "right");

  return right - left + 1;
}

console.log(getNum([1, 2, 3, 3, 3, 3, 3, 4, 5], 3));
