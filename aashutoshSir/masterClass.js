// Counting Sort  / Hashing 
// 1122. Relative Sort Array
var relativeSortArray = function (arr1, arr2) {
    let max = Math.max(...arr1)
    let hash = new Array(max+1).fill(0)
    for (let ele of arr1) {
        hash[ele]++
    }
    console.log(hash)
    let j = 0

    for (let i = 0; i < arr2.length; i++) {

        while (hash[arr2[i]] > 0) {
            arr1[j] = arr2[i]
            j++
            hash[arr2[i]]--
        }
    }

    for (let i = 0; i < 1001; i++) {

        while (hash[i] > 0) {
            arr1[j] = i
            hash[i]--
            j++
        }
    }
    return arr1
};
arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]
arr2 = [2, 1, 4, 3, 9, 6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray(arr1, arr2))


//________________________________________

// //https://leetcode.com/problems/kth-largest-element-in-an-array/

//kth Smallest

let arr = [3,2,3,1,2,4,5,5,6];
//.        [1,2,2,3,3,4,5,5,6];
// Kth Largest = (n-k )th smallest 

const swap = (arr, left, right) => {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
} 

const partition = (arr, low, high) => {
    
    let pivot_element = arr[high];
    
    let i = low-1;
    for(let j=low;j<high;j++){
        if(arr[j] < pivot_element)
        {
            i++;
            swap(arr, i,j);
        }
    }
    
    swap(arr, i+1, high);
    return i+1;
}

const kthLargestElement = (arr, low, high, k) => {
    let resultIndex = arr.length - k;
        //let resultIndex = k-1;

    
    while(low<high){
        let pivot_index = partition(arr, low, high);
        if(resultIndex == pivot_index)
            return arr[pivot_index];
        
        if(resultIndex < pivot_index)
          high = pivot_index-1;
        else
          low = pivot_index+1;
    }   
    
    return arr[low];
    
}

//kth smallest-
console.log(kthLargestElement(arr, 0,8,4))

//TC: Average O👎


// ________________________________________
// //3Sum Closest
// //sorting+ 2pointer
// //https://leetcode.com/problems/3sum-closest/
// let arr = [-1,2,1,-4]
// let target = 1;

// const threeSumClosest = (arr, target) => {
    
//     arr.sort((a,b) => a-b);
//     let diff = Number.MAX_VALUE;
//     let closestSum = 0;
    
//     for(let i=0;i<arr.length-2;i++){
        
        
//         if(i>0 && arr[i] == arr[i-1])
//             continue;
        
//         let low = i+1;
//         let high = arr.length-1;
        
//         while(low<high){
            
//             let sum = arr[i]+arr[low]+arr[high];
            
//             if(sum == target)
//                 return sum;
            
//             else if(sum< target)
//                 low++;
//             else
//                 high--;
                
//             let localDiff = Math.abs(target-sum);
//             if(localDiff < diff)
//                 {
//                     diff = localDiff;
//                     closestSum = sum;
//                 }
//         }
//     }
    
//     return closestSum;
// }

// console.log(threeSumClosest(arr, target));
// //TC: O(nlog+n)
// //SC: O(1)

// //homework 
// // 1.https://leetcode.com/problems/sort-array-by-parity/
// // 2.https://leetcode.com/problems/height-checker/