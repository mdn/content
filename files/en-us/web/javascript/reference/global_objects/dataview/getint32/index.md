---
title: DataView.prototype.getInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.getInt32
---
{{JSRef}}

The **`getInt32()`** method gets a signed 32-bit integer (long)
at the specified byte offset from the start of the {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getint32.html")}}

## Syntax

```js
getInt32(byteOffset)
getInt32(byteOffset, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view where to read the data.
- `littleEndian`
  - : {{optional_inline}} Indicates whether the 32-bit int is stored in
    {{Glossary("Endianness", "little- or big-endian")}} format. If `false` or
    `undefined`, a big-endian value is read.

### Return value

A signed 32-bit integer number.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would read beyond the end of
    the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the getInt32 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getInt32(1); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
