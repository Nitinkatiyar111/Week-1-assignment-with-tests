/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  const charMap1 = {};
  const charMap2 = {};

  for (let char of lowerStr1) {
    charMap1[char] = (charMap1[char] || 0) + 1;
  }

  for (let char of lowerStr2) {
    charMap2[char] = (charMap2[char] || 0) + 1;
  }

  for (let char in charMap1) {
    if (charMap1[char] !== charMap2[char]) {
      return false;
    }
  }

  for (let char in charMap2) {
    if (charMap1[char] === undefined) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
