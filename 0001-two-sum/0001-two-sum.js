function twoSum(num,target){
    const map=new Map();
    for(let i=0;i<num.length;i++){
        const complementry = target - num[i];
        if(map.has(complementry)){
            return [map.get(complementry),i]
        }
        else{
            map.set(num[i],i)
        }
    }
}