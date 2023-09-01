---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.sort
---

{{JSRef}}

The **`sort()`** method of {{jsxref("TypedArray")}} instances sorts the elements of a typed array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ and returns the reference to the same typed array, now sorted. This method has the same algorithm as {{jsxref("Array.prototype.sort()")}}, except that it sorts the values numerically instead of as strings by default.

{{EmbedInteractiveExample("pages/js/typedarray-sort.html","shorter")}}

## Syntax

```js-nolint
sort()
sort(compareFn)
```

### Parameters

- `compareFn` {{optional_inline}}

  - : A function that defines the sort order. The return value should be a number whose sign indicates the relative order of the two elements: negative if `a` is less than `b`, positive if `a` is greater than `b`, and zero if they are equal. `NaN` is treated as `0`. The function is called with the following arguments:

    - `a`
      - : The first element for comparison. Will never be `undefined`.
    - `b`
      - : The second element for comparison. Will never be `undefined`.

    If omitted, the array elements are sorted according to numeric value.

### Return value

The reference to the original array, now sorted. Note that the array is sorted _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_, and no copy is made.

## Description

See {{jsxref("Array.prototype.sort()")}} for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using sort()

For more examples, see also the {{jsxref("Array.prototype.sort()")}} method.

```js
let numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// Unlike plain Arrays, a compare function is not required
// to sort the numbers numerically.

// Regular Arrays require a compare function to sort numerically:
numbers = [40, 1, 5, 200];
numbers.sort();
// [1, 200, 40, 5]

numbers.sort((a, b) => a - b); // compare numbers
// [ 1, 5, 40, 200 ]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.sort` with modern behavior like stable sort in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
