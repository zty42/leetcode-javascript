/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;

  const newS = s.trimEnd();

  for (let i = newS.length - 1; i >=0; i--) {
    if (newS[i] !== " ") {
      console.log(newS[i])
      count += 1;
    } else {
      return count;
    }
  }
  return count
};


console.log(
  lengthOfLastWord("hello world ")
)
