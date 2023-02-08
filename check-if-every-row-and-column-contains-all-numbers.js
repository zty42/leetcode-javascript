/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const size = matrix.length;
  const sum = ((1 + size) * size) / 2;
  for (let i = 0; i < size; i++) {
    const s1 = matrix[i].reduce((x, y) => x + y, 0);

    if (s1 !== sum || [...new Set(matrix[i])].length !== size) {
      return false;
    }
    let s2 = 0;
    let temp = [];

    for (let j = 0; j < size; j++) {
      s2 += matrix[j][i];
      temp.push(matrix[j][i]);
    }
    console.log(temp,sum)
    if (s2 !== sum || [...new Set(temp)].length !== size) {
      return false;
    }
  }

  return true;
};

const matrix = [
  [1, 2, 3],
  [3, 1, 2],
  [2, 3, 1],
];

console.log(checkValid(matrix));
