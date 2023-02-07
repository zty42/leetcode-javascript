  /**
   * @param {string} digits
   * @return {string[]}
   */
  var letterCombinations = function (digits) {
    const map = {
      2: "abc",
      3: "def",
      4: "ghi",
      5: "jkl",
      6: "mno",
      7: "pqrs",
      8: "tvw",
      9: "xyz",
    };

    if (digits.length === 0) {
      return [];
    }
    if (digits.length === 1) {
      return map[digits].split("");
    }
    let res = [];
    for (let i = 0; i < digits.length; i++) {
      res = twoStr(res, map[digits[i]].split(''));
    }

    return res;
  };

  function twoStr(arr1, arr2) {
    const res = [];
    if (arr1.length === 0) {
      return arr2
    }
    for (let i = 0; i < arr1.length; i++) {
      const char1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) {
        const char2 = arr2[j];
        res.push(char1 + char2);
      }
    }
    return res;
  }

  console.log(letterCombinations("234"));
