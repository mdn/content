---
title: BigInt64Array
slug: Web/JavaScript/Reference/Global_Objects/BigInt64Array
tags:
  - BigInt
  - BigInt64Array
  - Class
  - JavaScript
  - Reference
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.BigInt64Array
---
{{JSRef}}

The **`BigInt64Array`** typed array represents an array of 64-bit signed integers in the platform byte order. If control over byte order is needed, use {{jsxref("DataView")}} instead. The contents are initialized to `0n`. Once established, you can reference elements in the array using the object's methods, or by using standard array index syntax (that is, using bracket notation).

## Constructor

- [`BigInt64Array()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array/BigInt64Array)
  - : Creates a new `BigInt64Array` object.

## Static properties

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "BigInt64Array.BYTES_PER_ELEMENT")}}
  - : Returns a number value of the element size. `8` in the case of a `BigInt64Array`.
- {{jsxref("TypedArray.name", "BigInt64Array.name")}}
  - : Returns the string value of the constructor name. In the case of the `BigInt64Array` type, this is `"BigInt64Array"`.

## Static methods

- {{jsxref("TypedArray.from", "BigInt64Array.from()")}}
  - : Creates a new `BigInt64Array` from an array-like or iterable object. See also {{jsxref("Array.from()")}}.
- {{jsxref("TypedArray.of", "BigInt64Array.of()")}}
  - : Creates a new `BigInt64Array` with a variable number of arguments. See also {{jsxref("Array.of()")}}.

## Instance properties

- {{jsxref("TypedArray.prototype.buffer", "BigInt64Array.prototype.buffer")}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the `BigInt64Array`. This is fixed at construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength", "BigInt64Array.prototype.byteLength")}}
  - : Returns the length (in bytes) of the `BigInt64Array` from the start of its {{jsxref("ArrayBuffer")}}. This is fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset", "BigInt64Array.prototype.byteOffset")}}
  - : Returns the offset (in bytes) of the `BigInt64Array` from the start of its {{jsxref("ArrayBuffer")}}. This is fixed at construction time and thus **read only.**
- {{jsxref("TypedArray.prototype.length", "BigInt64Array.prototype.length")}}
  - : Returns the number of elements hold in the `BigInt64Array`. This is fixed at construction time and thus **read only.**

## Instance methods

- {{jsxref("TypedArray.copyWithin", "BigInt64Array.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.entries", "BigInt64Array.prototype.entries()")}}
  - : Returns a new _array iterator_ object that contains the key/value pairs for each index in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.every", "BigInt64Array.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.fill", "BigInt64Array.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.filter", "BigInt64Array.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided filtering function returns `true`. See also {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.find", "BigInt64Array.prototype.find()")}}
  - : Returns the found value in the array if an element in the array satisfies the provided testing function, or `undefined` if not found. See also {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.findIndex", "BigInt64Array.prototype.findIndex()")}}
  - : Returns the found index in the array if an element in the array satisfies the provided testing function, or `-1` if not found. See also {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.forEach", "BigInt64Array.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.includes", "BigInt64Array.prototype.includes()")}}
  - : Determines whether a typed array includes a certain element, returning `true` or `false` as appropriate. See also {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.indexOf", "BigInt64Array.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.join", "BigInt64Array.prototype.join()")}}
  - : Joins all elements of an array into a string. See also {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.keys", "BigInt64Array.prototype.keys()")}}
  - : Returns a new _array iterator_ that contains the keys for each index in the array. See also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.lastIndexOf", "BigInt64Array.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the specified value, or `-1` if none is found. See also {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.map", "BigInt64Array.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.reduce", "BigInt64Array.prototype.reduce()")}}
  - : Applies a function against an accumulator and each value of the array (from left-to-right) so as to reduce it to a single value. See also {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.reduceRight", "BigInt64Array.prototype.reduceRight()")}}
  - : Applies a function against an accumulator and each value of the array (from right-to-left) so as to reduce it to a single value. See also {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.reverse", "BigInt64Array.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.set", "BigInt64Array.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified array.
- {{jsxref("TypedArray.slice", "BigInt64Array.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.some", "BigInt64Array.prototype.some()")}}
  - : Returns `true` if at least one element in this array satisfies the provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.sort", "BigInt64Array.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.subarray", "BigInt64Array.prototype.subarray()")}}
  - : Returns a new `BigInt64Array` from the given start and end element index.
- {{jsxref("TypedArray.values", "BigInt64Array.prototype.values()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.toLocaleString", "BigInt64Array.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.toString", "BigInt64Array.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.@@iterator", "BigInt64Array.prototype[@@iterator]()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the array.

## Examples

### Different ways to create a `BigInt64Array`

```js
// From a length
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = function*() { yield* [1n, 2n, 3n]; }();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("BigUint64Array")}}
- {{jsxref("DataView")}}
