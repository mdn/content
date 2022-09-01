---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
tags:
  - Class
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray
---
{{JSRef}}

A **_TypedArray_** object describes an array-like view of an
underlying [binary data buffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).
There is no global property named `TypedArray`, nor is there a
directly visible `TypedArray` constructor. Instead, there are a number of
different global properties, whose values are typed array constructors for specific
element types, listed below. On the following pages you will find common properties and
methods that can be used with any typed array containing elements of any type.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## Description

The `TypedArray` constructor is a hidden global that serves as
the `[[Prototype]]` of all `TypedArray` constructors.
This constructor is not directly exposed: there is no global `%TypedArray%`
or `TypedArray` property. It is only directly accessible through
`Object.getPrototypeOf(Int8Array)` and similar. All
`TypedArray`s constructors inherit common properties from the
`%TypedArray%` constructor function. Additionally, all typed array prototypes
(`TypedArray.prototype`) have `%TypedArray%.prototype`
as their `[[Prototype]]`.

When creating an instance of a `TypedArray` (e.g.
`Int8Array`), an array buffer is created internally in memory or, if an
`ArrayBuffer` object is given as constructor argument, then this is used
instead. The buffer address is saved as an internal property of the instance and all the
methods of `%TypedArray%.prototype`, i.e. set value and get value
etc., operate on that array buffer address.

### TypedArray objects

| Type                                     | Value Range                                                     | Size in bytes | Description                                                                        | Web IDL type          | Equivalent C type               |
| ---------------------------------------- | --------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | -128 to 127                                                 | 1             | 8-bit two's complement signed integer                                              | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | 0 to 255                                                    | 1             | 8-bit unsigned integer                                                             | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | 0 to 255                                                    | 1             | 8-bit unsigned integer (clamped)                                                   | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | -32768 to 32767                                             | 2             | 16-bit two's complement signed integer                                             | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | 0 to 65535                                                  | 2             | 16-bit unsigned integer                                                            | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | -2147483648 to 2147483647                                   | 4             | 32-bit two's complement signed integer                                             | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | 0 to 4294967295                                             | 4             | 32-bit unsigned integer                                                            | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `-3.4E38` to `3.4E38` and `1.2E-38` is the min positive number  | 4             | 32-bit IEEE floating point number (7 significant digits e.g., `1.234567`)          | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `-1.8E308` to `1.8E308` and `5E-324` is the min positive number | 8             | 64-bit IEEE floating point number (16 significant digits e.g., `1.23456789012345`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> to 2<sup>63</sup> - 1                                           | 8             | 64-bit two's complement signed integer                                             | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | 0 to 2<sup>64</sup> - 1                                               | 8             | 64-bit unsigned integer                                                            | `bigint`              | `uint64_t (unsigned long long)` |

## Constructor

This object cannot be instantiated directly. Instead, you create an instance of an
array of a particular type, such as a {{jsxref("Int8Array")}} or a
{{jsxref("BigInt64Array")}}. These objects all have a common syntax for their
constructors:

```js
new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)

new TypedArray(buffer)
new TypedArray(buffer, byteOffset)
new TypedArray(buffer, byteOffset, length)
```

Where _TypedArray_ is a constructor for one of the concrete types.

> **Note:** All `TypedArray` constructors can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call one without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `length`
  - : When called with a `length` argument, an internal array buffer
    is created in memory, of size `length` _multiplied by
    `BYTES_PER_ELEMENT`_ bytes, containing zeros.
- `typedArray`
  - : When called with a `typedArray` argument, the `typedArray` gets copied
    into a new typed array. For a **non-{{glossary("bigint")}}** `TypedArray`,
    the `typedArray` parameter can be an object of only the
    **non**-{{glossary("bigint")}} typed array types (such as
    {{JSxRef("Int32Array")}}).  Similarly, for a **{{glossary("bigint")}}**
    `TypedArray`, the `typedArray` parameter can be an object of only the
    {{glossary("bigint")}} typed array types (such as {{JSxRef("BigInt64Array")}}).
    Each value in `typedArray` is converted to the corresponding type of the
    constructor before being copied into the new array.  The length of the new
    typed array will be same as the length of the `typedArray` argument.
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

