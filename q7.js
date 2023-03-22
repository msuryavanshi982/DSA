//reverse string
// function reverseString(s) {
//   let str = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     str = str + s[i];
//     console.log(str)
//   }
//   return str;
// }
// console.log(reverseString("hello"));
// time complexity is o(n)

//part 2nd of reverse string second method
//by using inbuilt method

//sol-
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

//practice :->

let s = "galaxy";
let str = "";
for (let i = s.length - 1; i >= 0; i--) {
  str = str + s[i];
}
console.log(str);

let s1 = s.split("").reverse().join("");
console.log(s1);
// question related to dsa for interview
// 1.find the minimum and maximum no. in an array and also find the time complexity.
// let arr = [2, 3, 31, 1, 2, 35];
// let max$min = (arr) => {
//   let min = Infinity;
//   let max = 0;
//   let i = 0;
//   while (i < arr.length) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//     if (min > arr[i]) {
//       min = arr[i];
//     }
//     i++;
//   }
//   return [min, max];
// };

// let res = max$min(arr);
// console.log(res);

// 2.rearrange the string in order of length of words in regular expression.
// 3.add upto second
// 4.find the prime no. in an array.
let arr = [2, 3, 4, 5, 6, 2, 7, 8];
let findPrime = (arr) => {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j == 0) {
        flag = false;
      }
    }
    if (flag == true) {
      array.push(arr[i]);
    }
  }
  return array;
};

let rs = findPrime(arr);
console.log(rs);
// 5.total no's of halves.
// 6.find if no. is present in an array or not.
// 7.find the maximum occurence of the character in an array.
// 8

function intersect(arr1, arr2) {
  return arr1.filter((ele) => arr2.include(ele));
}

function intersection(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

console.lof(intersection([2, 3, 4, 5, 6, 4, 7][(3, 2, 4, 5, 6, 7, 8)]));

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let intersection = arr1.filter((value) => arr2.includes(value));

console.log(intersection); // Output: [3, 4]

let a = [3, 2, 4, 5, 6];
let b = [3, 4, 6, 7, , 8];

let intersect = a.filter((value) => b.includes(value));
console.log(intersect);

function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWord("hello my name is meenakshi"));

function findLongestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("my name is yogita"));

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i== 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(8));



let x= [2,3,4,5,6,7];
let y =[32,1,324,45,6,7,78];

let intersect = x.filter((value)=>y.includes(value));
console.log(intersect);