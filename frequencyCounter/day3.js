//=========Frequency counters=======:->
/*This pattern uses objects or sets to collect values/frequencies of values . 
This can often ovoid the need for nested loops of O(N^2) operations with arrays / strings. */

/*
Eg: "pattern";
frequencies of every character:=>
p-1
a-1
t-2
e-1
r-1
n-1

=> In Array frequency :=>
eg: [1,2,1,8,9,7,8]
1-2
2-1
7-1
8-2
9-1

*/

// Eg: Traverse through array elements and count frequencies:-> 
//Brute force approach => just interate and count the frequencies;
arr = [1, 3, 2, 1, 1, 2, 3];
for (let i = 0; i < n; i++) {
    if (visited[i] == true) continue;
    // count frequency
    let count = 1;
    for (let j = i; j < n; j++) {
        if (arr[i] == arr[j]) {
            visited[j] = true;
            count++
        }
    }
    console.log(arr[i] + " " + count);
} //TC= O(n^2)

//Optimize approach=>
let frequencyCounter = {}

arr2 = [1, 2, 3, 4, 3, 4, 2, 1, 1, 1]
for (let vol of arr2) {
    if (frequencyCounter[val])
        frequencyCounter[val]++;
    else
        frequencyCounter[val] = 1;
}

/*
Eg: write a function called same, which accepts two array, The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same :->
same([1,2,3], [4,1,9]) // true 
same([1,2,3], [1,9]) // false 
same([1,2,1], [4,4,1]) // false
 */

function same(arr1, arr2) {
    if (arr1.length !== arr2.length.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex, 1)
    }
    return true;
}// TC= O(N^2);

// Optimize approach:=>

function same(arr1, arr2){
    if(arr1.length !==arr2.length){
        return false;
    }
    let frequencyCounter1={}
    let frequencyCounter2={}
    for(let vol of arr1){
        frequencyCounter1[vol]= (frequencyCounter1[vol] || 0)+1
    }
    for(let vol of arr2){
        frequencyCounter2[vol]= (frequencyCounter2[vol] || 0)+1
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}// TC= O(N) and SC= O(N)
//=========================================================>>>

/* Ex: Anagrams:=> Given two strings, write a function to determine if the string is an anagram of the first. An anagram is a word , phrase , or name formed by rearranging the letters of another , such as cinema, formed from iceman.
i.e.=> They  have same characters and frequency of each character should be same.
=>> examples :->

validAnagram(",") // true
validAnagram("aaz", zaa) // false
validAnagram("anagram", "nagaram") // true
validAnagram("rat", "car") // false
validAnagram("awsome", "awsom") // false
validAnagram("qwerty", "qeqwrt") // true
validAnagram("texttwisttime", "timetwisttext") // true

*/

//=> Brute Force Approach: 
function areAnagram(str1, str2){
    // get length of both strings 
    let n1=str1.length; // TC= O(nlogn)
    let n2= str2.length;

    // If length of both strings is not same,  then they canot be anagram
    if(n1!=n2)
    return false;
    // sort both strings
    str1.sort();
    str2.sort();

    // compare sorted strings 
    for(let i=0; i<n1; i++){
        if(str1[i]!=str2[i])
        return false;
    }
    return true;
}
//= > Optimize approach:=>

function areAnagram(str1, str2){
    // create 2 count arrays and initialize all values as 0;
    let count1= new Array(26);
    let count2= new Array(26);

    for(let i=0; i<No_Of_CHARS; i++){
        count1[i] =0;
        count2[i] =0;
    }
    let i;
    // for each character in input strings,
    // increament count in the corresponding
    // count array

    for(i=0; i<str1.length && i<str2.length; i++){
        count[str1[i].charCodeAt(0)]++;
        count[str2[i].charCodeAt(0)]++;
    }

    // if both strings are of different length , removing this condition will make the program fail for strings like "aaca" and "aca"
    if(str1.length !=str2.length)
    return false;
    // compare count arrays
    for(i=0; i<NO_OF_CHARS; i++){
        if(count[i]!= count2[i])
        return false 
    }
    return true;
}
//================================================>>>
// frequency =>

A=[3,4,3,6], B=[16,36,9,9]
{
ObjA={
    "3":2,
    '4':1,
    "6":1
}

ObjB={
    "16":1,
    "36":1,
    "9":2
}

for(let i in A){
    ObjA[A[i]]+=1
}
for(let i in B){
    ObjB[B[i]]+=1
}
for(key in ObjA){
    ObjB[key*key]!=ObjA[key]
    return false
}
return true ;
}