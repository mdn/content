---
title: DataView.prototype.setFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat64
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.setFloat64
---

{{JSRef}}

The **`setFloat64()`** method stores a signed 64-bit float
(double) value at the specified byte offset from the start of the
{{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setfloat64.html")}}

## Syntax

```js
setFloat64(byteOffset, value);
setFloat64(byteOffset, value, littleEndian);
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to store the data.
- `value`
  - : The value to set.
- `littleEndian`
  - : {{optional_inline}} Indicates whether the 64-bit float is stored in
    {{Glossary("Endianness", "little- or big-endian")}} format. If `false` or
    `undefined`, a big-endian value is written.

### Return value

{{jsxref("undefined")}}.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would store beyond the end
    of the view.

## Examples

### Using the setFloat64 method

```js
var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.setFloat64(0, 3);
dataview.getFloat64(0); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
