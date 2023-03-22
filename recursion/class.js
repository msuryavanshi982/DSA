// recursion:=> function calls itself
// recusive stack
// stack overflow

// Sum of first N natural numbers : =.
// 1+2+3+4-----------n= n*(n+1)/2

// Brute force:
let sum=0;
for(let i=0; i<n; i++){
   sum+=i
}

// Recursion:
let Sum=0 , n=5;
function SumN(i,n){
   //base
   if(i>n) return ;
   // recursive 
  // Sum+=i;
   SumN(i+1, n)
}
Sum(1,5)

// Optimize solution:=>

function rec(n){
   //base case
   if(n<=0) return 0;
   // recursive
  return n+rec(n-1)
}
  
console.log(rec(4))

// Factorial :=> 1*2*3*4*5----n

function fac(n){
   //base
   if(n<=0) return 1;
   //recursive
   return n*fac(n-1)
}
console.log(fac(7))

// fibonacci : 0, 1,1,2,3,5,8,13,21-----

// function fibo(n){     // nth fibonacci series 
//   if(n == 0 ) return 0
//   if(n==1) return 1
//   return fibo(n-1) + fibo (n-2)
// }
// let result = fibo(8)
// console.log(result)

//=======================================================>>>
 

// let n = [8,1,5];
// let len = n.length
// let i = 0
// let mul = 1
// function fibo(n,i){
//   console.log(i)
// //  i++
//   mul *= n[i]*n[i+1]   
//   if(i == len-2) return mul
//   return fibo(n,++i)
// }

// let result = fibo(n,i)
// console.log(result)


//=======================================================>>>

// let n = [3,5,2,8]
// function fibo(n){
//   if(n.length == 0) return 1
//   console.log(n)
//   return n[0]*fibo(n.splice(1))
//   //splice har bar ek index ko delete karta jayega 
// }
// let result = fibo(n)
// console.log(result)

//=======================================================>>>
 
// a^b = a*a*a*a-------b


// function pow(b,exp){
//   if(exp== 0) return 1
//   console.log(b,exp)
//   return b * pow(b,exp-1)
// }
// let result = pow(2,2)
// console.log(result)

//=====product of two arrays===============================>>>

function productOfArrays(arr){
   //base case
   if(arr.length==0) return 1;
   // recursive case 
   return arr[0]*productOfArrays(arr.slice(1))
}
console.log(productOfArrays([1,2,3,4,5]))

// note : tail recursion => when recusion condition at the end in the last line of the function.


function isPowerOftwo(number){
    if(number==1) return true
    if(number%2==0){
      return isPowerOftwo(number/2)
    }else{
       return false
    }
 }
 
 isPowerOftwo(12)


 
// Palindrome string or not :  madam is yes , coding is not a palindrome string
// leetcode : 125 valid palindrome:

/*
=> how to reverse a string using recursion :

-> silce(1)= removes first element
-> silce(-1)= removes last element
-> silce(1,-1)= removes first & last elements

*/

// first method:

const isAlphaNumeric = str=>/^[a-z0-9]+&/gi.test(str);

function isPal(s){
   //base
   if(s.length<2) return true;
   //check 
   let l=s.length
   //false 
   if(s[0]!=s[l-1]){
      return false
   }
   return isPal(s.slice(1,-1))
}

// second method:

let isPalindrome= function(s){
   let newStr = ""
   let l = s.length
   for(let i=0; i<l; i++){
      let ch=s[i].toLowerCase()
      if(isAlphaNumeric(ch)){
         newStr+=ch
      }
   }
   if(newStr.length<2) return true;
   return isPalindrome(newStr)
}



if (function F(){}){

console.log("Hi")

}

else

console.log("Hello");

console.log(a)

let re= /apples/gi;
let str = "apples are round and apples are juicy";

let newstr = str.replace(re, 'oranges');
const mystring = newstr.split('')

console.log(mystring)




