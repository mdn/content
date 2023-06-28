---
title: TypedArray.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.TypedArray.buffer
---

{{JSRef}}

The **`buffer`** accessor property of {{jsxref("TypedArray")}} instances returns the {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}} referenced by this typed array at construction time.

{{EmbedInteractiveExample("pages/js/typedarray-buffer.html","shorter")}}

## Description

The `buffer` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when the _TypedArray_ is constructed and cannot be changed. _TypedArray_ is one of the [TypedArray objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

Because a typed array is a _view_ of a buffer, the underlying buffer may be longer than the typed array itself.

## Examples

### Using the buffer property

```js
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

### Accessing the underlying buffer from a sliced array view

```js
const buffer = new ArrayBuffer(1024);
const arr = new Uint8Array(buffer, 64, 128);
console.log(arr.byteLength); // 128
console.log(arr.buffer.byteLength); // 1024
console.log(arr.buffer === buffer); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
