---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
page-type: javascript-class
browser-compat: javascript.builtins.Int8Array
---

{{JSRef}}

The **`Int8Array`** typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

`Int8Array` is a subclass of the hidden {{jsxref("TypedArray")}} class.

## Constructor

- {{jsxref("Int8Array/Int8Array", "Int8Array()")}}
  - : Creates a new `Int8Array` object.

## Static properties

_Also inherits static properties from its parent {{jsxref("TypedArray")}}_.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `1` in the case of `Int8Array`.

## Static methods

_Inherits static methods from its parent {{jsxref("TypedArray")}}_.

## Instance properties

_Also inherits instance properties from its parent {{jsxref("TypedArray")}}_.

These properties are defined on `Int8Array.prototype` and shared by all `Int8Array` instances.

- {{jsxref("TypedArray/BYTES_PER_ELEMENT", "Int8Array.prototype.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `1` in the case of a `Int8Array`.
- {{jsxref("Object/constructor", "Int8Array.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Int8Array` instances, the initial value is the {{jsxref("Int8Array/Int8Array", "Int8Array")}} constructor.

## Instance methods

_Inherits instance methods from its parent {{jsxref("TypedArray")}}_.

## Examples

### Different ways to create an Int8Array

```js
// From a length
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Int8Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
