---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - inArray
  - in_array
  - Polyfill
browser-compat: javascript.builtins.Array.includes
---
{{JSRef}}

The **`includes()`** method determines whether an array
includes a certain value among its entries, returning `true` or
`false` as appropriate.

{{EmbedInteractiveExample("pages/js/array-includes.html")}}

## Syntax

```js
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameters

- `searchElement`

  - : The value to search for.

    > **Note:** When comparing strings and characters,
    > `includes()` is _case-sensitive_.

- `fromIndex` {{optional_inline}}

  - : The position in this array at which to begin searching for
    `searchElement`.

    The first element to be searched is found at `fromIndex` for
    positive values of `fromIndex`, or at
    `arr.length + fromIndex` for negative values of
    `fromIndex` (using the [absolute value](https://en.wikipedia.org/wiki/Absolute_value) of `fromIndex` as the number of elements from the end
    of the array at which to start the search).

    Defaults to `0`.

### Return value

A boolean value which is `true` if the value `searchElement` is found within the array (or the part of the array indicated by the index `fromIndex`, if specified).

Values of zero are all considered to be equal, regardless of sign. (That is, `-0` is considered to be equal to both `0` and `+0`), but `false` is _not_ considered to be the same as `0`. [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) can be correctly searched for.

> **Note:** Technically speaking, `includes()` uses the [SameValueZero](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#same-value-zero_equality) algorithm to determine whether the given element is found.

## Examples

```js
[1, 2, 3].includes(2)         // true
[1, 2, 3].includes(4)         // false
[1, 2, 3].includes(3, 3)      // false
[1, 2, 3].includes(3, -1)     // true
[1, 2, NaN].includes(NaN)     // true
["1", "2", "3"].includes(3)   // false
```

### fromIndex is greater than or equal to the array length

If `fromIndex` is greater than or equal to the length of the
array, `false` is returned. The array will not be searched.

```js
const arr = ['a', 'b', 'c'];

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false
```

### Computed index is less than 0

If `fromIndex` is negative, the computed index is calculated to
be used as a position in the array at which to begin searching for
`searchElement`. If the computed index is less than or equal to
`0`, the entire array will be searched.

```js
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ['a', 'b', 'c'];

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false
```

### includes() used as a generic method

`includes()` method is intentionally generic. It does not require
`this` value to be an Array object, so it can be applied to other kinds of
objects (e.g. array-like objects).

The example below illustrates `includes()` method called on the function's
[arguments](/en-US/docs/Web/JavaScript/Reference/Functions/arguments) object.

```js
(function () {
  console.log(Array.prototype.includes.call(arguments, 'a')); // true
  console.log(Array.prototype.includes.call(arguments, 'd')); // false
})('a', 'b', 'c');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Array.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("Array.prototype.indexOf()")}}
- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
