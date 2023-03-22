// checking sum zero:=>



function getSumPairZero(arr) {
    for (let number of arr) {
        for (let j = 1; j < arr.length; j++) {
            if (number + arr[j] === 0) {
                return [number, arr[j]]
            }
        }
    }
}

let result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);

console.log(result);


//===============optimize solution =======>>>>

let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8]

function findSumPair(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum == 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

let ans = findSumPair(arr);
console.log(ans);

//========================================================>
// String Anagram : -> 'hello' === 'llheo'

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    let counter = {}

    for (let letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1;
        //console.log(counter[letter])
    }
    for (let items of str2) {
        if (!counter[items])
            return false;
        counter[items] -= 1
    }
    return true;
}


let answer = isAnagram('hello', 'heoli');
console.log(answer);

//==========================================>>>>

// count Unique Numbers:->
let array = [1, 1, 2, 3, 4, 5, 6, 7, 8, 3, 3, 4, 8, , 4, 2, 21];

function countUnique(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] != array[j]) {
                i++;
                array[i] = array[j]
            }
        }
        return i + 1;
    } else {
        throw new Error(" Array is Empty")
    }
}

let final = countUnique(array);
console.log(final);

//====================================================>>>

// count largest sum of consecutive digits:=>
//  total number-num+1;

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], num = 4;

function findLargest(arr1, num) {
    if (num < arr1) throw new Error("number shouldn't be larger than length of array");
    else {
        let max = 0;
        for (let i = 0; i < arr1.length - num + 1; i++) {
            let temp = 0;
            for (let j = 0; j < num; j++) {
                temp += arr1[i + j]
            }
            if (temp > max)
                max = temp;
        }
        return max;
    }
}
const res1 = findLargest(arr1, num);
console.log(res1);

//==================================================>>>>
// Divide and conquerer Technique:=>
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function searchAlgo(arr2, number) {
    let min = 0;
    let max = arr2.length - 1;
    while (min <= max) {
        let midIndex = Math.floor((min + max) / 2);
        if (arr2[midIndex] < number){ 
            min = midIndex+1;
           // return min 
        }
        else if (arr2[midIndex] > number) {
            max = midIndex-1;
            // return max;
        }
        else {
            return midIndex;
        }
    }
    return -1;
}

//=======================================================>>>>
// checking square in another array:=>

let ar1 = [1,2,3,4], ar2 = [1,4,9,16]

function isSquare(ar1,ar2){
    for(let i=0; i<ar1.length; i++){
         isSquare=false;
        for(let j=0; j<ar2.length; j++){
            if(ar1[i]*ar1[i]==ar2[j]){
                isSquare = true;
            }
            if(j == ar2.length-1){
                if(!isSquare)
               return false;
            }
        }
    }
    return true;
}

let rs = isSquare(ar1, ar2);
console.log(rs);

//=========================================>>>>

let res2 = searchAlgo(arr2, 3);
console.log(res2);


var conqure = (arr1, arr2) => {
    let res = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i])
        i++

    }
    while (j < arr2.length) {
        res.push(arr2[j])
        j++

    }
    return res
}
function divide(nums) {

    let n = nums.length
    if (n == 1) return nums

    let mid = Math.floor(0 + (n - 0) / 2)

    let l = divide(nums.slice(0, mid))
    let r = divide(nums.slice(mid))

    return conqure(l, r)

}
var findKthLargest = function (nums, k) {

    let result = divide(nums)
    console.log(result)
    // for(let i=result.length-1;i>result.length-k;i--){
    //     if(result[i]==result[i-1]){
    //       k++
    //     }
    // } return result[result.length-k]
    for (let i = 0; i < k; i++) {

        if (result[i] == result[i + 1]) {
            k++
        }
    }
    return result[k - 1]//2

};

console.log(findKthLargest([1, 2, 3, 4, 5, 67], 2))//1,2,3,5,5,5,6,7//1,2,3,4,5,6,7