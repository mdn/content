---
title: TypedArray.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.TypedArray.indexOf
---
{{JSRef}}

The **`indexOf()`** method returns the first index at which a
given element can be found in the typed array, or -1 if it is not present. This method
has the same algorithm as {{jsxref("Array.prototype.indexOf()")}}. _TypedArray_
is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-indexof.html")}}

## Syntax

```js
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : Element to locate in the typed array.
- `fromIndex` {{optional_inline}}
  - : The index to start the search at. If the index is greater than or equal to the typed
    array's length, -1 is returned, which means the typed array will not be searched. If
    the provided index value is a negative number, it is taken as the offset from the end
    of the typed array. Note: if the provided index is negative, the typed array is still
    searched from front to back. If the calculated index is less than 0, then the whole
    typed array will be searched. Default: 0 (entire typed array is searched).

### Return value

The first index of the element in the array; `-1` if not found.

## Description

`indexOf` compares `searchElement` to elements of the
typed array using
[strict equality](/en-US/docs/Web/JavaScript/Reference/Operators#using_the_equality_operators)
(the same method used by the `===`, or triple-equals, operator).

## Examples

### Using indexOf

```js
const uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2);     // 0
uint8.indexOf(7);     // -1
uint8.indexOf(9, 2);  // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.indexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
- {{jsxref("Array.prototype.indexOf()")}}
