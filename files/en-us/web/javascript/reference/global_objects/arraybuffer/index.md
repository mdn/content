---
title: ArrayBuffer
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer
page-type: javascript-class
browser-compat: javascript.builtins.ArrayBuffer
---

{{JSRef}}

The **`ArrayBuffer`** object is used to represent a generic raw binary data buffer.

It is an array of bytes, often referred to in other languages as a "byte array". You cannot directly manipulate the contents of an `ArrayBuffer`; instead, you create one of the [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a {{jsxref("DataView")}} object which represents the buffer in a specific format, and use that to read and write the contents of the buffer.

The [`ArrayBuffer()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer) constructor creates a new `ArrayBuffer` of the given length in bytes. You can also get an array buffer from existing data, for example, from a [Base64](/en-US/docs/Glossary/Base64) string or [from a local file](/en-US/docs/Web/API/FileReader/readAsArrayBuffer).

`ArrayBuffer` is a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

### Resizing ArrayBuffers

`ArrayBuffer`s can be made resizable by including the `maxByteLength` option when calling the {{jsxref("ArrayBuffer.ArrayBuffer", "constructor", "", "nocode")}}. You can query whether an `ArrayBuffer` is resizable and what its maximum size is by accessing its {{jsxref("ArrayBuffer.prototype.resizable", "resizable")}} and {{jsxref("ArrayBuffer.prototype.maxByteLength", "maxByteLength")}} properties, respectively. You can assign a new size to a resizable `ArrayBuffer` with a {{jsxref("ArrayBuffer.prototype.resize()", "resize()")}} call.

These additions have made resizing `ArrayBuffer`s more efficient — previously you had to make a copy with a new size. It also gives JavaScript parity with WebAssembly in this regard (WASM linear memory can be resized with [`WebAssembly.Memory.prototype.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/grow)).

## Constructor

- {{jsxref("ArrayBuffer.ArrayBuffer", "ArrayBuffer()")}}
  - : Creates a new `ArrayBuffer` object.

## Static properties

- {{jsxref("ArrayBuffer.@@species", "get ArrayBuffer[@@species]")}}
  - : The constructor function that is used to create derived objects.

## Static methods

- {{jsxref("ArrayBuffer.isView()")}}
  - : Returns `true` if `arg` is one of the ArrayBuffer views, such as [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a {{jsxref("DataView")}}. Returns `false` otherwise.

## Instance properties

- `ArrayBuffer.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"ArrayBuffer"`. This property is used in {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : The size, in bytes, of the `ArrayBuffer`. This is established when the array is constructed and can be changed using the {{jsxref("ArrayBuffer.prototype.resize()")}} method.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}} {{experimental_inline}}
  - : The read-only maximum length, in bytes, that the `ArrayBuffer` can be resized to. This is established when the array is constructed and cannot be changed.
- {{jsxref("ArrayBuffer.prototype.resizable")}} {{experimental_inline}}
  - : Read-only. Returns `true` if the `ArrayBuffer` can be resized, or `false` if not.

## Instance methods

- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `begin` (inclusive) up to `end` (exclusive). If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.
- {{jsxref("ArrayBuffer.prototype.resize()")}} {{experimental_inline}}
  - : Resizes the `ArrayBuffer` to the specified size, in bytes.

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
