---
title: DataView.prototype.setFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat32
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.setFloat32
---
{{JSRef}}

The **`setFloat32()`** method stores a signed 32-bit float
(float) value at the specified byte offset from the start of the {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setfloat32.html")}}

## Syntax

```js
setFloat32(byteOffset, value)
setFloat32(byteOffset, value, littleEndian)
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to store the data.
- `value`
  - : The value to set.
- `littleEndian`
  - : {{optional_inline}} Indicates whether the 32-bit float is stored in
    {{Glossary("Endianness", "little- or big-endian")}} format. If `false` or
    `undefined`, a big-endian value is written.

### Return value

{{jsxref("undefined")}}.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would store beyond the end
    of the view.

## Examples

### Using the setFloat32 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setFloat32(1, 3);
dataview.getFloat32(1); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
