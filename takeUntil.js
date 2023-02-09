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

// The function will return a "slice of the array with elements taken from the beginning." 
// It should keep going until the callback/predicate returns a truthy value.

// To keep things simple, the callback should only be provided one value: The item in the array.

const takeUntil = function(array, callback) {
  let output = [];
  let condition = false;
  for (let element of array) {
    if (callback(element)) {
      condition = true
      break
    }
    if (!condition) {
      output.push(element)
    }
    condition = false
  }
  return output
}

const myArray = ["love", "is", "dead"]
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

console.log(takeUntil(myArray, x => x === "is"))
assertEqualArrays(takeUntil(myArray, x => x === "is"), ["love"])
assertEqualArrays(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ])
assertEqualArrays(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ])

