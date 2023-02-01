// 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。


// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/single-number
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
};

// var singleNumber = function (nums) {
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   const map = {};

//   nums.forEach((num) => {
//     if (num in map) {
//       map[num] += 1;
//     } else {
//       map[num] = 1;
//     }
//   });

//   for (const key in map) {
//     if (map[key] === 1) {
//       return key
//     }
//   }
// };
