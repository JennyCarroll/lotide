const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

function eqArrays(array1, array2) {
  for (let i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false
    }
    }
    return true
  }



assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"])) // => should FAIL
