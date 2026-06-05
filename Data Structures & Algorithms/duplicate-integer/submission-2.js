class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let chart = [];
        for(let i = 0 ; i < nums.length ; i++){
            if(chart.includes(nums[i])){
                return true
            }
            chart.push(nums[i])
        }
        return false
    }
}
