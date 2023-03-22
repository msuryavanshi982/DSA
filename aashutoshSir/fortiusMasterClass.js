// // majority element : leetcode=>>>
// function majorityEle(arr){
//     let n=arr.length;
//     let map= new Map();
//     for(let i=0; i<n; i++){
//         let count= map.get(arr[i])||0;

//         if(count===Math.floor(n/2))
//         return arr[i];

//         map.set(arr[i], count+1);
//     }
//     return 0;
// }

// console.log(majorityEle([1,2,3,45,6,6,7,3,2,2,2,2,2,2,2]))

// //===============>>>1. Two Sum : leetcode ===>>>

const twoSum = (arr, target) => {
    let n = arr.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(target - arr[i]))
            return [i, map.get(target - arr[i])];


        map.set(arr[i], i)
    }
    return []
}

console.log(twoSum([1, 2, 3, 4, 5], 9));


// leetcode - 560. subarray sum equals K=>>>

