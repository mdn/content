---
title: Array() constructor
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
tags:
  - Array
  - Constructor
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Array.Array
---
{{JSRef}}

The **`Array()`** constructor is used to create
{{jsxref("Array")}} objects.

## Syntax

```js
// literal constructor
[element0, element1, /* ... ,*/ elementN]

// construct from elements
new Array(element0, element1, /* ... ,*/ elementN)

// construct from array length
new Array(arrayLength)
```

### Parameters

- `elementN`
  - : A JavaScript array is initialized with the given elements, except in the case where
    a single argument is passed to the `Array` constructor and that argument is
    a number (see the arrayLength parameter below). Note that this special case only
    applies to JavaScript arrays created with the `Array` constructor, not
    array literals created with the bracket syntax.
- `arrayLength`
  - : If the only argument passed to the `Array` constructor is an integer
    between 0 and 2^32 - 1 (inclusive), this returns a new JavaScript array with
    its `length` property set to that number (**Note:** this
    implies an array of `arrayLength` empty slots, not slots with actual
    `undefined` values — see [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)). If the argument is any other number, a
    {{jsxref("RangeError")}} exception is thrown.

## Examples

### Array literal notation

Arrays can be created using the [literal](/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#array_literals)
notation:

```js
let fruits = ['Apple', 'Banana'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

### Array constructor with a single parameter

Arrays can be created using a constructor with a single number parameter. An array with
its `length` property set to that number and the array elements are empty
slots.

```js
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
```

### Array constructor with multiple parameters

If more than one argument is passed to the constructor, a new {{jsxref("Array")}} with
the given elements is created.

```js
let fruits = new Array('Apple', 'Banana');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array")}} class
