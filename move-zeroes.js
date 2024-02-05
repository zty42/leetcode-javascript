
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[count] === 0) {
      nums.splice(count, 1)
      nums.push(0)
    } else {
      count += 1
    }
  }
  console.log(nums)
};


moveZeroes([0, 0, 1])
