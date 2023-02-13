---
title: SharedArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
page-type: javascript-instance-accessor-property
tags:
  - Experimental
  - JavaScript
  - Property
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
browser-compat: javascript.builtins.SharedArrayBuffer.maxByteLength
---

{{JSRef}}{{seecompattable}}

The **`maxByteLength`** accessor property represents the maximum length the {{jsxref("SharedArrayBuffer")}} can be grown to, in bytes.

## Description

The `maxByteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the shared array is constructed — set via its `maxByteLength` option — and cannot be changed.

If the `SharedArrayBuffer` was constructed without specifying a `maxByteLength` value, this property returns a value equal to the value of its {{jsxref("Global_Objects/SharedArrayBuffer.byteLength", "byteLength")}}.

## Examples

### Using maxByteLength

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then return its `maxByteLength`:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 } );

buffer.maxByteLength;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("SharedArrayBuffer")}}
