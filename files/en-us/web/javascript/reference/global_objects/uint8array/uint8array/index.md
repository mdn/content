---
title: Uint8Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Uint8Array/Uint8Array
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArray
  - Polyfill
browser-compat: javascript.builtins.Uint8Array.Uint8Array
---

{{JSRef}}

The **`Uint8Array()`** constructor creates a typed array of
8-bit unsigned integers. The contents are initialized to `0`. Once
established, you can reference elements in the array using the object's methods, or
using standard array index syntax (that is, using bracket notation).

## Syntax

```js
new Uint8Array(); // new in ES2017
new Uint8Array(length);
new Uint8Array(typedArray);
new Uint8Array(object);

new Uint8Array(buffer);
new Uint8Array(buffer, byteOffset);
new Uint8Array(buffer, byteOffset, length);
```

### Parameters

- `length`
  - : When called with a `length` argument, an internal array buffer
    is created in memory, of size `length` _multiplied by
    `BYTES_PER_ELEMENT`_ bytes, containing zeros.
- `typedArray`
  - : When called with a `typedArray` argument, which can be an object of any
    of the typed array types (such as `Int32Array`), the
    `typedArray` gets copied into a new typed array. Each value in
    `typedArray` is converted to the corresponding type of the
    constructor before being copied into the new array. The length of the new typed array
    will be same as the length of the `typedArray` argument.
- `object`
  - : When called with an `object` argument, a new typed array is
    created as if by the `TypedArray.from()` method.
- `buffer`, `byteOffset`,
  `length`
  - : When called with a `buffer`, and optionally a
    `byteOffset` and a `length` argument, a
    new typed array view is created that views the specified {{jsxref("ArrayBuffer")}}.
    The `byteOffset` and `length` parameters
    specify the memory range that will be exposed by the typed array view. If both are
    omitted, all of `buffer` is viewed; if only
    `length` is omitted, the remainder of
    `buffer` is viewed.

## Examples

### Different ways to create a Uint8Array

```js
// From a length
var uint8 = new Uint8Array(2);
uint8[0] = 42;
console.log(uint8[0]); // 42
console.log(uint8.length); // 2
console.log(uint8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Uint8Array([21, 31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint8Array([21, 31]);
var y = new Uint8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint8Array(buffer, 1, 4);

// From an iterable
var iterable = (function* () {
  yield* [1, 2, 3];
})();
var uint8 = new Uint8Array(iterable);
// Uint8Array[1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

Starting with ECMAScript 2015, `Uint8Array` constructors require to be
constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a
`Uint8Array` constructor as a function without `new`, will throw a
{{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Uint8Array([1, 2, 3]);
// TypeError: calling a builtin Uint8Array constructor
// without new is forbidden
```

```js example-good
var dv = new Uint8Array([1, 2, 3]);
```

## See also

- A polyfill of `Uint8Array` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
