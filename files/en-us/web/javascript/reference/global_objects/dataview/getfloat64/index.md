---
title: DataView.prototype.getFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat64
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.getFloat64
---
{{JSRef}}

The **`getFloat64()`** method gets a signed 64-bit float
(double) at the specified byte offset from the start of the {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getfloat64.html")}}

## Syntax

```js
getFloat64(byteOffset)
getFloat64(byteOffset, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to read the data.
- `littleEndian`
  - : {{optional_inline}} Indicates whether the 64-bit float is stored in
    {{Glossary("Endianness", "little- or big-endian")}} format. If `false` or
    `undefined`, a big-endian value is read.

### Return value

A signed 64-bit float number.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would read beyond the end of
    the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the getFloat64 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getFloat64(0); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
