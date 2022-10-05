---
title: Array.prototype.reverse()
slug: Web/JavaScript/Reference/Global_Objects/Array/reverse
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Array.reverse
---

{{JSRef}}

The **`reverse()`** method reverses an array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.

{{EmbedInteractiveExample("pages/js/array-reverse.html")}}

## Syntax

```js-nolint
reverse()
```

### Return value

The reference to the original array, now reversed. Note that the array is reversed _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_, and no copy is made.

## Description

The `reverse()` method transposes the elements of the calling array object in
place, mutating the array, and returning a reference to the array.

The `reverse()` method preserves empty slots. If the source array is [sparse](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the empty slots' corresponding new indices are [deleted](/en-US/docs/Web/JavaScript/Reference/Operators/delete) and also become empty slots.

`reverse` is intentionally generic; this method can be called on objects resembling arrays. Objects which do not contain a
`length` property reflecting the last in a series of consecutive, zero-based
numerical properties may not behave in any meaningful manner.

## Examples

### Reversing the elements in an array

The following example creates an array `items`, containing three elements, then
reverses the array. The call to `reverse()` returns a reference to the
reversed array `items`.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

items.reverse();
console.log(items); // [3, 2, 1]
```

### Reversing the elements in an array-like object

The following example creates an array-like object `obj`, containing three
elements and a length property, then reverses the array-like object. The call to
`reverse()` returns a reference to the reversed array-like object
`obj`.

```js
const obj = {0: 1, 1: 2, 2: 3, length: 3};
console.log(obj); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(obj); //same syntax for using apply()
console.log(obj); // {0: 3, 1: 2, 2: 1, length: 3}
```

### The reverse() method returns the reference to the same array

The `reverse()` method returns reference to the original array, so mutating the returned array will mutate the original array as well.

```js
const numbers = [3, 2, 4, 1, 5];
const reversed = numbers.reverse();
// numbers and reversed are both in reversed order [5, 1, 4, 2, 3]
reversed[0] = 5;
console.log(numbers[0]); // 5
```

In case you want `reverse()` to not mutate the original array, but return a [shallow-copied](/en-US/docs/Glossary/Shallow_copy) array like other array methods (e.g. [`map()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)) do, you can do a shallow copy before calling `reverse()`, using the [spread syntax](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) or [`Array.from()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```js
const numbers = [3, 2, 4, 1, 5];
// [...numbers] creates a shallow copy, so reverse() does not mutate the original
const reverted = [...numbers].reverse();
reverted[0] = 5;
console.log(numbers[0]); // 3
```

### Using reverse() on sparse arrays

Sparse arrays remain sparse after calling `reverse()`. Empty slots are copied over to their respective new indices as empty slots.

```js
console.log([1, , 3].reverse()); // [3, empty, 1]
console.log([1, , 3, 4].reverse()); // [4, 3, empty, 1]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
