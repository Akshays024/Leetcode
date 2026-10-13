/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let total=0
    let count = 0;
    for (let num of nums){
        if(num%2===0 && num%3===0){
            total+=num
            count++
        }   
    }
    if(count===0){
        return 0
    }
    
    return Math.floor(total/count)
};
console.log(averageValue([1,3,6,10,12,15]))
