---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.flat
---

{{JSRef}}

The **`flat()`** method of {{jsxref("Array")}} instances creates a new array with all sub-array
elements concatenated into it recursively up to the specified depth.

{{InteractiveExample("JavaScript Demo: Array.flat()")}}

```js interactive-example
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, [2, [3, [4, 5]]]];

console.log(arr2.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr2.flat(2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]

console.log(arr2.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]
```

## Syntax

```js-nolint
flat()
flat(depth)
```

### Parameters

- `depth` {{optional_inline}}
  - : The depth level specifying how deep a nested array structure should be flattened.
    Defaults to 1.

### Return value

A new array with the sub-array elements concatenated into it.

## Description

The `flat()` method is a [copying method](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods). It does not alter `this` but instead returns a [shallow copy](/en-US/docs/Glossary/Shallow_copy) that contains the same elements as the ones from the original array.

The `flat()` method removes empty slots if the array being flattened is [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). For example, if `depth` is 1, both empty slots in the root array and in the first level of nested arrays are ignored, but empty slots in further nested arrays are preserved with the arrays themselves.

The `flat()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties. However, its elements must be arrays if they are to be flattened.

## Examples

### Flattening nested arrays

```js
const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Using flat() on sparse arrays

The `flat()` method removes [empty slots](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays) in arrays:

```js
const arr5 = [1, 2, , 4, 5];
console.log(arr5.flat()); // [1, 2, 4, 5]

const array = [1, , 3, ["a", , "c"]];
console.log(array.flat()); // [ 1, 3, "a", "c" ]

const array2 = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
console.log(array2.flat()); // [ 1, 3, undefined, "a", ["d", empty, "e"], null ]
console.log(array2.flat(2)); // [ 1, 3, undefined, "a", "d", "e", null ]
```

### Calling flat() on non-array objects

The `flat()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`. If the element is not an array, it's directly appended to the result. If the element is an array, it's flattened according to the `depth` parameter.

```js
const arrayLike = {
  length: 3,
  0: [1, 2],
  // Array-like objects aren't flattened
  1: { length: 2, 0: 3, 1: 4 },
  2: 5,
  3: 3, // ignored by flat() since length is 3
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.flat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.concat()")}}
- {{jsxref("Array.prototype.flatMap()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.reduce()")}}
