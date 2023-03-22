//=> Sliding Window Technique:=>>>

arr=[23,34,6,2,43,89,9, 3,2,7]
k=3
// largest sum of consecutive 3 numbers
// Basic way:- pseudo code
/*
let maxSumSoFar= O // or -Infinity
let subArr
for(i over arr){
    sum=0
    for(l=1 && till j=i+k){
        sum = sum +arr[i]
    }
}
if(sum > maxSumSoFar){
    maxSumSoFar= sum
    subArr =arr[i]+arr[j+k] 
}
return subArr;
TC= n*K = O(N^2)

/=>
let maxSumSoFar =0;
let sum =sum of first k number (by looping over k  )
maxSumSoFar=sum
for(i over arr){
    sum=sum+arr[i+k]-arr[i-1]
}
if(sum>maxSumSoFar){
    update the subarr = arr[i] to arr[i+k]
    update maxSumSoFarFar = sum
}// TC= O(N)
*/ 

//=========SLIDING WINDOW ==========>>>

/* This pattern involves creating a window which can either be an arrau or number from one position to another . Depending  on a certain condition , the window either increases or closes (and a new  window is created) .
Very useful for  keeping track of a subset of data in an array/string etc.*/

//=> Leetcode question : 1456 = Maxium number of vowels in a substring of given length=> 

let sol=function check(ch){
    if(ch=='a'|| ch=='e'|| ch=='i'||ch=='o'||ch=='u'){
        return true;
    }
    return false;
}
let maxVowels = function(s,k){
    let c=0;
    let maxCount=0;
    for(let i=0; i<k; i++){
        if(check(s[i])){
            c++;
        }
    }
    maxCount=Math.max(maxCount, c)
    for(let i=k; i<s.length; i++){
        if(check(s[i-k])){
            c--;
        }
        if(check(s[i])){
            c++;
        }
        maxCount=Math.max(maxCount,c)
    }
    return maxCount;
}


//=>> leetcode =3.longest substring without repeating character=>>>

let lengthOfLongestSubstring = function func(s){
    let freq={};
    let start =0;
    let ans=0;
    for(let end=0; end<s.length; end++){
        while(frq[s[end]]==1){
            freq[s[start]]=0;
            start++;
        }
        freq[s[end]]=1;
        ans=Math.max(ans,end-start+1)
    }
    return ans;
}

 

//geeks for geeks: Max sum subarray of size k=> 

    let solution = function maximumSumSubarray(k, Arr, N){
        let currsum=0;
        let maxsum=0;
        for(let i=0; i<k; i++){  //TC-> O(N)
            currsum+=Arr[i]//SC-> O(1)
        }
        maxsum=currsum;
        for(let i=k; i<N; i++){
            currsum+=Arr[i];
            currsum-=Arr[i-k];
            maxsum=Math.max(maxsum, currsum)
        }
        return maxsum
    
    }
    //geeks for geeks: Max product subarray of size k=> same as above ...