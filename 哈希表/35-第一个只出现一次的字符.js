/**
 * 在字符串中找到第一个只出现一次的字符
 */

/**
 * 构建哈希表，遍历字符串中的字符，作为哈希表的key
 */

function getFirstChar(str) {
  let arr = str.split("");
  let map = {};
  for (char of arr) {
    if (char in map) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  for (char of arr) {
    if (map[char] === 1) {
      return char;
    }
  }
}
