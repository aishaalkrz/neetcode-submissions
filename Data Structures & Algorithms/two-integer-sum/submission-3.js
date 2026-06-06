class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seen = {};
        for (let i=0; i<nums.length; i++){
            
            const needed = target - nums[i] ;
            
            if(seen[needed] !== undefined){
                return [seen[needed],i]
            }  
            seen[nums[i]] = i;
        }
    }
}
