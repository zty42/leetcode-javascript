/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = nums.length/2;
    let map = {};
    for(let i=0; i<nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]]++;
        }else{
            map[nums[i]] = 1;
        }
        if(map[nums[i]] > majority){
            return nums[i];
        }
    }

};

//使用摩尔投票的算法来解决此问题
var majorityElement = function(nums) {
  
}



console.log(majorityElement([3,2,3]))
