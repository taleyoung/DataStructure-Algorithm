/**
 * 把只含有因子2,3,5的数称为丑数，最小的丑数是1
 * 求第1500个丑数
 */

//方案一， 直接求是否只含有因子2,3,5。
function isUgly(number) {
  while (number % 2 === 0) {
    number /= 2;
  }
  while (number % 3 === 0) {
    number /= 3;
  }
  while (number % 5 === 0) {
    number /= 5;
  }
  return number === 1;
}

function getUgly(index) {
  let uglyNum = 0,
    num = 1;
  while (uglyNum < index) {
    if (isUgly(num)) {
      uglyNum++;
    }
    num++;
  }
  return num;
}

/**
 * 方案二
 */
function getUglyNumber(index) {
  if (index <= 0) return 0;

  const uglyNum = [1];
  let pointer2 = 0,
    pointer3 = 0,
    pointer5 = 0;

  for (let i = 1; i < index; ++i) {
    // 找出下一个丑数，确保顺序
    uglyNum[i] = Math.min(
      uglyNum[pointer2] * 2,
      uglyNum[pointer3] * 3,
      uglyNum[pointer5] * 5
    );
    // 如果结果相同，移动指针，防止下次重复计算
    if (uglyNum[i] == uglyNum[pointer2] * 2) ++pointer2;
    if (uglyNum[i] == uglyNum[pointer3] * 3) ++pointer3;
    if (uglyNum[i] == uglyNum[pointer5] * 5) ++pointer5;
  }

  return uglyNum[index - 1];
}

console.log(getUglyNumber(1500)); // 859963392
