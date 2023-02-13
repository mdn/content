---
title: ArrayBuffer.prototype.resize()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
page-type: javascript-instance-method
tags:
  - ArrayBuffer
  - Experimental
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.ArrayBuffer.resize
---

{{JSRef}}{{seecompattable}}

The **`resize()`** method resizes the `ArrayBuffer` to the specified size, in bytes.

{{EmbedInteractiveExample("pages/js/arraybuffer-resize.html")}}

## Syntax

```js-nolint
resize(newLength)
```

### Parameters

- `newLength`
  - : The new length, in bytes, to resize the `ArrayBuffer` to.

### Return value

None ({{jsxref("undefined")}}).

## Description

The `resize()` method resizes an `ArrayBuffer` to the size specified in the `newLength` parameter, provided it was constructed with a `maxByteLength` option specified and `newLength` is less than that value.

Note that you can use `resize()` to shrink as well as grow an `ArrayBuffer` — it is permissable for `newLength` to be smaller than the `ArrayBuffer`'s current {{jsxref("Global_Objects/ArrayBuffer.byteLength", "byteLength")}}.

A `TypeError` is thrown if you attempt to:

- Resize a non-resizable `ArrayBuffer`.
- Resize a resizable `ArrayBuffer` to a size larger than its {{jsxref("Global_Objects/ArrayBuffer.maxByteLength", "maxByteLength")}}.

## Examples

### Using resize()

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes then check its `resizable` property, resizing it if `resizable` returns `true`:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 } );

if(buffer.resizable) {
  console.log('Buffer is resizable!');
  buffer.resize(12);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
