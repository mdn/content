---
title: BigInt.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/toLocaleString
tags:
  - BigInt
  - Internationalization
  - Intl
  - JavaScript
  - Method
  - Prototype
browser-compat: javascript.builtins.BigInt.toLocaleString
---
{{JSRef}}

The **`toLocaleString()`** method returns a string with a language-sensitive representation of this BigInt. In implementations with [`Intl.NumberFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) support, this method simply calls `Intl.NumberFormat`.

{{EmbedInteractiveExample("pages/js/bigint-tolocalestring.html")}}

## Syntax

```js
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

The `locales` and `options` parameters customize the behavior of the function and let applications specify the language whose formatting conventions should be used.

In implementations that support the [`Intl.NumberFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat), these parameters correspond exactly to the [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) constructor's parameters. Implementations without `Intl.NumberFormat` support are asked to ignore both parameters, making the locale used and the form of the string returned entirely implementation-dependent.

- `locales` {{optional_inline}}
  - : A string with a BCP 47 language tag, or an array of such strings. Corresponds to the [`locales`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#locales) parameter of the `Intl.NumberFormat()` constructor.

    In implementations without `Intl.NumberFormat` support, this parameter is ignored and the host's locale is usually used.
- `options` {{optional_inline}}
  - : An object adjusting the output format. Corresponds to the [`options`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) parameter of the `Intl.NumberFormat()` constructor.

    In implementations without `Intl.NumberFormat` support, this parameter is ignored.

See the [`Intl.NumberFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) for details on these parameters and how to use them.

### Return value

A string with a language-sensitive representation of the given BigInt.

In implementations with `Intl.NumberFormat`, this is equivalent to `new Intl.NumberFormat(locales, options).format(number)`.

## Performance

When formatting large numbers of numbers, it is better to create a
{{jsxref("Intl.NumberFormat")}} object and use the function provided by its
{{jsxref("Intl/NumberFormat/format", "NumberFormat.format")}} property.

## Examples

### Using `toLocaleString`

In basic use without specifying a locale, a formatted string in the default locale and
with default options is returned.

```js
const bigint = 3500n;

bigint.toLocaleString();
// Displays "3,500" if in U.S. English locale
```

### Using `locales`

This example shows some of the variations in localized number formats. In order to get
the format of the language used in the user interface of your application, make sure to
specify that language (and possibly some fallback languages) using the
`locales` argument:

```js
const bigint = 123456789123456789n;

// German uses period for thousands
console.log(bigint.toLocaleString('de-DE'));
// → 123.456.789.123.456.789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(bigint.toLocaleString('ar-EG'));
// → ١٢٣٬٤٥٦٬٧٨٩٬١٢٣٬٤٥٦٬٧٨٩

// India uses thousands/lakh/crore separators
console.log(bigint.toLocaleString('en-IN'));
// → 1,23,45,67,89,12,34,56,789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(bigint.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六,七八九,一二三,四五六,七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(bigint.toLocaleString(['ban', 'id']));
// → 123.456.789.123.456.789
```

### Using `options`

The results provided by `toLocaleString` can be customized using the
`options` argument:

```js
const bigint = 123456789123456789n;

// request a currency format
console.log(bigint.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456.789.123.456.789,00 €

// the Japanese yen doesn't use a minor unit
console.log(bigint.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,456,789,123,456,789

// limit to three significant digits
console.log(bigint.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,00,00,00,00,00,00,000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("BigInt.toString()")}}
