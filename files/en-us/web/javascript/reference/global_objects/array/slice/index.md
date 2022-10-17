---
title: Array.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Array.slice
---

{{JSRef}}

The **`slice()`** method returns a [shallow copy](/en-US/docs/Glossary/Shallow_copy) of a portion of
an array into a new array object selected from `start` to `end`
(`end` not included) where `start` and `end` represent
the index of items in that array. The original array will not be modified.

{{EmbedInteractiveExample("pages/js/array-slice.html", "taller")}}

## Syntax

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Parameters

- `start` {{optional_inline}}

  - : Zero-based index at which to start extraction.

    A negative index can be used, indicating an offset from the end of the sequence.
    `slice(-2)` extracts the last two elements in the sequence.

    If `start` is undefined, `slice` starts from the
    index `0`.

    If `start` is greater than the index range of the sequence, an
    empty array is returned.

- `end` {{optional_inline}}

  - : The index of the first element to exclude from the returned array. `slice`
    extracts up to but not including `end`. For example,
    `slice(1,4)` extracts the second element through the fourth element
    (elements indexed 1, 2, and 3).

    A negative index can be used, indicating an offset from the end of the sequence.
    `slice(2,-1)` extracts the third element through the second-to-last element
    in the sequence.

    If `end` is omitted, `slice` extracts through the
    end of the sequence (`arr.length`).

    If `end` is greater than the length of the sequence,
    `slice` extracts through to the end of the sequence
    (`arr.length`).

### Return value

A new array containing the extracted elements.

## Description

The `slice()` method is a [copying method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter `this` but instead returns a [shallow copy](/en-US/docs/Glossary/Shallow_copy) that contains some of the same elements as the ones from the original array.

The `slice()` method preserves empty slots. If the sliced portion is [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the returned array is sparse as well.

The `slice()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Return a portion of an existing array

```js
const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

### Using slice

In the following example, `slice` creates a new array, `newCar`,
from `myCar`. Both include a reference to the object `myHonda`.
When the color of `myHonda` is changed to purple, both arrays reflect the
change.

```js
// Using slice, create newCar from myCar.
const myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
const myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
const newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ', myCar);
console.log('newCar = ', newCar);
console.log('myCar[0].color = ', myCar[0].color);
console.log('newCar[0].color = ', newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is ', myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ', myCar[0].color);
console.log('newCar[0].color = ', newCar[0].color);
```

This script writes:

```
myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

### Calling slice() on non-array objects

The `slice()` method reads the `length` property of `this`. It then reads the integer-keyed properties from `start` to `end` and defines them on a newly created array.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]
```

### Using slice() to convert array-like objects to arrays

The `slice()` method is often used with {{jsxref("Function.prototype.bind", "bind()")}} and {{jsxref("Function.prototype.call", "call()")}} to create a utility method that converts an array-like object into an array.

```js
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

### Using slice() on sparse arrays

The array returned from `slice()` may be sparse if the source is sparse.

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
