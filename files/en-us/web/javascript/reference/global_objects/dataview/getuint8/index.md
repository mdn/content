---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.getUint8
---

{{JSRef}}

The **`getUint8()`** method of {{jsxref("DataView")}} instances reads 1 byte at the specified byte offset of this `DataView` and interprets it as an 8-bit unsigned integer.

{{EmbedInteractiveExample("pages/js/dataview-getuint8.html")}}

## Syntax

```js-nolint
getUint8(byteOffset)
```

### Parameters

- `byteOffset`
  - : The offset, in bytes, from the start of the view to read the data from.

### Return value

An integer from 0 to 255, inclusive.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` is set such that it would read beyond the end of the view.

## Examples

### Using getUint8()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint8(1)); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint8Array")}}
