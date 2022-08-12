---
title: TypedArray.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
browser-compat: javascript.builtins.TypedArray.toLocaleString
---
{{JSRef}}

The **`toLocaleString()`** method returns a string representing
the elements of the typed array. The elements are converted to strings and are separated
by a locale-specific string (such as a comma ","). This method has the same algorithm as
{{jsxref("Array.prototype.toLocaleString()")}} and, as the typed array elements are
numbers, the same algorithm as {{jsxref("Number.prototype.toLocaleString()")}} applies
for each element. _TypedArray_ is one of the
[typed array types](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects) here.

## Syntax

```js
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

The `locales` and `options` arguments customize the behavior of
the function and let applications specify the language whose formatting conventions
should be used. In implementations, which ignore the `locales` and
`options` arguments, the locale used and the form of the string returned
are entirely implementation dependent.

See the {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
constructor for details on these parameters and how to use them.

### Return value

A string representing the elements of the typed array.

## Examples

### Using toLocaleString

```js
const uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// if run in a de-DE locale
// "2.000,500,8.123,12,4.212"

uint.toLocaleString('en-US');
// "2,000,500,8,123,12,4,212"

uint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
