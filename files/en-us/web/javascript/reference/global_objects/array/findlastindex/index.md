---
title: Array.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLastIndex
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.findLastIndex
---
{{JSRef}}

The **`findLastIndex()`** method returns the index of the last element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.

{{EmbedInteractiveExample("pages/js/array-findlastindex.html","shorter")}}

See also the {{jsxref("Array.findLast()", "findLast()")}} method, which returns the value of last element that satisfies the testing function (rather than its index).

## Syntax

```js
// Arrow function
findLastIndex((element) => { /* … */ } )
findLastIndex((element, index) => { /* … */ } )
findLastIndex((element, index, array) => { /* … */ } )

// Callback function
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)

// Inline callback function
findLastIndex(function(element) { /* … */ })
findLastIndex(function(element, index) { /* … */ })
findLastIndex(function(element, index, array){ /* … */ })
findLastIndex(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : A function used to test elements in the array.

    The function is called with the following arguments:

    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `findIndex()` was called upon.

    The callback must return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate an appropriate element has been found.
    The index of this element is then returned by `findLastIndex()`.

- `thisArg` {{optional_inline}}
  - : Optional object to use as `this` when executing `callbackFn`.

### Return value

The index of the last (highest-index) element in the array that passes the test.
Otherwise -1 if no matching element is found.

## Description

The `findLastIndex()` method executes the `callbackFn` function once for each element of the array in descending-index order until `callbackFn` returns a [truthy](/en-US/docs/Glossary/Truthy) value.
`findLastIndex()` then returns the index of that element and stops iterating through the array.
If `callbackFn` never returns a truthy value, `findLastIndex()` returns `-1`.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `findLastIndex()`, it will be used as the `this` value inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The `findLastIndex()` method does not mutate the array on which it is called, but the function provided to `callbackFn` can.
The elements processed by `findLastIndex()` are set _before_ the first invocation of `callbackFn`.
Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `findLastIndex()` begins.
- Elements that are assigned to indexes that have already been visited will not be revisited by `callbackFn`.
- Elements that are assigned to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `findLastIndex()` visits that element's index.
- Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

### Find the index of the last prime number in an array

The following example returns the index of the last element in the array that is a prime number, or `-1` if there is no prime number.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 12].findLast(isPrime)); // undefined, not found
console.log([4, 5, 7, 8, 9, 11, 12].findLast(isPrime)); // 11
```

### Find index using arrow function

The following example finds the index of a fruit using an arrow function.
Note that the result would be the same as if using {{jsxref("Array.findIndex()")}}.

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findLastIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
