---
title: Array.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/Array/findIndex
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.findIndex
---

{{JSRef}}

The **`findIndex()`** method returns the index of the first element in an array that satisfies the provided testing function.
If no elements satisfy the testing function, -1 is returned.

See also the {{jsxref("Array/find", "find()")}} method, which returns the first element that satisfies the testing function (rather than its index).

{{EmbedInteractiveExample("pages/js/array-findindex.html","shorter")}}

## Syntax

```js-nolint
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the array. It should return a [truthy](/en-US/docs/Glossary/Truthy) value to indicate a matching element has been found, and a [falsy](/en-US/docs/Glossary/Falsy) value otherwise. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `findIndex()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

The index of the first element in the array that passes the test. Otherwise, `-1`.

## Description

The `findIndex()` is an [iterative method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). It calls a provided `callbackFn` function once for each element in an array in ascending-index order, until `callbackFn` returns a [truthy](/en-US/docs/Glossary/Truthy) value. `findIndex()` then returns the index of that element and stops iterating through the array. If `callbackFn` never returns a truthy value, `findIndex()` returns `-1`.

`callbackFn` is invoked for _every_ index of the array, not just those with assigned values. Empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) behave the same as `undefined`.

`findIndex()` does not mutate the array on which it is called, but the function provided as `callbackFn` can. Note, however, that the length of the array is saved _before_ the first invocation of `callbackFn`. Therefore:

- `callbackFn` will not visit any elements added beyond the array's initial length when the call to `findIndex()` began.
- Changes to already-visited indexes do not cause `callbackFn` to be invoked on them again.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time that element gets visited. [Deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete) elements are visited as if they were `undefined`.

> **Warning:** Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The `findIndex()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Find the index of a prime number in an array

The following example returns the index of the first element in the array that is a prime number, or `-1` if there is no prime number.

```js
function isPrime(element) {
  if (element % 2 === 0 || element < 2) {
    return false;
  }
  for (let factor = 3; factor <= Math.sqrt(element); factor += 2) {
    if (element % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)
```

### Using findIndex() on sparse arrays

You can search for `undefined` in a sparse array and get the index of an empty slot.

```js
console.log([1, , 3].findIndex((x) => x === undefined)); // 1
```

### Calling findIndex() on non-array objects

The `findIndex()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`.

```js
const arrayLike = {
  length: 3,
  "-1": 0.1, // ignored by findIndex() since -1 < 0
  0: 2,
  1: 7.3,
  2: 4,
};
console.log(
  Array.prototype.findIndex.call(arrayLike, (x) => !Number.isInteger(x)),
); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.findIndex` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findLast()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
