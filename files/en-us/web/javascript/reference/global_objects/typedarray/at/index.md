---
title: TypedArray.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/at
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.at
---

{{JSRef}}

The **`at()`** method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

This is not to suggest there is anything wrong with using the square bracket notation. For example `array[0]` would return the first item. However instead of using {{jsxref('TypedArray.prototype.length','array.length')}} for latter items; e.g. `array[array.length-1]` for the last item, you can call `array.at(-1)`. [(See the examples below)](#examples)

{{EmbedInteractiveExample("pages/js/typedarray-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameters

- `index`
  - : The index (position) of the array element to be returned. Supports relative indexing from the end of the array when passed a negative index; that is, if a negative number is used, the element returned will be found by counting back from the end of the array.

### Return value

The element in the array matching the given index. Returns {{jsxref('undefined')}} if the given index can not be found.

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

Here we compare different ways to select the penultimate (last but one) item of a {{jsxref('TypedArray')}}. Whilst all below methods are valid, it highlights the succinctness and readability of the `at()` method.

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
- [A polyfill for the at() method](https://github.com/tc39/proposal-relative-indexing-method#polyfill).
- {{jsxref("TypedArray.prototype.find()")}} – return a value based on a given test.
- {{jsxref("TypedArray.prototype.includes()")}} – test whether a value exists in the array.
- {{jsxref("TypedArray.prototype.indexOf()")}} – return the index of a given element.
