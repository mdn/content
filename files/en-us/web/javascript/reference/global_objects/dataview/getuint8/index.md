---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.getUint8
---
{{JSRef}}

The **`getUint8()`** method gets an unsigned 8-bit integer
(unsigned byte) at the specified byte offset from the start of the
{{jsxref("DataView")}}.

{{EmbedInteractiveExample("pages/js/dataview-getuint8.html")}}

## Syntax

```js
getUint8(byteOffset)
```

### Parameters

- `byteOffset`
  - : The offset, in byte, from the start of the view where to read the data.

### Return value

An unsigned 8-bit integer number.

### Errors thrown

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such as it would read beyond the end of
    the view.

## Description

There is no alignment constraint; multi-byte values may be fetched from any offset.

## Examples

### Using the getUint8 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.getUint8(1); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