## Static properties

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size for the different
    `TypedArray` objects.
- {{jsxref("TypedArray.name")}}
  - : Returns the string value of the constructor name (e.g., `"Int8Array"`).
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : The constructor function used to create derived objects.
- {{jsxref("TypedArray")}}
  - : Prototype for `TypedArray` objects.

## Static methods

- {{jsxref("TypedArray.from()")}}
  - : Creates a new `TypedArray` from an array-like or iterable
    object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Creates a new `TypedArray` with a variable number of
    arguments. See also {{jsxref("Array.of()")}}.

## Instance properties

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the typed array. Fixed at
    construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Returns the length (in bytes) of the typed array. Fixed at construction time and
    thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Returns the offset (in bytes) of the typed array from the start of its
    {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read
    only.**
- {{jsxref("TypedArray.prototype.length")}}
  - : Returns the number of elements held in the typed array. Fixed at construction time
    and thus **read only.**

## Instance methods

- {{jsxref("TypedArray.prototype.at()")}}
  - : Takes an integer value and returns the item at that index. This method allows for negative integers, which count back from the last item.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also
    {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Returns a new _array iterator_ object that contains the key/value pairs for each index
    in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See
    also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static
    value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided
    filtering function returns `true`. See also
    {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Returns the first `element` in the array that satisfies a provided testing function, or `undefined` if no appropriate element is found.
    See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Returns the first index value of in the array that has an element that satisfies a provided testing function, or `-1` if no appropriate element was found.
    See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Returns the value of the last element in the array that satisfies a provided testing function, or `undefined` if no appropriate element is found.
    See also {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Returns the index of the last element in the array that satisfies a provided testing function, or `-1` if no appropriate element was found.
    See also {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also
    {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Determines whether a typed array includes a certain element, returning
    `true` or `false` as appropriate. See also
    {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the
    specified value, or `-1` if none is found. See also
    {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Joins all elements of an array into a string. See also
    {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Returns a new array iterator that contains the keys for each index in the array. See
    also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the
    specified value, or `-1` if none is found. See also
    {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element
    in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from
    left-to-right) as to reduce it to a single value. See also
    {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from
    right-to-left) as to reduce it to a single value. See also
    {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the
    last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified
    array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also
    {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Returns `true` if at least one element in this array satisfies the
    provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also
    {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Returns a new `TypedArray` from the given start and end
    element index.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the
    array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also
    {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also
    {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the
    array.

## Examples

### Property access

You can reference elements in the array using standard array index syntax (that is,
using bracket notation). However, getting or setting indexed properties on typed arrays
will not search in the prototype chain for this property, even when the indices are out
of bound. Indexed properties will consult the {{jsxref("ArrayBuffer")}} and will never
look at object properties. You can still use named properties, just like with all
objects.

```js
// Setting and getting using standard array syntax
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indexed properties on prototypes are not consulted (Fx 25)
Int8Array.prototype[20] = 'foo';
(new Int8Array(32))[20]; // 0
// even when out of bound
Int8Array.prototype[20] = 'foo';
(new Int8Array(8))[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = 'foo';
(new Int8Array(8))[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = 'bar';
(new Int8Array(32)).foo; // "bar"
```

### Cannot be frozen

`TypedArray`s that aren't empty cannot be frozen, as their
underlying `ArrayBuffer` could be mutated through another
`TypedArray` view of the buffer. This would mean that the object
would never genuinely be frozen.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset must be aligned

When constructing a `TypedArray` as a view onto an
`ArrayBuffer`, the `byteOffset` argument must be aligned to its
element size; in other words, the offset must be a multiple of
`BYTES_PER_ELEMENT`.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength must be aligned

Like the `byteOffset` parameter, the `byteLength` property of an
`ArrayBuffer` passed to a `TypedArray`'s constructor
must be a multiple of the constructor's `BYTES_PER_ELEMENT`.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(3));
// RangeError: byte length of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of typed arrays in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [TextDecoder](/en-US/docs/Web/API/TextDecoder) — Helper that decode
  strings from numerical data
