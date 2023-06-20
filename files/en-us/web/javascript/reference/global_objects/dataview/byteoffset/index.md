---
title: DataView.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.DataView.byteOffset
---

{{JSRef}}

The **`byteOffset`** accessor property of {{jsxref("DataView")}} instances returns the offset (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}.

{{EmbedInteractiveExample("pages/js/dataview-byteoffset.html")}}

## Description

The getter for `byteOffset` returns an integer whose value is established via the second `byteOffset` parameter of the {{jsxref("DataView/DataView", "DataView()")}} constructor.

There is no setter for `byteOffset`, so you cannot change this property's value using assignment.

## Examples

### Using the byteOffset property

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
