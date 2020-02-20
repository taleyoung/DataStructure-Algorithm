/**
 * 输入两个整数序列，第一个表示压入序列，判断第二个是否为弹出序列
 * 且压入的数字都不相同
 */

function getStackTop(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (!arr.length) {
    return false;
  }
  return arr[arr.length - 1];
}
function checkIsPopOrder(pushOrder, popOrder) {
  if (
    !pushOrder.length ||
    !popOrder.length ||
    pushOrder.length != popOrder.length
  ) {
    return false;
  }
  let stack = [];
  let i = 0; //pushOrder的指针
  let j = 0; //popOrder的指针
  while (j < popOrder.length) {
    for (; i < pushOrder.length && popOrder[j] !== getStackTop(stack); i++) {
      stack.push(pushOrder[i]);
    }
    if (popOrder[j] !== getStackTop(stack)) {
      return false;
    }
    stack.pop();
    j++;
  }
  return true;
}
console.log(checkIsPopOrder([1, 2, 3, 4], [4, 3, 2, 1]));

console.log(checkIsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));

console.log(checkIsPopOrder([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
