---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.slice
---
{{JSRef}}

The **`slice()`** method returns a new typed array (with a new
underlying buffer), that contains a copy of a portion of the original typed array. This
method has the same algorithm as {{jsxref("Array.prototype.slice()")}}.
_TypedArray_ is one of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-slice.html","shorter")}}

## Syntax

```js
slice()
slice(start)
slice(start, end)
```

### Parameters

- `start` {{optional_inline}}

  - : Zero-based index at which to begin extraction.

    A negative index can be used, indicating an offset from the end of the sequence.
    `slice(-2)` extracts the last two elements in the sequence.

    If `start` is undefined, `slice` begins from index
    `0`.

- `end` {{optional_inline}}

  - : Zero-based index _before_ which to end extraction. `slice`
    extracts up to but not including `end`.

    For example, `slice(1,4)` extracts the second element through the fourth
    element (elements indexed 1, 2, and 3).

    A negative index can be used, indicating an offset from the end of the sequence.
    `slice(2,-1)` extracts the third element through the second-to-last element
    in the sequence.

    If `end` is omitted, `slice` extracts through the
    end of the sequence (`typedarray.length`).

### Return value

A new typed array containing the extracted elements.

## Description

The `slice` method does not alter the original typed array, but instead returns a copy of a portion of the original typed array. As typed arrays only store primitive values, the copy the `slice` method returns is always a [deep copy](/en-US/docs/Glossary/Deep_copy).

If an element is changed in either typed array, the other typed array is not affected.

## Examples

### Return a portion of an existing typed array

```js
const uint8 = new Uint8Array([1,2,3]);
uint8.slice(1);   // Uint8Array [ 2, 3 ]
uint8.slice(2);   // Uint8Array [ 3 ]
uint8.slice(-2);  // Uint8Array [ 2, 3 ]
uint8.slice(0,1); // Uint8Array [ 1 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.slice` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.slice()")}}
