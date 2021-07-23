---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.byteLength
---
{{JSRef}}

The **`byteLength`** accessor property represents the length (in bytes) of the typed array.

{{EmbedInteractiveExample("pages/js/typedarray-bytelength.html","shorter")}}

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when a _TypedArray_ is constructed and cannot be changed. If the _TypedArray_ is not specifying a `byteOffset` or a `length`, the `length` of the referenced `ArrayBuffer` will be returned. _TypedArray_ is one of the [TypedArray objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Examples

### Using the byteLength property

```js
var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.byteLength; // 5 (as specified when constructing the Uint8Array)

var uint8 = new Uint8Array(buffer, 2);
uint8.byteLength; // 6 (due to the offset of the constructed Uint8Array)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
