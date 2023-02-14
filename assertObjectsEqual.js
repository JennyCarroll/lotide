const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};

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

const assertEqual = function (actual, expected) {
  actual !== expected
    ? console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const eqObjects = function (object1, object2) {
  let array1 = Object.entries(object1);
  let array2 = Object.entries(object2);
  if (array1.length !== array2.length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (!object2[key]) {
      return false;
    }
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//will take in two objects and console.log an appropriate message to the console.

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  eqObjects(actual, expected)
    ? console.log(
        `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
      )
    : console.log(
        `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
      );
};
module.exports = assertObjectsEqual;

// assertObjectsEqual(shirtObject, anotherShirtObject)
// assertObjectsEqual(shirtObject, longSleeveShirtObject)
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject)
// assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject)
