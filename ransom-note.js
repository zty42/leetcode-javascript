/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineArr = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    const element = ransomNote[i];
    if (magazineArr.includes(element)) {
      const index = magazineArr.findIndex(_i => _i === element);
      magazineArr.splice(index, 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
