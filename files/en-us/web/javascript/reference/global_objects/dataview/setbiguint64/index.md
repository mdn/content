---
title: DataView.prototype.setBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.setBigUint64
---

{{JSRef}}

The **`setBigUint64()`** method of {{jsxref("DataView")}} instances takes a BigInt and stores it as a 64-bit unsigned integer in the 8 bytes starting at the specified byte offset of this `DataView`. There is no alignment constraint; multi-byte values may be stored at any offset within bounds.

{{InteractiveExample("JavaScript Demo: DataView.setBigUint64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in an unsigned 64-bit integer
const max = 2n ** 64n - 1n;

const view = new DataView(buffer);
view.setBigUint64(1, max);

console.log(view.getBigUint64(1));
// Expected output: 18446744073709551615n
```

## Syntax

```js-nolint
setBigUint64(byteOffset, value)
setBigUint64(byteOffset, value, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to store the data in.
- `value`
  - : The value to set as a {{jsxref("BigInt")}}. For how the value is encoded in bytes, see [Value encoding and normalization](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Indicates whether the data is stored in [little- or big-endian](/en-US/docs/Glossary/Endianness) format. If `false` or `undefined`, a big-endian value is written.

### Return value

{{jsxref("undefined")}}.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would store beyond the end of the view.

## Examples

### Using setBigUint64()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(1); // 768n
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigUint64Array")}}
