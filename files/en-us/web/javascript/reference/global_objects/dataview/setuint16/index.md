---
title: DataView.prototype.setUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint16
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.setUint16
---

{{JSRef}}

The **`setUint16()`** method of {{jsxref("DataView")}} instances takes a number and stores it as a 16-bit unsigned integer in the 2 bytes at the specified byte offset of this `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setuint16.html")}}

## Syntax

```js-nolint
setUint16(byteOffset, value)
setUint16(byteOffset, value, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to store the data.
- `value`
  - : The value to set.
- `littleEndian` {{optional_inline}}
  - : Indicates whether the 16-bit int is stored in
    {{Glossary("Endianness", "little- or big-endian")}} format. If `false` or
    `undefined`, a big-endian value is written.

### Return value

{{jsxref("undefined")}}.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would store beyond the end
    of the view.

## Examples

### Using the setUint16 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setUint16(1, 3);
dataview.getUint16(1); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
