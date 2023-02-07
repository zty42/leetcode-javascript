/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let count = nums.length
  for (let i = 0; i < count; i++) {
    if (nums[i] === 0) {
      nums.splice(i,1)
      count--
      i--
      nums.push(0)
      console.log(nums)
    }
  }
};


moveZeroes([0,0,1])
