const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");
//TESTS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"])); // => should FAIL
