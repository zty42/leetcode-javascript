// function subsets(nums: number[]): number[][] {
//   const res: number[][] = []

//   const dfs = (arr: number[]) => {
//     // if (res.includes(arr)) return
//     if (res.map(item => JSON.stringify(item)).includes(JSON.stringify(arr))) return
//     res.push(arr)

//     for (let i = 0; i < arr.length; i++) {
//       dfs(arr.filter(item => item !== arr[i]))
//     }
//   }
//   dfs(nums)
//   return res
// };

// console.log(
//   '====',
//   subsets([1, 2, 3]),
//   "====="
// )

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums: number[]): number[][] {
  const res: number[][] = []

  const backtrack = (list: number[]) => {
    if (res.map(item => item.join()).includes(list.join())) return
    res.push(list)
    for (let i = 0; i < list.length; i++) {
      backtrack(list.filter(item => item !== list[i]))
    }
  }

  backtrack(nums)

  return res
};


console.log(
  subsets([1, 2, 3])
)
