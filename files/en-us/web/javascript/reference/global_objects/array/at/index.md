---
title: Array.prototype.at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.at
---

{{JSRef}}

The **`at()`** method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

{{EmbedInteractiveExample("pages/js/array-at.html")}}

## Syntax

```js-nolint
at(index)
```

### Parameters

- `index`
  - : Zero-based index of the array element to be returned, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). Negative index counts back from the end of the array — if `index < 0`, `index + array.length` is accessed.

### Return value

The element in the array matching the given index. Always returns {{jsxref("undefined")}} if `index < -array.length` or `index >= array.length` without attempting to access the corresponding property.

## Description

The `at()` method is equivalent to the bracket notation when `index` is non-negative. For example, `array[0]` and `array.at(0)` both return the first item. However, when counting elements from the end of the array, you cannot use `array[-1]` like you may in Python or R, because all values inside the square brackets are treated literally as string properties, so you will end up reading `array["-1"]`, which is just a normal string property instead of an array index.

The usual practice is to access {{jsxref("Array/length", "length")}} and calculate the index from that — for example, `array[array.length - 1]`. The `at()` method allows relative indexing, so this can be shortened to `array.at(-1)`.

The `at()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Return the last value of an array

The following example provides a function which returns the last element found in a specified array.

```js
// Our array with items
const cart = ["apple", "banana", "pear"];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // 'pear'

// Add an item to our 'cart' array
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // 'orange'
```

### Comparing methods

This example compares different ways to select the penultimate (last but one) item of an {{jsxref("Array")}}. While all the methods shown below are valid, this example highlights the succinctness and readability of the `at()` method.

```js
// Our array with items
const colors = ["red", "green", "blue"];

// Using length property
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 'green'

// Using slice() method. Note an array is returned
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 'green'

// Using at() method
const atWay = colors.at(-2);
console.log(atWay); // 'green'
```

### Calling at() on non-array objects

The `at()` method reads the `length` property of `this` and calculates the index to access.

```js
const arrayLike = {
  length: 2,
  0: "a",
  1: "b",
  2: "c", // ignored by at() since length is 2
};
console.log(Array.prototype.at.call(arrayLike, 0)); // "a"
console.log(Array.prototype.at.call(arrayLike, 2)); // undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.at` in `core-js`](https://github.com/zloirock/core-js#relative-indexing-method)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.at()")}}
- {{jsxref("String.prototype.at()")}}
