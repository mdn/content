---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
page-type: javascript-class
browser-compat: javascript.builtins.Uint8ClampedArray
---

{{JSRef}}

The **`Uint8ClampedArray`** typed array represents an array of 8-bit unsigned integers clamped to 0–255. The contents are initialized to `0` unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

`Uint8ClampedArray` is a subclass of the hidden {{jsxref("TypedArray")}} class.

## Constructor

- {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray()")}}
  - : Creates a new `Uint8ClampedArray` object.

## Static properties

_Also inherits static properties from its parent {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `1` in the case of `Uint8ClampedArray`.

## Static methods

_Inherits static methods from its parent {{jsxref("TypedArray")}}_.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("TypedArray")}}_.

These properties are defined on `Uint8ClampedArray.prototype` and shared by all `Uint8ClampedArray` instances.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Uint8ClampedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `1` in the case of a `Uint8ClampedArray`.
- {{jsxref("Object/constructor", "Uint8ClampedArray.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Uint8ClampedArray` instances, the initial value is the {{jsxref("Uint8ClampedArray/Uint8ClampedArray", "Uint8ClampedArray")}} constructor.

## Instance methods

_Inherits instance methods from its parent {{jsxref("TypedArray")}}_.

## Examples

### Different ways to create a Uint8ClampedArray

```js
// From a length
const uint8c = new Uint8ClampedArray(2);
uint8c[0] = 42;
uint8c[1] = 1337;
console.log(uint8c[0]); // 42
console.log(uint8c[1]); // 255 (clamped)
console.log(uint8c.length); // 2
console.log(uint8c.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8cFromIterable = new Uint8ClampedArray(iterable);
console.log(uint8cFromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint8ClampedArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
