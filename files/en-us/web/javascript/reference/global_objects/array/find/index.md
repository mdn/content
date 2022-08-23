---
title: Array.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Array/find
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.find
---
{{JSRef}}

The `find()` method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, {{jsxref("undefined")}} is returned.

{{EmbedInteractiveExample("pages/js/array-find.html","shorter")}}

- If you need the **index** of the found element in the array, use {{jsxref("Array.findIndex", "findIndex()")}}.
- If you need to find the **index of a value**, use {{jsxref("Array.prototype.indexOf()")}}.
  (It's similar to {{jsxref("Array.findIndex", "findIndex()")}}, but checks each element for equality with the value instead of using a testing function.)
- If you need to find if a value **exists** in an array, use {{jsxref("Array.prototype.includes()")}}.
  Again, it checks each element for equality with the value instead of using a testing function.
- If you need to find if any element satisfies the provided testing function, use {{jsxref("Array.prototype.some()")}}.

## Syntax

```js
// Arrow function
find((element) => { /* … */ } )
find((element, index) => { /* … */ } )
find((element, index, array) => { /* … */ } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function(element) { /* … */ })
find(function(element, index) { /* … */ })
find(function(element, index, array){ /* … */ })
find(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function to execute on each value in the array.

    The function is called with the following arguments:

    - `element`
      - : The current element in the array.
    - `index`
      - : The index (position) of the current element in the array.
    - `array`
      - : The array that `find` was called on.

    The callback must return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate a matching element has been found.

- `thisArg` {{optional_inline}}
  - : Object to use as {{jsxref("Operators/this", "this")}} inside `callbackFn`.

### Return value

The first element in the array that satisfies the provided testing function.
Otherwise, {{jsxref("undefined")}} is returned.

## Description

The `find` method executes the `callbackFn` function once for each index of the array until the `callbackFn` returns a [truthy](/en-US/docs/Glossary/Truthy) value.
If so, `find` immediately returns the value of that element. Otherwise, `find` returns {{jsxref("undefined")}}.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `find`, it will be used as the `this` value inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The `find` method does not mutate the array on which it is called, but the function provided to `callbackFn` can.
If so, the elements processed by `find` are set _before_ the first invocation of `callbackFn`.
Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `find` begins.
- Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `find` visits that element's index.
- Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

### Find an object in an array by one of its properties

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) {
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

#### Using arrow function and destructuring

```js
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const result = inventory.find(({ name }) => name === 'cherries');

console.log(result) // { name: 'cherries', quantity: 5 }
```

### Find a prime number in an array

The following example finds an element in the array that is a prime number (or returns {{jsxref("undefined")}} if there is no prime number):

```js
function isPrime(element, index, array) {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

The following examples show that nonexistent and deleted elements _are_ visited,
and that the value passed to the callback is their value when visited:

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0,1,,,,5,6];

// Shows all indexes, not just those with assigned values
array.find((value, index) => {
  console.log('Visited index ', index, ' with value ', value);
});

// Shows all indexes, including deleted
array.find((value, index) => {
  // Delete element 5 on first iteration
  if (index === 0) {
    console.log('Deleting array[5] with value ', array[5]);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ', index, ' with value ', value);
});
// expected output:
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value 5
// Visited index 6 with value 6
// Deleting array[5] with value 5
// Visited index 0 with value 0
// Visited index 1 with value 1
// Visited index 2 with value undefined
// Visited index 3 with value undefined
// Visited index 4 with value undefined
// Visited index 5 with value undefined
// Visited index 6 with value 6
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findIndex()")}} – find and return an index
- {{jsxref("Array.prototype.includes()")}} – test whether a value exists in the array
- {{jsxref("Array.prototype.filter()")}} – remove all non-matching elements
- {{jsxref("Array.prototype.every()")}} – test all elements
- {{jsxref("Array.prototype.some()")}} – test until one element matches
