---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.findIndex
---

{{JSRef}}

The **`findIndex()`** method of {{jsxref("TypedArray")}} instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. This method has the same algorithm as {{jsxref("Array.prototype.findIndex()")}}.

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

The index of the first element in the array that passes the test. Otherwise, `-1`.

## Description

See {{jsxref("Array.prototype.findIndex()")}} for more details. This method is not generic and can only be called on typed array instances.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.findIndex()")}}
