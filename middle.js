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

function assertEqualArrays(actual, expected) {
  eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

function middle(array) {
  //I find the length of the array parameter
  const arrayLength = array.length
  //I declare a variable to house my output array
  const output = []
  //I deal with argument arrays that are only one or two elements long
  if (arrayLength <= 2) {
    return output;
  }
  //I deal with argument arrays that have an even number of elements
  if (arrayLength % 2 === 0) {
    output.push((array[((arrayLength / 2) -1)]), (array[arrayLength / 2]))
    return output;
  }
  //I deal with argument arrays that have an odd number of elements
  output.push((array[Math.floor(arrayLength /2)]))
  return output;
}

// middle will take in an array and return the middle-most element(s) of the given array.
//edge case For arrays with one or two elements, there is no middle. Return an empty array.
// edge case For arrays with odd number of elements, an array containing a single middle element should be returned.
// edge case For arrays with an even number of elements, an array containing the two elements in the middle should be returned
//test assertions:
assertEqualArrays(middle([1]), [])
assertEqualArrays(middle([1, 2]), [])
assertEqualArrays(middle([1, 2, 3]), [2])
assertEqualArrays(middle([1, 2, 3, 4, 5]), [3])
assertEqualArrays(middle([1, 2, 3, 4]), [2, 3])
assertEqualArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])