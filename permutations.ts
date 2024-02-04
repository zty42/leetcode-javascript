function permute(nums: number[]): number[][] {

  const res: number[][] = []

  const dfs = (path: number[]) => {
    if (path.length === nums.length){
      res.push(path)
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue
      dfs([...path,nums[i]])
    }
  }

  dfs([])

  return res

};

console.log(permute([1, 2, 3]))
