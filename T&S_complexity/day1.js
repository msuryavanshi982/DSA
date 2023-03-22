// ==Time And Space Complexity :=> 
//-> Examine the total execution time/space of an algorithm ( wrong )
//-> It gives us the information about the variation (increase or decrease) in execution time when the number of operations( increase or decrease ) in an algorithm.
// eg: 
// for(let i=0; i<n; i++){
//     console.log("hello");
// }

/*=>>>Time Complexity is defined as :
1. the amount of time taken by an algorithm to run 
2. as a function of the length of the input .

//==== Notation ==>>> 

=> Worst Case(Big-O)
=> Avg. Case( Big-Theta)
=> Best Case(Big-Omega)
*/

for(let j=0; i<n; i++){
    for(j=0; j<matchMedia; j++){
        console.log("hello");
    }
}// O(N*M)

/*=>>> Different type of complexity:-
1. Constant time-O(1)
2. Linear time-O(n)
3. Logarithmic time-O(logn)
4. Quadratic time-O(n^2)
5. Cubic time-O(n^3)
 */


//1. constant:-
for(let i=0; i<5; i++){
    console.log("hello"); // 0,1,2,3,4
}// O(1)

//2.Linear:-
for(let i=0; i<N; i++){
    console.log("hello");
}// O(n)

//3.Logarithmic:-
for(let i=1; i<=n; i=i*2){
    console.log("hello");
}// O(log  2 n)

//4.Quadratic:-
for(let i=1; i<=n; i=i*2){
    for(let j =1; j<n;i++){
        console.log("hello");
    }   
}// O(n^2)

// O(1)<O(logn)<O(n)<O(n^n)<O(n^n^n)


//==========Space Complexity:==>>>

/*The Space Complexity of an algorithm or a computer program is the amount of memory space  require to solve an instab=nce of the computation problem as a function of characteristics of the input*/
 
//eg: 
let c=0;
let d=1;
let sum = c+d; //O(1)

//eg:
const arr=[];
let n;
for(let  i=0; i<n; i++){
    arr[i]=i;
} // O(n)

// > O(n!), O(e^n), O(n^e)= worst
// > O(nlogn)= Bad
// > O(n)= fair
// > O(logn)= good 
// > O(1) = best

let N=2;
console.log(N) // Only one time = O(1)


for(let i=1; i<N; i++){
    console.log(i) // N times = O(N)
}

// sum of first n natural numbers :=>

let Sum=0;
for(let i=0; i<N; i++){
    sum=sum+i;
} // O(N)   (wrong) 
// let sum=n*(n+1)/2;  -> O(1) -> Optimize approach;


let Arr = [12, 7, 39,28, 51];

function  findSum(Arr){
    let total =0;
    for(let i=0; i<Arr.length; i++){
        total+=Arr[i];
    }
    return total;
}
 findSum(Arr)   // SC =o(n) & Tc=O(n)


 // Binary Search Algorithm :

 function binarySearch(arr, val){
    let start =0;
    let end =arr.length-1;

    while(start<=end){
        let middle = Math.floor((start+end)/2);
        if(arr[middle]===val){
            return middle;
        } else if(arr[middle]<val){
            start = middle+1;
        }else {
            end =middle-1;
        }
    }
    return -1;
 }

console.log(binarySearch([1, 4,7,0, 9,2,3],31))

// time and space complexity

// it gives us the information about the variation (increase or decrease)in execution time when the number of operations
// (increase or decrease)in an algorithm

// time complexity hamko batata he ki ek particular task ke liye usko kitna time lagega kita operation krega
// for example
// let n = 8
// for(let i = 0; i<n; i++){
//  console.log("hello world)
// }
//  big O(n) time complexity
// in this code time complexity is depend on the varaible n 

// time complexity is defined as 
// the amount of time taken  by an algorithm to run 
// as a function of the length of the input 

// best case big omega
// we are searching in array and number found at index 0 is best case we found in first case

// average case big theta
// we are searching in arry we found element at mid index
// worst case big O 
// we found data in the last of the array


// Any notation can be used to 
// describe the best case, worst case, or average case. 
// The notations are not tied to any of the cases.

// time type 
// 1 constant time O(1) time complexity
// for(let i =0 ; i<5 ; i++){
// console.log("hello")
// }

// 2 Linear time  n it depends on the variable O(n) time complexitiy
// for(let i = 0 ; i<n ; i++){
//  console.log("hello")
// }

// 3 Logarithmic O(log n) time complaxity
// for(let i = 0 ; i<=n ; i=i+4){
//  console.log("hello")
// }

// 4 Quadritic time  O(n^2)
// for(let i = 0; i<n; i++){
//    for(let j= 0; j<n; j++){
//    console.log("nested for loop")
//   }
// }

// 5 cubic time O(n^3)

//  for(let i = 0; i<n; i++){
//    for(let j= 0; j<n; j++){
//       for(let k = 0; k<n; k++){
//         console.log("nested in nested")   
//     }
//   }
// }