/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {

    let max = nums[0];
    let min = nums[0];
    for (num of nums) {
        if (num > max) {
            max = num;
        }
        else if (num < min) {
            min = num
        }
    }
    for (let i = min; i >= 1; i--) {
        if (min % i == 0 && max % i == 0) {
            return i;
        }
    }

};
