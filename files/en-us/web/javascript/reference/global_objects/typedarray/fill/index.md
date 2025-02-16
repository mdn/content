---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.fill
---

{{JSRef}}

The **`fill()`** method of {{jsxref("TypedArray")}} instances changes all elements within a range of indices in a typed array to a static value. It returns the modified typed array. This method has the same algorithm as {{jsxref("Array.prototype.fill()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.fill()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([0, 0, 0, 0]);
// Value, start position, end position
uint8.fill(4, 1, 3);

console.log(uint8);
// Expected output: Uint8Array [0, 4, 4, 0]
```

## Syntax

```js-nolint
fill(value)
fill(value, start)
fill(value, start, end)
```

### Parameters

- `value`
  - : Value to fill the typed array with.
- `start` {{optional_inline}}
  - : Zero-based index at which to start filling, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Zero-based index at which to end filling, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `fill()` fills up to but not including `end`.

### Return value

The modified typed array, filled with `value`.

## Description

See {{jsxref("Array.prototype.fill()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using fill()

```js
new Uint8Array([1, 2, 3]).fill(4); // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1); // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2); // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1); // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.fill` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.fill()")}}
