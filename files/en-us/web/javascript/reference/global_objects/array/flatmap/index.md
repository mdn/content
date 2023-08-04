---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.flatMap
---

{{JSRef}}

The **`flatMap()`** method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a {{jsxref("Array.prototype.map","map()")}} followed by a {{jsxref("Array.prototype.flat","flat()")}} of depth 1 (`arr.map(...args).flat()`), but slightly more efficient than calling those two methods separately.

{{EmbedInteractiveExample("pages/js/array-flatmap.html","shorter")}}

## Syntax

```js-nolint
flatMap(callbackFn)
flatMap(callbackFn, thisArg)
```

### Parameters

- `callbackFn`
  - : A function to execute for each element in the array. It should return an array containing new elements of the new array, or a single non-array value to be added to the new array. The function is called with the following arguments:
    - `element`
      - : The current element being processed in the array.
    - `index`
      - : The index of the current element being processed in the array.
    - `array`
      - : The array `flatMap()` was called upon.
- `thisArg` {{optional_inline}}
  - : A value to use as `this` when executing `callbackFn`. See [iterative methods](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods).

### Return value

A new array with each element being the result of the callback function and flattened
by a depth of 1.

## Description

The `flatMap()` method is an [iterative method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods). See {{jsxref("Array.prototype.map()")}} for a detailed description of the callback function. The `flatMap()` method is identical to [`map(callbackFn, thisArg)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) followed by [`flat(1)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) — for each element, it produces an array of new elements, and concatenates the resulting arrays together to form a new array.

The `flatMap()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. However, the value returned from `callbackFn` must be an array if it is to be flattened.

### Alternative

#### Pre-allocate and explicitly iterate

```js
const arr = [1, 2, 3, 4];

arr.flatMap((x) => [x, x * 2]);
// is equivalent to
const n = arr.length;
const acc = new Array(n * 2);
for (let i = 0; i < n; i++) {
  const x = arr[i];
  acc[i * 2] = x;
  acc[i * 2 + 1] = x * 2;
}
// [1, 2, 2, 4, 3, 6, 4, 8]
```

Note that in this particular case the `flatMap` approach is slower than the
for-loop approach — due to the creation of temporary arrays that must be
garbage collected, as well as the return array not needing to be frequently
resized. However, `flatMap` may still be the correct solution in cases where
its flexibility and readability are desired.

## Examples

### map() and flatMap()

```js
const arr1 = [1, 2, 3, 4];

arr1.map((x) => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap((x) => [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```

While the above could have been achieved by using map itself, here is an example that
better showcases the use of `flatMap()`.

Let's generate a list of words from a list of sentences.

```js
const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

Notice, the output list length can be different from the input list length.

### For adding and removing items during a map()

`flatMap` can be used as a way to add and remove items (modify the number of
items) during a `map`. In other words, it allows you to map _many items to
many items_ (by handling each input item separately), rather than always
_one-to-one_. In this sense, it works like the opposite of [filter](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
Return a 1-element array to keep the item, a multiple-element array to add items, or a
0-element array to remove the item.

```js
// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
const a = [5, 4, -3, 20, 17, -33, -4, 18];
//         |\  \  x   |  | \   x   x   |
//        [4,1, 4,   20, 16, 1,       18]

const result = a.flatMap((n) => {
  if (n < 0) {
    return [];
  }
  return n % 2 === 0 ? [n] : [n - 1, 1];
});
console.log(result); // [4, 1, 4, 20, 16, 1, 18]
```

### Using flatMap() on sparse arrays

The `callbackFn` won't be called for empty slots in the source array because `map()` doesn't, while `flat()` ignores empty slots in the returned arrays.

```js
console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]
```

### Calling flatMap() on non-array objects

The `flatMap()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`. If the return value of the callback function is not an array, it is always directly appended to the result array.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignored by flatMap() since length is 3
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// Array-like objects returned from the callback won't be flattened
console.log(
  Array.prototype.flatMap.call(arrayLike, (x) => ({
    length: 1,
    0: x,
  })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.flatMap` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flat()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
