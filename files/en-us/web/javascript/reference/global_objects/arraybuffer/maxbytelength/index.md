---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.ArrayBuffer.maxByteLength
---

{{JSRef}}{{SeeCompatTable}}

The **`maxByteLength`** accessor property of {{jsxref("ArrayBuffer")}} instances represents the maximum length, in bytes, that the `ArrayBuffer` can be resized to.

{{EmbedInteractiveExample("pages/js/arraybuffer-maxbytelength.html")}}

## Description

The `maxByteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the array is constructed, set via the `maxByteLength` option of the {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} constructor, and cannot be changed.

This property returns 0 if this `ArrayBuffer` has been detached. If this `ArrayBuffer` was constructed without specifying a `maxByteLength` value, this property returns a value equal to the value of the `ArrayBuffer`'s {{jsxref("ArrayBuffer/byteLength", "byteLength")}}.

## Examples

### Using maxByteLength

In this example, we create an 8-byte buffer that is resizable to a max length of 16 bytes, then return its `maxByteLength`:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
