---
title: TypedArray.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/find
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.find
---

{{JSRef}}

The **`find()`** method of {{jsxref("TypedArray")}} instances returns the first element in the provided typed array that satisfies the provided testing function. If no values satisfy the testing function, {{jsxref("undefined")}} is returned. This method has the same algorithm as {{jsxref("Array.prototype.find()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.find()")}}

```js interactive-example
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, 0, -10, 20, -30, 40, -50]);

console.log(int8.find(isNegative));
// Expected output: -10
```

## Syntax

```js-nolint
find(callbackFn)
find(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the typed array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate a matching element has been found, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `find()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

The first element in the typed array that satisfies the provided testing function.
Otherwise, {{jsxref("undefined")}} is returned.

## Description

See {{jsxref("Array.prototype.find()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Find the first prime number in a typed array

The following example returns the first element in the typed array that is a prime number, or {{jsxref("undefined")}} if there is no prime number.

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

const uint8 = new Uint8Array([4, 5, 8, 12]);
console.log(uint8.find(isPrime)); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.find` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.findLast()")}}
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.every()")}}
- {{jsxref("TypedArray.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
