---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
tags:
  - ArrayBuffer
  - Class
  - JavaScript
  - Reference
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.ArrayBuffer
---
{{JSRef}}

The **`ArrayBuffer`** object is used to represent a generic, fixed-length raw binary data buffer.

It is an array of bytes, often referred to in other languages as a "byte array". You cannot directly manipulate the contents of an `ArrayBuffer`; instead, you create one of the [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a {{jsxref("DataView")}} object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

The [`ArrayBuffer()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) constructor creates a new `ArrayBuffer` of the given length in bytes. You can also get an array buffer from existing data, for example, from a [Base64](/en-US/docs/Glossary/Base64) string or [from a local file](/en-US/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` is a {{glossary("Transferable objects","transferable object")}}.

## Constructor

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : Creates a new `ArrayBuffer` object.

## Static properties

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : The constructor function that is used to create derived objects.

## Static methods

- {{jsxref("ArrayBuffer.isView", "ArrayBuffer.isView(<var>arg</var>)")}}
  - : Returns `true` if `arg` is one of the ArrayBuffer views, such as [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a {{jsxref("DataView")}}. Returns `false` otherwise.

## Instance properties

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : The read-only size, in bytes, of the `ArrayBuffer`. This is established when the array is constructed and cannot be changed.

## Instance methods

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `begin` (inclusive) up to `end` (exclusive). If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.

## Examples

### Creating an ArrayBuffer

In this example, we create a 8-byte buffer with a {{jsxref("Int32Array")}} view referring to the buffer:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
