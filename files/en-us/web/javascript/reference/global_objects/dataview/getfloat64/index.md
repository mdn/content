---
title: DataView.prototype.getFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat64
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.getFloat64
---

{{JSRef}}

The **`getFloat64()`** method of {{jsxref("DataView")}} instances reads 8 bytes starting at the specified byte offset of this `DataView` and interprets them as a 64-bit floating point number. There is no alignment constraint; multi-byte values may be fetched from any offset within bounds.

{{EmbedInteractiveExample("pages/js/dataview-getfloat64.html")}}

## Syntax

```js-nolint
getFloat64(byteOffset)
getFloat64(byteOffset, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to read the data from.
- `littleEndian` {{optional_inline}}
  - : Indicates whether the data is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is read.

### Return value

Any number value.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Examples

### Using getFloat64()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat64(1)); // 8.20788039913184e-304
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float64Array")}}
