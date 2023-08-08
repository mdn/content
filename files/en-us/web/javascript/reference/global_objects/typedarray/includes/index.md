---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.includes
---

{{JSRef}}

The **`includes()`** method of {{jsxref("TypedArray")}} instances determines whether a typed array includes a certain value among its entries, returning `true` or `false` as appropriate. This method has the same algorithm as {{jsxref("Array.prototype.includes()")}}.

{{EmbedInteractiveExample("pages/js/typedarray-includes.html")}}

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : The value to search for.
- `fromIndex` {{optional_inline}}
  - : Zero-based index at which to start searching, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Return value

A boolean value which is `true` if the value `searchElement` is found within the array (or the part of the array indicated by the index `fromIndex`, if specified).

## Description

See {{jsxref("Array.prototype.includes()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using includes()

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.includes(2); // true
uint8.includes(4); // false
uint8.includes(3, 3); // false

// NaN handling (only true for Float32 and Float64)
new Uint8Array([NaN]).includes(NaN); // false, since the NaN passed to the constructor gets converted to 0
new Float32Array([NaN]).includes(NaN); // true;
new Float64Array([NaN]).includes(NaN); // true;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
