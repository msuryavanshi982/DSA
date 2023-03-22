let str = "codding";
/*
c=1
o=1
d=2
i=1
n=1
g=1
*/

// let map = new Map();
// for (let char of str) {
//   if (map.has(char)) {
//     map.set(char, map.get(char) + 1);
//   } else {
//     map.set(char, 1);
//   }
// }
// console.log([...map]);

// let mapp = new Set();

// Calculate the frequency of each word in the given string.

// Q :- Given a string str, the task is to find the frequency of each word in a string.
// Examples:
// Input: str = “Success is not the key of Happiness, Happiness is the key of success”.
// Output:
// Success :- 2
//  is :-2
// Not:-1
// The:-2
// Key:-2
// of  :- 2
//  Happiness:- 2

let s = "Success is not the key of Happiness, Happiness is the key of success";

s = s.replace(/[^\w\s]/g, "").toLowerCase().split(" ");
console.log(s);

let obj = {};
for (let key of s) {
  obj[key] = (obj[key] || 0) + 1;
}
console.log(obj);

// function countWordFrequency(str) {
//   str = str.replace(/[^\w\s]/g, "").toLowerCase();

//   const words = str.split(/\s+/);

//   const frequency = {};

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (frequency[word]) {
//       frequency[word]++;
//     } else {
//       frequency[word] = 1;
//     }
//   }

//   for (const [word, count] of Object.entries(frequency)) {
//     console.log(`${word}: ${count}`);
//   }
// }

// countWordFrequency("Success is not the key of Happiness, Happiness is the key of success")