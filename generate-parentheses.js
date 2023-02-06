
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element === "(") {
      stack.push(element);
    } else {
      if (stack.at(-1) === "(") {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

function generateAll(n) {
  let resultList = [""];
  const chars = ["(", ")"];
  for (let i = 0; i < n * 2; i++) {
    let newList = [];
    resultList.forEach((result) => {
      chars.forEach((c) => {
        newList.push(result + c);
      });
    });
    resultList = newList;
  }
  return resultList;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  return generateAll(n).filter(isValid);
};
;
