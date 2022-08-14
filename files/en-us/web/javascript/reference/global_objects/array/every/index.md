---
title: Array.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Array/every
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Polyfill
browser-compat: javascript.builtins.Array.every
---
{{JSRef}}

The **`every()`** method tests whether
all elements in the array pass the test implemented by the provided function. It
returns a Boolean value.

{{EmbedInteractiveExample("pages/js/array-every.html","shorter")}}

## Syntax

```js
// Arrow function
every((element) => { /* … */ } )
every((element, index) => { /* … */ } )
every((element, index, array) => { /* … */ } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function(element) { /* … */ })
every(function(element, index) { /* … */ })
every(function(element, index, array){ /* … */ })
every(function(element, index, array) { /* … */ }, thisArg)
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
      - : The array `every` was called upon.

- `thisArg` {{Optional_inline}}
  - : A value to use as `this` when executing `callbackFn`.

### Return value

**`true`** if the `callbackFn` function
returns a {{Glossary("truthy")}} value for every array element. Otherwise,
**`false`**.

## Description

The `every` method executes the provided `callbackFn`
function once for each element present in the array until it finds the one where
`callbackFn` returns a {{Glossary("falsy")}} value. If such an
element is found, the `every` method immediately returns `false`.
Otherwise, if `callbackFn` returns a {{Glossary("truthy")}} value
for all elements, `every` returns `true`.

> **Note:** Calling this method on an empty array will return
> `true` for any condition!

`callbackFn` is invoked only for array indexes which have assigned
values. It is not invoked for indexes which have been deleted, or which have never been
assigned values.

`callbackFn` is invoked with three arguments: the value of the
element, the index of the element, and the Array object being traversed.

If a `thisArg` parameter is provided to `every`, it
will be used as callback's `this` value. Otherwise, the value
`undefined` will be used as its `this` value. The
`this` value ultimately observable by `callback` is
determined according to
[the usual rules for determining the `this` seen by a function](/en-US/docs/Web/JavaScript/Reference/Operators/this).

`every` does not mutate the array on which it is called.

The range of elements processed by `every` is set before the first
invocation of `callbackFn`. Therefore,
`callbackFn` will not run on elements that are appended to the array
after the call to `every` begins. If existing elements of the array are
changed, their value as passed to `callbackFn` will be the value at
the time `every` visits them. Elements that are deleted are not visited.

`every` acts like the "for all" quantifier in mathematics. In particular,
for an empty array, it returns `true`. (It is [vacuously true](https://en.wikipedia.org/wiki/Vacuous_truth) that all
elements of the [empty set](https://en.wikipedia.org/wiki/Empty_set#Properties)
satisfy any given condition.)

## Examples

### Testing size of all array elements

The following example tests whether all elements in the array are bigger than 10.

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

### Check if one array is a subset of another array

The following example tests if all the elements of an array are present in another array.

```js
const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
```

### Using arrow functions

[Arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) provide a shorter syntax for the same test.

```js
[12, 5, 8, 130, 44].every((x) => x >= 10);   // false
[12, 54, 18, 130, 44].every((x) => x >= 10); // true
```

### Affecting Initial Array (modifying, appending, and deleting)

The following examples tests the behavior of the `every` method when the
array is modified.

```js
// ---------------
// Modifying items
// ---------------
let arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr[index+1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2;
})

// Loop runs for 3 iterations, but would
// have run 2 iterations without any modification
//
// 1st iteration: [1,1,3,4][0] -> 1
// 2nd iteration: [1,1,2,4][1] -> 1
// 3rd iteration: [1,1,2,3][2] -> 2

// ---------------
// Appending items
// ---------------
arr = [1, 2, 3];
arr.every((elem, index, arr) => {
  arr.push('new');
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
})

// Loop runs for 3 iterations, even after appending new items
//
// 1st iteration: [1, 2, 3, new][0] -> 1
// 2nd iteration: [1, 2, 3, new, new][1] -> 2
// 3rd iteration: [1, 2, 3, new, new, new][2] -> 3

// ---------------
// Deleting items
// ---------------
arr = [1, 2, 3, 4];
arr.every((elem, index, arr) => {
  arr.pop();
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 4;
})

// Loop runs for 2 iterations only, as the remaining
// items are `pop()`ed off
//
// 1st iteration: [1,2,3][0] -> 1
// 2nd iteration: [1,2][1] -> 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.every` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("TypedArray.prototype.every()")}}
