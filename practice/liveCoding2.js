//sorted array ..  arr = [1,3,5,5,5,5,67,122,125] , x = 5 return index of  first and last  element of repeating element . with log n time complexity

let arr = [1, 3, 5, 5, 5, 5, 67, 122, 125];
let x = 5;

var searchRange = function (arr, target) {
    let n = arr.length;
    let low = 0;
    let high = n - 1;
    let mid;
    let leftOcc = -1;
    let rightOcc = -1;
    while (low <= high) {

        mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] == target) {
            leftOcc = mid;
            high = mid - 1;

        }


        else if (arr[mid] < target)
            low = mid + 1

        else high = mid - 1


    }

    low = 0
    high = n - 1

    while (low <= high) {

        mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] == target) {
            rightOcc = mid;
            low = mid + 1;

        }


        else if (arr[mid] > target)

            high = mid - 1

        else low = mid + 1


    } return [leftOcc, rightOcc]
};


//check in a given array if maximum sum subarray is equal to 0 or not:=>

class Solution {
    maxLen(arr,n){
     
   let sumMap = new Map();
        let maxLen = 0;
        let sum = 0;
        
        sumMap.set(0, -1);
        
        for (let i = 0; i < n; ++i) {
            
            sum += arr[i];
            
            if (sumMap.has(sum)) {
                
                const currLen = i - sumMap.get(sum);
                maxLen = Math.max(maxLen, currLen);    // for min= min
                
            }
                else {
                sumMap.set(sum, i)
            }
        }
        
        return maxLen;
     
    }
}

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

//Cyclically rotate an array by one  https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1

class Solution{
    rotate(arr,n){
 
//  let num=arr.pop()
//   arr.unshift(num)
//   return arr

 arr=reverse(arr,0,arr.length-1)

return (reverse(arr,1,arr.length-1))

function reverse(arr,l,r){
    
    while(l<r){
         [arr[l],arr[r]]= [arr[r],arr[l]]
         l++
         r--
    }
    return arr
  }
       
    }
}


//repeated characters in a string

class Solution {
    firstRep(s){
      
    let map=new Map()
     
     for(let ele of s){
        
        if(map.has(ele)){
            map.set(ele,map.get(ele)+1)
        }
        else{
            map.set(ele,1)
        }
          
     } 
     for(let ele of s){
         if(map.get(ele)>=2){
             return ele
         }
     }
     return -1
    }
}

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function(prices) {
    let buy=prices[0],maxProfit=0
    for(let i=1;i<prices.length;i++){
        if(buy<prices[i]){
            let max=prices[i]-buy
            if(maxProfit<max)
                maxProfit=max    
        }else{
            buy=prices[i]
        }
    }
    return maxProfit
   }

//Find Duplicate element in an array with O(1) S.C


    for(let i =0; i< nums.length;i++){
       let position =  Math.abs(nums[i]) - 1;
       if(nums[position] < 0) console.log(Math.abs(nums[i]))
       
       else nums[position] = -1 * nums[position]
    }

    return result


//rotate array: 

var rotate = function(nums, k) {
    k %= nums.length 
 reverse(nums, 0, nums.length -1)
 reverse(nums, 0, k -1)
 reverse(nums, k, nums.length -1) };
 const reverse = (nums, start, end) => {
 while(start < end){
     let temp = nums[start]
     nums[start] = nums[end]
     nums[end] = temp
     start++
     end--
     }
     }

//merge two sorted array:


function merge(m , n) {
    var i = 0, j = 0, k = n - 1;
    while (i <= k && j < m) {
        if (arr1[i] < arr2[j])
            i++;
        else {
            var temp = arr2[j];
            arr2[j] = arr1[k];
            arr1[k] = temp;
            j++;
            k--;
        }
    }
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
}


//Find Duplicate characters in a string

//find pair with given differnece

//sort an array using recursion, common elements in three arrays

//https://www.geeksforgeeks.org/split-the-binary-string-into-substrings-with-equal-number-of-0s-and-1s/

//https://practice.geeksforgeeks.org/problems/common-elements1132/1

//https://practice.geeksforgeeks.org/problems/find-pair-given-difference/0

//https://practice.geeksforgeeks.org/problems/quick-sort/1

//Implementation of merge sort

// given two string s1 and s2 check the second string if the string is roteted or not

// min jumps

   function minJumps(arr,n){
        
        let jump = 0
        let curr = 0 
        let res = 0
         
         for(let i=0; i<n-1; i++){
             
              res=Math.max(res,arr[i]+i);
              
              if(curr==i){
                curr=res;
                jump++;
             }
        }
        
        if(curr>=(n-1)){
          return jump;
          
        } else {
           return -1;
           
        }
    }

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9],11))

//https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function(strs) {
    
    if (!strs[0] || strs.length == 1) return (strs[0] || '')

    let flag = true

    let start = 0   //0 1 2

    while (strs[0][start] && flag) { //f   l  o 

        if (strs.every(chr => strs[0][start] == chr[start])) {  //f==> f f f  l l l  o o i     
            start++

        } else {
            flag = false
        }
    }
    return strs[0].substring(0, start)

};


//kadane theorem largest sum of continous subarray

function solution(a,arr) {
    let maxSum= -Infinity;
      let currSum=0;
      // Kadane's algorithm
      for(let i=0; i<arr.length; i++){
          currSum=currSum+arr[i]
          if(currSum>maxSum){
              maxSum=currSum;
          }
          if(currSum<0){
              currSum=0;
          }
      }
      return maxSum;
  }
  
  
  function main() {
      var a = parseInt(readLine());
      var arr=readLine().split(" ").map(Number)
  
      var res = solution(a,arr);
      console.log(res);
  }
  
  

//Cyclically rotate an array by one | Practice | GeeksforGeeks

//https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2614/1

//sort the stack

//rotate an array by K time

//Merge Sort,Binary search,linear search and max sum subarray.

// Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.

const commonEle = (arr1, arr2, arr3) => {
    let i = 0, j = 0, k = 0,output=[]
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            output.push(arr1[i])
            i++
            j++
            k++
        } else if (arr1[i] < arr2[j]) {
            i++
            
        } else if (arr2[j] < arr3[k]) {
            j++
        } else {
            k++
        }
        
    }
    
    return output
    
}

let arr1=[1, 2, 3, 4]
 let arr2=[2,3,4,5]
let arr3 = [3, 4, 5, 6,7,8]
console.log(commonEle(arr1, arr2, arr3))

