---
title: DataView.prototype.getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.getUint16
---

{{JSRef}}

The **`getUint16()`** method of {{jsxref("DataView")}} instances reads 2 bytes starting at the specified byte offset of this `DataView` and interprets them as a 16-bit unsigned integer.

{{EmbedInteractiveExample("pages/js/dataview-getuint16.html")}}

## Syntax

```js-nolint
getUint16(byteOffset)
getUint16(byteOffset, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to read the data.
- `littleEndian` {{optional_inline}}
  - : Indicates whether the 16-bit int is stored in
    {{Glossary("Endianness", "little- or big-endian")}} format. If `false` or
    `undefined`, a big-endian value is read.

### Return value

An unsigned 16-bit integer number.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would read beyond the end of
    the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the getUint16 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getUint16(1); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
