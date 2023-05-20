---
title: TypedArray.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.findLastIndex
---

{{JSRef}}

The **`findLastIndex()`** method iterates a [typed array](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) in reverse order and returns the index of the first element that satisfies the provided testing function.
If no values satisfy the testing function, -1 is returned.

See also the {{jsxref("TypedArray.findLast()", "findLast()")}} method, which returns the value of the found element rather than its index.

{{EmbedInteractiveExample("pages/js/typedarray-findlastindex.html")}}

## Syntax

```js-nolint
findLastIndex(callbackFn)
findLastIndex(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate a matching element has been found, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `findLastIndex()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

The index of the last (highest-index) element in the array that passes the test.
Otherwise -1 if no matching element is found.

## Description

The `findLastIndex()` method executes the `callbackFn` function once for each index of the typed array in descending-index order until the `callbackFn` returns a [truthy](/en-US/docs/Glossary/Truthy) value.
`findLastIndex()` then returns the index of that element and stops iterating through the typed array.
If `callbackFn` never returns a truthy value, `findLastIndex()` returns `-1`.

`callbackFn` is invoked with three arguments: the value of the element, the index of the element, and the typed array object being traversed.

If a `thisArg` parameter is provided to `findLastIndex()`, it will be used as the `this` for each invocation of the `callbackFn`.
If it is not provided, then {{jsxref("undefined")}} is used.

The `findLastIndex()` method does not mutate the typed array on which it is called, but the function provided to `callbackFn` can.

The range of elements processed by `findLastIndex()` is set before the first invocation of `callbackFn`.
Elements that are appended to the typed array after the call to `findLastIndex()` begins will not be visited by `callbackFn`.
If an existing, unvisited element of the typed array is changed by `callbackFn`, its value passed to the visiting `callbackFn` will be the value at the time that `findLastIndex()` visits that element's index.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

## Examples

### Find the index of a prime number in a typed array

The following example finds the index of the last element in the typed array that is a prime number (or returns `-1` if there is no prime number).

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
console.log(uint8.findLastIndex(isPrime));
// -1 (no primes in array)
uint8 = new Uint8Array([4, 5, 7, 8, 9, 11, 12]);
console.log(uint8.findLastIndex(isPrime));
// 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.findLastIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
