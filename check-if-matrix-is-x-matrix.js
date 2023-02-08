/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function (grid) {
  const size = grid.length;

  for (let i = 0; i < size; i++) {
    const left = i;
    const right = size - 1 - i;

    if (grid[i][left] === 0 || grid[i][right] ===0) {
      return false
    }
    for (let j = 0; j < size; j++) {
      if (j!==left && j!== right && grid[i][j] !==0) {
        return false
      }
    }
  }
  return true
};
