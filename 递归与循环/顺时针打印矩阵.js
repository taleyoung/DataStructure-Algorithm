/**
 * 顺时针打印矩阵
 */

/**
 * 主要是通过各种循环来解题 需要注意以下
 * 1. 通过画图，想具体事例来找规律，比如开始点都是(1,1) (2,2)这种
 * 2. 研究特殊情况的判断
 */

function printMatrixInCircle(arr, rows, cols, start) {
  let result = "";
  let endX = cols - start - 1;
  let endY = rows - start - 1;
  //从左上到右到右上
  for (let i = start; i <= endX; i++) {
    result = result + " " + arr[start][i];
  }
  //从右上到右下
  if (endY > start) {
    for (let i = start + 1; i <= endY; i++) {
      result = result + " " + arr[i][endX];
    }
  }
  //从右下到左下
  if (endY > start && endX > start) {
    for (let i = endX - 1; i >= start; i--) {
      result = result + " " + arr[endY][i];
    }
  }
  //从左下到左上
  if (endY - 1 > start && endX > start) {
    for (let i = endY - 1; i >= start; i--) {
      result = result + " " + arr[i][start];
    }
  }
  console.log(result);
}

function printMatrix(arr) {
  if (!Array.isArray(arr) || !Array.isArray(arr[0])) {
    return null;
  }
  let rows = arr.length,
    cols = arr[0].length;
  let start = 0;
  while (rows > start * 2 && cols > start * 2) {
    printMatrixInCircle(arr, rows, cols, start);
    start++;
  }
}

printMatrix([
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [8, 9, 10, 11]
]);
