---
title: SharedArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.SharedArrayBuffer.byteLength
---

{{JSRef}}

The **`byteLength`** accessor property of {{jsxref("SharedArrayBuffer")}} instances returns the length (in bytes) of this `SharedArrayBuffer`.

{{EmbedInteractiveExample("pages/js/sharedarraybuffer-bytelength.html","shorter")}}

## Syntax

### Return value

The getter for `byteLength` returns an integer whose value is established via the first `length` parameter of the {{jsxref("SharedArrayBuffer/SharedArrayBuffer", "SharedArrayBuffer()")}} constructor.

There is no setter for `byteLength`, so you cannot change this property's value using assignment.

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
