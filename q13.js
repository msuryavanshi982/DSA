// //print 0 to n number
function dis(n) {
  if (n == 1) {
    console.log(n); //doubt
  } else {
    dis(--n);
    console.log(n + 1);
  }
}
dis(5);

// faibonic serise
function fibo(n) {
  if (n <= 2) {
    return 1;
  }
  return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(7));


function fibonacci(n){
  if(n<=2) return 1;
  return fibonacci(n-1)+fibonacci(n-2);
}

console.log(fibonacci(4));

// // product of array
function prod(arr) {
  if (arr.length == 0) {
    return 1;
  }
  return arr.pop() * prod(arr); //doubt
}
let arr = [1, 2, 3, 4, 5];
console.log(prod(arr));

// OR
// product of array
function prod(arr) {
  if (arr.length == 0) {
    return 1;
  }
  return arr[0] * prod(arr.slice(1));
}
let Arr = [1, 2, 3, 4, 5];
console.log(prod(Arr));
