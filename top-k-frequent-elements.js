/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

  const map = nums.reduce((prevValue, currentValue, i, nums) => {
    if (prevValue.hasOwnProperty(currentValue)) {
      prevValue[currentValue] = prevValue[currentValue] + 1
    } else {
      prevValue[currentValue] = 1
    }
    return prevValue
  }, {})

  console.log(map)
  // Object.keys(map).map(item => {})
  return Object.keys(map).sort((a, b) => map[b] - map[a]).slice(0, k)
};


console.log(
  topKFrequent([1, 1, 1, 2, 2, 3], 2)
)
