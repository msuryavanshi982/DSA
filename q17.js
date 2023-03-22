// Palindrome by technical suneja

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
      left++;
      right--;
    } else {
      return true;
    }
  }
}
const result = isPalindrome("level");
console.log(result);

//SAHI WALA PALINDROME
function isPali(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }
  return true;
}
console.log(isPali("el"));

// 2nd type of palindrome
function isPalindrome(str) {
  let reverse = str.split("").reverse().join("");
  return str.toLowerCase() === reverse.toLowerCase();
}
console.log(isPalindrome("level"));
