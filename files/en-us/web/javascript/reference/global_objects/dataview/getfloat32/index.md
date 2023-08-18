---
title: DataView.prototype.getFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.getFloat32
---

{{JSRef}}

The **`getFloat32()`** method of {{jsxref("DataView")}} instances reads 4 bytes starting at the specified byte offset of this `DataView` and interprets them as a 32-bit floating point number. There is no alignment constraint; multi-byte values may be fetched from any offset within bounds.

{{EmbedInteractiveExample("pages/js/dataview-getfloat32.html")}}

## Syntax

```js-nolint
getFloat32(byteOffset)
getFloat32(byteOffset, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to read the data from.
- `littleEndian` {{optional_inline}}
  - : Indicates whether the data is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is read.

### Return value

A floating point number from `-3.4e38` to `3.4e38`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Examples

### Using getFloat32()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat32(1)); // 2.387939260590663e-38
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float32Array")}}
