---
title: Array.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Array/with
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.with
---

{{JSRef}}

The **`with()`** method of {{jsxref("Array")}} instances is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) version of using the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) to change the value of a given index. It returns a new array with the element at the given index replaced with the given value.

## Syntax

```js-nolint
array.with(index, value)
```

### Parameters

- `index`
  - : Zero-based index at which to change the array, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the array — if `index < 0`, `index + array.length` is used.
    - If the index after normalization is out of bounds, a {{jsxref("RangeError")}} is thrown.
- `value`
  - : Any value to be assigned to the given index.

### Return value

A new array with the element at `index` replaced with `value`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `index >= array.length` or `index < -array.length`.

## Description

The `with()` method changes the value of a given index in the array, returning a new array with the element at the given index replaced with the given value. The original array is not modified. This allows you to chain array methods while doing manipulations.

The `with()` method never produces a [sparse array](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). If the source array is sparse, the empty slots will be replaced with `undefined` in the new array.

The `with()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Creating a new array with a single element changed

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
```

### Chaining array methods

With the `with()` method, you can update a single element in an array and then apply other array methods.

```js
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]
```

### Using with() on sparse arrays

The `with()` method always creates a dense array.

```js
const arr = [1, , 3, 4, , 6];
console.log(arr.with(0, 2)); // [2, undefined, 3, 4, undefined, 6]
```

### Calling with() on non-array objects

The `with()` method reads the `length` property of `this`. It then reads each integer-keyed property of `this` and writes it to the new array, while `value` is written to the given `index`.

```js
const arrayLike = {
  length: 3,
  unrelated: "foo",
  0: 5,
  2: 4,
};
console.log(Array.prototype.with.call(arrayLike, 0, 1));
// [ 1, undefined, 4 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.with` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.toReversed()")}}
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("Array.prototype.toSpliced()")}}
- {{jsxref("TypedArray.prototype.with()")}}
