const assertEqual = function (actual, expected) {
  actual !== expected
    ? console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// The function should return an object that details how many of each instance of
// each string were found in the allItems array of strings.

const countOnly = function (allItems, itemsToCount) {
  let output = {};
  for (let item of allItems) {
    // console.log("item:", item);
    for (let itemCount in itemsToCount) {
      // console.log("itemCount:", itemCount)
      if (item === itemCount) {
        if (itemsToCount[itemCount] === true) {
          // console.log("itemsToCount[itemCount]:", itemsToCount[itemCount])
          output[itemCount] = output[itemCount] + 1 || 1;
          // console.log(output)
        }
      }
    }
  }
  console.log(output);
};

module.exports = countOnly;

// only keys which have a truthy value should be counted in the resulting object.
// All other strings (either set to false or not included at all in the object) should not be counted.
// That said, if a particular string is meant to be counted but does not exist in the input array
// (like "f" in the example above), it also does not have to be included in the final count.

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe",
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);
