---
title: TypedArray.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/slice
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.slice
---

{{JSRef}}

The **`slice()`** method of {{jsxref("TypedArray")}} instances returns a copy of a portion of a typed array into a new typed array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that typed array. The original typed array will not be modified. This method has the same algorithm as {{jsxref("Array.prototype.slice()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-slice.html","shorter")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameters

- `start` {{optional_inline}}

  - : Zero-based index at which to start extraction, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

- `end` {{optional_inline}}

  - : Zero-based index at which to end extraction, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `slice()` extracts up to but not including `end`.

### Return value

A new typed array containing the extracted elements.

## Description

See {{jsxref("Array.prototype.slice()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Return a portion of an existing typed array

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.slice(1); // Uint8Array [ 2, 3 ]
uint8.slice(2); // Uint8Array [ 3 ]
uint8.slice(-2); // Uint8Array [ 2, 3 ]
uint8.slice(0, 1); // Uint8Array [ 1 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.slice` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.pop()")}}
- {{jsxref("TypedArray.prototype.shift()")}}
- {{jsxref("TypedArray.prototype.concat()")}}
- {{jsxref("TypedArray.prototype.splice()")}}
- {{jsxref("Array.prototype.slice()")}}
- {{jsxref("String.prototype.slice()")}}
