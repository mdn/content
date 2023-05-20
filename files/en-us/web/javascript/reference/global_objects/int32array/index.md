---
title: Int32Array
slug: Web/JavaScript/Reference/Global_Objects/Int32Array
page-type: javascript-class
browser-compat: javascript.builtins.Int32Array
---

{{JSRef}}

The **`Int32Array`** typed array represents an array of twos-complement 32-bit signed integers in the platform byte order. If control over byte order is needed, use {{jsxref("DataView")}} instead. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

`Int32Array` is a subclass of the hidden {{jsxref("TypedArray")}} class.

## Constructor

- {{jsxref("Int32Array/Int32Array", "Int32Array()")}}
  - : Creates a new `Int32Array` object.

## Static properties

_Also inherits static properties from its parent {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `4` in the case of `Int32Array`.

## Static methods

_Inherits static methods from its parent {{jsxref("TypedArray")}}_.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("TypedArray")}}_.

These properties are defined on `Int32Array.prototype` and shared by all `Int32Array` instances.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int32Array.prototype.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `4` in the case of a `Int32Array`.
- {{jsxref("Object/constructor", "Int32Array.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Int32Array` instances, the initial value is the {{jsxref("Int32Array/Int32Array", "Int32Array")}} constructor.

## Instance methods

_Inherits instance methods from its parent {{jsxref("TypedArray")}}_.

## Examples

### Different ways to create an Int32Array

```js
// From a length
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// From an array
const x = new Int32Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Int32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int32FromIterable = new Int32Array(iterable);
console.log(int32FromIterable);
// Int32Array [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Int32Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
