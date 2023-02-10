/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let ra = a.split("").reverse()
  let rb = b.split("").reverse()

  let flag = 0
  let result = ''
  for (let i = 0; i < Math.max(a.length,b.length); i++) {
    const res = (+ra[i]||0) + (+rb[i]||0) + flag
    console.log((+ra[i]) , (+rb[i]),flag,res)

    if (res>1) {
      result = result+String(res - 2)
      flag = 1
    } else {
      result = result + String(res)
      flag = 0
    }
  }
  if (flag) {
      result = result + '1'
  }

  return result.split("").reverse().join('')
    
};



var addBinary = function(a, b) {
  // we used BigInt() to convert binary to Integer. Syntax is BigInt(0b11) here `0b` is prefix and `11` is binary number
  let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  // sum is converted back to string using toString(2), here 2 is radix argument, so toString(2) converts to binary
  return sum.toString(2);
};
