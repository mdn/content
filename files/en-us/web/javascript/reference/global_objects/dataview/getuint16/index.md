---
title: DataView.prototype.getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.getUint16
---

{{JSRef}}

The **`getUint16()`** method of {{jsxref("DataView")}} instances reads 2 bytes starting at the specified byte offset of this `DataView` and interprets them as a 16-bit unsigned integer. There is no alignment constraint; multi-byte values may be fetched from any offset within bounds.

{{EmbedInteractiveExample("pages/js/dataview-getuint16.html")}}

## Syntax

```js-nolint
getUint16(byteOffset)
getUint16(byteOffset, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to read the data from.
- `littleEndian` {{optional_inline}}
  - : Indicates whether the data is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is read.

### Return value

An integer from 0 to 65535, inclusive.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Examples

### Using getUint16()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint16(1)); // 258
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint16Array")}}
