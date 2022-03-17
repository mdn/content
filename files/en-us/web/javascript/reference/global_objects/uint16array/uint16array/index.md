---
title: Uint16Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array/Uint16Array
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Uint16Array.Uint16Array
---
{{JSRef}}

The **`Uint16Array()`** typed array constructor creates an
array of 16-bit unsigned integers in the platform byte order.

## Syntax

```js
new Uint16Array(); // new in ES2017
new Uint16Array(length);
new Uint16Array(typedArray);
new Uint16Array(object);

new Uint16Array(buffer);
new Uint16Array(buffer, byteOffset);
new Uint16Array(buffer, byteOffset, length);
```

### Parameters

- `length`
  - : When called with a `length` argument, an internal array buffer
    is created in memory, of size `length` _multiplied by
    `BYTES_PER_ELEMENT`_ bytes, containing zeros.
- `typedArray`
  - : When called with a `typedArray` argument, which can be an object of any
    of the **non**-{{glossary("bigint")}} typed-array types (such as `Int32Array`), the
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

## Description

The **`Uint16Array()`** typed array constructor creates an
array of 16-bit unsigned integers in the platform byte order. If control over byte order
is needed, use {{jsxref("DataView")}} instead. The contents are initialized to
`0`. Once established, you can reference elements in the array using the
object's methods, or using standard array index syntax (that is, using bracket
notation).

Starting with ECMAScript 2015, `Uint16Array` constructors require to be
constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a
`Uint16Array` constructor as a function without `new`, will throw
a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Uint16Array([1, 2, 3]);
// TypeError: calling a builtin Uint16Array constructor
// without new is forbidden
```

```js example-good
var dv = new Uint16Array([1, 2, 3]);
```

## Examples

### Different ways to create a Uint16Array

```js
// From a length
var uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// From an array
var arr = new Uint16Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Uint16Array([21, 31]);
var y = new Uint16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Uint16Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var uint16 = new Uint16Array(iterable);
// Uint16Array[1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Uint16Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
