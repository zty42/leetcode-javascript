/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    const popele = nums.pop();

    if (!nums.includes(popele)) {
      return popele;
    } else {
      nums.unshift(popele);
    }
  }
};

var singleNumber = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }

  return res
};
