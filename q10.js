// write a program to reverse the string using recursion

function reve(str) {
  if (str.length == 0) {
    return str;
  }
  return reve(str.slice(1)) + str[0];
}
console.log(reve("hello"));

// palindrom
function pallindrome(str) {
  if (str.length <= 1) {
    return str;
  }
  return pallindrome(str.slice(1)) + str[0];
}
console.log(pallindrome("hello"));

//2nd way for pallindrome
function pallindrome(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      if (array[i] != array[j]) {
        return "No";
      } else {
        return "Yes";
      }
    }
  }
  return "Yes";
}
//const result = pallindrome("dad")
console.log(pallindrome("mom"));
