// //que. no. 1-
// //checking sum zero i
// //getSumPairZero => input [-5,-4,-3,-2,0,2,4,6,8]
// //[?,?] => output j
// //traversing - to visit each and every element of array

// function getSumPairZero(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] + array[j] === 0) {
//         return [array[i], array[j]];
//       }
//     }
//   }
// }
// const result1 = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result1);
// //time complexity o(n^2) quadratic time complexity

// //solution by linear time complexity
// function findSumPairZero(array) {
//   // i j
//   let left = 0; //[-5,-4,-3,-2,0,2,4,6,8]
//   let right = array.length - 1;

//   while (left < right) {
//     sum = array[left] + array[right];
//     if (sum === 0) {
//       return [array[left], array[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }
// const result = findSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(result);

// //o(n) linear time complexity

//practice:-

let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];

let getSumPairZero = (arr) => {
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 1; j < arr.length; j++) {
  //     if (arr[i] + arr[j] === 0) {
  //       return [arr[i], arr[j]];
  //     }
  //   }
  // }
  // return -1;

  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
};

let res = getSumPairZero(arr);
console.log(res);
