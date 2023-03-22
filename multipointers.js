// Q1 Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array.
// a).
// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32
// Output:  1 and 30

// let ar1 = [1, 4, 5, 7];
// let ar2 = [10, 20, 30, 40];
// let x = 32;
// let ans = Infinity;
// let res;

// let left = 0;
// let right = ar2.length - 1;
// while (left < right) {
//   let add = ar1[left] + ar2[right];
//   let diff = Math.abs(add - x);
//   if (diff < ans) {
//     ans = diff;
//     res = [ar1[left], ar2[right]];
//   }
//   if (add > x) right--;
//   else left++;
// }
// console.log(res);

// for (let i = 0; i < ar1.length; i++) {
//   for (let j = 0; j < ar2.length; j++) {
//     let sum = ar1[i] + ar2[j];
//     let diff = Math.abs(sum - x);
//     if (diff < ans) {
//       ans = diff;
//       res = [ar1[i], ar2[j]];
//     }
//   }
// }
// console.log(res);

// b).
// Input:
// let ar1 = [10, 22, 28, 29, 30, 40];
// let x = 54;
// let ans = Infinity;
// let Left = 0;
// let Right = ar1.length - 1;
// while (Left < Right) {
//   let add = ar1[Left] + ar1[Right];
//   let diff = Math.abs(add - x);
//   if (diff < ans) {
//     ans = diff;
//     res = [ar1[Left], ar1[Right]];
//   }
//   if (add > x) Right--;
//   else Left++;
// }
// console.log(res);

// Output: 22 and 30

// Q2.Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
// Input:  arr[] = {0, -1, 2, -3, 1}
// Output:  (0 -1 1), (2 -3 1)
//  Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0

// let arr = [0, -1, 2, -3, 1];

// Q1 Given two sorted arrays and a number x, find the pair whose sum is closest to x and the pair has an element from each array.
// a).
// Input:  ar1[] = {1, 4, 5, 7};
//         ar2[] = {10, 20, 30, 40};
//         x = 32
// Output:  1 and 30

// b).
// Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54

// Output: 22 and 30

// Q2.Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
// Input:  arr[] = {0, -1, 2, -3, 1}
// Output:  (0 -1 1), (2 -3 1)
//  Explanation: The triplets with zero sum are 0 + -1 + 1 = 0 and 2 + -3 + 1 = 0

// let water = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let maxContainedWater = (water) => {
//   let maxWater = 0;
//   let left = 0;
//   let right = water.length - 1;
//   while (left < right) {
//     let min = Math.min(water[left], water[right]);
//     let dis = right - left;
//     let totalWater = min * dis;
//     if (totalWater > maxWater) {
//       maxWater = totalWater;
//     }
//     if (water[left] > water[right]) right--;
//     else left++;
//   }
//   return maxWater;
// };

// console.log(maxContainedWater(water));

let arr = [1, 2, 3, 4, 5, 6, 7];

let swap = (arr, left, right) => {
  while (left < right) {
    let swap = arr[left];
    arr[left] = arr[right];
    arr[right] = swap; // a=a+b; b=a-b; a=a-b;
    left++;
    right--;
  }
  return arr;
};



let rotate = (arr, k, n) => {
  arr = swap(arr, 0, n);
  arr = swap(arr, 0, k - 1);
  arr = swap(arr, k, n);
  return arr;
};

console.log(rotate(arr, 3, arr.length - 1));

let x = 10;
let y = 5;
x = x + y; //  x=15
y = x - y; // y= 15-5 =10
x = x - y; // x=15-10 =5
