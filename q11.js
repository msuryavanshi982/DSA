//capitalize (['abc','pqr','xyz'])
function capitalize(str) {
  if (str.length == 0) {
    return [];
  }
  let result = [];
  let s = str[0][0].toUpperCase() + str[0].slice(1);
  result.push(s);
  return result.concat(capitalize(str.slice(1)));
}
console.log(capitalize(["abc", "pqr", "xyz"]));

// reverse each word
function reverseEach(str) {
  if (str.length == 0) return "";
  return reverseEach(str.slice(1)) + str[0];
}
console.log(reverseEach("they are palying a game"));

// reverse the word of sentence
function reverse(str) {
  if (str.length === 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}
function reverseSenenceByWord(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = reverse(words[i]);
  }
  return words.join(" ");
}
console.log(reverseSenenceByWord("I am Jyoti Pratap"));

// // reverse sentence with reverse word
function reverse(str) {
  if (str.length == 0) return "";
  return reverse(str.slice(1)) + str[0];
}
function reverseSentenceWithWord(str) {
  // let word = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = reverse(str[i]);
  }
  return str.join(" ");
}
console.log(reverseSentenceWithWord(["I am Jyoti Pratap tiwari"]));
