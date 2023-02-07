/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  if (s.length === 1) return true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left += 1;
      right -= 1;
    } else {
      return checkPalindrome(s,left+1,right) || checkPalindrome(s,left,right-1)
    }

  }

  return true;
};

const checkPalindrome = (s, i, j) => {
  let left = i;
  let right = j;
  while (left < right) {
    if (s[left] == s[right]) {
      left++;
      right--;
    }
    if (s[left] != s[right]) {
      return false;
    }
  }
  return true;
};

console.log(
  validPalindrome(
    "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  )
);
