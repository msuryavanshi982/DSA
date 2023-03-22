// find the maximum no. in an array and also find the time complexity.
let array = [1, 2, 3, 4, 5, 6, 7];
let max = 0;
for (let i = 0; i < array.length; i++) {
  for (j = 1; j < array.length; j++) {
    // console.log("2",array[i])
    // console.log("1",array[j])
    if (array[i] < array[j]) {
      max = array[j];
    }
  }
}
console.log(max);

// find the minimum in an array and also find the time complexity.

//sol-
let Array = [1, 2, 3, 4, 5, 6, 7];
let min = 0;
for (let i = Array.length - 1; i >= 0; i--) {
  for (let j = Array.length - 2; j >= 0; j--) {
    console.log("i", Array[i]);
    console.log("j", Array[j]);
    if (Array[i] < Array[j]) {
      min = Array[i];
    }
  }
}
console.log(min);
