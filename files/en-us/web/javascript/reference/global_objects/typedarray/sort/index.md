---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.sort
---

{{JSRef}}

The **`sort()`** method of {{jsxref("TypedArray")}} instances sorts the elements of a typed array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ and returns the reference to the same typed array, now sorted. This method has the same algorithm as {{jsxref("Array.prototype.sort()")}}, except that it sorts the values numerically instead of as strings by default.

{{InteractiveExample("JavaScript Demo: TypedArray.sort()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([40, 10, 50, 20, 30]);
uint8.sort();

console.log(uint8);
// Expected output: Uint8Array [10, 20, 30, 40, 50]
```

## Syntax

```js-nolint
sort()
sort(compareFn)
```

### Parameters

- `compareFn` {{optional_inline}}

  - : A function that determines the order of the elements. The function is called with the following arguments:

    - `a`
      - : The first element for comparison.
    - `b`
      - : The second element for comparison.

    It should return a number where:

    - A negative value indicates that `a` should come before `b`.
    - A positive value indicates that `a` should come after `b`.
    - Zero or `NaN` indicates that `a` and `b` are considered equal.

    To memorize this, remember that `(a, b) => a - b` sorts numbers in ascending order.

    If omitted, the typed array elements are sorted according to numeric value.

### Return value

The reference to the original typed array, now sorted. Note that the typed array is sorted _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_, and no copy is made.

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
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays) guide
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
