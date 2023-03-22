//https://practice.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1

// function getPairsCount(arr, n, k){
    //brute force:
    //   let ans=0
    //   for(let i=0; i<n; i++){
    //       for(let j=i+1; j<n; j++){
    //           let sum=arr[i]+arr[j];
    //           if(sum==k) ans++;
    //       }
    //   }
    //   return ans;

    // optimize solution :
//     let ans = 0;
//     let mp = new Map()

//     for (let i = 0; i < n; i++) {
//         let x = arr[i]
//         let y = k - x;
//         if (mp.has(y)) { // to add in ans
//             ans += mp.get(y)
//         }
//         if (mp.has(x)) {// to add frequency
//             mp.set(x, mp.get(x) + 1)

//         } else {
//             mp.set(x, 1)
//         }
//     }
//     return ans;
// }


//https://leetcode.com/problems/fizz-buzz/submissions/876656588/

// var fizzBuzz = function(n) {
//     let answer=[];
//     for(let i=1; i<=n; i++){
//         if(i%3===0 && i%5===0){
//             answer.push("FizzBuzz")
//         }else if(i%3===0){
//             answer.push("Fizz")
//         }else if(i%5===0){
//             answer.push("Buzz")
//         }else{
//              answer.push(String(i))
//         }
//     }
//     return answer;
// };


// Prime Number:=>>
