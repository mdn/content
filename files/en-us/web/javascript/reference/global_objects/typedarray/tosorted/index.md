---
title: TypedArray.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.toSorted
---

{{JSRef}}

The **`toSorted()`** method is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) version of the {{jsxref("TypedArray/sort", "sort()")}} method. It returns a new array with the elements sorted in ascending order. This method has the same algorithm as {{jsxref("Array.prototype.toSorted()")}}, except that it sorts the values numerically instead of as strings by default. _TypedArray_ is one of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

## Syntax

```js-nolint
// Functionless
toSorted()

// Arrow function
toSorted((a, b) => { /* … */ })

// Compare function
toSorted(compareFn)

// Inline compare function
toSorted(function compareFn(a, b) { /* … */ })
```

### Parameters

- `compareFn` {{optional_inline}}
  - : Specifies a function that defines the sort order.

### Return value

A new typed array with the elements sorted in ascending order.

## Examples

### Sorting an array

For more examples, see also the {{jsxref("Array.prototype.sort()")}} method.

```js
const numbers = new Uint8Array([40, 1, 5, 200]);
const numberSorted = numbers.toSorted();
console.log(numberSorted); // Uint8Array [ 1, 5, 40, 200 ]
// Unlike plain Arrays, a compare function is not required
// to sort the numbers numerically.
console.log(numbers); // Uint8Array [ 40, 1, 5, 200 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.toSorted` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- {{jsxref("Array.prototype.toSorted()")}}
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
