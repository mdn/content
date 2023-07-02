---
title: DataView.prototype.setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.setInt32
---

{{JSRef}}

The **`setInt32()`** method of {{jsxref("DataView")}} instances takes a number and stores it as a 32-bit signed integer in the 4 bytes at the specified byte offset of this `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setint32.html")}}

## Syntax

```js-nolint
setInt32(byteOffset, value)
setInt32(byteOffset, value, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to store the data.
- `value`
  - : The value to set.
- `littleEndian` {{optional_inline}}
  - : Indicates whether the 32-bit int is stored in
    {{Glossary("Endianness", "little- or big-endian")}} format. If `false` or
    `undefined`, a big-endian value is written.

### Return value

{{jsxref("undefined")}}.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would store beyond the end
    of the view.

## Examples

### Using the setInt32 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setInt32(1, 3);
dataview.getInt32(1); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
