---
title: Array.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Array/map
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.map
---

{{JSRef}}

The **`map()`** method **creates
a new array** populated with the results of calling a provided function on
every element in the calling array.

{{EmbedInteractiveExample("pages/js/array-map.html")}}

## Syntax

```js-nolint
// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(element) { /* … */ })
map(function(element, index) { /* … */ })
map(function(element, index, array){ /* … */ })
map(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : Function that is called for every element of `arr`.
    Each time `callbackFn` executes, the returned value is added to `newArray`.

    The function is called with the following arguments:

    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `map` was called upon.

- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

A new array with each element being the result of the callback function.

## Description

`map` calls a provided `callbackFn` function
**once for each element** in an array, in order, and constructs a new array
from the results.

`callbackFn` is invoked only for array indexes which have assigned values. It is not invoked for empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

`callbackFn` is invoked with three arguments: the value of the
element, the index of the element, and the array object being mapped.

If a `thisArg` parameter is provided, it will be used as callback's
`this` value. Otherwise, the value {{jsxref("undefined")}} will be used as
its `this` value. The `this` value ultimately observable by
`callbackFn` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

The `map()` method is a [copying method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter `this`.

The `map()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

The range of elements processed by `map` is set before the first invocation
of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes
outside the range, will not be visited by `callbackFn`.
If existing elements of the array are changed after the call to `map`, their
value will be the value at the time `callbackFn` visits them.
Elements that are deleted after the call to `map` begins and before being
visited are not visited.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

Since `map` builds a new array, calling it without using the returned
array is an anti-pattern; use {{jsxref("Array/forEach", "forEach")}} or
{{jsxref("Statements/for...of", "for...of")}} instead.

## Examples

### Mapping an array of numbers to an array of square roots

The following code takes an array of numbers and creates a new array containing the
square roots of the numbers in the first array.

```js
const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

// roots is now     [1, 2, 3]
// numbers is still [1, 4, 9]
```

### Using map to reformat objects in an array

The following code takes an array of objects and creates a new array containing the
newly reformatted objects.

```js
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

### Mapping an array of numbers using a function containing an argument

The following code shows how `map` works when a function requiring one
argument is used with it. The argument will automatically be assigned from each element
of the array as `map` loops through the original array.

```js
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

// doubles is now   [2, 8, 18]
// numbers is still [1, 4, 9]
```

### Calling map() on non-array objects

The `map()` method reads the `length` property of `this` and then accesses each integer index.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.map.call(arrayLike, (x) => x ** 2));
// [ 4, 9, 16 ]
```

### Using map() generically on a NodeList

This example shows how to iterate through a collection of objects collected by
`querySelectorAll`. This is because `querySelectorAll` returns a
`NodeList` (which is a collection of objects).

In this case, we return all the selected `option`s' values on the screen:

```js
const elems = document.querySelectorAll('select option:checked');
const values = Array.prototype.map.call(elems, ({ value }) => value);
```

An easier way would be the {{jsxref("Array.from()")}} method.

### Using map() on sparse arrays

A sparse array remains sparse after `map()`. The indices of empty slots are still empty in the returned array, and the callback function won't be called on them.

```js
console.log([1, , 3].map((x, index) => {
  console.log(`Visit ${index}`);
  return x * 2;
}));
// Visit 0
// Visit 2
// [2, empty, 6] 
```

### Using parseInt() with map()

([inspired by this blog post](https://wirfs-brock.com/allen/posts/166))

It is common to use the callback with one argument (the element being traversed).
Certain functions are also commonly used with one argument, even though they take
additional optional arguments. These habits may lead to confusing behaviors.

Consider:

```js
['1', '2', '3'].map(parseInt);
```

While one might expect `[1, 2, 3]`, the actual result is
`[1, NaN, NaN]`.

{{jsxref("parseInt")}} is often used with one argument, but takes two. The first is an
expression and the second is the radix to the callback function,
`Array.prototype.map` passes 3 arguments:

- the element
- the index
- the array

The third argument is ignored by {{jsxref("parseInt")}}—but _not_ the second
one! This is the source of possible confusion.

Here is a concise example of the iteration steps:

```js
// parseInt(string, radix) -> map(parseInt(value, index))
/* first iteration  (index is 0): */ parseInt("1", 0);  // 1
/* second iteration (index is 1): */ parseInt("2", 1);  // NaN
/* third iteration  (index is 2): */ parseInt("3", 2);  // NaN
```

Then let's talk about solutions.

```js
const returnInt = (element) => parseInt(element, 10);

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

// Same as above, but using the concise arrow function syntax
['1', '2', '3'].map((str) => parseInt(str)); // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number); // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map((str) => parseInt(str)); // [1, 2, 3]
```

One alternative output of the map method being called with {{jsxref("parseInt")}} as a
parameter runs as follows:

```js
const strings = ['10', '10', '10'];
const numbers = strings.map(parseInt);

console.log(numbers);
// Actual result of [10, NaN, 2] may be unexpected based on the above description.
```

### Mapped array contains undefined

When {{jsxref("undefined")}} or nothing is returned:

```js
const numbers = [1, 2, 3, 4];
const filteredNumbers = numbers.map((num, index) => {
  if (index < 3) {
    return num;
  }
});

// index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// filteredNumbers is [1, 2, 3, undefined]
// numbers is still [1, 2, 3, 4]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.map` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Map")}} object
- {{jsxref("Array.from()")}}
