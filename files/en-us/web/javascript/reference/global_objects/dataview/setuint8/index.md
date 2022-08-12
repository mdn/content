---
title: DataView.prototype.setUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint8
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.setUint8
---
{{JSRef}}

The **`setUint8()`** method stores an unsigned 8-bit integer
(byte) value at the specified byte offset from the start of the {{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-setuint8.html")}}

## Syntax

```js
setUint8(byteOffset, value)
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to store the data.
- `value`
  - : The value to set.

### Return value

{{jsxref("undefined")}}.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would store beyond the end
    of the view.

## Examples

### Using the setUint8 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setUint8(1, 3);
dataview.getUint8(1); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
