---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
tags:
  - DataView
  - JavaScript
  - Property
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.buffer
---
{{JSRef}}

The **`buffer`** accessor property represents the {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} referenced by the `DataView` at construction time.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Description

The `buffer` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the `DataView` is constructed and cannot be changed.

## Examples

### Using the buffer property

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
