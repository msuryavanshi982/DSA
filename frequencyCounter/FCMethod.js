/* Map method: .get(), .set(), .has()

*/

let arr =[1,2,3,7,4,3,2,1]
let mp=new Map();
for(let i=0; i<arr.length; i++){
    let x= arr[i]
    if(mp.has(x)){
        mp.set(x, mp.get(x)+1)
    }
    else{
        mp.set(x,1)
    }
}
mp.forEach((value, key)=>{
    console.log("kay=", key, "and value=",value)
})

console.log(mp)

//====================>>>
//https://practice.geeksforgeeks.org/problems/maximum-repeating-number4858/1

// maxRepeating(arr,n,k){
//     let mp=new Map();
//     for(let i=0; i<n; i++){
//         let x=arr[i];
//         if(mp.has(x)){
//             mp.set(x, mp.get(x)+1)
//         }else{
//             mp.set(x,1)
//         }
//     }
//     let maxfreq=0;
//     let ans=0;
//     mp.forEach((value, key)=>{
//         if(value>maxfreq){
//             maxfreq=value;
//             ans=key;
//         }else if(value==maxfreq){
//             if(key<ans){
//                 ans=key
//             }
//         }
//     })
//     return ans;
// }