---
title: DataView.prototype.setBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArrays
  - setBigInt64
browser-compat: javascript.builtins.DataView.setBigInt64
---
{{JSRef}}

The **`setBigInt64()`** method stores a signed 64-bit integer
(long long) value at the specified byte offset from the start of the
{{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setbigint64.html")}}

## Syntax

```js
setBigInt64(byteOffset, value)
setBigInt64(byteOffset, value, littleEndian)
```

### Parameters

- byteOffset
  - : The offset, in bytes, from the start of the view to store the data from.
- value
  - : The value to set as a {{jsxref("BigInt")}}. The highest possible value that fits in
    a signed 64-bit integer is
    `2n ** (64n -1n) - 1n` (`9223372036854775807n`). Upon
    overflow, it will be negative (`-9223372036854775808n`).
- littleEndian
  - : {{optional_inline}} Indicates whether the 64-bit int is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If
    `false` or `undefined`, a big-endian value is written.

### Return value

{{jsxref("undefined")}}.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would store beyond the end
    of the view.

## Examples

### Using the `setBigInt64` method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setBigInt64(0, 3n);
dataview.getBigInt64(0); // 3n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
