

// is program me fibonacci ke last 2 element jod kar bhej rahe he 
// jese fibonacci 1,1,2,3,5,8,13,21
// hamne 5 bheja he to 5 3 or 2 ko jodd kar bana he 
// ye sawal leet code par bi he 
// function fibo(n){
//   if(n == 0 ) return 0
//   if(n<=2) return 1
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



// function pow(b,exp){
//   if(exp== 0) return 1
//   console.log(b,exp)
//   return b * pow(b,exp-1)
// }
// let result = pow(2,2)
// console.log(result)

//=======================================================>>>


function solution(a) {
    if(a==null || a.length==0){return 1}
      if(a[0]!=a[a.length-1]){ return 0 }
      return solution(a.slice(1,-1))
  }
  
//=============To calculate TC:============================>>>

var t1 = performance.now();
console.log(solution("1234567654321"));
var t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)



