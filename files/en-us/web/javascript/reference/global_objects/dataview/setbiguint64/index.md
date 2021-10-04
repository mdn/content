---
title: DataView.prototype.setBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
tags:
  - BigInt
  - DataView
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArrays
  - setBigUint64
browser-compat: javascript.builtins.DataView.setBigUint64
---

{{JSRef}}

The **`setBigUint64()`** method stores an unsigned 64-bit
integer (unsigned long long) value at the specified byte offset from the start of the
{{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setbiguint64.html")}}

## Syntax

```js
setBigUint64(byteOffset, value);
setBigUint64(byteOffset, value, littleEndian);
```

### Parameters

- byteOffset
  - : The offset, in bytes, from the start of the view to store the data from.
- value
  - : The value to set as a {{jsxref("BigInt")}}. The highest possible value that fits in
    an unsigned 64-bit integer is
    `2n ** 64n - 1n`
    (`18446744073709551615n`). Upon overflow, it will be zero
    (`0n`).
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

### Using the `setBigUint64` method

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(0); // 3n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt")}}
