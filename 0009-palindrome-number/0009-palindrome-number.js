const isPalindrome = (num)=>{
    let  rev = 0;
    let original =num
    while(num>0){
        const digit = num%10;
        rev=rev*10+digit;
        num=Math.floor(num/10)
    } 
    return rev === original
}
