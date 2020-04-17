// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function(nums) {
    let count = 0;
    for (i = 0; i < nums.length; i++){
        if(nums[i].toString().length % 2 === 0){
            count += 1;
        }
    }
    return count;
};
