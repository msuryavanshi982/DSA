// Q1. Find the largest three distinct elements in an array

// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

let largest = (arr) => {
  let max1 = 0;
  let max2 = 0;
  let max3 = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    } else if (arr[i] > max3) {
      max3 = arr[i];
    }
  }
  return [max1, max2, max3].join(" ");
};

console.log(largest([10, 4, 3, 50, 23, 90]));

// Q2.Find the Missing Number
// Given an array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.
// Note: There are no duplicates in the list.
// Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
// Output: 5



// Q3.Take an integers of array by yourself and Perform following operations Search, insert and delete in a sorted array

// Q4.Binary Search for Rational Numbers without using floating point arithmetic
// A rational is represented as p/qb, for example 2/3. Given a sorted array of rational numbers, how to search an element using Binary Search. Use of floating-point arithmetic is not allowed.
// Input:  arr[] = {1/5, 2/3, 3/2, 13/2}
// x = 3/2
// Output: Found at index 2
