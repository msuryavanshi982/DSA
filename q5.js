// question no. 5 - Divide and conquerer Technique //binary search
// find the index of the given no. in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] => index 6 -> output

//min = 0, element = 1
// max = array.length-1, element = 15
// midIndex = (min+max)/2 => (0+14)/2 => 7(index), element = 8
// if array[midIndex] < number(7)
//min = midIndex+1;
//else if array[midIndex]>number,max = midIndex-1, min = 0, max = 6 {1,2,3,4,5,6,7}
//(min + max)/2 => 3
// index + 1 => 4(min), max = 6{5,6,7}
//(min + max)/2 => 5+1 => 6(min),max = 6
//(min + max)/2 => 6
//else midIndex => 6, element = 7

// //solution
// function searchAlgo(array, number) {
//   let min = 0;
//   let max = array.length - 1;
//   while (min <= max) {
//     let midIndex = Math.floor((min + max) / 2);
//     //console.log("midIndex"+midIndex+"min"+"max"+max);
//     if (array[midIndex] < number) {
//       min = midIndex + 1;
//     } else if (array[midIndex] > number) {
//       max = midIndex - 1;
//     } else {
//       return midIndex;
//     }
//   }
//   return -1;
// }
// const result = searchAlgo(
//   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   7
// );
// console.log(result);

//time complexity binary 0(log(n))

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let n = 14;

// let findIndex = (arr, n) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     // console.log(mid);
//     if (n == arr[mid]) {
//       return mid;
//     }
//     if (n > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

// console.log(findIndex(arr, n));

//practice:->

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 6;

let findIndex = (arr, n) => {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] == n) return mid;
    else if (arr[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

let res = findIndex(arr, n);
console.log(res);
