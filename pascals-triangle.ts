function generate(numRows: number): number[][] {
  let res: number[][] = []
  if (numRows === 1) {
    res = [[1]]
  }
  if (numRows === 2) {
    res = [[1], [1, 1]]
  }

  if (numRows >= 3) {
    res = [[1], [1, 1]]

    for (let i = 2; i < numRows; i++) {
      const prevRows = res[i - 1]
      // console.log('prev rows:', res, i, prevRows)
      const currentRows: number[] = []
      currentRows.push(1)
      for (let j = 0; j < prevRows.length - 1; j++) {
        currentRows.push(prevRows[j] + prevRows[j + 1])
      }
      currentRows.push(1)
      res.push(currentRows)
    }
  }

  return res
};


console.log(generate(5))
