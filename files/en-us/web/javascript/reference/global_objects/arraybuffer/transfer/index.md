---
title: ArrayBuffer.prototype.transfer()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transfer
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.ArrayBuffer.transfer
---

{{JSRef}} {{SeeCompatTable}}

The **`transfer()`** method of {{jsxref("ArrayBuffer")}} instances creates a new `ArrayBuffer` with the same byte content as this buffer, then detaches this buffer.

## Syntax

```js-nolint
transfer()
transfer(newByteLength)
```

### Parameters

- `newByteLength` {{optional_inline}}
  - : The {{jsxref("ArrayBuffer/byteLength", "byteLength")}} of the new `ArrayBuffer`. Defaults to the `byteLength` of this `ArrayBuffer`.
    - If `newByteLength` is smaller than the `byteLength` of this `ArrayBuffer`, the "overflowing" bytes are dropped.
    - If `newByteLength` is larger than the `byteLength` of this `ArrayBuffer`, the extra bytes are filled with zeros.
    - If this `ArrayBuffer` is resizable, `newByteLength` must not be greater than its {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}}.

### Return value

A new {{jsxref("ArrayBuffer")}} object. Its contents are initialized to the contents of this `ArrayBuffer`, and extra bytes, if any, are filled with zeros. The new `ArrayBuffer` is resizable if and only if this `ArrayBuffer` is resizable, in which case its {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} is the same as this `ArrayBuffer`'s. The original `ArrayBuffer` is detached.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if this `ArrayBuffer` is resizable and `newByteLength` is greater than the {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} of this `ArrayBuffer`.
- {{jsxref("TypeError")}}
  - : Thrown if this `ArrayBuffer` is already detached.

## Description

The `transfer()` method performs the same operation as the [structured clone algorithm](/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm). It copies the bytes of this `ArrayBuffer` into a new `ArrayBuffer` object, then detaches this `ArrayBuffer` object. See [transferring ArrayBuffers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) for more information.

`transfer()` preserves the resizability of this `ArrayBuffer`. If you want the new `ArrayBuffer` to be non-resizable, use {{jsxref("ArrayBuffer/transferToFixedLength", "transferToFixedLength()")}} instead. There's no way to transfer a buffer that makes a fixed-length buffer become resizable.

`transfer()` is very efficient because implementations may implement this method as a zero-copy move or a `realloc` — there does not need to be an actual copy of the data.

## Examples

### Transferring an ArrayBuffer

```js
// Create an ArrayBuffer and write a few bytes
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Copy the buffer to the same size
const buffer2 = buffer.transfer();
console.log(buffer.detached); // true
console.log(buffer2.byteLength); // 8
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4

// Copy the buffer to a smaller size
const buffer3 = buffer2.transfer(4);
console.log(buffer3.byteLength); // 4
const view3 = new Uint8Array(buffer3);
console.log(view3[1]); // 2
console.log(view3[7]); // undefined

// Copy the buffer to a larger size
const buffer4 = buffer3.transfer(8);
console.log(buffer4.byteLength); // 8
const view4 = new Uint8Array(buffer4);
console.log(view4[1]); // 2
console.log(view4[7]); // 0

// Already detached, throws TypeError
buffer.transfer(); // TypeError: Cannot perform ArrayBuffer.prototype.transfer on a detached ArrayBuffer
```

### Transferring a resizable ArrayBuffer

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

// Copy the buffer to a smaller size
const buffer2 = buffer.transfer(4);
console.log(buffer2.byteLength); // 4
console.log(buffer2.maxByteLength); // 16
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // undefined
buffer2.resize(8);
console.log(view2[7]); // 0

// Copy the buffer to a larger size within maxByteLength
const buffer3 = buffer2.transfer(12);
console.log(buffer3.byteLength); // 12

// Copy the buffer to a larger size than maxByteLength
buffer3.transfer(20); // RangeError: Invalid array buffer length
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transferToFixedLength()")}}
