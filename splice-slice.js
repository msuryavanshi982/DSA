let strl ="functionup";
    let res=strl.slice(3);
    console.log(res)

    // let Ar=[1,2,3,5]

    // let reuslt = Ar.splice(0,3);
    // console.log(reuslt)
    // console.log(Ar)
    
    // let reult = Ar.slice(0,3);
    // console.log(reult)
    
    // let arr = ['foo', 'bar', 10, 'qux'];

// arr.splice(<index>, <steps>, [elements ...]);

arr.splice(1, 1);			// Removes 1 item at index 1
// => ['foo', 10, 'qux']

arr.splice(2, 1, 'tmp');	// Replaces 1 item at index 2 with 'tmp'
let aRr= ['foo', 10, 'tmp']

aRr.splice(0,1, 'x', 'y');	// Inserts 'x' and 'y' replacing 1 item at index 0
// => ['x', 'y', 10, 'tmp']
console.log(aRr)

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// array.splice(index, howmany to remove, item1, ....., itemX)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)
//Banana,Orange,Lemon,Kiwi,Mango
    
//The slice() method extracts a section of a string and returns 
//it as a new string, without modifying the original string.

// same in array but you select elements not characters  


const stR = 'The quick brown fox jumps over the lazy dog.';

console.log(stR.slice(31));
// expected output: "the lazy dog."

console.log(stR.slice(4, 19));
// expected output: "quick brown fox"

console.log(stR.slice(-4));
// expected output: "dog."

console.log(stR.slice(-9, -5));
// expected output: "lazy"

console.log(stR.slice(0, 2)); 
// expected output: "the"
// Up to and including the last index!!!
// Different for python. 

slice(beginIndex)
slice(beginIndex, endIndex)

// beginIndex: The index at which to begin extraction
// endIndex: This index will not be included.
// Return: A new string containing the extracted section.

let str1 = 'The morning is upon us.'
// the length of str1 is 23.
let str2 = str1.slice(1, 8) // OUTPUT: he morn
let str3 = str1.slice(4, -2)// OUTPUT: morning is upon u
let str4 = str1.slice(12) // OUTPUT: is upon us.
let str5 = str1.slice(30) // OUTPUT: ""

// NEGATIVES
//beginIndex is negative: 
// it is treated as (str.length + beginIndex)
//endIndex is negative: 
// it is treated as (str.length + endIndex)