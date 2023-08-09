---
title: TypedArray.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.toSorted
---

{{JSRef}}

The **`toSorted()`** method of {{jsxref("TypedArray")}} instances is the [copying](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) version of the {{jsxref("TypedArray/sort", "sort()")}} method. It returns a new typed array with the elements sorted in ascending order. This method has the same algorithm as {{jsxref("Array.prototype.toSorted()")}}.

## Syntax

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parameters

- `compareFn` {{optional_inline}}

  - : Specifies a function that defines the sort order. If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

    - `a`
      - : The first element for comparison.
    - `b`
      - : The second element for comparison.

### Return value

A new typed array with the elements sorted in ascending order.

## Description

See {{jsxref("Array.prototype.toSorted()")}} for more details. This method is not generic and can only be called on typed array instances.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toSorted()")}}
