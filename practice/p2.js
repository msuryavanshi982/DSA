// swap two numbers without using third variable:

let a = 45, b = 55;
a = a + b;
b = a - b;
a = a - b;
console.log("a=>", a, " and b=>", b);


// largest sum of two elements in unsorted array:

let arr = [4, 3, 6, 7, 9, 3, 2, 1];
arr.sort((a, b) => a - b);  // nlogn
let sum = 0;
sum = arr[arr.length - 1] + arr[arr.length - 2]
console.log(sum)


let max = 0;
let smax = 0;
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
        smax = max;
        max = arr[i]
    }else if(arr[i]>smax){
        smax=arr[i]
    }
}

console.log(max,smax);

//https://leetcode.com/problems/find-all-duplicates-in-an-array/

var findDuplicates = function(nums) {
    let map={}, ans=[];
    for(let ele of nums){
        map[ele]=(map[ele]||0)+1
    }
    for(let key in map){
     if(map[key]==2){
         ans.push(key)
     }
    }
    return ans;
};