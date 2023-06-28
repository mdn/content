---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.fill
---

{{JSRef}}

The **`fill()`** method changes all elements in an array to a static value, from a start index (default `0`) to an end index (default `array.length`).
It returns the modified array.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Syntax

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameters

- `value`
  - : Value to fill the array with. Note all elements in the array will be this exact value: if `value` is an object, each slot in the array will reference that object.
- `start` {{optional_inline}}
  - : Zero-based index at which to start filling, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the array — if `start < 0`, `start + array.length` is used.
    - If `start < -array.length` or `start` is omitted, `0` is used.
    - If `start >= array.length`, no index is filled.
- `end` {{optional_inline}}
  - : Zero-based index at which to end filling, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` fills up to but not including `end`.
    - Negative index counts back from the end of the array — if `end < 0`, `end + array.length` is used.
    - If `end < -array.length`, `0` is used.
    - If `end >= array.length` or `end` is omitted, `array.length` is used, causing all indices until the end to be filled.
    - If `end` is positioned before or at `start` after normalization, no index is filled.

### Return value

The modified array, filled with `value`.

## Description

The `fill()` method is a [mutating method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter the length of `this`, but it will change the content of `this`.

The `fill()` method fills empty slots in [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) arrays with `value` as well.

The `fill()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

> **Note:** Using `Array.prototype.fill()` on an empty array (`length = 0`) would not modify it as the array has nothing to be modified.
> To use `Array.prototype.fill()` when declaring an array, make sure the array has non-zero `length`.
> [See example](#using_fill_to_populate_an_empty_array).

## Examples

### Using fill

```js
console.log([1, 2, 3].fill(4)); // [4, 4, 4]
console.log([1, 2, 3].fill(4, 1)); // [1, 4, 4]
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
console.log([1, 2, 3].fill(4, 1, 1)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 3)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, -3, -2)); // [4, 2, 3]
console.log([1, 2, 3].fill(4, NaN, NaN)); // [1, 2, 3]
console.log([1, 2, 3].fill(4, 3, 5)); // [1, 2, 3]
console.log(Array(3).fill(4)); // [4, 4, 4]

// A single object, referenced by each slot of the array:
const arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

### Using fill() to create a matrix of all 1

This example shows how to create a matrix of all 1, like the `ones()` function of Octave or MATLAB.

```js
const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1
```

### Using fill() to populate an empty array

This example shows how to populate an array, setting all elements to a specific value.
The `end` parameter does not have to be specified.

```js
const tempGirls = Array(5).fill("girl", 0);
```

Note that the array was initially a [sparse array](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) with no assigned indices. `fill()` is still able to fill this array.

### Calling fill() on non-array objects

The `fill()` method reads the `length` property of `this` and sets the value of each integer-keyed property from `start` to `end`.

```js
const arrayLike = { length: 2 };
console.log(Array.prototype.fill.call(arrayLike, 1));
// { '0': 1, '1': 1, length: 2 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.fill` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
