let Arr = [2, 0, 1, 1, 2, 0, 1];
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}
console.log(sort(arr));

function unique(array) {
  let arr = [];
  for (i = 0; i < array.length; i++) {
    if (arr.indexOf(array[i]) < 0) {
      //doubt
      arr.push(array[i]);
    }
  }
  return arr;
}
console.log(unique([1, 2, 3, 3, 3, 4, 4, 5, 6]));

function isArray(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length === 0) {
      // arr=array[i]
      return [];
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}
console.log(isArray([1, 2, 3]));

let array = [1, 2, 3];
let arr1 = [];
function a(array) {
  for (let i = 0; i < arr.length; i++) {
    arr1.push(array[i]);
  }
  return arr1;
}
console.log(a(array));

let arr = [];
arr.push(1, 2, 3);
console.log(arr);

function findDuplicate(nums) {
  let freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (freq.has(nums[i])) freq.set(nums[i], freq.get(nums[i]) + 1);
    else {
      freq.set(nums[i], 1);
    }
  }
  let r = [];
  for (let [key, value] of freq) {
    if (value > 1) {
      r.push(value);
    }
    for (let i = 0; i < r.length; i++) {
      if (r[i] < r[i + 1]) {
        return r[i + 1];
      }
    }
  }
  return r[i];
}
console.log(findDuplicate([1, 2, 2, 1, 1, 2, 2]));
