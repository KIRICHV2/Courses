const findLongestWord = function (string) {
  let strSplit = string.split(" ");
  let len = strSplit.length;
  let longWord = strSplit[0];
  for (let value of strSplit) {
    if (longWord.length < value.length) longWord = value;
  }
  return longWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
