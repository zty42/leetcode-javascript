/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;

  const a = [1, 2];
  for (let i = 2; i < n; i++) {
    a[i] = a[i - 1] + a[i - 2];
  }

  return a[n-1]
};
