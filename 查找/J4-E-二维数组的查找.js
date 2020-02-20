/**
 * 在一个 n * m 的二维数组中，
 * 每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

var findNumberIn2DArray = function(matrix, target) {
  if (matrix.length === 1 && matrix[0].length === 0) {
    return false;
  }
  let i = matrix.length - 1,
    j = 0;
  while (i >= 0 && j <= matrix[0].length - 1) {
    console.log("i,j", i, j);
    if (matrix[i][j] < target) {
      j++;
    } else if (matrix[i][j] > target) {
      i--;
    } else {
      return true;
    }
  }
  return false;
};
console.log("object", findNumberIn2DArray([[-1, 3]], 3));
