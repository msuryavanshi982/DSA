// recursion function by technical suneja
// sorting using recursive function
// [2,3,1,4] -> by default case
// [2,1,3,4] -> case 1
// [1,2,3,4] -> final output

let myArray = [2, 3, 1, 4];
let myNewList = [];
let i = 0;
let j = 1;

function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[j]) {
      return false;
    }
  }
  return true;
}

function sortCheck(array) {
  if (isSorted(array)) {
    myNewList = array;
    return;
  } else if (array[i] < array[j]) {
    i++;
    j++;
    sortCheck(array);
  } else {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortCheck(array);
  }
}

sortCheck(myArray);
console.log(myNewList);

// Helper recursive function
// identify only odd no.'s
// [1,2,3,4,5,6,7,8,9,10]
// [1,3,5,7,9] -> output

function findOdd(array) {
  let result = [];
  function helperRecursive(inputArray) {
    if (inputArray.length === 0) {
      return;
    }
    if (inputArray[0] % 2 !== 0) {
      result.push(inputArray[0]);
    }
    helperRecursive(inputArray.slice(1));
  }
  helperRecursive(array);
  return result;
}
const res = findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(res);
