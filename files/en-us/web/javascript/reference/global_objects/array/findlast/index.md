---
title: Array.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/Array/findLast
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - findLast
  - Polyfill
browser-compat: javascript.builtins.Array.findLast
---
{{JSRef}}

The **`findLast()`** method returns the value of the last element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, {{jsxref("undefined")}} is returned.

{{EmbedInteractiveExample("pages/js/array-findlast.html","shorter")}}

If you need to find:

- the _first_ element that matches, use {{jsxref("Array.findIndex", "find()")}}.
- the _index_ of the last matching element in the array, use {{jsxref("Array.findLastIndex", "findLastIndex()")}}.
- the _index of a value_, use {{jsxref("Array.prototype.indexOf()")}}.
  (It's similar to {{jsxref("Array.findIndex", "findIndex()")}}, but checks each element for equality with the value instead of using a testing function.)
- whether a value _exists_ in an array, use {{jsxref("Array.prototype.includes()")}}.
  Again, it checks each element for equality with the value instead of using a testing function.
- if any element satisfies the provided testing function, use {{jsxref("Array.prototype.some()")}}.

## Syntax

```js
// Arrow function
findLast((element) => { /* … */ } )
findLast((element, index) => { /* … */ } )
findLast((element, index, array) => { /* … */ } )

// Callback function
findLast(callbackFn)
findLast(callbackFn, thisArg)

// Inline callback function
findLast(function(element) { /* … */ })
findLast(function(element, index) { /* … */ })
findLast(function(element, index, array){ /* … */ })
findLast(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : A function used to test elements in the array.

    The function is called with the following arguments:

    - `element`
      - : The current element in the array.
    - `index`
      - : The index (position) of the current element in the array.
    - `array`
      - : The array that `findLast()` was called on.

    The callback must return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate an appropriate element has been found.
    The value of this element is returned by `findLast()`.

- `thisArg` {{optional_inline}}
  - : Object to use as {{jsxref("Operators/this", "this")}} when executing `callbackFn`.

### Return value

The value of the element in the array with the highest index value that satisfies the provided testing function; {{jsxref("undefined")}} if no matching element is found.

## Description

The `findLast()` method executes the `callbackFn` function once for each element of the array in descending-index order until `callbackFn` returns a [truthy](/en-US/docs/Glossary/Truthy) value.
`findLast()` then returns the value of that element and stops iterating through the array.
If `callbackFn` never returns a truthy value, `findLast()` returns {{jsxref("undefined")}}.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values.
This means it may be less efficient for sparse arrays, compared to methods that only visit assigned values.

If a `thisArg` parameter is provided to `findLast()`, it will be used as the `this` value inside each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The `findLast()` method does not mutate the array on which it is called, but the function provided to `callbackFn` can.
The elements processed by `findLast()` are set _before_ the first invocation of `callbackFn`.
Therefore:

- `callbackFn` will not visit any elements added to the array after the call to `findLast()` begins.
- Elements that are assigned to indexes that have already been visited will not be revisited by `callbackFn`.
- Elements that are assigned to indexes outside the range, will not be visited by `callbackFn`.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time `findLast()` visits that element's index.
- Elements that are {{jsxref("Operators/delete", "deleted")}} are still visited.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

### Find last object in an array matching on element properties

This example shows how you might create a test based on the properties of array elements.

```js
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'fish', quantity: 1 },
  { name: 'cherries', quantity: 5 }
];

// return true inventory stock is low
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
```

#### Using arrow function and destructuring

The previous example might be written using an arrow function and [object destructuring](/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring):

```js
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'fish', quantity: 1 },
  { name: 'cherries', quantity: 5 },
];

const result = inventory.findLast(({ quantity }) => quantity < 2);

console.log(result);
// { name: "fish", quantity: 1 }
```

### Find last prime number in an array

The following example finds the last element in the array that is a prime number (or returns {{jsxref("undefined")}} if there is no prime number):

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

### Nonexistent and deleted elements are visited

The following examples show that nonexistent and deleted elements _are_ visited, and that the value passed to the callback is their value when visited:

```js
// Declare array with no elements at indexes 2, 3, and 4
const array = [0, 1, , , , 5, 6];

// Shows all indexes, not just those with assigned values
array.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});

// Shows all indexes, including deleted
array.findLast((value, index) => {
  // Delete element 5 on first iteration
  if (index === 6) {
    console.log(`Deleting array[5] with value ${array[5]}`);
    delete array[5];
  }
  // Element 5 is still visited even though deleted
  console.log(`Visited index ${index} with value ${value}`);
});
// expected output:
// > "Visited index 6 with value 6"
// > "Visited index 5 with value 5"
// > "Visited index 4 with value undefined"
// > "Visited index 3 with value undefined"
// > "Visited index 2 with value undefined"
// > "Visited index 1 with value 1"
// > "Visited index 0 with value 0"
// > "Deleting array[5] with value 5"
// > "Visited index 6 with value 6"
// > "Visited index 5 with value undefined"
// > "Visited index 4 with value undefined"
// > "Visited index 3 with value undefined"
// > "Visited index 2 with value undefined"
// > "Visited index 1 with value 1"
// > "Visited index 0 with value 0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.findLast` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.findLastIndex()")}} – find last element and return its index
- {{jsxref("Array.prototype.includes()")}} – test whether a value exists in the array
- {{jsxref("Array.prototype.filter()")}} – remove all non-matching elements
- {{jsxref("Array.prototype.every()")}} – test all elements
- {{jsxref("Array.prototype.some()")}} – test until one element matches
