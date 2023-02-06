/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (element in map) {
      stack.push(element);
    } else {
      const top = stack.at(-1);
      if (element === map[top]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
