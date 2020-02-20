/**
 * 求base的exp次方的值，不使用库函数，不考虑大数问题
 */

/**
 * 需要注意一下几点
 * 1. 错误处理
 * 2. 当exp为负数的时候的处理。
 */
function pow(base, exp) {
  if (!base) {
    return 0;
  }
  let res = 1,
    absExp = Math.abs(exp);
  for (let i = 0; i < absExp; i++) {
    res *= base;
  }
  if (exp < 0) {
    res = 1 / res;
  }
  return res;
}

/**
 * 优化版
 * 1. 使用递归的方式求解
 */

function pow2(base, exp) {}
