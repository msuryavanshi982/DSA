// [1,2,3,4,3,5,4,6,7,8] => total elements - 10 (not sorted)
// count largest sum of consecutive digits
//num = 4 (means w = 4)
// sum = 25 (means output = 25)
// conditions
// num > array -> error message
// 10 - 4+1 => 7 -> total no. of loops also 2 loops involved in this case

//solution

function findLargest(array, num) {
  if (num > array) {
    throw new Error("num must not be greater than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0; //temp = temporary variable
      for (let j = 0; j < num; j++) {
        // i
        console.log("i" + i + "j", j); // [1,2,3,4,3,5,4,6,7,8]
        temp += array[i + j]; // j
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}
const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("result", result);

// another method
function maximum(array) {
  let temp = 0;
  let temp2 = 0;
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      temp2 = array[i] + array[j];
      if (temp2 > temp) {
        temp = temp2;
      }
    }
  }
  return temp;
}

console.log(maximum([1, 5, 233, 9, 10]));

//sahi wala largestconsecutive
function findlargest(array, num) {
  let max = 0;
  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(findlargest([1, 2, 3, 4, 5, 6, 7, 8], 4));



















