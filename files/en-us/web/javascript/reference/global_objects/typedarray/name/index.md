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

`TypedArray` objects differ from each other in the number of bytes per element and in the way the bytes are interpreted. The `name` property describes what data type the array consists of. It has three parts:

- The first part can be `Int` for _integer_, `Uint` for _unsigned integer_, or `Float` for _floating point_.
- The second part is a number describing the bit size of each element. Since 64-bit integers are too large to be represented without loss of precision with JavaScript numbers, the elements are stored as [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values instead, and the first part is prefixed with "Big", becoming either `BigInt` or `BigUint`.
- Finally, the name terminates with `Array` or `ClampedArray`. {{jsxref("Uint8ClampedArray")}} has details about _clamped arrays_.

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
