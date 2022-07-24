---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.findIndex
---
{{JSRef}}

The **`findIndex()`** method returns the index of the first element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.

{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}

See also the {{jsxref("Array.find", "find()")}} method, which returns the first element that satisfies the testing function (rather than its index).

## Syntax

```js
// Arrow function
findIndex((element) => { /* … */ } )
findIndex((element, index) => { /* … */ } )
findIndex((element, index, array) => { /* … */ } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function(element) { /* … */ })
findIndex(function(element, index) { /* … */ })
findIndex(function(element, index, array){ /* … */ })
findIndex(function(element, index, array) { /* … */ }, thisArg)
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
    The index of this element is then returned by `findIndex()`.

- `thisArg` {{optional_inline}}
  - : Optional object to use as `this` when executing `callbackFn`.

### Return value

The index of the first element in the array that passes the test. Otherwise, `-1`.

## Description

The `findIndex()` method executes the `callbackFn` function once for every index in the array, in ascending order, until it finds the one where `callbackFn` returns a {{Glossary("truthy")}} value.

If such an element is found, `findIndex()` immediately returns the element's index.
If `callbackFn` never returns a truthy value (or the array's `length` is `0`), `findIndex()` returns `-1`.

> **Note:** Unlike other array methods such as {{jsxref("Array.some()")}}, `callbackFn` is run even for indexes with unassigned values.

`callbackFn` is invoked with three arguments:

1. The value of the element
2. The index of the element
3. The Array object being traversed

If a `thisArg` parameter is passed to `findIndex()`, it will be used as the `this` inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The range of elements processed by `findIndex()` is set before the first invocation of `callbackFn`.
Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`.
`callbackFn` will not process the elements appended to the array after the call to `findIndex()` begins.
If an existing, unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `findIndex()`
visits the element's index.
Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

### Find the index of a prime number in an array

The following example returns the index of the first element in the array that is a prime number, or `-1` if there is no prime number.

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

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

### Find index using arrow function

The following example finds the index of a fruit using an arrow function:

```js
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex((fruit) => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]); // blueberries
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.indexOf()")}}
