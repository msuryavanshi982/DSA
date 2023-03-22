//find duplicate number
function duplicate(arr) {
  let freq = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (freq.get(arr[i]) == undefined) freq.set(arr[i], 1);
    else freq.set(arr[i], freq.get(arr[i]) + 1);
  }
  console.log(freq);
}
console.log(duplicate([1, 2, 3, 4, 51, 2, 1, 2]));

//function call itself that is recursion

function div(arr) {
  if (arr.length == 0) {
    return;
  } else {
    let ele = arr.pop();
    if (ele % 7 == 0) {
      console.log("Yes");
    } else {
      console.log("NO");
    } //O(n)
    div(arr);
  }
}
let arr = [14, 23, 67, 70, 77, 101, 7, 42, 45];
let Result = div(arr);
console.log(Result);

// // print sum of n
function sum(n) {
  if (n == 1) {
    return 1; //what if array is empty
  } else return n + sum(n - 1);
}
let resulT = sum(5);
console.log(resulT);

// fact using resursion
function fact(n) {
  if (n == 1) {
    return 1;
  }
  return n * fact(n - 1);
}
let result = fact(3);
console.log(result);
