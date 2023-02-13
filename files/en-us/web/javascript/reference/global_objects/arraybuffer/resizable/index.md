---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
page-type: javascript-instance-accessor-property
tags:
  - ArrayBuffer
  - Experimental
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.ArrayBuffer.resizable
---

{{JSRef}}

The **`resizable`** accessor property represents a boolean value; it returns `true` if the {{jsxref("ArrayBuffer")}} can be resized, or `false` if not.

{{EmbedInteractiveExample("pages/js/arraybuffer-resizable.html")}}

## Description

The `resizable` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property; The value cannot be changed. The value is established when the array is constructed. If a `maxByteLength` option was set in the constructor, `resizable` will return `true`; if not, it will return `false`.

## Examples

### Using resizable

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes then check its `resizable` property, resizing it if `resizable` returns `true`:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 } );

if(buffer.resizable) {
  console.log('Buffer is resizable!');
  buffer.resize(12);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
