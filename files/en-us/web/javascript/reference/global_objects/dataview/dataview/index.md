---
title: DataView() constructor
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
page-type: javascript-constructor
browser-compat: javascript.builtins.DataView.DataView
---

{{JSRef}}

The **`DataView()`** constructor creates {{jsxref("DataView")}} objects.

{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}

## Syntax

```js-nolint
new DataView(buffer)
new DataView(buffer, byteOffset)
new DataView(buffer, byteOffset, byteLength)
```

> **Note:** `DataView()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `buffer`
  - : An existing {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} to use as
    the storage backing the new `DataView` object.
- `byteOffset` {{optional_inline}}
  - : The offset, in bytes, to the first byte in the above buffer for the new view to
    reference. If unspecified, the buffer view starts with the first byte.
- `byteLength` {{optional_inline}}
  - : The number of elements in the byte array. If unspecified, the view's length will
    match the buffer's length.

### Return value

A new {{jsxref("DataView")}} object representing the specified data buffer.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the `byteOffset` or `byteLength` parameter values result in the view extending past the end of the buffer. In other words, `byteOffset + byteLength > buffer.byteLength`.

## Examples

### Using DataView

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `DataView` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("DataView")}}
