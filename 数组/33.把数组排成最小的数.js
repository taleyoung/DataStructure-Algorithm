/**
 * 33.一个整数数组，将数组中的数拼接成一个数
 * 输出拼接的数中最小的数
 */

function getMinNum(arr) {
  arr.sort((x, y) => {
    let s1 = x + "" + y,
      s2 = y + "" + x;
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
    return 0;
  });
  return arr.join("");
}

console.log(getMinNum([3, 32, 321]));
