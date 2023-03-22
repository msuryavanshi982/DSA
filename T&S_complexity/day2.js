// Time Complexity: BigO =>>>

// => BigO Notation:-> It is the process to define how the program perform as the input grows. It is the worst case senario rather than  average case or best case senario.

// rules of BigO:->
// 1. Constants don't matter.
//ex=> O(2n+7) = O(n);

// 2. smaller terms don't matter and larger terms dominating.
// Eg:  O(1) +O(1)+ O(1)+O(1)= O(1)
// O(n^2+5n) = O(n^2)
// O(100n^2 +10000n +1000)=O(n^2);

// Note: O(1), O(logn), O(n), O(nlogn), O(n^2), O(n^4), O(n^5), O(e^n) etc.

// To findOut order TC of loop = Order of the loop*Order of whatever is happing inside the loop.

// Ex: x= 100+(30*200)=> O(1)
// Ex: y=101232-x
// console.log(x*y)  ===>>> O(1+1+1)=O(3) = O(1)

// Eg: for o to n { console.log(n) } => O(n) = Linear Time complexity.

// n = input and o = order 

// ex: - add 100 numbers:->

function addUpToFirst(n){
    var total=0;
    for(var i=0; i<=n; i++){
        total +=i;
    }
    return total;
}// TC= O(n)

// (or)

function addUpTosecond(n){
    return n*(n+1)/2;
} // TC = O(1)

//Eg:
function printAllPairs(n){
    for(let i=0; i<n ; i++){       // O(n)
        for(let j=0; j<n; j++){    // O(n)
            console.log(i,j)   // [1,2,3,4,5,4,3] => (1,1), (1,2)
        }
    }
} // TC = O(n^2)

// when the operations will goes to half the complexity will be O(logn)
// Eg:
function numberOfHalves(n){
  let count =0;
  while(n>1){
    n/=2;
    count++;
  }
  return count;
}  // TC : O(logn)

//-> BigO , commonaly written as O. It is an asymtotic notation for the worst case or ceiling of the growth for a given function. 

//==>>> O(1) < O(logn) < o(n) < o(nlogn) < O(n^2)

//=================================//

//1. BigO of Different Possibilities
//2. BigO of Objects
//3. BigO of Oject Methods

// eg:1=>

function timesTwo(num){
    return 2*num;
}
let result =timesTwo(5);
console.log(result);  // o/p:10           // Note: Time Complexity => O(1) => constant
let result2=timesTwo(2000)
console.log(result2);   //o/p:4000       // Note: Time Complexity => O(1) => constant

// Imp Point : multiply operation hase order of 1 that's why complexity will O(1)

// Note:=> 
let arr1=[1,2,3]
let arr2= [9,7]

//------------------------->>>
// Eg: 2=>  reverse the array :-

function reverseArray(arr){
    let newArr =[];
    for(let i=arr.length-1; i>=0; i--){
        newArr.push(arr[i])
    }
    return newArr;
}

const reverseArray1 = reverseArray([1,2,3]);
const reverseArray2 = reverseArray([1,2,3,4,5,6]);

console.log(reverseArray1, "and " , reverseArray2)

// TC -> O(N)-> Linear; //because we use new array with n elements
// SC -> O(N)-> Linear; //because we use new array with n elements

//------------------------->>>
// Eg:3->
let arr =[1,2,3];
arr.push(5);
console.log(arr);

// Note:->  TC -> O(1)
// Imp Point :-> when we perform insertion / deletion operations on array , time complexity will be o(1);

//------------------------->>>
// eg:4:-> multiplication of arrays:-
function multiplyAll(arr1, arr2){
    if(arr1.length!==arr2.length) return undefined;
    let total=0;
    for(let i of arr1){
        for(let j of arr2){
            total+=i*j;
        }
    }
    return total;
}

let result_1 = multiplyAll([1,2], [5,6])
console.log(result_1);   // TC: N

let result_2= multiplyAll([4,5], [7,8])
console.log(result_2);    //TC= M

// Note: In nested loop we will multiply complexities of every array , 
// Tc = N*M;

///------------------------->>>
// Eg:5=>
function logTime(arr){
    let numberOfLoops=0;
    for(let i=1; i<arr.length; i+=2){
        numberOfLoops++
        // console.log("hi")1,2
    }
    return numberOfLoops; 
}// 1, 2, 4, 8, 16
// Order of log = O(log2N)
let loopsA  =logTime([1,5,6, 7]) // 0 loops;
console.log(loopsA)
let loopsB  =logTime([1,2]) // 1 loops;
let loopsC  =logTime([1,2, 3,4]) // 2 loops;
let loopsD  =logTime([1,2,3,4,5,6,7,8]) // 3 loops;
let loopsE  =logTime(Array(16)) // 4 loops;

//------------------------->>>
// EG:-6=>
function linearArithmatic(n){
    for(let i=0; i<n; i++){     // O(N)
        for(let j=1; j<n; j=j*2){   //O(log2N)
            console.log("Hello");
        }
    }
}

// TC= O(NlogN) = logarithmic time

//------------------------->>>
// Eg-7: Fibonacci Series => formula => f(n)= (n-1)+(n-2):
// series : 0, 1,1, 2, 3, 5, 8, 13...........

function fibonacci(num){
    //  case
    if(num===0) return 0
    else if(num ==1)  return 1
    // Recursive part 
    return fibonacci(num-1)+fibonacci(num-2)
}
// TC=> O(2^N)  = exponantial time complexity
fibonacci(1) //1
fibonacci(2) //1
fibonacci(3) //2
fibonacci(4) //3
fibonacci(5) //5


//========BigO of Objects:===========>>>

let instructor ={
    firstName : "Meenakshi",
    isInstructor:true,
    favoriteNumbers : [1,2,3,4]
}

// Insertion -> O(1):
instructor.lastName = "Lodhi Rajput";

// Removal -> O(1);
delete instructor.favoriteNumbers;

//Access -> O(1);
console.log(instructor.firstName);

// Searching-> O(n);
for(let i=0; i<instructor.length; i++){
    // O(N);
}

//=============Object Methods ============>>>

// Object.keys -> O(n)
console.log(Object.keys(instructor))

// Object.values -> O(n)
console.log(Object.values(instructor))

// Object.entries -> O(n)
console.log(Object.entries(instructor))

// Object.hasOwnProperty -> O(1)
console.log(Object.hasOwnProperty("firstName"))

// searching:-> O(n)
console.log(instructor.firstName);


/*Time complexity of  depends on two factors: 1) Total number of recursive calls and 2) Time complexity of additional operations for each recursive call. So  tree is a diagram representing additional cost for each recursive call in terms of their input size
 */

//constant yani usne fix kar diya loop me uski value n par depend ni h
