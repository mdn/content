---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
page-type: javascript-class
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

{{InteractiveExample("JavaScript Demo: TypedArray Constructor")}}

```js interactive-example
// Create a TypedArray with a size in bytes
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);
// Expected output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]

console.log(typedArray2);
// Expected output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]
```

## Description

The `TypedArray` constructor (often referred to as `%TypedArray%` to indicate its "intrinsicness", since it does not correspond to any global exposed to a JavaScript program) serves as the common superclass of all `TypedArray` subclasses. Think about `%TypedArray%` as an "abstract class" providing a common interface of utility methods for all typed array subclasses. This constructor is not directly exposed: there is no global `TypedArray` property. It is only accessible through `Object.getPrototypeOf(Int8Array)` and similar.

When creating an instance of a `TypedArray` subclass (e.g. `Int8Array`), an array buffer is created internally in memory or, if an `ArrayBuffer` object is given as constructor argument, that `ArrayBuffer` is used instead. The buffer address is saved as an internal property of the instance and all the methods of `%TypedArray%.prototype` will set and get values based on that array buffer address.

### TypedArray objects

| Type                            | Value Range                           | Size in bytes | Web IDL type          |
| ------------------------------- | ------------------------------------- | ------------- | --------------------- |
| {{jsxref("Int8Array")}}         | -128 to 127                           | 1             | `byte`                |
| {{jsxref("Uint8Array")}}        | 0 to 255                              | 1             | `octet`               |
| {{jsxref("Uint8ClampedArray")}} | 0 to 255                              | 1             | `octet`               |
| {{jsxref("Int16Array")}}        | -32768 to 32767                       | 2             | `short`               |
| {{jsxref("Uint16Array")}}       | 0 to 65535                            | 2             | `unsigned short`      |
| {{jsxref("Int32Array")}}        | -2147483648 to 2147483647             | 4             | `long`                |
| {{jsxref("Uint32Array")}}       | 0 to 4294967295                       | 4             | `unsigned long`       |
| {{jsxref("Float16Array")}}      | `-65504` to `65504`                   | 2             | N/A                   |
| {{jsxref("Float32Array")}}      | `-3.4e38` to `3.4e38`                 | 4             | `unrestricted float`  |
| {{jsxref("Float64Array")}}      | `-1.8e308` to `1.8e308`               | 8             | `unrestricted double` |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup> to 2<sup>63</sup> - 1 | 8             | `bigint`              |
| {{jsxref("BigUint64Array")}}    | 0 to 2<sup>64</sup> - 1               | 8             | `bigint`              |

### Value encoding and normalization

All typed arrays operate on `ArrayBuffer`s, where you can observe the exact byte representation of each element, so how the numbers are encoded in binary format is significant.

- Unsigned integer arrays (`Uint8Array`, `Uint16Array`, `Uint32Array`, and `BigUint64Array`) store the number directly in binary.
- Signed integer arrays (`Int8Array`, `Int16Array`, `Int32Array`, and `BigInt64Array`) store the number using [two's complement](https://en.wikipedia.org/wiki/Two's_complement).
- Floating-point arrays (`Float16Array`, `Float32Array`, and `Float64Array`) store the number using [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) floating-point format. The [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding) reference has more information about the exact format. JavaScript numbers use double precision floating point format by default, which is the same as `Float64Array`. `Float32Array` uses 23 (instead of 52) bits for the mantissa and 8 (instead of 11) bits for the exponent. `Float16Array` uses 10 bits for the mantissa and 5 bits for the exponent. Note that the spec requires all {{jsxref("NaN")}} values to use the same bit encoding, but the exact bit pattern is implementation-dependent.
- `Uint8ClampedArray` is a special case. It stores the number in binary like `Uint8Array` does, but when you store a number outside the range, it _clamps_ the number to the range 0 to 255 by mathematical value, instead of truncating the most significant bits.

All typed arrays except `Int8Array`, `Uint8Array`, and `Uint8ClampedArray` store each element using multiple bytes. These bytes can either be ordered from most significant to least significant (big-endian) or from least significant to most significant (little-endian). See [Endianness](/en-US/docs/Glossary/Endianness) for more explanation. Typed arrays always use the platform's native byte order. If you want to specify the endianness when writing and reading from buffers, you should use a {{jsxref("DataView")}} instead.

When writing to these typed arrays, values that are outside the representable range are normalized.

