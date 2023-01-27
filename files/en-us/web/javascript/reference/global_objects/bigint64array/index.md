---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
page-type: javascript-class
tags:
  - BigInt
  - BigInt64Array
  - Class
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.BigInt64Array
---

{{JSRef}}

The **`BigInt64Array`** typed array represents an array of 64-bit signed integers in the platform byte order. If control over byte order is needed, use {{jsxref("DataView")}} instead. The contents are initialized to `0n`. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).

## Constructor

- [`BigInt64Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array)
  - : Creates a new `BigInt64Array` object.

## Static properties

_Also inherits static properties from its parent {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `8` in the case of `BigInt64Array`.
- {{jsxref("TypedArray.name", "BigInt64Array.name")}}
  - : Returns the string value of the constructor name. `"BigInt64Array"` in the case of `BigInt64Array`.

## Static methods

_Inherits static methods from its parent {{jsxref("TypedArray")}}_.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `8` in the case of a `BigInt64Array`.

## Instance methods

_Inherits instance methods from its parent {{jsxref("TypedArray")}}_.

## Examples

### Different ways to create a `BigInt64Array`

```js
// From a length
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = function*() { yield* [1n, 2n, 3n]; }();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
