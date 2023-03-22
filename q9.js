// //que- find the prime no. in an array
// //[1,2,3,4,5,6,7]
// //sol-
// function getPrimeNo(a) {
//   for (let i = 1; i <= a; i++) {
//     let x = 0;
//     if (a % i == 0 && a % i == 1) {
//       //not right
//       x = a;
//     }
//     // else {
//     // console.log("it is not a prime no.")
//     // }
//     return x;
//   }
// }
// let y = getPrimeNo(7);
// console.log(y);

// function primeN(n) {
//   for (let i = 0; i <= n; i++) {
//     if (n == 2) {
//       return false;
//     } else if (n % 2 != 0) {
//       return true;
//     } else {
//       console.log("not a prime number");
//     }
//   }
// }
// console.log(primeN(38));

// //sahi wala Prime No.
// function isPrime(n) {
//   if (n < 2) {
//     return `${n} is not a prime number`;
//   } //doubt when take an empty then also gives true
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return `${n} is not a prime number`;
//     }
//   }
//   return `${n} is a prime number`;
// }
// console.log(isPrime(2));

// function isPrime(n) {
//   if (n <= 1) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log("Prime numbers from 1 to 100 are:");
// for (let i = 1; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// function p(n){

//   if(n<=1) return false;
//   for(let i=2; i<n; i++){
//     if(n%i===0) return false
//   }
//    return true;
// }

//  for(let i=0; i<100; i++){
//    if(p(i)){
//     console.log(i)
//    }
// }

// function palindrome(str){
//   for(let i=0; i<str.length/2; i++){
//     if(str[i]!==str[str.length-1-i]){
//       return false
//     }
//   }
//   return true;
// }

// console.log(palindrome("apapa"));

// function isPalindrome(str) {
//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// let string = "quba";
// if (isPalindrome(string)) {
//   console.log(`"${string}" is a palindrome.`);
// } else {
//   console.log(`"${string}" is not a palindrome.`);
// }

let primeNumber = (n) => {
  let prime = [];
  if (n <= 0) return false;
  for (let i = 2; i < n; i++) {
    let flag = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = false;
      };
    }
    if (flag == true) {
      prime.push(i);
    }
  }
  return prime;
};

console.log(primeNumber(10));
