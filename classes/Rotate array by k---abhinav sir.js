function rotate(arr, k) {
  let i = 0,
    j = arr.length - 1;
  function rot(i, j) {
    while (i < j) {
      arr[i] = arr[i] + arr[j];
      arr[j] = arr[i] - arr[j];
      arr[i] = arr[i] - arr[j];
      i++;
      j--;
    }
  }
  rot(0, arr.length - 1);
  rot(0, k - 1);
  rot(k, arr.length - 1);
  return arr;
}

console.log(rotate([1, 2, 3, 4, 5], 2));

///==========abhinav sir ===============
function rotate(arr, i, j) {
  while (i < j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
    i++;
    j--;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
arr = reverse(arr, 0, arr.length - 1);
arr = reverse(arr, 0, k - 1);
arr = reverse(arr, k, arr.length - 1);
