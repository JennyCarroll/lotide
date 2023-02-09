// const assertEqual = function(actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   }
// };
//above was my first try, below is my refactor

const assertEqual = function(actual, expected) {
  actual !== expected ? console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("this", "this");
assertEqual("Jenny", "Ariel");
assertEqual(3, 3);
assertEqual(4, 6);
