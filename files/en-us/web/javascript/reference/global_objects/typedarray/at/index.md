---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.at
---

{{JSRef}}

The **`at()`** method of {{jsxref("TypedArray")}} instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the typed array. This method has the same algorithm as {{jsxref("Array.prototype.at()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameters

- `index`
  - : Zero-based index of the array element to be returned, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Negative index counts back from the end of the array — if `index < 0`, `index + array.length` is accessed.

### Return value

The element in the typed array matching the given index. Always returns {{jsxref("undefined")}} if `index < -array.length` or `index >= array.length` without attempting to access the corresponding property.

## Description

See {{jsxref("Array.prototype.at()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Return the last value of a typed array

The following example provides a function which returns the last element found in a specified array.

```js
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

const lastItem = returnLast(uint8);
console.log(lastItem); // 18
```

### Comparing methods

Here we compare different ways to select the penultimate (last but one) item of a {{jsxref("TypedArray")}}. Whilst all below methods are valid, it highlights the succinctness and readability of the `at()` method.

```js
// Our typed array with values
const uint8 = new Uint8Array([1, 2, 4, 7, 11, 18]);

// Using length property
const lengthWay = uint8[uint8.length - 2];
console.log(lengthWay); // 11

// Using slice() method. Note an array is returned
const sliceWay = uint8.slice(-2, -1);
console.log(sliceWay[0]); // 11

// Using at() method
const atWay = uint8.at(-2);
console.log(atWay); // 11
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.at` in `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
