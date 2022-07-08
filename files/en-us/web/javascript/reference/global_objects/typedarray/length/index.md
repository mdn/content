---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.length
---
{{JSRef}}

The **`length`** accessor property represents the length (in elements) of a typed array.

{{EmbedInteractiveExample("pages/js/typedarray-length.html","shorter")}}

## Description

The `length` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when a _TypedArray_ is constructed and cannot be changed. If the _TypedArray_ is not specifying a `byteOffset` or a `length`, the length of the referenced {{jsxref("ArrayBuffer")}} will be returned. _TypedArray_ is one of the [TypedArray objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Examples

### Using the `length` property

```js
const buffer = new ArrayBuffer(8);

let uint8 = new Uint8Array(buffer);
uint8.length; // 8 (matches the length of the buffer)

uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (as specified when constructing the Uint8Array)

uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (due to the offset of the constructed Uint8Array)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
