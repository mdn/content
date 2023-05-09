---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.findIndex
---

{{JSRef}}

The **`findIndex()`** method returns an **index**
in the typed array, if an element in the typed array satisfies the provided testing
function. Otherwise -1 is returned.

See also the {{jsxref("TypedArray.find", "find()")}} method, which returns the
**value** of a found element in the typed array instead of its index.

{{EmbedInteractiveExample("pages/js/typedarray-findindex.html")}}

## Syntax

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate a matching element has been found, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `findIndex()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

An index in the array if an element passes the test; otherwise, `-1`.

## Description

The `findIndex()` method executes the `callbackFn`
function once for each element present in the typed array until it finds one where
`callbackFn` returns a true value. If such an element is found,
`findIndex()` immediately returns the index of that element. Otherwise,
`findIndex()` returns -1. `callbackFn` is invoked only
for indexes of the typed array which have assigned values; it is not invoked for indexes
which have been deleted or which have never been assigned values.

`callbackFn` is invoked with three arguments: the value of the
element, the index of the element, and the typed array object being traversed.

If a `thisArg` parameter is provided to `findIndex()`,
it will be used as the `this` for each invocation of the
`callback`. If it is not provided, then {{jsxref("undefined")}} is
used.

`findIndex()` does not mutate the typed array on which it is called.

The range of elements processed by `findIndex()` is set before the first
invocation of `callbackFn`. Elements that are appended to the typed
array after the call to `findIndex()` begins will not be visited by
`callbackFn`. If an existing, unvisited element of the typed array
is changed by `callbackFn`, its value passed to the visiting
`callbackFn` will be the value at the time that
`findIndex()` visits that element's index; elements that are deleted are not
visited.

## Examples

### Find the index of a prime number in a typed array

The following example finds the index of an element in the typed array that is a prime
number (or returns `-1` if there is no prime number).

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

const uint8 = new Uint8Array([4, 6, 8, 12]);
const uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
