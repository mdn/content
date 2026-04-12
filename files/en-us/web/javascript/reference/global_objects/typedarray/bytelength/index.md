---
title: TypedArray.prototype.byteLength
short-title: byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.TypedArray.byteLength
sidebar: jsref
---

The **`byteLength`** accessor property of {{jsxref("TypedArray")}} instances returns the length (in bytes) of this typed array.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.byteLength", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.byteLength);
// Expected output: 6
```

## Description

The `byteLength` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. If the typed array is [length-tracking](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#behavior_when_viewing_a_resizable_buffer), then its length depends on the length of the underlying buffer, and may change if the buffer is resized. Otherwise, the value is established when the typed array is constructed and cannot be changed. Whether length-tracking or not, the `byteLength` becomes 0 if the underlying buffer is resized such that the viewed range is no longer valid.

## Examples

### Using the byteLength property

```js
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 (as specified when constructing the Uint8Array)

const uint8offset = new Uint8Array(buffer, 2);
uint8offset.byteLength; // 6 (due to the offset of the constructed Uint8Array)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
uint8lengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
uint8lengthTracking.byteLength; // 0 (viewed range is no longer valid)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
