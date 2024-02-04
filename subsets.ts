function subsets(nums: number[]): number[][] {
  const res: number[][] = []

  const dfs = (arr: number[]) => {
    // if (res.includes(arr)) return
    if (res.map(item => JSON.stringify(item)).includes(JSON.stringify(arr))) return
    res.push(arr)

    for (let i = 0; i < arr.length; i++) {
      dfs(arr.filter(item => item !== arr[i]))
    }
  }
  dfs(nums)
  return res
};

console.log(
  '====',
  subsets([1, 2, 3]),
  "====="
)
