//=>>> Multiple pointer method:=> 
/*
creating pointers or values that correspond to an index or position and move towards the beginning end or middle d on a certain condition.
very effective for solving problems with minimal space complexity as well.
*/

// pritesh sir's lecture example :=>

// find the pair that sums closest to 12 :=>

arr = [1,2,5,8,9,14];

let result = [];
let distance = Infinity;
let j = arr.length-1;
let i =0;
 while(i<j){
    if(absolute(arr[i]+arr[j] -12)){
    }
    if(arr[i]+arr[j]-12>0) { j=j-1 }
    else if(arr[i]+arr[j]-12<0){
        i=i+1;
    }
    return result; 
 }

// TC of sort() = O(nlogn)

// exapmles of multipointers:=>
//=> Data should be sorted

// key pair : geeks for geeks

n=5, x=16
arr=[1,4,45,6,108]

//Brute force approach :=>

let solution = function hasArrayTwoCandidates(arr,n,x){
    for(let i=0; i<N; i++){
        for(j=1; j<N; j++){
            if(arr[i]+arr[j]==x){
                return 1;
            }
        }
    }
    return 0;
}// TC: n^2

// optimise solution=>

let solutioN = function add(arr,n,x){
    arr.sort()
    var i, j;
    i=0; 
    j=n-1;
    while(i<j){
        if(arr[i]+arr[j]==x){
            return 1;
        }
        else if(arr[i]+arr[j]<x){
            i++;
        }
        else{ // (arr[i]+arr[j]>x)
        j--;
        }
    }
    return 0; // sum is not present;
} //TC: O(logn)+O(n)= O(nlogn)

// sum pair closest to x = Geeks for geeks=>>>

n=6, x=54
arr=[10.22,28,29,30,40]

let sol= function pair(arr,n,x){
    let l=0;
    let r=n-1;
    let diff = Number.MAX_VALUE
    let a,b
    while(l<r){
        let pairSum=arr[l]+arr[r];
        let currDiff=Math.abs(pairSum-x)
        if(currDiff<diff){
            diff=currDiff;
            a=arr[l]
            b=arr[r]
        }
        if(arr[l]+arr[r]>x){
            r--;
        }
        else{
            l++;
        }
    }
    console.log(a,b)
}






 