- All integer arrays (except `Uint8ClampedArray`) use [fixed-width number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#fixed-width_number_conversion), which first truncates the decimal part of the number and then takes the lowest bits.
- `Uint8ClampedArray` first clamps the number to the range 0 to 255 (values greater than 255 become 255 and values less than 0 become 0). It then _rounds_ (instead of flooring) the result to the nearest integer, with half-to-even; meaning if the number is exactly between two integers, it rounds to the nearest even integer. For example, `0.5` becomes `0`, `1.5` becomes `2`, and `2.5` becomes `2`.
- `Float16Array` and `Float32Array` perform a "round to even" to convert 64-bit floating point numbers to 32-bit and 16-bit. This is the same algorithm as provided by {{jsxref("Math.fround()")}} and {{jsxref("Math.f16round()")}}.

### Behavior when viewing a resizable buffer

When a `TypedArray` is created as a view of a [resizable buffer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer#resizing_arraybuffers), resizing the underlying buffer will have different effects on the size of the `TypedArray` depending on whether the `TypedArray` is constructed as length-tracking.

If a typed array is created without a specific size by omitting the third parameter or passing `undefined`, the typed array will become _length-tracking_, and will automatically resize to fit the underlying `buffer` as the latter is resized:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2

buffer.resize(12);

console.log(float32.byteLength); // 12
console.log(float32.length); // 3
```

If a typed array is created with a specific size using the third `length` parameter, it won't resize to contain the `buffer` as the latter is grown:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0, the initial value

buffer.resize(12);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0, the initial value
```

When a `buffer` is shrunk, the viewing typed array may become out of bounds, in which case the typed array's observed size will decrease to 0. This is the only case where a non-length-tracking typed array's length may change.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 0, 2);

buffer.resize(7);

console.log(float32.byteLength); // 0
console.log(float32.length); // 0
console.log(float32[0]); // undefined
```

If you then grow the `buffer` again to bring the typed array back in bounds, the typed array's size will be restored to its original value.

```js
buffer.resize(8);

console.log(float32.byteLength); // 8
console.log(float32.length); // 2
console.log(float32[0]); // 0 - back in bounds again!
```

The same can happen for length-tracking typed arrays as well, if the buffer is shrunk beyond the `byteOffset`.

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });
const float32 = new Float32Array(buffer, 4);
// float32 is length-tracking, but it only extends from the 4th byte
// to the end of the buffer, so if the buffer is resized to be shorter
// than 4 bytes, the typed array will become out of bounds
buffer.resize(3);
console.log(float32.byteLength); // 0
```

## Constructor

This object cannot be instantiated directly — attempting to construct it with `new` throws a {{jsxref("TypeError")}}.

```js
new (Object.getPrototypeOf(Int8Array))();
// TypeError: Abstract class TypedArray not directly constructable
```

Instead, you create an instance of a typed array of a particular type, such as an {{jsxref("Int8Array")}} or a {{jsxref("BigInt64Array")}}. These objects all have a common syntax for their constructors:

```js-nolint
new TypedArray()
new TypedArray(length)
new TypedArray(typedArray)
new TypedArray(object)

new TypedArray(buffer)
new TypedArray(buffer, byteOffset)
new TypedArray(buffer, byteOffset, length)
```

Where `TypedArray` is a constructor for one of the concrete types.

> [!NOTE]
> All `TypedArray` subclasses' constructors can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call one without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `typedArray`
  - : When called with an instance of a `TypedArray` subclass, the `typedArray` gets copied into a new typed array. For a non-[bigint](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` constructor, the `typedArray` parameter can only be of one of the non-[bigint](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) types (such as {{jsxref("Int32Array")}}). Similarly, for a [bigint](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) `TypedArray` constructor ({{jsxref("BigInt64Array")}} or {{jsxref("BigUint64Array")}}), the `typedArray` parameter can only be of one of the [bigint](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) types. Each value in `typedArray` is converted to the corresponding type of the constructor before being copied into the new array. The length of the new typed array will be same as the length of the `typedArray` argument.
- `object`
  - : When called with an object that's not a `TypedArray` instance, a new typed array is created in the same way as the [`TypedArray.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/from) method.
- `length` {{optional_inline}}
  - : When called with a non-object, the parameter will be treated as a number specifying the length of the typed array. An internal array buffer is created in memory, of size `length` multiplied by [`BYTES_PER_ELEMENT`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) bytes, filled with zeros. Omitting all parameters is equivalent to using `0` as `length`.
- `buffer`, `byteOffset` {{optional_inline}}, `length` {{optional_inline}}
  - : When called with an [`ArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) or [`SharedArrayBuffer`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) instance, and optionally a `byteOffset` and a `length` argument, a new typed array view is created that views the specified buffer. The `byteOffset` (in bytes) and `length` (in number of elements, each occupying [`BYTES_PER_ELEMENT`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT) bytes) parameters specify the memory range that will be exposed by the typed array view. If both are omitted, all of `buffer` is viewed; if only `length` is omitted, the remainder of `buffer` starting from `byteOffset` is viewed. If `length` is omitted, the typed array becomes [length-tracking](#behavior_when_viewing_a_resizable_buffer).

### Exceptions

All `TypeArray` subclass constructors operate in the same way. They would all throw the following exceptions:

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - A `typedArray` is passed but it is a [bigint](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) type while the current constructor is not, or vice versa.
    - A `typedArray` is passed but the buffer it's viewing is detached, or a detached `buffer` is directly passed.
- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - The new typed array's length is too large.
    - The length of `buffer` (if the `length` parameter is not specified) or `byteOffset` is not an integral multiple of the new typed array's element size.
    - `byteOffset` is not a valid array index (an integer between 0 and 2<sup>53</sup> - 1).
    - When creating a view from a buffer, the bounds are outside the buffer. In other words, `byteOffset + length * TypedArray.BYTES_PER_ELEMENT > buffer.byteLength`.

## Static properties

These properties are defined on the `TypedArray` constructor object and are thus shared by all `TypedArray` subclass constructors.

- [`TypedArray[Symbol.species]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
  - : The constructor function used to create derived objects.

All `TypedArray` subclasses also have the following static properties:

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size for the different `TypedArray` objects.

## Static methods

These methods are defined on the `TypedArray` constructor object and are thus shared by all `TypedArray` subclass constructors.

- {{jsxref("TypedArray.from()")}}
  - : Creates a new `TypedArray` from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of()")}}
  - : Creates a new `TypedArray` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## Instance properties

These properties are defined on `TypedArray.prototype` and shared by all `TypedArray` subclass instances.

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the typed array.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Returns the length (in bytes) of the typed array.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Returns the offset (in bytes) of the typed array from the start of its {{jsxref("ArrayBuffer")}}.
- {{jsxref("Object/constructor", "TypedArray.prototype.constructor")}}
  - : The constructor function that created the instance object. `TypedArray.prototype.constructor` is the hidden `TypedArray` constructor function, but each typed array subclass also defines its own `constructor` property.
- {{jsxref("TypedArray.prototype.length")}}
  - : Returns the number of elements held in the typed array.
- `TypedArray.prototype[Symbol.toStringTag]`
  - : The initial value of the [`TypedArray.prototype[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is a getter that returns the same string as the typed array constructor's name. It returns `undefined` if the `this` value is not one of the typed array subclasses. This property is used in {{jsxref("Object.prototype.toString()")}}. However, because `TypedArray` also has its own [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString) method, this property is not used unless you call [`Object.prototype.toString.call()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) with a typed array as `thisArg`.

All `TypedArray` subclasses also have the following instance properties:

- {{jsxref("TypedArray.prototype.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size for the different `TypedArray` objects.

## Instance methods

These methods are defined on the `TypedArray` prototype object and are thus shared by all `TypedArray` subclass instances.

- {{jsxref("TypedArray.prototype.at()")}}
  - : Takes an integer value and returns the item at that index. This method allows for negative integers, which count back from the last item.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Returns a new _array iterator_ object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Returns the first `element` in the array that satisfies a provided testing function, or `undefined` if no appropriate element is found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Returns the first index value in the array that has an element that satisfies a provided testing function, or `-1` if no appropriate element was found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : Returns the value of the last element in the array that satisfies a provided testing function, or `undefined` if no appropriate element is found. See also {{jsxref("Array.prototype.findLast()")}}.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : Returns the index of the last element in the array that satisfies a provided testing function, or `-1` if no appropriate element was found. See also {{jsxref("Array.prototype.findLastIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Returns a new array iterator that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Returns `true` if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Returns a new `TypedArray` from the given start and end element index.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toReversed()")}}
  - : Returns a new array with the elements in reversed order, without modifying the original array.
- {{jsxref("TypedArray.prototype.toSorted()")}}
  - : Returns a new array with the elements sorted in ascending order, without modifying the original array.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.with()")}}
  - : Returns a new array with the element at the given index replaced with the given value, without modifying the original array.
- [`TypedArray.prototype[Symbol.iterator]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
  - : Returns a new _array iterator_ object that contains the values for each index in the array.

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
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
// even when out of bound
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- {{domxref("TextDecoder")}}
