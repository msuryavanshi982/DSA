let fun= function(nums, val){

let i=0;
    let j=0;
    while(i<nums.length){
        if(nums[i]!==val){
            nums[j]=nums[i]
            i++;
            j++;
        }else{
            i++
        }
    }
    return j;

}
console.log(fun([1,2,2,5,6,7], 4));