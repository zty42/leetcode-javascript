/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    if (ele in map) {
      return [map[ele],i]
    } else {
      map[target-ele] = i
    }
  }
    
};

console.log(
  twoSum([2,7,11,15],9)
)
