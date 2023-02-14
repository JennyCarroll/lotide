function eqArrays(source, itemsToRemove) {
  if (source.length !== itemsToRemove.length) {
    return false;
  }
  for (let i = 0; i < source.length; ++i) {
    if (source[i] !== itemsToRemove[i]) {
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

function without(sourceArray, itemsToRemoveArray) {
  //I created an empty array to house my new array
  let newArray = [];
  //I created a variable that is a boolean
  let shouldIPush = true;
  //I looped through the source array
  for (let source of sourceArray) {
    //I nested a loop through the remove array
    for (let remove of itemsToRemoveArray) {
      //I created a conditional statement so that if the source equals remove the boolean equal false
      if (source === remove) {
        shouldIPush = false;
      }
    }
    //now that I am outside of my nested for loop, I created a conditional statement so that if my boolean variable is true, my source element gets pushed to my new array
    if (shouldIPush === true) {
      newArray.push(source);
    }
    //and I reassign my boolean variable to true before jumping back in the first for loop
    shouldIPush = true;
  }
  return newArray;
}
module.exports = without;

// console.log(without([1, 2, 3], [1]), [2, 3]);
// assertEqualArrays(without([1, 2, 3], [1]), [2, 3]); //should be true
// assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // should be true

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"]));
// console.log(words);// no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//create a function that returns a new array without modifying the old array
//create a function that accepts two parameters
// use assertArraysEqual() to create test cases for various senarios
//write a test case to make sure the original array is not modified
