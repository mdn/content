---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
page-type: javascript-instance-method
browser-compat: javascript.builtins.DataView.setInt8
---

{{JSRef}}

The **`setInt8()`** method of {{jsxref("DataView")}} instances takes a number and stores it as an 8-bit signed integer in the byte at the specified byte offset of this `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setint8.html")}}

## Syntax

```js-nolint
setInt8(byteOffset, value)
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

### Using the setInt8 method

```js
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.setInt8(1, 3);
dataview.getInt8(1); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
