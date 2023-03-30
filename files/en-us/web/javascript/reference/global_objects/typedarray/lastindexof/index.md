---
title: TypedArray.prototype.lastIndexOf()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.TypedArray.lastIndexOf
---

{{JSRef}}

The **`lastIndexOf()`** method returns the last index at which
a given element can be found in the typed array, or -1 if it is not present. The typed
array is searched backwards, starting at `fromIndex`. This method has the
same algorithm as {{jsxref("Array.prototype.lastIndexOf()")}}. _TypedArray_ is
one of the [typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

{{EmbedInteractiveExample("pages/js/typedarray-lastindexof.html")}}

## Syntax

```js-nolint
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameters

- `searchElement`
  - : Element to locate in the typed array.
- `fromIndex`
  - : Optional. The index at which to start searching backwards. Defaults to the typed
    array's length, i.e. the whole typed array will be searched. If the index is greater
    than or equal to the length of the typed array, the whole typed array will be
    searched. If negative, it is taken as the offset from the end of the typed array. Note
    that even when the index is negative, the typed array is still searched from back to
    front. If the calculated index is less than 0, -1 is returned, i.e. the typed array
    will not be searched.

### Return value

The last index of the element in the array; `-1` if not found.

## Description

`lastIndexOf` compares `searchElement` to elements of the typed array using
[strict equality](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using)
(the same method used by the `===` operator).

## Examples

### Using lastIndexOf

```js
const uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `TypedArray.prototype.lastIndexOf` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("Array.prototype.lastIndexOf()")}}
