---
title: BigInt64Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array
tags:
  - BigInt
  - Constructor
  - JavaScript
  - Reference
  - TypedArrays
browser-compat: javascript.builtins.BigInt64Array.BigInt64Array
---
{{JSRef}}

The **`BigInt64Array()`** typed array constructor creates a new
{{jsxref("BigInt64Array")}} object, which is, an array of 64-bit signed integers in the
platform byte order. If control over byte order is needed, use {{jsxref("DataView")}}
instead. The contents are initialized to `0n`. Once established, you can
reference elements in the array using the object's methods, or by using standard array
index syntax (that is, using bracket notation).

## Syntax

```js
new BigInt64Array();
new BigInt64Array(length);
new BigInt64Array(typedArray);
new BigInt64Array(object);

new BigInt64Array(buffer);
new BigInt64Array(buffer, byteOffset);
new BigInt64Array(buffer, byteOffset, length);
```

### Parameters

- `length`
  - : When called with a `length` argument, an internal array buffer
    is created in memory, of size `length` _multiplied by
    `BYTES_PER_ELEMENT`_ bytes, containing zeros.
- `typedArray`
  - : When called with a `typedArray` argument, which can be an
    object of any of the typed array types (such as `Int32Array`), the
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

### Different ways to create a BigInt64Array

```js
// From a length
var bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new BigInt64Array([21n,31n]);
console.log(arr[1]); // 31n

// From another TypedArray
var x = new BigInt64Array([21n, 31n]);
var y = new BigInt64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new BigInt64Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1n, 2n, 3n]; }();
var bigint64 = new BigInt64Array(iterable);
// BigInt64Array[1n, 2n, 3n]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
