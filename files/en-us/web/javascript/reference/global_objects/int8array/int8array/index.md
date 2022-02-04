---
title: Int8Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Int8Array/Int8Array
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArray
  - Polyfill
browser-compat: javascript.builtins.Int8Array.Int8Array
---
{{JSRef}}

The **`Int8Array()`** constructor creates a typed array of
twos-complement 8-bit signed integers. The contents are initialized to `0`.
Once established, you can reference elements in the array using the object's methods, or
using standard array index syntax (that is, using bracket notation).

## Syntax

```js
new Int8Array(); // new in ES2017
new Int8Array(length);
new Int8Array(typedArray);
new Int8Array(object);

new Int8Array(buffer);
new Int8Array(buffer, byteOffset);
new Int8Array(buffer, byteOffset, length);
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

## Examples

### Different ways to create an Int8Array

```js
// From a length
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var int8 = new Int8Array(iterable);
// Int8Array[1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

### Compatibility notes

Starting with ECMAScript 2015, `Int8Array` constructors require to be
constructed with a {{jsxref("Operators/new", "new")}} operator. Calling a
`Int8Array` constructor as a function without `new`, will throw a
{{jsxref("TypeError")}} from now on.

```js example-bad
var dv = Int8Array([1, 2, 3]);
// TypeError: calling a builtin Int8Array constructor
// without new is forbidden
```

```js example-good
var dv = new Int8Array([1, 2, 3]);
```

## See also

- [Polyfill of `Int8Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
