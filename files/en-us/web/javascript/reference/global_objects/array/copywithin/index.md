---
title: Array.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/Array/copyWithin
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.copyWithin
---

{{JSRef}}

The **`copyWithin()`** method shallow copies part of an array
to another location in the same array and returns it without modifying its length.

{{EmbedInteractiveExample("pages/js/array-copywithin.html")}}

## Syntax

```js-nolint
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameters

- `target`

  - : Zero-based index at which to copy the sequence to. If negative, `target`
    will be counted from the end.

    If `target` is at or greater than `arr.length`, nothing will
    be copied. If `target` is positioned after `start`, the copied
    sequence will be trimmed to fit `arr.length`.

- `start` {{optional_inline}}

  - : Zero-based index at which to start copying elements from. If negative,
    `start` will be counted from the end.

    If `start` is omitted, `copyWithin` will copy from index
    `0`.

- `end` {{optional_inline}}

  - : Zero-based index at which to end copying elements from. `copyWithin`
    copies up to but not including `end`. If negative, `end` will be
    counted from the end.

    If `end` is omitted, `copyWithin` will copy until the last
    index (default to `arr.length`).

### Return value

The modified array.

## Description

The `copyWithin()` method works like C and C++'s `memmove`, and is a
high-performance method to shift the data of an {{jsxref("Array")}}. This especially
applies to the {{jsxref("TypedArray/copyWithin", "TypedArray")}} method of the same
name. The sequence is copied and pasted as one operation; pasted sequence will have the
copied values even when the copy and paste region overlap.

The `copyWithin()` method is a [mutating method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter the length of `this`, but it will change the content of `this` and create new properties or delete existing properties, if necessary.

The `copyWithin()` method preserves empty slots. If the region to be copied from is [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the empty slots' corresponding new indices are [deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete) and also become empty slots.

The `copyWithin()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. Although strings are also array-like, this method is not suitable to be applied on them, as strings are immutable.

## Examples

### Using copyWithin()

```js
console.log([1, 2, 3, 4, 5].copyWithin(-2));
// [1, 2, 3, 1, 2]

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
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
- {{jsxref("Array")}}
