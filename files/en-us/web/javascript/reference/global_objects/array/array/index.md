---
title: Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
page-type: javascript-constructor
browser-compat: javascript.builtins.Array.Array
---

{{JSRef}}

The **`Array()`** constructor creates {{jsxref("Array")}} objects.

## Syntax

```js-nolint
new Array()
new Array(element0)
new Array(element0, element1)
new Array(element0, element1, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element0)
Array(element0, element1)
Array(element0, element1, /* …, */ elementN)
Array(arrayLength)
```

> **Note:** `Array()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Both create a new `Array` instance.

### Parameters

- `elementN`
  - : A JavaScript array is initialized with the given elements, except in the case where
    a single argument is passed to the `Array` constructor and that argument is
    a number (see the `arrayLength` parameter below). Note that this special case only
    applies to JavaScript arrays created with the `Array` constructor, not
    array literals created with the bracket syntax.
- `arrayLength`
  - : If the only argument passed to the `Array` constructor is an integer
    between 0 and 2<sup>32</sup> - 1 (inclusive), this returns a new JavaScript array with
    its `length` property set to that number (**Note:** this
    implies an array of `arrayLength` empty slots, not slots with actual
    `undefined` values — see [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)).

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if there's only one argument (`arrayLength`) that is a number, but its value is not an integer or not between 0 and 2<sup>32</sup> - 1 (inclusive).

## Examples

### Array literal notation

Arrays can be created using the [literal](/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
notation:

```js
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array constructor with a single parameter

Arrays can be created using a constructor with a single number parameter. An array is created with
its `length` property set to that number, and the array elements are empty
slots.

```js
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false
```

```js
const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

### Array constructor with multiple parameters

If more than one argument is passed to the constructor, a new {{jsxref("Array")}} with
the given elements is created.

```js
const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
