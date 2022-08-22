---
title: ArrayBuffer.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
tags:
  - ArrayBuffer
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.ArrayBuffer.byteLength
---
{{JSRef}}

The **`byteLength`** accessor property represents the length of an {{jsxref("ArrayBuffer")}} in bytes.

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
