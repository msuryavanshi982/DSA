//function to print numbers 1 to n

// function print(i,n){
//     if(i>n) return;
//     // console.log(i)
//     print(i+1,n)
//     console.log(i)
// }
function print(n){
    if(n==0) return;
    // console.log(n)
    print(n-1)
    console.log(n)
}

console.log(print(10))