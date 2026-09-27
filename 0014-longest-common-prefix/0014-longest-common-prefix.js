/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    let shortest = strs[0];
    for(let i=1;i<strs.length;i++){
        if(strs[i].length<shortest.length){
            shortest = strs[i];
        }
    }
    for(let j=0;j<shortest.length;j++){
        for(let i=0;i<strs.length;i++){
            if(strs[i][j] !== strs[0][j]){
                return prefix;
            }

        }
        prefix += strs[0][j]
    }
    return prefix;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))