# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @jenny_carroll/lotide`

**Require it:**

`const _ = require('@jenny_carroll/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(...)`: returns the value of the first element of an array
- `tail(...)`: takes an array and returns a new array comprised of all elements except its head, without modifying the original array
- `countLetters(...)`: counts how many of each letter are in a string and outputs an object of keys showing that number in values
- `countOnly(...)`: accepts an array of strings and an array of strings to count and returns an object of key value pairs detailing that count
- `findKey(...)`: Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `findKeyByValue(...)`: takes in an object and a value and returns the key of that value
- `letterPositions(...)`: takes in a string and returns an object of array values showing the index of where each letter is located
- `map(...)`: takes in an array to map and a callback function, returns an array based on the result of the callback function on each element
- `takeUntil(...)`: accepts an array and a callback function and when the callback function reaches an element that returns true it returns a slice of the array up until that point.
- `without(...)`: accepts a source array and an items to remove array and returns a new array without those items
- `assertEqual(...)`: accepts actual and expected and returns a corresponding message if a comparison of the values evaluates to true or false
- `assertEqualArrays(...)`: accepts an actual array and expected array and returns a corresponding message if a comparison of the values evaluates to true or false
- `eqArrays(...)`: accepts two arrays and if they are identical returns a boolean representing that
- `assertObjectsEqual(...)`: accepts an actual object and expected object and returns a corresponding message if a comparison of the values evaluates to true or false
- `eqObjects(...)`: accepts two objects and if they are identical returns a boolean representing that
