---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
tags:
  - Array
  - Internationalization
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.Array.toLocaleString
---

{{JSRef}}

The **`toLocaleString()`** method returns a string representing
the elements of the array. The elements are converted to Strings using their
`toLocaleString` methods and these Strings are separated by a locale-specific
String (such as a comma ",").

{{EmbedInteractiveExample("pages/js/array-tolocalestring.html","shorter")}}

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [Locale identification and negotiation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
- `options` {{optional_inline}}
  - : An object with configuration properties. For numbers, see {{jsxref("Number.prototype.toLocaleString()")}}; for dates, see {{jsxref("Date.prototype.toLocaleString()")}}.

### Return value

A string representing the elements of the array.

## Description

The `Array.prototype.toLocaleString` method traverses its content, calling the `toLocaleString` method of every element with the `locales` and `options` parameters provided, and concatenates them with a implementation-defined separator (such as a comma ","). Note that the method itself does not consume the two parameters — it only passes them to the `toLocaleString()` of each element. The choice of the separator string depends on the host's current locale, not the `locales` parameter.

The `toLocaleString()` method does not special case [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays). Empty slots are visited as if they have value `undefined`.

## Examples

### Using locales and options

The elements of the array are converted to strings using their
`toLocaleString` methods.

- `Object`: {{jsxref("Object.prototype.toLocaleString()")}}
- `Number`: {{jsxref("Number.prototype.toLocaleString()")}}
- `Date`: {{jsxref("Date.prototype.toLocaleString()")}}

Always display the currency for the strings and numbers in the `prices`
array:

```js
const prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```

For more examples, see also the [`Intl.NumberFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) and [`Intl.DateTimeFormat`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) pages.

### Using toLocaleString() on sparse arrays

`toLocaleString()` treats empty slots the same as `undefined` and produces an extra separator:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
