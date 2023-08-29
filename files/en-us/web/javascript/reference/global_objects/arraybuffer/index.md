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

## Description

### Resizing ArrayBuffers

`ArrayBuffer` objects can be made resizable by including the `maxByteLength` option when calling the {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}} constructor. You can query whether an `ArrayBuffer` is resizable and what its maximum size is by accessing its {{jsxref("ArrayBuffer/resizable", "resizable")}} and {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} properties, respectively. You can assign a new size to a resizable `ArrayBuffer` with a {{jsxref("ArrayBuffer/resize", "resize()")}} call. New bytes are initialized to 0.

These features make resizing `ArrayBuffer`s more efficient — otherwise, you have to make a copy of the buffer with a new size. It also gives JavaScript parity with WebAssembly in this regard (Wasm linear memory can be resized with [`WebAssembly.Memory.prototype.grow()`](/en-US/docs/WebAssembly/JavaScript_interface/Memory/grow)).

### Transferring ArrayBuffers

`ArrayBuffer` objects can be transferred between different execution contexts, like [Web Workers](/en-US/docs/Web/API/Web_Workers_API) or [Service Workers](/en-US/docs/Web/API/Service_Worker_API), using the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). This is done by passing the `ArrayBuffer` as a [transferable object](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects) in a call to {{domxref("Worker.postMessage()")}} or {{domxref("ServiceWorker.postMessage()")}}. In pure JavaScript, you can also transfer the ownership of memory from one `ArrayBuffer` to another using its {{jsxref("ArrayBuffer/transfer", "transfer()")}} or {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} method.

When an `ArrayBuffer` is transferred, its original copy becomes _detached_ — this means it is no longer usable. At any moment, there will only be one copy of the `ArrayBuffer` that actually has access to the underlying memory. Detached buffers have the following behaviors:

- {{jsxref("ArrayBuffer/byteLength", "byteLength")}} becomes 0 (in both the buffer and the associated typed array views).
- Methods, such as {{jsxref("ArrayBuffer/resize", "resize()")}} and {{jsxref("ArrayBuffer/slice", "slice()")}}, throw a {{jsxref("TypeError")}} when invoked. The associated typed array views' methods also throw a `TypeError`.

You can check whether an `ArrayBuffer` is detached by its {{jsxref("ArrayBuffer/detached", "detached")}} property.

## Constructor

- {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer()")}}
  - : Creates a new `ArrayBuffer` object.

## Static properties

- {{jsxref("ArrayBuffer/@@species", "ArrayBuffer[@@species]")}}
  - : The constructor function that is used to create derived objects.

## Static methods

- {{jsxref("ArrayBuffer.isView()")}}
  - : Returns `true` if `arg` is one of the ArrayBuffer views, such as [typed array objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) or a {{jsxref("DataView")}}. Returns `false` otherwise.

## Instance properties

These properties are defined on `ArrayBuffer.prototype` and shared by all `ArrayBuffer` instances.

- {{jsxref("ArrayBuffer.prototype.byteLength")}}
  - : The size, in bytes, of the `ArrayBuffer`. This is established when the array is constructed and can only be changed using the {{jsxref("ArrayBuffer.prototype.resize()")}} method if the `ArrayBuffer` is resizable.
- {{jsxref("Object/constructor", "ArrayBuffer.prototype.constructor")}}
  - : The constructor function that created the instance object. For `ArrayBuffer` instances, the initial value is the {{jsxref("ArrayBuffer/ArrayBuffer", "ArrayBuffer")}} constructor.
- {{jsxref("ArrayBuffer.prototype.detached")}} {{Experimental_Inline}}
  - : Read-only. Returns `true` if the `ArrayBuffer` has been detached (transferred), or `false` if not.
- {{jsxref("ArrayBuffer.prototype.maxByteLength")}}
  - : The read-only maximum length, in bytes, that the `ArrayBuffer` can be resized to. This is established when the array is constructed and cannot be changed.
- {{jsxref("ArrayBuffer.prototype.resizable")}}
  - : Read-only. Returns `true` if the `ArrayBuffer` can be resized, or `false` if not.
- `ArrayBuffer.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"ArrayBuffer"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("ArrayBuffer.prototype.resize()")}}
  - : Resizes the `ArrayBuffer` to the specified size, in bytes.
- {{jsxref("ArrayBuffer.prototype.slice()")}}
  - : Returns a new `ArrayBuffer` whose contents are a copy of this `ArrayBuffer`'s bytes from `begin` (inclusive) up to `end` (exclusive). If either `begin` or `end` is negative, it refers to an index from the end of the array, as opposed to from the beginning.
- {{jsxref("ArrayBuffer.prototype.transfer()")}} {{Experimental_Inline}}
  - : Creates a new `ArrayBuffer` with the same byte content as this buffer, then detaches this buffer.
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}} {{Experimental_Inline}}
  - : Creates a new non-resizable `ArrayBuffer` with the same byte content as this buffer, then detaches this buffer.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
- [RangeError: invalid array length](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
