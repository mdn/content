---
title: DataView.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteLength
tags:
  - DataView
  - JavaScript
  - Property
  - Prototype
  - TypedArrays
browser-compat: javascript.builtins.DataView.byteLength
---
{{JSRef}}

The **`byteLength`** accessor property represents the length (in bytes) of the dataview.

{{EmbedInteractiveExample("pages/js/dataview-bytelength.html")}}

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when an `DataView` is constructed and cannot be changed. If the `DataView` is not specifying an offset or a `byteLength`, the `byteLength` of the referenced `ArrayBuffer` or `SharedArrayBuffer` will be returned.

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
