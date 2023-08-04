---
title: DataView
slug: Web/JavaScript/Reference/Global_Objects/DataView
page-type: javascript-class
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
  const left = dataview.getUint32(byteOffset, littleEndian);
  const right = dataview.getUint32(byteOffset + 4, littleEndian);

  // combine the two 32-bit values
  const combined = littleEndian
    ? left + 2 ** 32 * right
    : 2 ** 32 * left + right;

  if (!Number.isSafeInteger(combined))
    console.warn(combined, "exceeds MAX_SAFE_INTEGER. Precision may be lost");

  return combined;
}
```

Alternatively, if you need full 64-bit range, you can create a {{jsxref("BigInt")}}. Further, although native BigInts are much faster than user-land library equivalents, BigInts will always be much slower than 32-bit integers in JavaScript due to the nature of their variable size.

```js
const BigInt = window.BigInt,
  bigThirtyTwo = BigInt(32),
  bigZero = BigInt(0);
function getUint64BigInt(dataview, byteOffset, littleEndian) {
  // split 64-bit number into two 32-bit (4-byte) parts
  const left = BigInt(dataview.getUint32(byteOffset | 0, !!littleEndian) >>> 0);
  const right = BigInt(
    dataview.getUint32(((byteOffset | 0) + 4) | 0, !!littleEndian) >>> 0,
  );

  // combine the two 32-bit values and return
  return littleEndian
    ? (right << bigThirtyTwo) | left
    : (left << bigThirtyTwo) | right;
}
```

## Constructor

- {{jsxref("DataView/DataView", "DataView()")}}
  - : Creates a new `DataView` object.

## Instance properties

These properties are defined on `DataView.prototype` and shared by all `DataView` instances.

- {{jsxref("DataView.prototype.buffer")}}
  - : The {{jsxref("ArrayBuffer")}} referenced by this view. Fixed at construction time and thus **read only.**
- {{jsxref("DataView.prototype.byteLength")}}
  - : The length (in bytes) of this view. Fixed at construction time and thus **read only.**
- {{jsxref("DataView.prototype.byteOffset")}}
  - : The offset (in bytes) of this view from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("Object/constructor", "DataView.prototype.constructor")}}
  - : The constructor function that created the instance object. For `DataView` instances, the initial value is the {{jsxref("DataView/DataView", "DataView")}} constructor.
- `DataView.prototype[@@toStringTag]`
  - : The initial value of the [`@@toStringTag`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"DataView"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("DataView.prototype.getBigInt64()")}}
  - : Reads 8 bytes starting at the specified byte offset of this `DataView` and interprets them as a 64-bit signed integer.
- {{jsxref("DataView.prototype.getBigUint64()")}}
  - : Reads 8 bytes starting at the specified byte offset of this `DataView` and interprets them as a 64-bit unsigned integer.
- {{jsxref("DataView.prototype.getFloat32()")}}
  - : Reads 4 bytes starting at the specified byte offset of this `DataView` and interprets them as a 32-bit float.
- {{jsxref("DataView.prototype.getFloat64()")}}
  - : Reads 8 bytes starting at the specified byte offset of this `DataView` and interprets them as a 64-bit float.
- {{jsxref("DataView.prototype.getInt16()")}}
  - : Reads 2 bytes starting at the specified byte offset of this `DataView` and interprets them as a 16-bit signed integer.
- {{jsxref("DataView.prototype.getInt32()")}}
  - : Reads 4 bytes starting at the specified byte offset of this `DataView` and interprets them as a 32-bit signed integer.
- {{jsxref("DataView.prototype.getInt8()")}}
  - : Reads 1 byte at the specified byte offset of this `DataView` and interprets it as an 8-bit signed integer.
- {{jsxref("DataView.prototype.getUint16()")}}
  - : Reads 2 bytes starting at the specified byte offset of this `DataView` and interprets them as a 16-bit unsigned integer.
- {{jsxref("DataView.prototype.getUint32()")}}
  - : Reads 4 bytes starting at the specified byte offset of this `DataView` and interprets them as a 32-bit unsigned integer.
- {{jsxref("DataView.prototype.getUint8()")}}
  - : Reads 1 byte at the specified byte offset of this `DataView` and interprets it as an 8-bit unsigned integer.
- {{jsxref("DataView.prototype.setBigInt64()")}}
  - : Takes a BigInt and stores it as a 64-bit signed integer in the 8 bytes starting at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setBigUint64()")}}
  - : Takes a BigInt and stores it as a 64-bit unsigned integer in the 8 bytes starting at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setFloat32()")}}
  - : Takes a number and stores it as a 32-bit float in the 4 bytes starting at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setFloat64()")}}
  - : Takes a number and stores it as a 64-bit float in the 8 bytes starting at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setInt16()")}}
  - : Takes a number and stores it as a 16-bit signed integer in the 2 bytes at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setInt32()")}}
  - : Takes a number and stores it as a 32-bit signed integer in the 4 bytes at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setInt8()")}}
  - : Takes a number and stores it as an 8-bit signed integer in the byte at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setUint16()")}}
  - : Takes a number and stores it as a 16-bit unsigned integer in the 2 bytes at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setUint32()")}}
  - : Takes a number and stores it as a 32-bit unsigned integer in the 4 bytes at the specified byte offset of this `DataView`.
- {{jsxref("DataView.prototype.setUint8()")}}
  - : Takes a number and stores it as an 8-bit unsigned integer in the byte at the specified byte offset of this `DataView`.

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
