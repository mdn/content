---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArrays
  - getBigInt64()
browser-compat: javascript.builtins.DataView.getBigInt64
---
{{JSRef}}

The **`getBigInt64()`** method gets a signed 64-bit integer
(long long) at the specified byte offset from the start of the {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getbigint64.html")}}

## Syntax

```js
getBigInt64(byteOffset)
getBigInt64(byteOffset, littleEndian)
```

### Parameters

- byteOffset
  - : The offset, in bytes, from the start of the view to read the data from.
- littleEndian
  - : {{optional_inline}} Indicates whether the 64-bit int is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If
    `false` or `undefined`, a big-endian value is read.

### Return value

A {{jsxref("BigInt")}}.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would read beyond the end
    of the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the `getBigInt64` method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getBigInt64(0); // 0n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
