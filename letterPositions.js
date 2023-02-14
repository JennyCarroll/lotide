function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertEqualArrays = function (actual, expected) {
  eqArrays(actual, expected)
    ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const letterPositions = function (sentence) {
  const results = {};
  const lowerSentence = sentence.toLowerCase();
  for (const index in lowerSentence) {
    let key = lowerSentence[index];
    if (key !== " ") {
      if (!results[key]) {
        results[key] = [];
      }
      results[key].push(index);
    }
  }
  return results;
};

module.exports = letterPositions;
// assertEqualArrays(letterPositions("lighthouse").e, ["9"]);
// assertEqualArrays(letterPositions("lighthouse labs").e, ["9"]);
