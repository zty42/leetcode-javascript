/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if(s.length === 1) return true
  s = s.toLowerCase().replace(/[^a-z0-9]/g,'')
  for (let i = 0; i < s.length; i++) {
    if(s[i] !== s[s.length-1-i]) {
      return false
    }
  }
  return true
};
