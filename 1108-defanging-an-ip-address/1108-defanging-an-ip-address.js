/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let newAddress="";
    for(let i=0;i<=address.length-1;i++){
        if(address[i] == "."){
         newAddress+="[.]";
        }
        else{
            newAddress+=address[i]
        }
    }
    return newAddress
};
console.log(defangIPaddr("255.100.50.0"))