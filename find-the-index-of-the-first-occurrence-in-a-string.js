/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  return haystack.split(needle).length === 1 ? -1: haystack.split(needle)[0].length
};
