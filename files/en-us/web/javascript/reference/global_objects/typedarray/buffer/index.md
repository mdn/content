---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.buffer
---
{{JSRef}}

The **`buffer`** accessor property represents the {{jsxref("ArrayBuffer")}} referenced by a _TypedArray_ at construction time.

{{EmbedInteractiveExample("pages/js/typedarray-buffer.html","shorter")}}

## Description

The `buffer` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the _TypedArray_ is constructed and cannot be changed. _TypedArray_ is one of the [TypedArray objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects).

## Examples

### Using the buffer property

```js
var buffer = new ArrayBuffer(8);
var uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
