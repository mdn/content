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

```js
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

`slice` does not alter the original array. It returns a [shallow copy](/en-US/docs/Glossary/Shallow_copy) of
elements from the original array. Elements of the original array are copied into the
returned array as follows:

- For objects, `slice` copies object references into the new array. Both the
  original and new array refer to the same object. If an object changes, the changes are
  visible to both the new and original arrays.
- For strings, numbers and booleans (not {{jsxref("String")}}, {{jsxref("Number")}}
  and {{jsxref("Boolean")}} objects), `slice` copies the values into the new
  array. Changes to the string, number, or boolean in one array do not affect the other
  array.

If a new element is added to either array, the other array is not affected.

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

### Array-like objects

`slice` method can also be called to convert Array-like objects/collections
to a new Array. You just {{jsxref("Function.prototype.bind", "bind")}} the method to the
object. The {{jsxref("Functions/arguments", "arguments")}} inside a function is an
example of an 'array-like object'.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

Binding can be done with the {{jsxref("Function.prototype.call", "call()")}} method of
{{jsxref("Function")}} and it can also be reduced using
`[].slice.call(arguments)` instead of
`Array.prototype.slice.call`.

Anyway, it can be simplified using {{jsxref("Function.prototype.bind", "bind")}}.

```js
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

const list1 = list(1, 2, 3); // [1, 2, 3]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.splice()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Function.prototype.bind()")}}
