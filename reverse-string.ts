/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {

  const length = s.length
  for (let i = 0; i < s.length / 2; i++) {
    [s[length - 1 - i], s[i]] = [s[i], s[length - 1 - i]]
  }
};
