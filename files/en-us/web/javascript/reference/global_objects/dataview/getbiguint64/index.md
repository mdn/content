---
title: DataView.prototype.getBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArrays
  - getBigUint64
browser-compat: javascript.builtins.DataView.getBigUint64
---
{{JSRef}}

The **`getBigUint64()`** method gets an unsigned 64-bit integer
(unsigned long long) at the specified byte offset from the start of the
{{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getbiguint64.html")}}

## Syntax

```js
getBigUint64(byteOffset)
getBigUint64(byteOffset, littleEndian)
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

### Using the `getBigUint64` method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getBigUint64(0); // 0n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
