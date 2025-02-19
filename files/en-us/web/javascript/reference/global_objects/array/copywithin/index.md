---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.copyWithin
---

{{JSRef}}

The **`copyWithin()`** method of {{jsxref("Array")}} instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

{{InteractiveExample("JavaScript Demo: Array.copyWithin()")}}

```js interactive-example
const array1 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]
```

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameters

- `target`
  - : Zero-based index at which to copy the sequence to, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). This corresponds to where the element at `start` will be copied to, and all elements between `start` and `end` are copied to succeeding indices.
    - Negative index counts back from the end of the array — if `-array.length <= target < 0`, `target + array.length` is used.
    - If `target < -array.length`, `0` is used.
    - If `target >= array.length`, nothing is copied.
    - If `target` is positioned after `start` after normalization, copying only happens until the end of `array.length` (in other words, `copyWithin()` never extends the array).
- `start`
  - : Zero-based index at which to start copying elements from, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the array — if `-array.length <= start < 0`, `start + array.length` is used.
    - If `start < -array.length`, `0` is used.
    - If `start >= array.length`, nothing is copied.
- `end` {{optional_inline}}
  - : Zero-based index at which to end copying elements from, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` copies up to but not including `end`.
    - Negative index counts back from the end of the array — if `-array.length <= end < 0`, `end + array.length` is used.
    - If `end < -array.length`, `0` is used.
    - If `end >= array.length` or `end` is omitted, `array.length` is used, causing all elements until the end to be copied.
    - If `end` implies a position before or at the position that `start` implies, nothing is copied.

### Return value

The modified array.

## Description

The `copyWithin()` method works like C and C++'s `memmove`, and is a high-performance method to shift the data of an {{jsxref("Array")}}. This especially applies to the {{jsxref("TypedArray/copyWithin", "TypedArray")}} method of the same name. The sequence is copied and pasted as one operation; the pasted sequence will have the copied values even when the copy and paste region overlap.

Because `undefined` becomes `0` when converted to an integer, omitting the `start` parameter has the same effect as passing `0`, which copies the entire array to the target position, equivalent to a right shift where the right boundary is clipped off and the left boundary is duplicated. This behavior may confuse readers of your code, so you should explicitly pass `0` as `start` instead.

```js
console.log([1, 2, 3, 4, 5].copyWithin(2));
// [1, 2, 1, 2, 3]; move all elements to the right by 2 positions
```

The `copyWithin()` method is a [mutating method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter the length of `this`, but it will change the content of `this` and create new properties or delete existing properties, if necessary.

The `copyWithin()` method preserves empty slots. If the region to be copied from is [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the empty slots' corresponding new indices are [deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete) and also become empty slots.

The `copyWithin()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

## Examples

### Using copyWithin()

```js
console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// [4, 5, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// [4, 2, 3, 4, 5]

console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// [1, 2, 3, 3, 4]
```

### Using copyWithin() on sparse arrays

`copyWithin()` will propagate empty slots.

```js
console.log([1, , 3].copyWithin(2, 1, 2)); // [1, empty, empty]
```

### Calling copyWithin() on non-array objects

The `copyWithin()` method reads the `length` property of `this` and then manipulates the integer indices involved.

```js
const arrayLike = {
  length: 5,
  3: 1,
};
console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// { '0': 1, '3': 1, length: 5 }
console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// { '0': 1, length: 5 }
// The '3' property is deleted because the copied source is an empty slot
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.copyWithin` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.copyWithin()")}}
