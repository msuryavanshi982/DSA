//count unique numbers
// [1,1,2,2,3,4,4,5,6,7,8,8]
// output -> 8
// conditions
// i = 0, j = 1 i j
// array[i] != array[j] 1 != 2 //[1,2,3,4,5,6,7,8,6,7,8,8]
// 1) i++
// 2) array[i] = array[j] 1 = 2

//solution
function countUnique(array) {
  // i j
  if (array.length) {
    // [1,2,3,4,5,6,7,8,6,7,8,8]
    let i = 0; // i
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}
const result = countUnique([1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(result);
//time complexity is linear o(n)

//practice :==========>

let obj={};
let count=0;
let uniqueNums= (arr)=>{
  for(let items of arr){
   obj[items]= (obj[items]||0)+1;
  }
  let res = [];
  for(let ele in obj){
    if(obj[ele]>1){
    res.push(parseInt(ele));
    }
  }
  return res;
}

console.log(uniqueNums([4,3,2,5,6,7,8,91,3,2,5]))



function factorial(num){
  if(num<=0) return 1;

  return num*(factorial(num-1))
}

console.log(factorial(7))

let arr = []

function fib(n){
  if(n==0) return 0
  if(n==1) return 1
  
 let res= fib(n-1)+fib(n-2)
 arr.push(res)

}


console.log(fib(5))
console.log(arr)



// practice :->

let array = [2,1,4,5,6,45,3,2,1,3,3,5];

function unique(array){
  let i=0;
 if(array.length){
  
  for(let j = 1; j<array.length;j++){
    if(array[i]!==array[j])
    i++;
    array[i]=array[j]
  }
  
 }
 return i+1;
}

console.log(unique([2,1,5,6,45,3,2,1,3,3,5]));
