/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let res = [];
  let minIndex = Infinity;

  for (let i = 0; i < list1.length; i++) {
    const item1 = list1[i];
    for (let j = 0; j < list2.length; j++) {
      const item2 = list2[j];

      if (item1 === item2) {
        if (i + j < minIndex) {
          minIndex = i + j;
          res = [];
          res.push(item1);
        } else if (i + j === minIndex) {
          res.push(item1);
        }
      }
    }
  }

  return res;
};
