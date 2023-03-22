// String Anagram
// 'hello' -> 'llheo'
// condition
// length check(for both strings)
// String 'hello' , 'llheo' anagram = hello llheo
// { h:0, e:0, l:0; o:0} [hello] = [llheo]

// function isAnagram(string1, string2) {
//   if (string1.length !== string2.length) {
//     return false;
//   }
//   let counter = {}; //mapping or hashing
//   for (let letter of string1) {
//     counter[letter] = (counter[letter] || 0) + 1;
//   }
//   for (let items of string2) {
//     if (!counter[items]) {
//       return false;
//     }
//     counter[items] -= 1;
//   }
//   return true;
// }
// const check = isAnagram("hello", "llheo");
// console.log(check);

// because we are not using nested loop so we dont get quadratic time complexity.
// hence we get linear time complexity i.e. o(n)

// practice:=>>>

// let anagram = (str1, str2)=>{
//   if(str1.length !=str2.length) return false;
//   let count={}
//   for(let char of str1){
//     count[char]=(count[char]||0)+1
//   }
//   for(let item of str2){
//     if(!count[item]){
//       return false;
//     }
//     count[item]-=1;
//   }
//   return true;
// }

// console.log(anagram("hello", "lelho"))

// let str1 = "hello", str2 = "llooh";
// let anagram = (str1, str2)=>{
//   if(str1.length!= str2.length) return false;

//  let s1= str1.split("").sort().join("")
//  let s2 = str2.split("").sort().join("")
// console.log(s1, s2)
//  if(s1===s2) return true;
//  return false;
// let obj ={};
// let obj1={}
// for(let char of str1){
//   obj[char]= (obj[char]||0)+1
// }
// for(let item of str2){
//   obj1[item]= (obj1[item]||0)+1
// }
// for(let sameChar in obj){
//   if(obj1[sameChar]!= obj[sameChar])
//   return false
// }
// return true;
// }

// console.log(anagram(str1, str2))

// practice :->

let anagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  let obj = {};
  for (let char of s1) {
    obj[char] = (obj[char] || 0) + 1;
  }
  for (let chars of s2) {
    if (!obj[chars]) {
      return false;
    } else {
      obj[chars] = (obj[chars] || 0) - 1;
    }
  }
  return true;
};

let res = anagram("hello", "ollhe");
console.log(res);
