//题目一，题目二均要用到的util
function reverse(arr, start, end) {
  while (start < end) {
    let t = arr[start];
    arr[start] = arr[end];
    arr[end] = t;
    start++;
    end--;
  }
}
/**
 * 题目一，输入一个英文句子，翻转句子中单词的顺序。
 * 比如I am a student. 翻转为 student. a am I
 */

/**
 * 思路为先将整个句子翻转，然后再把单词翻转一次
 */
function main(str) {
  let arr = str.split("");
  let length = arr.length;
  //第一次翻转
  reverse(arr, 0, length - 1);
  //第二次翻转
  let start = 0,
    end = 0;
  for (let i = 0; i < length; i++) {
    if (arr[i] === " ") {
      reverse(arr, start, i - 1);
      start = i + 1;
    }
  }
  str = arr.join("");
  //   console.log(str);
}

main("I am a student.");

/**
 * 题目二， 左旋旋转字符，比如输入abcdefg,2 翻转为cdefgab
 * 思路是三步翻转
 * abcdefg -> ba + gfedc 即bagfedc -> cdefgab
 */

function main2(str, num) {
  let arr = str.split("");
  let length = arr.length;
  reverse(arr, 0, num - 1);
  reverse(arr, num, length - 1);
  reverse(arr, 0, length - 1);
  str = arr.join("");
  console.log("main2:str", str);
}

main2("abcdefg", 2);

//另一种，通过调用数组的reverse() API来解题
function reverseSentence(sentence) {
  // 第一次翻转：每个字符
  const chars = sentence.split("").reverse();
  let result = "",
    last = []; // 保存上一个空格到当前空格之间的所有字符
  chars.forEach(ch => {
    // 遇到空格，说明之前的字符组成了单词
    // 进行第二次翻转：单词
    if (ch === " ") {
      result += last.reverse().join("");
      last.length = 0; // 清空上一个单词
    }

    last.push(ch);
  });

  result += last.reverse().join("");
  return result;
}
