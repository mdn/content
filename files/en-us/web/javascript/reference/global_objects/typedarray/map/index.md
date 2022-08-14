---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.map
---
{{JSRef}}

The **`map()`** method creates a new typed array with the
results of calling a provided function on every element in this typed array. This method
has the same algorithm as {{jsxref("Array.prototype.map()")}}_._
_TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-map.html", "shorter")}}

## Syntax

```js
// Arrow function
map((currentValue) => { /* ... */ } )
map((currentValue, index) => { /* ... */ } )
map((currentValue, index, array) => { /* ... */ } )

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function(currentValue) { /* ... */ })
map(function(currentValue, index) { /* ... */ })
map(function(currentValue, index, array){ /* ... */ })
map(function(currentValue, index, array) { /* ... */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : A callback function that produces an element of the new typed array.

    The function is called with the following arguments:

    - `currentValue`
      - : The current element being processed in the typed array.
    - `index`
      - : The index of the current element being processed in the typed array.
    - `array`
      - : The typed array `map()` was called upon.

- `thisArg` {{optional_inline}}
  - : Value to use as `this` when executing `callbackFn`.

### Return value

A new typed array.

## Description

The `map()` method calls a provided callback function
(`callbackFn`) once for each element in a typed array, in order, and
constructs a new typed array from the results.

`callbackFn` is invoked only for indexes of the typed array which have
assigned values; it is not invoked for indexes that are `undefined`, those
which have been deleted, or which have never been assigned values.

`callbackFn` is invoked with three arguments: the value of the
element, the index of the element, and the typed array object being traversed.

If a `thisArg` parameter is provided to `map()`, it
will be passed to `callbackFn` when invoked, for use as its
`this` value. Otherwise, the value {{jsxref("undefined")}} will be passed for
use as its `this` value. The `this` value ultimately observable by
`callbackFn` is determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`map()` does not mutate the typed array on which it is called (although
`callbackFn`, if invoked, may do so).

The range of elements processed by `map()` is set before the first
invocation of `callbackFn`. Elements which are appended to the array
after the call to `map()` begins will not be visited by
`callbackFn`. If existing elements of the typed array are changed, or
deleted, their value as passed to `callbackFn` will be the value at the
time `map()` visits them; elements that are deleted are not visited.

## Examples

### Mapping a typed array to a typed array of square roots

The following code takes a typed array and creates a new typed array containing the
square roots of the numbers in the first typed array.

```js
const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots is now: Uint8Array [1, 2, 3],
// numbers is still Uint8Array [1, 4, 9]
```

### Mapping a typed array of numbers using a function containing an argument

The following code shows how `map()` works when a function requiring one
argument is used with it. The argument will automatically be assigned to each element of
the typed array as `map()` loops through the original typed array.

```js
const numbers = new Uint8Array([1, 4, 9]);
const doubles = numbers.map((num) => num * 2);
// doubles is now Uint8Array [2, 8, 18]
// numbers is still Uint8Array [1, 4, 9]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.map` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.filter()")}}
- {{jsxref("Array.prototype.map()")}}
