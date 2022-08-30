---
title: Array.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
tags:
  - Array
  - JavaScript
  - Property
  - Reference
browser-compat: javascript.builtins.Array.length
---
{{JSRef}}

The **`length`** property of an object which is an instance of type `Array` sets or returns the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

{{EmbedInteractiveExample("pages/js/array-length.html","shorter")}}

## Description

The value of the `length` property is an integer with a positive sign and a value less than 2 to the 32nd power (2^32).

```js
const listA = [1,2,3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 4294967296; //2 to the 32nd power = 4294967296
// RangeError: Invalid array length

const listC = new Array(-100) //negative sign
// RangeError: Invalid array length
```

You can set the `length` property to truncate an array at any time. When you extend an array by changing its `length` property, the number of actual elements increases; for example, if you set `length` to 3 when it is currently 2, the array now contains 3 elements, which causes the third element to be a non-iterable empty slot.

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

As you can see, the `length` property does not necessarily indicate the number of defined values in the array. See also [Relationship between `length` and numerical properties](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#relationship_between_length_and_numerical_properties).

{{js_property_attributes(1, 0, 0)}}

- `Writable`: If this attribute set to `false`, the value of the property cannot be changed.
- `Configurable`: If this attribute set to `false`, any attempts to delete the property or change its attributes (`Writable`, `Configurable`, or `Enumerable`) will fail.
- `Enumerable`: If this attribute set to `true`, the property will be iterated over during [`for`](/en-US/docs/Web/JavaScript/Reference/Statements/for) or [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loops.

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
```

### Create empty array of fixed length

```js
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array")}}
- [RangeError: invalid array length](/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
