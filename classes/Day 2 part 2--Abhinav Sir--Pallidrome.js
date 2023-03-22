function reverse(s) {
  s = s.toLowerCase().replace(/[^0-9a-z]/g, "");
  if (s.length == 1) return s;
  return reverse(s.slice(1));
}


var isPalindrome = function (s) {
    if(s.length==0||s.length==1)return true
    if (s[0] != s[s.length - 1]) return false;
    return isPalindrome(s.slice(1,-1))
};


console.log(isPalindrome('madam'))