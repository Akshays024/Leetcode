/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
  let pos = 0;
  let count =0;
  for(let num of nums){
    pos+=num
    if(pos==0){
        count++
    }
  }
  return count  
};
console.log(returnToBoundaryCount([3,2,-3,-4]))