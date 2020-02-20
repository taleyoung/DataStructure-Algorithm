/**
 * 输入一个整数，输出该数二进制中1的个数
 */

//一个数与1作&操作，此位为1则结果为1，为0结果为0
function getOneNumOfBi(num) {
  let count = 0,
    flag = 1;
  while (flag) {
    if (flag & num) {
      count++;
    }
    flag = flag << 1;
  }
  return count;
}

function getOneNumOfBi2(num) {
  let count = 0;
  while (num) {
    count++;
    num = (num - 1) & n;
  }
  return count;
}

console.log("getOneNumOfBi :", getOneNumOfBi(3));
