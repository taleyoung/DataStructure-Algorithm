/**
 * E-339
 * 输出A表示guess中与secret字母一致且位置一致
 * 输出B表示guess中与secret字母包含但是位置不一致
 */

// TODOS

const getHint = (secret, guess) => {
  let a = 0,
    b = 0;
  for (let i = 0; i < secret.length; i++) {
    for (let j = i; j < secret.length; j++) {
      if (i === j && secret[i] === guess[j]) {
        a++;
      } else if (secret[i] === guess[j]) {
        b++;
      }
    }
  }
  return `${a}A${b}B`;
};

console.log("getHint() :", getHint("1123", "0111"));
