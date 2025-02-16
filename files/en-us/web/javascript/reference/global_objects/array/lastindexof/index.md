---
title: Array.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.lastIndexOf
---

{{JSRef}}

The **`lastIndexOf()`** method of {{jsxref("Array")}} instances returns the last index at which
a given element can be found in the array, or -1 if it is not present. The array is
searched backwards, starting at `fromIndex`.

{{InteractiveExample("JavaScript Demo: Array.lastIndexOf()")}}

```js interactive-example
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1
```

## Syntax

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : Element to locate in the array.
- `fromIndex` {{optional_inline}}
  - : Zero-based index at which to start searching backwards, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the array — if `-array.length <= fromIndex < 0`, `fromIndex + array.length` is used.
    - If `fromIndex < -array.length`, the array is not searched and `-1` is returned. You can think of it conceptually as starting at a nonexistent position before the beginning of the array and going backwards from there. There are no array elements on the way, so `searchElement` is never found.
    - If `fromIndex >= array.length` or `fromIndex` is omitted, `array.length - 1` is used, causing the entire array to be searched. You can think of it conceptually as starting at a nonexistent position beyond the end of the array and going backwards from there. It eventually reaches the real end position of the array, at which point it starts searching backwards through the actual array elements.

### Return value

The last index of `searchElement` in the array; `-1` if not found.

## Description

The `lastIndexOf()` method compares `searchElement` to elements of the array using [strict equality](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality) (the same algorithm used by the `===` operator). [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) values are never compared as equal, so `lastIndexOf()` always returns `-1` when `searchElement` is `NaN`.

The `lastIndexOf()` method skips empty slots in [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays).

The `lastIndexOf()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Using lastIndexOf()

The following example uses `lastIndexOf()` to locate values in an array.

```js
const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2); // 3
numbers.lastIndexOf(7); // -1
numbers.lastIndexOf(2, 3); // 3
numbers.lastIndexOf(2, 2); // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3
```

You cannot use `lastIndexOf()` to search for `NaN`.

```js
const array = [NaN];
array.lastIndexOf(NaN); // -1
```

### Finding all the occurrences of an element

The following example uses `lastIndexOf` to find all the indices of an
element in a given array, using {{jsxref("Array/push", "push()")}} to add them
to another array as they are found.

```js
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.lastIndexOf(element);
while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1;
}

console.log(indices);
// [4, 2, 0]
```

Note that we have to handle the case `idx === 0` separately here because the
element will always be found regardless of the `fromIndex` parameter if it is
the first element of the array. This is different from the
{{jsxref("Array/indexOf", "indexOf()")}} method.

### Using lastIndexOf() on sparse arrays

You cannot use `lastIndexOf()` to search for empty slots in sparse arrays.

```js
console.log([1, , 3].lastIndexOf(undefined)); // -1
```

### Calling lastIndexOf() on non-array objects

The `lastIndexOf()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`.

```js
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 2,
  3: 5, // ignored by lastIndexOf() since length is 3
};
console.log(Array.prototype.lastIndexOf.call(arrayLike, 2));
// 2
console.log(Array.prototype.lastIndexOf.call(arrayLike, 5));
// -1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.lastIndexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.findLastIndex()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
