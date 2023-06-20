---
title: DataView.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/DataView/buffer
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.DataView.buffer
---

{{JSRef}}

The **`buffer`** accessor property of {{jsxref("DataView")}} instances returns the {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} referenced by this view at construction time.

{{EmbedInteractiveExample("pages/js/dataview-buffer.html")}}

## Syntax

### Return value

The getter for `buffer` returns the underlying {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} of this `DataView`, established via the first `buffer` parameter of the {{jsxref("DataView/DataView", "DataView()")}} constructor.

There is no setter for `buffer`, so you cannot change this property's value using assignment.

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
