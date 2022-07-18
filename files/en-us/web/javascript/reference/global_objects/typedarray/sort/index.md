---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.sort
---
{{JSRef}}

The **`sort()`** method sorts the elements of a typed array
numerically _in place_ and returns the typed array. This method has the same
algorithm as {{jsxref("Array.prototype.sort()")}}, except that sorts the values
numerically instead of as strings. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-sort.html","shorter")}}

## Syntax

```js
// Functionless
sort()

// Arrow function
sort((a, b) => { /* ... */ } )

// Compare function
sort(compareFn)

// Inline compare function
sort(function compareFn(a, b) { /* ... */ })
```

### Parameters

- `compareFunction` {{optional_inline}}
  - : Specifies a function that defines the sort order.

### Return value

The sorted typed array.

## Examples

### Using sort

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
- {{jsxref("Array.prototype.sort()")}}
