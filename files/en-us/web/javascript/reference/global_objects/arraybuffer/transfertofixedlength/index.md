---
title: ArrayBuffer.prototype.transferToFixedLength()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/transferToFixedLength
page-type: javascript-instance-method
browser-compat: javascript.builtins.ArrayBuffer.transferToFixedLength
---

{{JSRef}}

The **`transferToFixedLength()`** method of {{jsxref("ArrayBuffer")}} instances creates a new non-resizable `ArrayBuffer` with the same byte content as this buffer, then detaches this buffer.

## Syntax

```js-nolint
transferToFixedLength()
transferToFixedLength(newByteLength)
```

### Parameters

- `newByteLength`
  - : The {{jsxref("ArrayBuffer/byteLength", "byteLength")}} of the new `ArrayBuffer`. Defaults to the `byteLength` of this `ArrayBuffer`.
    - If `newByteLength` is smaller than the `byteLength` of this `ArrayBuffer`, the "overflowing" bytes are dropped.
    - If `newByteLength` is larger than the `byteLength` of this `ArrayBuffer`, the extra bytes are filled with zeros.

### Return value

A new {{jsxref("ArrayBuffer")}} object. Its contents are initialized to the contents of this `ArrayBuffer`, and extra bytes, if any, are filled with zeros. The new `ArrayBuffer` is always non-resizable. The original `ArrayBuffer` is detached.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if this `ArrayBuffer` is already detached.

## Description

Unlike {{jsxref("ArrayBuffer/transfer", "transfer()")}}, `transferToFixedLength()` always creates a non-resizable `ArrayBuffer`. This means `newByteLength` can be larger than the `maxByteLength`, even if this `ArrayBuffer` is resizable. See [transferring ArrayBuffers](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#transferring_arraybuffers) for more information.

## Examples

### Transferring a resizable ArrayBuffer to fixed-length

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength();
console.log(buffer2.byteLength); // 8
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

Using `transferToFixedLength`, `newByteLength` can be larger than the `maxByteLength` of the original `ArrayBuffer`.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const view = new Uint8Array(buffer);
view[1] = 2;
view[7] = 4;

const buffer2 = buffer.transferToFixedLength(20);
console.log(buffer2.byteLength); // 20
console.log(buffer2.resizable); // false
const view2 = new Uint8Array(buffer2);
console.log(view2[1]); // 2
console.log(view2[7]); // 4
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `ArrayBuffer.prototype.transferToFixedLength()` in `core-js`](https://github.com/zloirock/core-js#arraybufferprototypetransfer-and-friends)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("ArrayBuffer.prototype.detached")}}
- {{jsxref("ArrayBuffer.prototype.transfer()")}}
