/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) {
    return strs[0]
  }
  let prefix = ''

  for (let i = 0; i < strs[0].length; i++) {
    const ele = strs[0][i]

    for (let j = 0; j < strs.length; j++) {

      if (ele !== strs[j][i]) {
        return prefix
      }
      
    }
    prefix+=ele
    
  }

  return prefix
    
};
