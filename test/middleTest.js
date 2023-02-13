const middle = require("../middle");
const assertEqualArrays = require("../assertEqualArrays");

//TEST ASSERTIONS
assertEqualArrays(middle([1]), []);
assertEqualArrays(middle([1, 2]), []);
assertEqualArrays(middle([1, 2, 3]), [2]);
assertEqualArrays(middle([1, 2, 3, 4, 5]), [3]);
assertEqualArrays(middle([1, 2, 3, 4]), [2, 3]);
assertEqualArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
