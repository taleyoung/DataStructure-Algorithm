// //法一：洗牌算法
// var testArray = [-2, 23, 34, 300, 500, 1000];
// if (!Array.prototype.derangedArray) {
//   Array.prototype.derangedArray = function() {
//     for (
//       var j, x, i = this.length;
//       i;
//       j = parseInt(Math.random() * i),
//         x = this[--i],
//         this[i] = this[j],
//         this[j] = x
//     );
//     return this;
//   };
// }
// alert(testArray.derangedArray()); //结果不唯一

function sortRandom(arr) {
  let len = arr.length; //取到原数组长度
  for (let i = 0; i < len; i++) {
    //获取一个随机的index。
    let index = Math.floor(Math.random() * (len - i));
    //通过一个临时变量temp来交换arr[index]和arr[len-i-1]
    //arr[index]是此次循环得到的随机值
    //arr[len-i-1]是每轮最后一个数，第一轮就是最后一个，第二轮就是倒数第二个
    // let temp = arr[index];
    // arr[index] = arr[len - i - 1];
    // arr[len - i - 1] = temp;
    [arr[index], arr[len - i - 1]] = [arr[len - i - 1], arr[index]];
  }
  return arr;
}
let arr = [2, 4, 1, -1, 5, 25, 64, 244, 534];
console.log(sortRandom(arr));
