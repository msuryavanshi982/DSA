// bubble sort algo simplest and popular
function bubble(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swap = true; //O(n^2)
      }
    }
    if (swap == false) break;
  }
  return arr;
}
console.log(bubble([233, 12, 6, 89, 34, 56]));

// selection sort
function selection(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; //O(n^2)
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
console.log(selection([3, 2, 1, 7, 8]));

// insertion sort
function insertionSort(arr) {
  for (let right = 1; right < arr.length; right++) {
    let curr = right;
    while (arr[curr - 1] > arr[curr]) {
      [arr[curr - 1], arr[curr]] = [arr[curr], arr[curr - 1]];
      curr--;
    }
  }
  return arr; //O(n^2)
}
console.log(insertionSort([9, 8, 3, 6, 1, 4, 3, 2, 1]));

// merger sort in js
let arr = [9, 8, 7, 6, 2, 3, 4];
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid)); //O(N*log N)
  return Sort(left, right);
}
function Sort(left, right) {
  let Sortedarr = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      Sortedarr.push(right[j]);
      j++;
    } else {
      Sortedarr.push(left[i]);
      i++;
    }
  }
  while (i < left.length) {
    Sortedarr.push(left[i]);
    i++;
  }
  while (j < right.length) {
    Sortedarr.push(right[j]);
    j++;
  }
  return Sortedarr;
}
console.log(mergeSort(arr));
