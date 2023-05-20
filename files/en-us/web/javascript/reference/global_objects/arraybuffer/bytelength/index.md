---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.ArrayBuffer.byteLength
---

{{JSRef}}

The **`byteLength`** accessor property of {{jsxref("ArrayBuffer")}} instances returns the length (in bytes) of this array buffer.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the array is constructed and cannot be changed. This property returns 0 if this `ArrayBuffer` has been detached.

## Examples

### Using byteLength

```js
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
