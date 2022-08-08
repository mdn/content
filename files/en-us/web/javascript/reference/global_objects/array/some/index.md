---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Array.some
---
{{JSRef}}

The **`some()`** method tests whether
at least one element in the array passes the test implemented by the provided
function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

{{EmbedInteractiveExample("pages/js/array-some.html")}}

## Syntax

```js
// Arrow function
some((element) => { /* … */ } )
some((element, index) => { /* … */ } )
some((element, index, array) => { /* … */ } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function(element) { /* … */ })
some(function(element, index) { /* … */ })
some(function(element, index, array){ /* … */ })
some(function(element, index, array) { /* … */ }, thisArg)
```

### Parameters

- `callbackFn`

  - : A function to test for each element.

    The function is called with the following arguments:

    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `some()` was called upon.

- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`.

### Return value

`true` if the callback function returns a {{Glossary("truthy")}} value for
at least one element in the array. Otherwise, `false`.

## Description

The `some()` method executes the `callbackFn` function
once for each element present in the array until it finds the one where
`callbackFn` returns a _truthy_ value (a value that becomes
true when converted to a Boolean). If such an element is found, `some()`
immediately returns `true`. Otherwise, `some()` returns
`false`. `callbackFn` is invoked only for indexes of the
array with assigned values. It is not invoked for indexes which have been deleted or
which have never been assigned values.

`callbackFn` is invoked with three arguments: the value of the
element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `some()`, it
will be used as the callback's `this` value. Otherwise, the value
{{jsxref("undefined")}} will be used as its `this` value. The
`this` value ultimately observable by `callbackFn` is
determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`some()` does not mutate the array on which it is called.

The range of elements processed by `some()` is set before the first
invocation of `callbackFn`. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by `callbackFn`. If an existing, unvisited element of the array is
changed by `callbackFn`, its value passed to the visiting
`callbackFn` will be the value at the time that `some()`
visits that element's index. Elements that are deleted are not visited.

> **Warning:** Concurrent modification of the kind described in the previous paragraph frequently leads to hard-to-understand code and is generally to be avoided (except in special cases).

> **Note:** Calling this method on an empty array returns
> `false` for any condition!

## Examples

### Testing value of array elements

The following example tests whether any element in the array is bigger than 10.

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

### Testing array elements using arrow functions

[Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
provide a shorter syntax for the same test.

```js
[2, 5, 8, 1, 4].some((x) => x > 10);  // false
[12, 5, 8, 1, 4].some((x) => x > 10); // true
```

### Checking whether a value exists in an array

To mimic the function of the `includes()` method, this custom
function returns `true` if the element exists in the array:

```js
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### Checking whether a value exists using an arrow function

```js
const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

### Converting any value to Boolean

```js
const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some((t) => t === value);
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.some` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.some()")}}
