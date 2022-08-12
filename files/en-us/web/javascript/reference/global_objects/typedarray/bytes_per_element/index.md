---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
tags:
  - JavaScript
  - Property
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.BYTES_PER_ELEMENT
---
{{JSRef}}

The **`TypedArray.BYTES_PER_ELEMENT`** property represents the size in bytes of each element in a typed array.

{{EmbedInteractiveExample("pages/js/typedarray-bytes-per-element.html","shorter")}}{{js_property_attributes(0,0,0)}}

## Description

`TypedArray` objects differ from each other in the number of bytes per element and in the way the bytes are interpreted. The `BYTES_PER_ELEMENT` constant contains the number of bytes each element in the given `TypedArray` has.

## Examples

### Using BYTES_PER_ELEMENT

```js
Int8Array.BYTES_PER_ELEMENT;         // 1
Uint8Array.BYTES_PER_ELEMENT;        // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT;        // 2
Uint16Array.BYTES_PER_ELEMENT;       // 2
Int32Array.BYTES_PER_ELEMENT;        // 4
Uint32Array.BYTES_PER_ELEMENT;       // 4
Float32Array.BYTES_PER_ELEMENT;      // 4
Float64Array.BYTES_PER_ELEMENT;      // 8
BigInt64Array.BYTES_PER_ELEMENT;     // 8
BigUint64Array.BYTES_PER_ELEMENT;    // 8
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
