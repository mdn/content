---
title: "Array: length"
slug: Web/JavaScript/Reference/Global_Objects/Array/length
page-type: javascript-instance-data-property
browser-compat: javascript.builtins.Array.length
---

{{JSRef}}

The **`length`** data property of an {{jsxref("Array")}} instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

{{InteractiveExample("JavaScript Demo: Array.length", "shorter")}}

```js interactive-example
const clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// Expected output: 4
```

## Value

A nonnegative integer less than 2<sup>32</sup>.

{{js_property_attributes(1, 0, 0)}}

## Description

The value of the `length` property is a nonnegative integer with a value less than 2<sup>32</sup>.

```js
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // Negative numbers are not allowed
// RangeError: Invalid array length
```

The array object observes the `length` property, and automatically syncs the `length` value with the array's content. This means:

- Setting `length` to a value smaller than the current length truncates the array — elements beyond the new `length` are deleted.
- Setting any array index (a nonnegative integer smaller than 2<sup>32</sup>) beyond the current `length` extends the array — the `length` property is increased to reflect the new highest index.
- Setting `length` to an invalid value (e.g. a negative number or a non-integer) throws a `RangeError` exception.

When `length` is set to a bigger value than the current length, the array is extended by adding [empty slots](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), not actual `undefined` values. Empty slots have some special interactions with array methods; see [array methods and empty slots](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#array_methods_and_empty_slots).

```js
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

See also [Relationship between `length` and numerical properties](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties).

## Examples

### Iterating over an array

In the following example, the array `numbers` is iterated through by looking at the `length` property. The value in each element is then doubled.

```js
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
```

### Shortening an array

The following example shortens the array `numbers` to a length of 3 if the current length is greater than 3.

```js
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined; the extra elements are deleted
```

### Create empty array of fixed length

Setting `length` to a value greater than the current length creates a [sparse array](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

### Array with non-writable length

The `length` property is automatically updated by the array when elements are added beyond the current length. If the `length` property is made non-writable, the array will not be able to update it. This causes an error in [strict mode](/en-US/docs/Web/JavaScript/Reference/Strict_mode).

```js
"use strict";

const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
- [`TypedArray.prototype.length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/length)
- [`String`: `length`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
- [RangeError: invalid array length](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
