//linear search Algorithms
// const users=[{username:"sunejaajay",email:"sunejaajay@gmail.com"},
// {username:"abc",email:"abc@gmail.com"},
// {username:"xyz",email:"xyz@gmail.com"}
// ]

function isuserExit(array, val) {
  for (let item of array) {
    if (item["username"] === val) {
      return true;
    }
  }
  return false;
}
const res = isuserExit(users, "abc");
console.log(res);

//Bubble sort (sorting..) //o(n^2) means quadratic isme 2 baar loop chalta hai
// a sorting algorithm where the largest values bubble up at the top

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
const reS = bubbleSort([5, 3, 4, 1, 2, 8, 6, 7]);
console.log(reS);

//Selection sort take too much time
//[0,2,34,22,10,19]

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
const rEs = selectionSort([0, 2, 34, 22, 10, 19]);
console.log(rEs);

//Insertion Sort
//Steps
//1. Consider 2nd Element, arr[1] - Start yhi se hoga
//2. arr[j]>cur - swapping performm hogi

const sorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};
const Res = sorted(arr);
console.log(Res);
