---
title: SharedArrayBuffer.prototype.maxByteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/maxByteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.SharedArrayBuffer.maxByteLength
---

{{JSRef}}

The **`maxByteLength`** accessor property of {{jsxref("SharedArrayBuffer")}} instances returns the maximum length (in bytes) that this `SharedArrayBuffer` can be grown to.

## Syntax

### Return value

The getter for `maxByteLength` returns an integer whose value is established via the `maxByteLength` option of the {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} constructor. If this `SharedArrayBuffer` is [not growable](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/growable), it returns the same value as the `SharedArrayBuffer`'s {{jsxref("SharedArrayBuffer/byteLength", "byteLength")}}.

There is no setter for `maxByteLength`, so you cannot change this property's value using assignment.

## Examples

### Using maxByteLength

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then return its `maxByteLength`:

```js
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.maxByteLength; // 16
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("SharedArrayBuffer")}}
