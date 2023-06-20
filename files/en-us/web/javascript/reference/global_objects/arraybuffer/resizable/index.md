---
title: ArrayBuffer.prototype.resizable
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resizable
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.ArrayBuffer.resizable
---

{{JSRef}}

The **`resizable`** accessor property of {{jsxref("ArrayBuffer")}} instances returns whether this array buffer can be resized or not.

{{EmbedInteractiveExample("pages/js/arraybuffer-resizable.html")}}

## Syntax

### Return value

The getter for `resizable` returns a boolean value, which is `true` if the `maxByteLength` option was set in the constructor, and `false` otherwise.

There is no setter for `resizable`, so you cannot change this property's value using assignment.

## Examples

### Using resizable

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then check its `resizable` property, resizing it if `resizable` returns `true`:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
- {{jsxref("ArrayBuffer.prototype.resize()")}}
