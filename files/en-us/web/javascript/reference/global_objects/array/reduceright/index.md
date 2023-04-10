---
title: Array.prototype.reduceRight()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduceRight
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.reduceRight
---

{{JSRef}}

The **`reduceRight()`** method applies a function against an
accumulator and each value of the array (from right-to-left) to reduce it to a single
value.

See also {{jsxref("Array.prototype.reduce()")}} for left-to-right.

{{EmbedInteractiveExample("pages/js/array-reduce-right.html","shorter")}}

## Syntax

```js-nolint
reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the array. Its return value becomes the value of the `accumulator` parameter on the next invocation of `callbackFn`. For the last invocation, the return value becomes the return value of `reduceRight()`. The function is called with the following arguments:
    - `accumulator`
      - : The value previously returned in the last invocation of the callback, or `initialValue`, if supplied. (See below.)
    - `currentValue`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `reduceRight()` was called upon.
- `initialValue` {{optional_inline}}
  - : Value to use as accumulator to the first call of the `callbackFn`. If no initial value is supplied, the last element in the array will be used and skipped. Calling `reduceRight()` on an empty array without an initial value creates a `TypeError`.

### Return value

The value that results from the reduction.

## Description

The `reduceRight()` method is an [iterative method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). It runs a "reducer" callback function over all elements in the array, in descending-index order, and accumulates them into a single value.

`callbackFn` is invoked only for array indexes which have assigned values. It is not invoked for empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

Unlike other [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods), `reduce()` does not accept a `thisArg` argument. `callbackFn` is always called with `undefined` as `this`, which gets substituted with `globalThis` if `callbackFn` is non-strict.

`reduceRight()` does not mutate the array on which it is called, but the function provided as `callbackFn` can. Note, however, that the length of the array is saved _before_ the first invocation of `callbackFn`. Therefore:

- `callbackFn` will not visit any elements added beyond the array's initial length when the call to `reduceRight()` began.
- Changes to already-visited indexes do not cause `callbackFn` to be invoked on them again.
- If an existing, yet-unvisited element of the array is changed by `callbackFn`, its value passed to the `callbackFn` will be the value at the time that element gets visited. [Deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete) elements are not visited.

> **Warning:** Concurrent modifications of the kind described above frequently lead to hard-to-understand code and are generally to be avoided (except in special cases).

The `reduceRight()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### How reduceRight() works without an initial value

The call to the reduceRight `callbackFn` would look something like
this:

```js
arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});
```

The first time the function is called, the `accumulator` and
`currentValue` can be one of two values. If an
`initialValue` was provided in the call to
`reduceRight`, then `accumulator` will be equal to
`initialValue` and `currentValue` will be
equal to the last value in the array. If no `initialValue` was
provided, then `accumulator` will be equal to the last value in
the array and `currentValue` will be equal to the second-to-last
value.

If the array is empty and no `initialValue` was provided,
{{jsxref("TypeError")}} would be thrown. If the array has only one element (regardless
of position) and no `initialValue` was provided, or if
`initialValue` is provided but the array is empty, the solo value
would be returned without calling `callbackFn`.

Some example run-throughs of the function would look like this:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
);
```

The callback would be invoked four times, with the arguments and return values in each
call being as follows:

|             | `accumulator` | `currentValue` | `index` | Return value |
| ----------- | ------------- | -------------- | ------- | ------------ |
| First call  | `4`           | `3`            | `3`     | `7`          |
| Second call | `7`           | `2`            | `2`     | `9`          |
| Third call  | `9`           | `1`            | `1`     | `10`         |
| Fourth call | `10`          | `0`            | `0`     | `10`         |

The `array` parameter never changes through the process — it's always `[0, 1, 2, 3, 4]`. The value returned by `reduceRight` would be that of the last callback invocation (`10`).

### How reduceRight() works with an initial value

Here we reduce the same array using the same algorithm, but with an `initialValue` of `10` passed as the second argument to `reduceRight()`:

```js
[0, 1, 2, 3, 4].reduceRight(
  (accumulator, currentValue, index, array) => accumulator + currentValue,
  10,
);
```

|             | `accumulator` | `currentValue` | `index` | Return value |
| ----------- | ------------- | -------------- | ------- | ------------ |
| First call  | `10`          | `4`            | `4`     | `14`         |
| Second call | `14`          | `3`            | `3`     | `17`         |
| Third call  | `17`          | `2`            | `2`     | `19`         |
| Fourth call | `19`          | `1`            | `1`     | `20`         |
| Fifth call  | `20`          | `0`            | `0`     | `20`         |

The value returned by `reduceRight` this time would be, of course, `20`.

### Sum up all values within an array

```js
const sum = [0, 1, 2, 3].reduceRight((a, b) => a + b);
// sum is 6
```

### Flatten an array of arrays

```js
const arrays = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const flattened = arrays.reduceRight((a, b) => a.concat(b), []);
// flattened is [4, 5, 2, 3, 0, 1]
```

### Run a list of asynchronous functions with callbacks in series each passing their results to the next

```js
const waterfall =
  (...functions) =>
  (callback, ...args) =>
    functions.reduceRight(
      (composition, fn) =>
        (...results) =>
          fn(composition, ...results),
      callback,
    )(...args);

const randInt = (max) => Math.floor(Math.random() * max);

const add5 = (callback, x) => {
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  setTimeout(callback, randInt(1000), x / 4);
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5); // Logs 14

// same as:

const computation2 = (input, callback) => {
  const f6 = (x) => div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = (x) => split(f5, x);
  const f3 = (x) => sub2(f4, x);
  const f2 = (x) => mult3(f3, x);
  add5(f2, input);
};
```

### Difference between reduce and reduceRight

```js
const a = ["1", "2", "3", "4", "5"];
const left = a.reduce((prev, cur) => prev + cur);
const right = a.reduceRight((prev, cur) => prev + cur);

console.log(left); // "12345"
console.log(right); // "54321"
```

### Defining composable functions

Function composition is a mechanism for combining functions, in which the
output of each function is passed into the next one, and the output of the last
function is the final result. In this example we use `reduceRight()`
to implement function composition.

See also [Function composition](<https://en.wikipedia.org/wiki/Function_composition_(computer_science)>) on Wikipedia.

```js
const compose =
  (...args) =>
  (value) =>
    args.reduceRight((acc, fn) => fn(acc), value);

// Increment passed number
const inc = (n) => n + 1;

// Doubles the passed value
const double = (n) => n * 2;

// using composition function
console.log(compose(double, inc)(2)); // 6

// using composition function
console.log(compose(inc, double)(2)); // 5
```

### Using reduceRight() with sparse arrays

`reduceRight()` skips missing elements in sparse arrays, but it does not skip `undefined` values.

```js
console.log([1, 2, , 4].reduceRight((a, b) => a + b)); // 7
console.log([1, 2, undefined, 4].reduceRight((a, b) => a + b)); // NaN
```

### Calling reduceRight() on non-array objects

The `reduceRight()` method reads the `length` property of `this` and then accesses each integer index.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
console.log(Array.prototype.reduceRight.call(arrayLike, (x, y) => x - y));
// -1, which is 4 - 3 - 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.reduceRight` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.reduce()")}}
