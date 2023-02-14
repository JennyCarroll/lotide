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

// Our map function will take in two arguments:
// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];
const dogs = ["Ariel", "Biggie", "randomCat"];

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;
// Since map is passing in the original item to it,
// our test code which calls map knows to pass in a callback function
// which accepts that one and only argument.

// const results1 = map(words, word => word[0]);
// const results2 = map(dogs, word => word.length)

// assertEqualArrays(results1, [ 'g', 'c', 't', 'm', 't' ])
// assertEqualArrays(results2, [5, 6, 9])
