//==============Binary Search =================== =O(logN)

// Q: [3,7,11,34,78,90,92,96,98]        = Sorted Array
// Searching number 34 exists in the list

/*
34<78 (m=4)=> [3,7,11,34]
34>11 (m=2)=>[34]
34==34 (m=3) => return true, 3

=>>> time complexity are of two types: 
-> best case senario = O(1)
-> worst case senario = O(n)
-> Avg case senario = O(logn)

 */

function binarySearch(arr, start, end, num){
    mid= (start+end)/2
    if(num==arr[mid]){
        return mid;
    }else if(num>arr[mid])
    return binarySearch(arr, mid+1,end, num)  // recusion
    else if(num<arr[mid]){
     return binarySearch(arr, start, mid-1,num) //recursion
    }
    return false;
}

//Note:=> mid = start+(end-start)/2    // Math.round()

//Eg:  Bubble sort : Simplest and also popular =>
[233,12,6,89,34,56]
//Q: check the element adjacent to each other and swap them if left element right element :=> 

function bubble(arr){
    for(let i=0; i<arr.length; i++){
        // we will make 1st pass, 2nd pass, 3rd pass----------nth pass using this loop . 
        let swap = false ;
        for(let j=0; j<arr.length; j++){
            // we will compare the 1st element , 2nd element, ------- (n-1)th element.
            if(arr[j]> arr[j+1]){
                //swap
                arr[j]=arr[j]+arr[j++]
                arr[j++]=arr[j]-arr[j++]
                arr[j]=arr[j]-arr[j++]
            }
        }
        if(swap==false) break;
    }
    return arr;
}
let arr=[233,12,6,89,34,56];
bubble(arr)

/*
=> Marge Sort : 

let arr= [233,12,6,89,34,56]

-> step-1: Recursion 
-> step-2: Merge

function mergeSort(arr, start,end){
    let mid=Math.round((start+end)/2)
    mergeSort(arr, start,end)
    mergeSort(arr, mid+1,end)
    mergeSort(arr, start,mid,end)
}
*/

function merge(arr,start, mid, end){
    // logic
    let arr1=[]
    let arr2=[]
    let lenArr1 = mid-start+1
    let lenArr2 = end-mid// copy the data  in the respective arrays
    for(let i=0; i<lenArr1; i++){
        arr1[i]= arrayX[start+i]
    }
    for(let j=0; j<lenArr1; j++){
        arr2[j] =arrayX[mid+1+j]
    }
    let a=0;  // index of arr1
    let b=0;  // index of arr2
    let c=start // index of arrayX
    while(a<lenArr1 && b< lenArr2){
        if(arr1[a]<=arr2[b]){
            arrayX[c]=arr[a]
            i++
        }
        else {
            arrayX[c]=arr2[b]
            b++
        }
        c++
    }

// if(if elements remain in either arr1, arr2 , then Insert in order in the original arrayX)
while(a<lenArr1){
    arrayX[c]=arr1[a]
    a++
    c++
}
while(b<lenArr2){
    arrayX[c]=arr2[b]
    b++
    c++
}
}

// Merge Sort : TC = N(logN) in all cases

// 1. Swap=>
let a=1;
let b=2;
a=a+b
b=a-b
a=a-b
console.log(a,b);

// 2. Reversean array:=>

let Arr=[1,2,3,4,5]
let Rev=[]
for(let i=Arr.length-1; i>=0; i--){
    Rev.push(arr[i])
}
console.log(Rev);

// 2nd method : 

let i=0;    // first index
let j=arr.length-1   // last

while(i<j){
    //swap
    arr[i] = arr[i]+arr[j]
    arr[j] = arr[i]-arr[j]
    arr[i] = arr[i]-arr[j]
    i++;
    j--;
}
console.log(Arr);

// 3. Rotate array:

function reverse(Arr){

}

// Brute Force Approach =>

let array =[1,2,3,4,5,6,7]
let k=3;
for(let i=0; i<k; i++){
    let x=arr.pop()     // (or)   array.pop()
    arr.unshift(x)
}
console.log(array)

//=> Optimize Solution :=>

// -> Logic :
// 1. Reverse complete array    : [7,6,5,4,3,2,1]
// 2. reverse first K elements  : [5,6,7,4,3,2,1]
// 3. reverse last n-k          : [5,6,7,1,2,3,4]

let arR = [1,2,3,4,5,6,7]     
let K=3;
arR = reverse(arR, 0, arR.length-1)   // complete array
arR = reverse(arR,0 , K-1) // first K elements
arR = reverse(arR,K, arr.length-1) // last n-K elements

console.log(arR);

// Q: Find largest pair sum in an unsorted array :=>

let d = [12,34,10, 6, 40]
let sum =0 

// Brute force :- 

d.sort(function(a,b){return a-b})
sum = d[d.length-1]+ d[d.length-1]

console.log(sum);

// Optimize solution =>

let c= [12,34, 10, 6, 40]
let s =0;
let max=0; 
let smax =0   // second max

for(let i=0;  i<c.length ; i++){
    if(c[i]>max){
        smax =max 
        max =c[i]
    }
    else if(c[i]> smax){
        smax = c[i]
    }
}

// => Find largest three elements :=>

let arr3 = [1,34, 10, 6,40]
let sum3 =0;
let max3 =0;
let smax3 =0;
let tmax =0;
for(let i=0; i<arr3.length; i++){ // o(n)
     if(arr3[i]>max){
        tmax = smax
        smax = max
        max = arr3[i]
     }
     else if(arr3[i]>smax){
        tmax =smax 
        smax =arr[i]
     }
     else if(arr3[i]>tmax){
        tmax =arr3[i]
     }
}

