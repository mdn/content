---
title: DataView.prototype.byteOffset
short-title: byteOffset
slug: Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.DataView.byteOffset
sidebar: jsref
---

The **`byteOffset`** accessor property of {{jsxref("DataView")}} instances returns the offset (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}.

{{InteractiveExample("JavaScript Demo: DataView.prototype.byteOffset")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## Description

The `byteOffset` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the `DataView` is constructed and cannot be changed. However, the `byteOffset` becomes 0 if the underlying buffer is resized such that the viewed range is no longer valid.

## Examples

### Using the byteOffset property

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteOffset; // 4
buffer2.resize(3);
dataviewLengthTracking.byteOffset; // 0 (viewed range is no longer valid)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
