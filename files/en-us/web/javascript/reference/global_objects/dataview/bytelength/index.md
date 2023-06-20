---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.DataView.byteLength
---

{{JSRef}}

The **`byteLength`** accessor property of {{jsxref("DataView")}} instances returns the length (in bytes) of this view.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## Syntax

### Return value

The getter for `byteLength` returns an integer whose value is either explicitly specified via the third `byteLength` parameter of the {{jsxref("DataView/DataView", "DataView()")}} constructor, or implicitly calculated by the `byteOffset` parameter and the `byteLength` of the referenced {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}.

There is no setter for `byteLength`, so you cannot change this property's value using assignment.

## Examples

### Using the byteLength property

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (matches the byteLength of the buffer)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (as specified when constructing the DataView)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (due to the offset of the constructed DataView)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
