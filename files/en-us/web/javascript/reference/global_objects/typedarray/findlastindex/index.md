---
title: TypedArray.prototype.findLastIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findLastIndex
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.findLastIndex
---

{{JSRef}}

The **`findLastIndex()`** method of {{jsxref("TypedArray")}} instances iterates the typed array in reverse order and returns the index of the first element that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. This method has the same algorithm as {{jsxref("Array.prototype.findLastIndex()")}}.

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

The index of the last (highest-index) element in the typed array that passes the test.
Otherwise `-1` if no matching element is found.

## Description

See {{jsxref("Array.prototype.findLastIndex()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Find the index of the last prime number in a typed array

The following example returns the index of the last element in the typed array that is a prime number, or `-1` if there is no prime number.

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

- [Polyfill of `TypedArray.prototype.findLastIndex` in `core-js`](https://github.com/zloirock/core-js#array-find-from-last)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
