---
title: TypedArray.name
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/name
tags:
  - JavaScript
  - Property
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.name
---
{{JSRef}}

The **`TypedArray.name`** property represents a string value of the typed array constructor name.

{{EmbedInteractiveExample("pages/js/typedarray-name.html","shorter")}}{{js_property_attributes(0,0,0)}}

## Description

`TypedArray` objects differ from each other in the number of bytes per element and in the way the bytes are interpreted. The `name` property describes what data type the array consists of. The first part can be `Int` for _integer_, `Uint` for an _unsigned integer_ or `Float` for _floating point_. The second part is a number describing the bit size of each element. If the element is a 64-bit integer, then the number is too large to be represented as a floating-point number, so the elements are accessed as _`BigInt`_ values, and the `name` is prefixed with `Big`. Finally, the name terminates with `Array` or `ClampedArray`. {{jsxref("Uint8ClampedArray")}} has details about _clamped arrays_.

## Examples

### Using name

```js
Int8Array.name;         // "Int8Array"
Uint8Array.name;        // "Uint8Array"
Uint8ClampedArray.name; // "Uint8ClampedArray"
Int16Array.name;        // "Int16Array"
Uint16Array.name;       // "Uint16Array"
Int32Array.name;        // "Int32Array"
Uint32Array.name;       // "Uint32Array"
Float32Array.name;      // "Float32Array"
Float64Array.name;      // "Float64Array"
BigInt64Array.name;     // "BigInt64Array"
BigUint64Array.name;    // "BigUint64Array"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("TypedArray")}}
