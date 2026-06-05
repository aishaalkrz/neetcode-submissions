class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let chart = new Set();
        for(let i =0 ; i <= nums.length; i++){
            if(chart.has(nums[i])){
                return true
            }
             chart.add(nums[i])
        }
        return false

    }
}
