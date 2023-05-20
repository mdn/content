---
title: TypedArray.prototype.findLast()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLast
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.findLast
---

{{JSRef}}

The **`findLast()`** method iterates a [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) in reverse order and returns the value of the first element that satisfies the provided testing function.
If no values satisfy the testing function, {{jsxref("undefined")}} is returned.

See also the {{jsxref("TypedArray.findLastIndex()", "findLastIndex()")}} method, which returns the index of the found element instead of its value.

{{EmbedInteractiveExample("pages/js/typedarray-findlast.html")}}

## Syntax

```js-nolint
findLast(callbackFn)
findLast(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate a matching element has been found, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `findLast()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

The element in the typed array with the highest index value that satisfies the provided testing function; {{jsxref("undefined")}} if no matching value is found.

## Description

The `findLast()` method executes the `callbackFn` function once for each index of the typed array in descending-index order until the `callbackFn` returns a [truthy](/en-US/docs/Glossary/Truthy) value.
`findLast()` then returns the value of that element and stops iterating through the typed array.
If `callbackFn` never returns a truthy value, `findLast()` returns {{jsxref("undefined")}}.

`callbackFn` is invoked with three arguments: the value of the element, the index of the element, and the typed array object being traversed.

If a `thisArg` parameter is provided to `findLast()`, it will be used as the `this` for each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The `findLast()` method does not mutate the typed array on which it is called, but the function provided to `callbackFn` can.

The range of elements processed by `findLast()` is set before the first invocation of `callbackFn`.
Elements that are appended to the typed array after the call to `findLast()` begins will not be visited by `callbackFn`.
If an existing, unvisited element of the typed array is changed by `callbackFn`, its value passed to the visiting `callbackFn` will be the value at the time that `findLast()` visits that element's index.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

### Find a prime number in a typed array

The following example finds the value of the last element in the typed array that is a prime number (or returns {{jsxref("undefined")}} if there is no prime number).

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

let uint8 = new Uint8Array([4, 6, 8, 12]);
console.log(uint8.findLast(isPrime)); // undefined (no primes in array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLast(isPrime)); // 11
```

### All elements are visited and may be modified by the callback

The following examples show that all elements _are_ visited, and that the value passed to the callback is their value when visited:

```js
// Declare array with no elements at indexes 2, 3, and 4
// The missing elements will be initialized to zero.
const uint8 = new Uint8Array([0, 1, , , , 5, 6]);

// Iterate through the elements in reverse order.
// Note that all elements are visited.
uint8.findLast((value, index) => {
  console.log(`Visited index ${index} with value ${value}`);
});

// Shows all indexes, including deleted
uint8.findLast((value, index) => {
  // Modify element 3 on first iteration
  if (index === 6) {
    console.log("Set uint8[3] to 44");
    uint8[3] = 44;
  }
  // Element 3 is still visited but will have a new value.
  console.log(`Visited index ${index} with value ${value}`);
});
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 0
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
// Set uint8[3] to 44
// Visited index 6 with value 6
// Visited index 5 with value 5
// Visited index 4 with value 0
// Visited index 3 with value 44
// Visited index 2 with value 0
// Visited index 1 with value 1
// Visited index 0 with value 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.findLast()` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
