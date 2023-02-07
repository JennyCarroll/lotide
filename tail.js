const assertEqual = function(actual, expected) {
  actual !== expected ? console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};
 

  

const tail = function(array) {
  const newArray = [];
  for (let i = 1; i < array.length; ++i) {
    newArray.push(array[i]);
  }
  return newArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

console.log(tail([1]));
console.log(tail([]));