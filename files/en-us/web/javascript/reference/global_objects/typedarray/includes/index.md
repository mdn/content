---
title: TypedArray.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
tags:
  - ECMAScript 2016
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.includes
---
{{JSRef}}

The **`includes()`** method determines whether a typed array
includes a certain element, returning `true` or `false` as
appropriate. This method has the same algorithm as
{{jsxref("Array.prototype.includes()")}}. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-includes.html")}}

## Syntax

```js
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : The element to search for.
- `fromIndex` {{optional_inline}}
  - : The position in this array at which to begin searching for
    `searchElement`; defaults to 0.

### Return value

A {{jsxref("Boolean")}}.

## Examples

### Using includes

```js
const uint8 = new Uint8Array([1,2,3]);
uint8.includes(2);     // true
uint8.includes(4);     // false
uint8.includes(3, 3);  // false

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
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
