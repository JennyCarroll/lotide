const eqArrays = require("./eqArrays");
const assertEqualArrays = require("./assertEqualArrays");

function middle(array) {
  //I find the length of the array parameter
  const arrayLength = array.length;
  //I declare a variable to house my output array
  const output = [];
  //I deal with argument arrays that are only one or two elements long
  if (arrayLength <= 2) {
    return output;
  }
  //I deal with argument arrays that have an even number of elements
  if (arrayLength % 2 === 0) {
    output.push(array[arrayLength / 2 - 1], array[arrayLength / 2]);
    return output;
  }
  //I deal with argument arrays that have an odd number of elements
  output.push(array[Math.floor(arrayLength / 2)]);
  return output;
}

module.exports = middle;

// middle will take in an array and return the middle-most element(s) of the given array.
//edge case For arrays with one or two elements, there is no middle. Return an empty array.
// edge case For arrays with odd number of elements, an array containing a single middle element should be returned.
// edge case For arrays with an even number of elements, an array containing the two elements in the middle should be returned
