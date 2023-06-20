---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.ArrayBuffer.byteLength
---

{{JSRef}}

The **`byteLength`** accessor property of {{jsxref("ArrayBuffer")}} instances returns the length (in bytes) of this array buffer.

{{EmbedInteractiveExample("pages/js/arraybuffer-bytelength.html")}}

## Syntax

### Return value

The getter for `byteLength` returns an integer whose value is established via the first `length` parameter of the {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} constructor. It returns 0 if this `ArrayBuffer` has been detached.

There is no setter for `byteLength`, so you cannot change this property's value using assignment.

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
