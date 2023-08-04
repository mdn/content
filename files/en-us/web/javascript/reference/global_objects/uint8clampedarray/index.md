---
title: Uint8ClampedArray
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
page-type: javascript-class
browser-compat: javascript.builtins.Uint8ClampedArray
---

{{JSRef}}

The **`Uint8ClampedArray`** typed array represents an array of 8-bit unsigned integers clamped to 0-255; if you specified a value that is out of the range of \[0,255], 0 or 255 will be set instead; if you specify a non-integer, the nearest integer will be set. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

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
const uintc8 = new Uint8ClampedArray(2);
uintc8[0] = 42;
uintc8[1] = 1337;
console.log(uintc8[0]); // 42
console.log(uintc8[1]); // 255 (clamped)
console.log(uintc8.length); // 2
console.log(uintc8.BYTES_PER_ELEMENT); // 1

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
const uintc8FromIterable = new Uint8ClampedArray(iterable);
console.log(uintc8FromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint8ClampedArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
