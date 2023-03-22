/*
=> Dynamic Programming:  Adiya Verma 
=> OOPS
=>DSA:  Ayyay, String, Linked List, Searching & Sorting, Divide & Conquer, Sliding Window, Stack, Queue, Recursion, Back Tracking,  Tree, Greedy Algo, Dynamic Programming, Graph.

=> Technical Interview : Intro - name ="", from college------, graduated in  B.Sc. C.S. in 2019.  I se JS as my Primary Coding Language.  I've used node js , express to build my  Ecommerce website  & Url Shortner in whitch I've used NoSQL & Redis & Caching.

Note: 
# Pros & Cons of Nodejs, Express etc.
# Top 50 JS, Nodejs, ---------- interview Questions
# Fibonacci Numbers -> 0,1,1,2,3,5,8,13,21,34---------
# Odd numbers -> 1,3,5--------------------------------
# Natural numbers -> 1,2,3,4--------------------------
# Even Numbers -> 2,4,6,8-----------------------------
# Catalar Number -> 

fib(n){
    if(n==1|| n==2) retur 2 ;
    return fib(n-1)+ fib(n-2) 
}// TC exponential Time Complexity


Note=> Time Complexity != time taken 
-> TC of inbuilt function depends upon the input size. 
-> worst (O), Best(omega), Avg(theta)


=> function search(arr,x){
    for(let i=0; i<arr.length; i++){   // linear graph O(n)
        return "yes"
    }
}
return "no"

=> YT link for TC & SC -> Hitesh chaudhary short videos only, kunal kushwah
*/

// =================another class ============================>>>

// Q: find a number in an array = target :

for(let i=0; i<n ; i++){
    if (a[i]==target) return "true";
}

// Q: Find two numbers such that their sum is target :

for (let i=0; i<n; i++){
    for(let j=i+1; j<n; j++){
        if(a[i]+a[j]==target){
            return true;
            console.log(a[i], a[j])
        }
    }

}// TC: O(n^2)


// Q: Find Two numbers witha given sum in a sorted array:->

let arr = [1,3,9,13,20,30,70], target = 29

function checkForPairs(arr, target){
   for(i=0; i<arr.length; i++){
    if(arr[i]+ arr[j]==target){
        return true;
        if(arr[i]+arr[j]< target){
            i++;
        }else j--;
        return true;
    }
   }
}

// Q: check for palindrome: 

function checkPalindrome(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        if(a[i]!=a[j]) return false;
        i++;
        j--;
    }
    return true;
}


/*
Q: pair sum in unsorted array 
Q: pair sum in sorted array
Q: triplet sum
Q: palindrome 
Q: four sum

=>>> parts of array : subarray, subsequence, subset;
let arr = [10,8,5,4,2,3,1,7,6,9,4]

-> sub array : continuous subsequence are sub arrays
e.g. [4,2,3], [10,8,5] = (correct)
-> [10,8,4] = (wrong)

=> subsequence : same order = All subarrays are subsequence 
e.g. [10,4,2,3]  = correct
[10,4,3,2] - wrong

=> subset : All subsequences are subarrays 
e.g. [ 4,4] correct
[8,8] wrong
= [5], [6], [2,5]=[5,2]
*/

// Q:  Geeks for geeks = Max sum subarray of size k :
// find maximum sum of subarray  of size k :

let array=[2,7,3,4,1,9,5], k=3
let ans = Number.MIN_VALUE;
for(let i=0; i<n-k+1; i++){
    let currSubarraySum=0;
    for(let j =i; j<i+k; j++){
        currSubarraySum = currSubarraySum+a[j];
    }
    if(currSubarraySum>ans) ans=currSubarraySum;
}
return ans;

/*logic:-
1. form first window and store its sum in curr_sum;
1. start looping till window right edge reches end element;
(a). compare curr_sum & ans update and if curr_sum>ans;
(b). In each stop, substract value of first element in window and add the next comming element value in curr_sum;
3. when loop ends and will have the value of return ;

*/