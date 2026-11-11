/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let current_Depth = 0;
    let max_depth=0;
    for(let i=0;i<s.length;i++){
        if(s[i]=="("){
            current_Depth++;
            if(current_Depth>max_depth){
                max_depth=current_Depth;
            }
        }
        else if(s[i]==")"){
            current_Depth--;
        }
        else{
            continue;
        }
    }
    return max_depth;
};
console.log(maxDepth("(1+(2*3)+((8)/4))+1"));