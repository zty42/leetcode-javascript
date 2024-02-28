function dailyTemperatures(temperatures: number[]): number[] {
  let res: number[] = []
  const length = temperatures.length
  for (let i = 0; i < temperatures.length; i++) {
    let flag: boolean = false
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i
        flag = true
        break
      }
      if (!temperatures[j]) {
        res[i] = 0
      }
    }
    if (!flag) {
      res[i] = 0
    }
  }
  return res
};

console.log(
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
)
