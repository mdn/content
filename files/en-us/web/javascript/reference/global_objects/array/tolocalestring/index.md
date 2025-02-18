---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
page-type: javascript-instance-method
browser-compat: javascript.builtins.Array.toLocaleString
---

{{JSRef}}

The **`toLocaleString()`** method of {{jsxref("Array")}} instances returns a string representing
the elements of the array. The elements are converted to strings using their
`toLocaleString` methods and these strings are separated by a locale-specific
string (such as a comma ",").

{{InteractiveExample("JavaScript Demo: Array.toLocaleString()", "shorter")}}

```js interactive-example
const array1 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary
```

## Syntax

```js-nolint
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the `locales` argument, see [the parameter description on the `Intl` main page](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : An object with configuration properties. What you can pass here depends on what elements are being converted. For example, for numbers, see {{jsxref("Number.prototype.toLocaleString()")}}.

### Return value

A string representing the elements of the array.

## Description

The `Array.prototype.toLocaleString` method traverses its content, calling the `toLocaleString` method of every element with the `locales` and `options` parameters provided, and concatenates them with an implementation-defined separator (such as a comma ","). Note that the method itself does not consume the two parameters — it only passes them to the `toLocaleString()` of each element. The choice of the separator string depends on the host's current locale, not the `locales` parameter.

If an element is `undefined`, `null`, it is converted to an empty string instead of the string `"null"` or `"undefined"`.

When used on [sparse arrays](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays), the `toLocaleString()` method iterates empty slots as if they have the value `undefined`.

The `toLocaleString()` method is [generic](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#generic_array_methods). It only expects the `this` value to have a `length` property and integer-keyed properties.

## Examples

### Using locales and options

The elements of the array are converted to strings using their `toLocaleString` methods. For example, this snippet implicitly calls the {{jsxref("Number.prototype.toLocaleString()")}} method to display the currency for the strings and numbers in the `prices` array:

```js
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });

// "￥7,￥500,￥8,123,￥12"
```

### Using toLocaleString() on sparse arrays

`toLocaleString()` treats empty slots the same as `undefined` and produces an extra separator:

```js
console.log([1, , 3].toLocaleString()); // '1,,3'
```

### Calling toLocaleString() on non-array objects

The `toLocaleString()` method reads the `length` property of `this` and then accesses each property whose key is a nonnegative integer less than `length`.

```js
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3,
  3: 4, // ignored by toLocaleString() since length is 3
};
console.log(Array.prototype.toLocaleString.call(arrayLike));
// 1,2,3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) guide
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
- {{jsxref("Intl")}}
- {{jsxref("Intl.ListFormat")}}
- {{jsxref("Object.prototype.toLocaleString()")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
