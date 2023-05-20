---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.SharedArrayBuffer.byteLength
---

{{JSRef}}

The **`byteLength`** accessor property of {{jsxref("SharedArrayBuffer")}} instances returns the length (in bytes) of this `SharedArrayBuffer`.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-bytelength.html","shorter")}}

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the shared array is constructed and cannot be changed.

## Examples

### Using byteLength

```js
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("SharedArrayBuffer")}}
