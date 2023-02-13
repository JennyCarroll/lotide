const assertEqualArrays = require("../assertEqualArrays");

//TESTS
assertEqualArrays(
  ["Ariel", "Jenny"],
  ["Ariel", "Jenny", "Alykhan"]
); /* should fail*/
assertEqualArrays(["Ariel", "Jenny"], ["Ariel", "Jenny"]); /* should pass*/
