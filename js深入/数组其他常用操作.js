/**
 * 替换数组中特定的值
 */
var fruits1 = ["banana", "apple", "orange", "watermelon"];
fruits1.splice(0, 2, "potato", "tomato");
console.log(fruits1);
// returns ["potato", "tomato", "orange", "watermelon", "apple", "orange", "grape", "apple"]

/**
 * 数组转换成对象
 */
let fruits2 = ["banana", "apple", "orange", "watermelon"];
let fruitsObj = { ...fruits2 };
console.log(fruitsObj);

/**
 * 求两个数组的交集
 */
let arr1 = [0, 2, 2, 4, 6, 8, 8];
let arr2 = [1, 2, 3, 4, 5, 6];
let res = [...new Set(arr1)].filter(item => arr2.includes(item));
console.log("res :", res);

/**
 * 数组中获取随机值
 */
let arrRandom = arr1[Math.floor(Math.random() * arr1.length)];
//Math.floor(Math.random() * arr1.length) 生成[0,len) 的随机整数
console.log("arrRandom", arrRandom);

/**
 * 数组所有数的和
 */
let sum = arr1.reduce((a, b) => a + b);
