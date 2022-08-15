---
title: Array.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Array/filter
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.filter
---
{{JSRef}}

The **`filter()`** method creates a [shallow copy](/en-US/docs/Glossary/Shallow_copy) of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

{{EmbedInteractiveExample("pages/js/array-filter.html","shorter")}}

## Syntax

```js
// Arrow function
filter((element) => { /* … */ } )
filter((element, index) => { /* … */ } )
filter((element, index, array) => { /* … */ } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function(element) { /* … */ })
filter(function(element, index) { /* … */ })
filter(function(element, index, array){ /* … */ })
filter(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function is a predicate, to test each element of the array. Return a value that coerces to `true` to keep the element, or to `false` otherwise.

    The function is called with the following arguments:

    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array on which `filter()` was called.

- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

A [shallow copy](/en-US/docs/Glossary/Shallow_copy) of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned.

## Description

`filter()` calls a provided `callbackFn` function once for each element in an array, and constructs a new array of all the values for which `callbackFn` returns [a value that coerces to `true`](/en-US/docs/Glossary/Truthy). `callbackFn` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the `callbackFn` test are skipped, and are not included in the new array.

`callbackFn` is invoked with three arguments:

1. the value of the element
2. the index of the element
3. the Array object being traversed

If a `thisArg` parameter is provided to `filter`, it will be used as the callback's `this` value. Otherwise, the value `undefined` will be used as its `this` value. The `this` value ultimately observable by `callbackFn` is determined according to [the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`filter()` does not mutate the array on which it is called.

The range of elements processed by `filter()` is set before the first invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. If existing elements of the array are deleted in the same way they will not be visited.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

### Filtering out all small values

The following example uses `filter()` to create a filtered array that has all elements with values less than `10` removed.

```js
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### Find all prime numbers in an array

The following example returns all prime numbers in the array:

```js
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]
```

### Filtering invalid entries from JSON

The following example uses `filter()` to create a filtered JSON of all elements with non-zero, numeric `id`.

```js
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: 'undefined' },
];

let invalidEntries = 0;

function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

const arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5
```

### Searching in array

Following example uses `filter()` to filter array content based on search criteria.

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, 'ap')); // ['apple', 'grapes']
console.log(filterItems(fruits, 'an')); // ['banana', 'mango', 'orange']
```

### Affecting Initial Array (modifying, appending and deleting)

The following example tests the behavior of the `filter` method when the array is modified.

```js
// Modifying each word
let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += ' extra';
  return word.length < 6;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words.filter((word, index, arr) => {
  arr.push('new');
  return word.length < 6;
})

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const deleteWords = words.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
})

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.find()")}}
