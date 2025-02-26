---
title: TypedArray.prototype.copyWithin()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/copyWithin
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.copyWithin
---

{{JSRef}}

The **`copyWithin()`** method of {{jsxref("TypedArray")}} instances shallow copies part of this typed array to another location in the same typed array and returns this typed array without modifying its length. This method has the same algorithm as {{jsxref("Array.prototype.copyWithin()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.copyWithin()")}}

```js interactive-example
const uint8 = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);

// Insert position, start position, end position
uint8.copyWithin(3, 1, 3);

console.log(uint8);
// Expected output: Uint8Array [1, 2, 3, 2, 3, 6, 7, 8]
```

## Syntax

```js-nolint
copyWithin(target, start)
copyWithin(target, start, end)
```

### Parameters

- `target`
  - : Zero-based index at which to copy the sequence to, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). This corresponds to where the element at `start` will be copied to, and all elements between `start` and `end` are copied to succeeding indices.
- `start`
  - : Zero-based index at which to start copying elements from, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
- `end` {{optional_inline}}
  - : Zero-based index at which to end copying elements from, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion). `copyWithin()` copies up to but not including `end`.

### Return value

The modified typed array.

## Description

See {{jsxref("Array.prototype.copyWithin()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using copyWithin()

```js
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);
console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]
uint8.copyWithin(3, 0, 3);
console.log(uint8); // Uint8Array [ 1, 2, 3, 1, 2, 3, 0, 0 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.copyWithin` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.copyWithin()")}}
