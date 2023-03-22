// question-6 => checking square in another array
// arr1 = [1,2,3,4],
//arr2 = [1,9,4,16]
// if(array1[i]*array1[j] === array2[j])
// let isSquare = true

//solution-
// function isSquareCheck(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     let isSquare = false;
//     for (let j = 0; j < array2.length; j++) {
//       if (array1[i] * array1[i] === array2[j]) {
//         isSquare = true;
//       }
//       if (j === array2.length - 1) {
//         if (!isSquare) {
//           return false;
//         }
//       }
//     }
//   }
//   return true;
// }
// const result = isSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
// console.log(result);
// time complexity 0(n^2)

//optimum solution

//que- checking square in another array
//arr1 = [1,2,3,4], arr2 = [1,9,4,16] -> case1
//arr2 = [1,2,4,2], arr2 = [1,4,4,16] -> case2
// ||
//map 1 = { 1:1, 2:2, 4:1}
//map 2 = {1:1, 4:2, 16:1}

//sol-
// function checkSquare(array1, array2) {
//   let map1 = {};
//   let map2 = {};
//   for (item of array1) {
//     map1[item] = (map1[item] || 0) + 1;
//   }
//   console.log("Map1", map1);
//   for (item1 of array2) {
//     map2[item1] = (map2[item1] || 0) + 1;
//   }
//   console.log("Map2", map2);
//   for (let key in map1) {
//     console.log("Key", key);
//     if (!map2[key * key]) {
//       //object keys compare in term of square
//       return false;
//     }
//     if (map1[key] !== map2[key * key]) {
//       // value compare
//       return false;
//     }
//   }
//   return true;
// }
// const res = checkSquare([1, 2, 4, 2], [1, 4, 4, 16]);
// console.log(res);
//time complexity o(n)

// let a = [2, 3, 4, 5, 1];
// let b = [9, 16, 25, 4];
// let findSqr = (a, b) => {
//   let o1 = {};
//   if (a.length != b.length) return false;
//   for (let key1 of b) {
//     o1[key1] = (o1[key1] || 0) + 1;
//   }
//   console.log(o1);
//   for (let ele of a) {
//     let sqr = ele * ele;
//     if (!o1[sqr]) return false;
//     else {
//       o1[sqr] = (o1[sqr] || 0) - 1;
//     }
//   }
//   return true;
// };

// console.log(findSqr(a, b));

let isSquare = (a1, a2) => {
  if (a1.length !== a2.length) return false;
  let obj = {};
  for (let key of a2) {
    obj[key] = (obj[key] || 0) + 1;
  }
  for (let ele of a1) {
    let sqr = ele * ele;
    if (!obj[sqr]) return false;
    else {
      obj[sqr] = (obj[sqr] || 0) - 1;
    }
  }
  return true;
  // console.log(obj);
};

let res = isSquare([2, 0, 4], [16, 4, 9]);
console.log(res);
