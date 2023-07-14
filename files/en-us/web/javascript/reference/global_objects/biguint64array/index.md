---
title: BigUint64Array
slug: Web/JavaScript/Reference/Global_Objects/BigUint64Array
page-type: javascript-class
browser-compat: javascript.builtins.BigUint64Array
---

{{JSRef}}

The **`BigUint64Array`** typed array represents an array of 64-bit unsigned integers in the platform byte order. If control over byte order is needed, use {{jsxref("DataView")}} instead. The contents are initialized to `0n`. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).

`BigUint64Array` is a subclass of the hidden {{jsxref("TypedArray")}} class.

## Constructor

- {{jsxref("BigUint64Array/BigUint64Array", "BigUint64Array()")}}
  - : Creates a new `BigUint64Array` object.

## Static properties

_Also inherits static properties from its parent {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `8` in the case of `BigUint64Array`.

## Static methods

_Inherits static methods from its parent {{jsxref("TypedArray")}}_.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("TypedArray")}}_.

These properties are defined on `BigUint64Array.prototype` and shared by all `BigUint64Array` instances.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BigUint64Array.prototype.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `8` in the case of a `BigUint64Array`.
- {{jsxref("Object/constructor", "BigUint64Array.prototype.constructor")}}
  - : The constructor function that created the instance object. For `BigUint64Array` instances, the initial value is the {{jsxref("BigUint64Array/BigUint64Array", "BigUint64Array")}} constructor.

## Instance methods

_Inherits instance methods from its parent {{jsxref("TypedArray")}}_.

## Examples

### Different ways to create a `BigUint64Array`

```js
// From a length
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64FromIterable = new BigUint64Array(iterable);
console.log(biguint64FromIterable);
// BigUint64Array [1n, 2n, 3n]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("BigInt64Array")}}
- {{jsxref("DataView")}}
