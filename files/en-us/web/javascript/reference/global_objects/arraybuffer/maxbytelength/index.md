---
title: ArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/maxByteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.ArrayBuffer.maxByteLength
---

{{JSRef}}

The **`maxByteLength`** accessor property of {{jsxref("ArrayBuffer")}} instances returns the maximum length (in bytes) that this array buffer can be resized to.

{{EmbedInteractiveExample("pages/js/arraybuffer-maxbytelength.html")}}

## Syntax

### Return value

The getter for `maxByteLength` returns an integer whose value is established via the `maxByteLength` option of the {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} constructor. If this `ArrayBuffer` is [not resizable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable), it returns the same value as the `ArrayBuffer`'s {{jsxref("ArrayBuffer/byteLength", "byteLength")}}. It returns 0 if this `ArrayBuffer` has been detached.

There is no setter for `maxByteLength`, so you cannot change this property's value using assignment.

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
