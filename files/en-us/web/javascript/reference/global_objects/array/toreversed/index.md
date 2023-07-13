---
title: Array.prototype.toReversed()
slug: Web/JavaScript/Reference/Global_Objects/Array/toReversed
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.toReversed
---

{{JSRef}}

The **`toReversed()`** method of {{jsxref("Array")}} instances is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) counterpart of the {{jsxref("Array/reverse", "reverse()")}} method. It returns a new array with the elements in reversed order.

## Syntax

```js-nolint
toReversed()
```

### Return value

A new array containing the elements in reversed order.

## Description

The `toReversed()` method transposes the elements of the calling array object in reverse order and returns a new array.

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `toReversed()` method iterates empty slots as if they have the value `undefined`.

The `toReversed()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Reversing the elements in an array

The following example creates an array `items`, containing three elements, then creates a new array that's the reverse of `items`. The `items` array remains unchanged.

```js
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
```

### Using toReversed() on sparse arrays

The return value of `toReversed()` is never sparse. Empty slots become `undefined` in the returned array.

```js
console.log([1, , 3].toReversed()); // [3, undefined, 1]
console.log([1, , 3, 4].toReversed()); // [4, 3, undefined, 1]
```

### Calling toReversed() on non-array objects

The `toReversed()` method reads the `length` property of `this`. It then visits each property having an integer key between `length - 1` and `0` in descending order, adding the value of the current property to the end of the array to be returned.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  2: 4,
};
console.log(Array.prototype.toReversed.call(arrayLike));
// [4, undefined, undefined]
// The '0' and '1' indices are not present so they become undefined
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.toReversed` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.reverse()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
