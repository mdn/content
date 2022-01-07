---
title: Float64Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Float64Array.Float64Array
---
{{JSRef}}

The **`Float64Array()`** typed array constructor creates a new
{{jsxref("Float64Array")}} object, which is, an array of 64-bit floating point numbers
(corresponding to the C `double` data type) in the platform byte order. If
control over byte order is needed, use {{jsxref("DataView")}} instead. The contents are
initialized to `0`. Once established, you can reference elements in the array
using the object's methods, or using standard array index syntax (that is, using bracket
notation).

## Syntax

```js
new Float64Array(); // new in ES2017
new Float64Array(length);
new Float64Array(typedArray);
new Float64Array(object);

new Float64Array(buffer);
new Float64Array(buffer, byteOffset);
new Float64Array(buffer, byteOffset, length);
```

### Parameters

- `length`
  - : When called with a `length` argument, an internal array buffer
    is created in memory, of size `length` _multiplied by
    `BYTES_PER_ELEMENT`_ bytes, containing zeros.
- `typedArray`
  - : When called with a `typedArray` argument, which can be an
    object of any of the **non**-{{glossary("bigint")}} typed-array types (such as `Int32Array`), the
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

### Different ways to create a Float64Array

```js
// From a length
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new Float64Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var float64 = new Float64Array(iterable);
// Float64Array[1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

Starting with ECMAScript 2015, `Float64Array` constructors require to be
constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a
`Float64Array` constructor as a function without `new`, will throw
a {{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// without new is forbidden
```

```js example-good
var dv = new Float64Array([1, 2, 3]);
```

## See also

- A polyfill of `Float64Array` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
