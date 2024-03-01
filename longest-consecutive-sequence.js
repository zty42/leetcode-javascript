/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const numsSorted = nums.sort((a, b) => a - b);

  let longestStreak = 0;
  let currentStreak = 1;

  for (let i = 0; i < numsSorted.length - 1; i++) {
    if (numsSorted[i] !== numsSorted[i + 1]) {
      if (numsSorted[i] + 1 === numsSorted[i + 1]) {
        currentStreak++;
      } else {
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }
  return Math.max(longestStreak, currentStreak);
};
