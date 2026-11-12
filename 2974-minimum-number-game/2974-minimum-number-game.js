/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let sortedNums = nums.sort((a,b)=>{
        return a-b;
    })
    let arr =[];
    for(let i=0;i<sortedNums.length;i+=2){
        arr.push(sortedNums[i+1]);
        arr.push(sortedNums[i]);
    }
    return arr;
};
console.log(numberGame([5,4,2,3]))