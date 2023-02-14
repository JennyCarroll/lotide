const assertEqual = function (actual, expected) {
  actual !== expected
    ? console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const countLetters = function (sentence) {
  const lowerSentence = sentence.toLowerCase();
  let count = {};
  for (const letter of lowerSentence) {
    if (letter !== " ") {
      count[letter] = count[letter] + 1 || 1;
    }
  }
  return count;
};

module.exports = countLetters;

// console.log(countLetters("Jenny"))
// console.log(countLetters("Jenny is cool"))

// //this fails because it is supposed to compaire primitive data types
// assertEqual(countLetters("Jenny"), {j: 1, e: 1, n: 2, y: 1})
// assertEqual(countLetters("Jenny is cool"), { j: 1, e: 1, n: 2, y: 1, i: 1, s: 1, c: 1, o: 2, l: 1 })
