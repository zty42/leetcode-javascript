/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const sArr = s.split('')
  const map = sArr.reduce((prevValue, currentValue) => {
    if (prevValue.hasOwnProperty(currentValue)) {
      prevValue[currentValue] += 1
    } else {
      prevValue[currentValue] = 1
    }
    return prevValue
  }, {})

  let res = 0

  Object.keys(map).forEach(key => {
    if (map[key] % 2 === 0) {
      res += map[key]
      delete map[key]
    } else {
      res += map[key] - 1
      map[key] = 1
    }

  })

  console.log(Object.keys(map).length, res)

  return Object.keys(map).length ? res + 1 : res

};

longestPalindrome("ccc")
