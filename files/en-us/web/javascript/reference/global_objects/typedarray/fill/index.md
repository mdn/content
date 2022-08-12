---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.fill
---
{{JSRef}}

The **`fill()`** method fills all the elements of a typed array
from a start index to an end index with a static value. This method has the same
algorithm as {{jsxref("Array.prototype.fill()")}}. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-fill.html","shorter")}}

## Syntax

```js
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameters

- `value`
  - : Value to fill the typed array with.
- `start` {{optional_inline}}
  - : Start index. Defaults to 0.
- `end` {{optional_inline}}
  - : End index (not included). Defaults to `this.length`.

### Return value

The modified array.

## Description

The elements interval to fill is \[`start`,
`end`).

The **`fill()`** method takes up to three arguments
`value`, `start` and `end`. The `start` and
`end` arguments are optional with default values of `0`
and the `length` of the `this` object.

If `start` is negative, it is treated as
`length+start` where `length` is the length of the array. If
`end` is negative, it is treated as `length+end`.

## Examples

### Using fill()

```js
new Uint8Array([1, 2, 3]).fill(4);         // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1);      // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2);   // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1);   // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.fill` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("Array.prototype.fill()")}}
