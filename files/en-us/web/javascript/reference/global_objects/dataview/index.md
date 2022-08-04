---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
tags:
  - Class
  - DataView
  - JavaScript
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.DataView
---
{{JSRef}}

The **`DataView`** view provides a low-level interface for reading and writing multiple number types in a binary {{jsxref("ArrayBuffer")}}, without having to care about the platform's [endianness](/en-US/docs/Glossary/Endianness).

## Description

### Endianness

Multi-byte number formats are represented in memory differently depending on machine architecture — see [Endianness](/en-US/docs/Glossary/Endianness) for an explanation. `DataView` accessors provide explicit control of how data is accessed, regardless of the executing computer's endianness.

```js
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

### 64-bit Integer Values

Some browsers don't have support for {{jsxref("DataView.prototype.setBigInt64()")}} and {{jsxref("DataView.prototype.setBigUint64()")}}. So to enable 64-bit operations in your code that will work across browsers, you could implement your own `getUint64()` function, to obtain values with precision up to {{jsxref("Number.MAX_SAFE_INTEGER")}} — which could suffice for certain cases.

```js
function getUint64(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left =  dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset+4, littleEndian);

  // combine the two 32-bit values
  const combined = littleEndian? left + 2**32*right : 2**32*left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, 'exceeds MAX_SAFE_INTEGER. Precision may be lost');

  return combined;
}
```

Alternatively, if you need full 64-bit range, you can create a {{jsxref("BigInt")}}. Further, although native BigInts are much faster than user-land library equivalents, BigInts will always be much slower than 32-bit integers in JavaScript due to the nature of their variable size.

```js
const BigInt = window.BigInt, bigThirtyTwo = BigInt(32), bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = BigInt(dataview.getUint32(byteOffset|0, !!littleEndian)>>>0);
  const right = BigInt(dataview.getUint32((byteOffset|0) + 4|0, !!littleEndian)>>>0);

  // combine the two 32-bit values and return
  return littleEndian ? (right<<bigThirtyTwo)|left : (left<<bigThirtyTwo)|right;
}
```

## Constructor

- [`DataView()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView)
  - : Creates a new `DataView` object.

## Instance properties

- {{jsxref("DataView.prototype.buffer")}}
  - : The {{jsxref("ArrayBuffer")}} referenced by this view. Fixed at construction time and thus **read only.**
- {{jsxref("DataView.prototype.byteLength")}}
  - : The length (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("DataView.prototype.byteOffset")}}
  - : The offset (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**

## Instance methods

- {{jsxref("DataView.prototype.getInt8()")}}
  - : Gets a signed 8-bit integer (byte) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Gets an unsigned 8-bit integer (unsigned byte) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Gets a signed 16-bit integer (short) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Gets an unsigned 16-bit integer (unsigned short) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Gets a signed 32-bit integer (long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Gets an unsigned 32-bit integer (unsigned long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Gets a signed 32-bit float (float) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Gets a signed 64-bit float (double) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Gets a signed 64-bit integer (long long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Gets an unsigned 64-bit integer (unsigned long long) at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Stores a signed 8-bit integer (byte) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Stores an unsigned 8-bit integer (unsigned byte) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Stores a signed 16-bit integer (short) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Stores an unsigned 16-bit integer (unsigned short) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Stores a signed 32-bit integer (long) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Stores an unsigned 32-bit integer (unsigned long) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Stores a signed 32-bit float (float) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Stores a signed 64-bit float (double) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Stores a signed 64-bit integer (long long) value at the specified byte offset from the start of the view.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Stores an unsigned 64-bit integer (unsigned long long) value at the specified byte offset from the start of the view.

## Examples

### Using DataView

```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `DataView` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [jDataView](https://github.com/jDataView/jDataView): JavaScript library that polyfills and extends the `DataView` API to all browsers and Node.js.
- {{jsxref("ArrayBuffer")}}
- {{jsxref("SharedArrayBuffer")}}
