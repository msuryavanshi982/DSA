// => Swap two Numbers withaout using temp variable 

let a = 5
let b = 10

a = a + b //a=15  b=10
b = a - b  //b=5  a=15
a = a - b  //a=10  b=5

// console.log(a, b)


// => Swap two string withaout using temp variable 

let x = 'hello'
let y = 'world'

x = 'helloworld'  // concate string 
y = x.slice(0, x.length - y.length)
x = x.slice(y.length)

// console.log(x, y)

// ___________________________________________

// Reverse Array without using extra array

// brute force:

// let arr=[1,2,3,4,5], rev=[];

// for(let i=arr.length-1; i>=0; i--){
//     rev.push(arr[i])

// }
// console.log(rev)

//==========================>>>
//optimise solution:=>>>

function rev(arr){
    let i=0;
    let j= arr.length-1;
    while(i<j){
        arr[i]=arr[i]+arr[j];
        arr[j]=arr[i]-arr[j];
        arr[i]=arr[i]-arr[j];
        i++;
        j--;
    }
    return arr;
}
console.log(rev([1,2,3,4,5,6,7]))

// let arr = [12, 4, 5, 67, 34]  //=> [34,67,5,4,12]

// let i = 0
// let last = arr.length - 1
// while (i <= last) {
//     [arr[i], arr[last]] = [arr[last], arr[i]]
//     i++
//     last--
// }
// console.log(arr)

// _________________________________________

// write js program to cyclically rotate an array -rotate(arr,d)that rotates arr by d elements

// function reverseArr(arr) {
//     let i = 0
//     let last = arr.length - 1

//     while (i <= last) {
//         [arr[i], arr[last]] = [arr[last], arr[i]]
//         i++
//         last--
//     }
//     return arr
// }

// function reverse_K_Ele(arr, k) {
//     arr = reverseArr(arr)
// k = k %= arr.length
//     if (arr.length >= k) {
//         let i = 0
//         let last = k - 1
//         while (i <= last) {
//             [arr[i], arr[last]] = [arr[last], arr[i]]
//             i++
//             last--
//         }
//     }
//     let j = k;
//     let last1 = arr.length - 1
//     while (j < last1) {
//         [arr[j], arr[last1]] = [arr[last1], arr[j]]
//         j++
//         last1--
//     }
//     return arr
// }
// let arr = [1, 2, 3] //=> 3,1,2  2,3,1  1,2,3  3,1,2  2,3,1   1,2,3  3,2,1
// let k = 4
// console.log(reverse_K_Ele(arr, k))

// __________________________________________

// Que-> Given an array of repeated element ,return the most repeated element from array
//  Highest frequency element in an array

// // let arr=[23,56,678,12,2,98,12,3,12,2,12]

// let arr = [1, 2, 4, 3, 8, 9, 7, 5,]
// let large = -Infinity
// let secLarge = -Infinity

// for (let ele of arr) {
//     if (large < ele) {
//         secLarge = large
//         large = ele
//     }
//     else if (secLarge < ele) {
//         secLarge = ele
//     }
// }
// console.log(large + secLarge)

// ___________________________________________

//   Que=> Given an array like arr=[1,1,2,22,3,5,11,2]
//   filter out duplicate elements and give unique elements in an array.

// let arr = [1, 1, 2, 22, 3, 5, 11, 2]

// function uniqueFilter(arr) {
//     let map = new Map()
//     for (let ele of arr) {
//         if (map.has(ele)) {
//             map.set(ele, (map.get(ele)) + 1)
//         }
//         else { map.set(ele, 1) }
//     }
//     let res = []

//     for (let [key, value] of map) {

//         if (value == 1) {
//             res.push(key)
//         }
//     }
//     return res
// }
// console.log(uniqueFilter(arr))

// ___________________________________________

// Que=> find pairs of element whose sum is equal to target  k

// arr = [7, 2, 4, 6, 9, 11, 34, 3, 2, 1]
// k = 5
// function sumEqual(arr, k) {
//     let map = new Map()
//     for (let ele of arr) {

//         map.set(ele, 1)

//     }
//     console.log(map)
//     res = []
//     for (let ele of map) {

//         let prod = k - ele[0]

//         if (map.has(prod)) {

//             res.push([ele[0], prod])
//             map.delete(prod)

//         }
//     }
//     return res
// }
// console.log(sumEqual(arr, k))