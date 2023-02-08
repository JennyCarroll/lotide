function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  for (let i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false
    }
    }
    return true
  }


const assertEqualArrays = function(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
}

assertEqualArrays(["Ariel", "Jenny"], ["Ariel", "Jenny", "Alykhan"]) /* should fail*/
assertEqualArrays(["Ariel", "Jenny"], ["Ariel", "Jenny"]) /* should pass*/