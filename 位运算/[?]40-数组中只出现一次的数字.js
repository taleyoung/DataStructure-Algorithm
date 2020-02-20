/**
 * 找到num二进制表示中第一个1的位
 */
function findFirstBitIsOne(num) {
  let indexBit = 0,
    flag = 1;
  while (flag && (flag & num) === 0) {
    ++indexBit;
    flag = flag << 1;
  }
  return indexBit;
}

/**
 * 判断num的第index二进制位是否为1
 */
function checkIndexBitIsOne(num, index) {
  num = num >> index;
  return !!(num & 1);
}

function findNumsAppearOnce(nums) {
  if (!nums) {
    return null;
  }

  let orResult = 0;
  for (let num of nums) {
    orResult ^= num;
  }

  let indexOfOne = findFirstBitIsOne(orResult);
  let num1 = 0,
    num2 = 0;
  for (let num of nums) {
    if (checkIndexBitIsOne(num, indexOfOne)) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }

  return [num1, num2];
}
console.log(findNumsAppearOnce([2, 4, 3, 6, 3, 2, 5, 5]));
