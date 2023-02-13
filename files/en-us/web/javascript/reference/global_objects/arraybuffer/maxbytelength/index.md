---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
page-type: javascript-instance-accessor-property
tags:
  - ArrayBuffer
  - Experimental
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.ArrayBuffer.maxByteLength
---

{{JSRef}}

The **`maxByteLength`** accessor property represents the maximum length the {{jsxref("ArrayBuffer")}} can be resized to, in bytes.

{{EmbedInteractiveExample("pages/js/arraybuffer-maxbytelength.html")}}

## Description

The `maxByteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the array is constructed — set via its `maxByteLength` option — and cannot be changed.

Note that:

- This property returns 0 if this `ArrayBuffer` has been detached.
- If this `ArrayBuffer` was constructed without specifying a `maxByteLength` value, this property returns a value equal to the value of its {{jsxref("Global_Objects/ArrayBuffer.byteLength", "byteLength")}}.

## Examples

### Using maxByteLength

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then return its `maxByteLength`:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 } );

buffer.maxByteLength;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
