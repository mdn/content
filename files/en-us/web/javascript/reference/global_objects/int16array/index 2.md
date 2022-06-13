---
title: Int16Array
slug: Web/JavaScript/Reference/Global_Objects/Int16Array
tags:
  - Class
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Int16Array
---
{{JSRef}}

The **`Int16Array`** typed array represents an array of twos-complement 16-bit signed integers in the platform byte order. If control over byte order is needed, use {{jsxref("DataView")}} instead. The contents are initialized to `0`. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

## Constructor

- {{jsxref("Global_Objects/Int16Array/Int16Array", "Int16Array()")}}
  - : Creates a new `Int16Array` object.

## Static properties

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int16Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `2` in the case of an `Int16Array`.
- {{jsxref("TypedArray.name", "Int16Array.name")}}
  - : Returns the string value of the constructor name. In the case of the `Int16Array` type: "`Int16Array`".

## Static methods

- {{jsxref("TypedArray.from", "Int16Array.from()")}}
  - : Creates a new `Int16Array` from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "Int16Array.of()")}}
  - : Creates a new `Int16Array` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## Instance properties

- {{jsxref("TypedArray.prototype.buffer", "Int16Array.prototype.buffer")}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `Int16Array`. Fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "Int16Array.prototype.byteLength")}}
  - : Returns the length (in bytes) of the `Int16Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "Int16Array.prototype.byteOffset")}}
  - : Returns the offset (in bytes) of the `Int16Array` from the start of its {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "Int16Array.prototype.length")}}
  - : Returns the number of elements held in the `Int16Array`. Fixed at construction time and thus **read only.**

## Instance methods

- {{jsxref("TypedArray.copyWithin", "Int16Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "Int16Array.prototype.entries()")}}
  - : Returns a new _array iterator_ object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "Int16Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "Int16Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "Int16Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "Int16Array.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the provided testing function or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "Int16Array.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the provided testing function or `-1` if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "Int16Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "Int16Array.prototype.includes()")}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "Int16Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "Int16Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "Int16Array.prototype.keys()")}}
  - : Returns a new _array iterator_ that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "Int16Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "Int16Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.reduce", "Int16Array.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "Int16Array.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "Int16Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "Int16Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "Int16Array.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "Int16Array.prototype.some()")}}
  - : Returns `true` if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "Int16Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "Int16Array.prototype.subarray()")}}
  - : Returns a new `Int16Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "Int16Array.prototype.values()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "Int16Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "Int16Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "Int16Array.prototype[@@iterator]()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array.

## Examples

### Different ways to create an Int16Array

```js
// From a length
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
var arr = new Int16Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Int16Array([21, 31]);
var y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(8);
var z = new Int16Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var int16 = new Int16Array(iterable);
// Int16Array[1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Int16Array` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
