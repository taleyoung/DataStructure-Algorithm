/**
 * 4.替换空格
 * 把字符串中的每个空格替换成""%20"
 */

//方法一是用正则替换，在解决字符串相关问题上很好使
function replaceBlank1(str) {
  const reg = / /g;
  return str.replace(reg, "%20");
}

/**
 * 计算空格数得出新str的长度，再遍历老str判断是否为' '，动态赋值到新str
 * 1. 先用split函数把str对象转换成str数组,以及最后要用join('')把数组转成str
 * 2. o(n)实现的技巧在于字符串从后往前遍历，使得字符移动只需一次，否则后面的字符
 * 动了前面的位置还要变，造成o(n2)的复杂度
 */
function replaceBlank2(str) {
  str = str.split("");
  let strLength = str.length;
  let blankLength = 0;
  for (let value of str) {
    value === " " && blankLength++;
  }
  let newArrIndex = strLength + blankLength * 2 - 1;
  for (let oldArrIndex = strLength - 1; oldArrIndex >= 0; oldArrIndex--) {
    if (str[oldArrIndex] !== " ") {
      str[newArrIndex--] = str[oldArrIndex];
    } else {
      str[newArrIndex--] = "0";
      str[newArrIndex--] = "2";
      str[newArrIndex--] = "%";
    }
  }
  return str.join("");
}

console.log("replaceBlank(We are happy)", replaceBlank1("We are happy"));
