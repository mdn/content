---
title: TypedArray.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/with
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.with
---

{{JSRef}}

The **`with()`** method is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) version of using the [bracket notation](/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) to change the value of a given index. It returns a new array with the element at the given index replaced with the given value. This method has the same algorithm as {{jsxref("Array.prototype.with()")}}. _TypedArray_ is one of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

## Syntax

```js-nolint
array.with(index, value)
```

### Parameters

- `index`
  - : Zero-based index at which to change the array, [converted to an integer](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).
    - Negative index counts back from the end of the array — if `start < 0`, `start + array.length` is used.
    - If `start` is omitted, `0` is used.
    - If the index, with negative values counted backwards, is out of bounds, a {{jsxref("RangeError")}} is thrown.
- `value`
  - : Any value to be assigned to the given index.

### Return value

A new typed array with the element at `index` replaced with `value`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `index > array.length` or `index < -array.length`.

## Examples

### Using with()

```js
const arr = new Uint8Array([1, 2, 3, 4, 5]);
console.log(arr.with(2, 6)); // Uint8Array [1, 2, 6, 4, 5]
console.log(arr); // Uint8Array [1, 2, 3, 4, 5]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.with` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.with()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
