/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const size = mat.length;
  let sum = 0

  for (let i = 0; i < size; i++) {
    const left = i
    const right = size-1-i

    if (left === right) {
      sum +=mat[i][left]
    } else {
      sum +=mat[i][left]
      sum +=mat[i][right]
    }
  }
  return sum
};
