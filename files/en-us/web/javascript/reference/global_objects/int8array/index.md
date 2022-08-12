---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
tags:
  - Class
  - Int8Array
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Int8Array
---
{{JSRef}}

The **`Int8Array`** typed array represents an array of twos-complement 8-bit signed integers. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## Constructor

- {{jsxref("Global_Objects/Int8Array/Int8Array", "Int8Array()")}}
  - : Creates a new `Int8Array` object.

## Static properties

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `1` in the case of an `Int8Array`.
- {{jsxref("TypedArray.name", "Int8Array.name")}}
  - : Returns the string value of the constructor name. In the case of the `Int8Array` type: `"Int8Array"`.

## Static methods

- {{jsxref("TypedArray.from", "Int8Array.from()")}}
  - : Creates a new `Int8Array` from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int8Array.of()")}}
  - : Creates a new `Int8Array` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## Instance properties

- {{jsxref("TypedArray.prototype.buffer", "Int8Array.prototype.buffer")}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `Int8Array`. Fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "Int8Array.prototype.byteLength")}}
  - : Returns the length (in bytes) of the `Int8Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "Int8Array.prototype.byteOffset")}}
  - : Returns the offset (in bytes) of the `Int8Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}}
  - : Returns the number of elements held in the `Int8Array`. Fixed at construction time and thus **read only.**

## Instance methods

- {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int8Array.prototype.entries()")}}
  - : Returns a new _array iterator_ object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int8Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int8Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int8Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int8Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int8Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or `-1` if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int8Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int8Array.prototype.includes()")}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int8Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int8Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int8Array.prototype.keys()")}}
  - : Returns a new _array iterator_ that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int8Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int8Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.reduce", "Int8Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int8Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Int8Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int8Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "Int8Array.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int8Array.prototype.some()")}}
  - : Returns `true` if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Int8Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int8Array.prototype.subarray()")}}
  - : Returns a new `Int8Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "Int8Array.prototype.values()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int8Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int8Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int8Array.prototype[@@iterator]()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array.

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
const iterable = function*() { yield* [1, 2, 3]; }();
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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
