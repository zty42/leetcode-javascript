/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let xStr = x.toString(2)
  let yStr = y.toString(2)

  const length = Math.max(xStr.length, yStr.length)

  xStr = xStr.padStart(length, '0')
  yStr = yStr.padStart(length, '0')

  let res = 0

  for (let i = 0; i < length; i++) {
    if (xStr[i] !== yStr[i]) {
      res += 1
    }
  }
  return res
};


hammingDistance(1, 4)
