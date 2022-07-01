---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
tags:
  - Internationalization
  - JavaScript
  - Method
  - Number
  - Prototype
browser-compat: javascript.builtins.Number.toLocaleString
---
{{JSRef}}

The **`toLocaleString()`** method returns a string with a
language-sensitive representation of this number.

{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}

## Syntax

```js
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

The `locales` and `options` parameters customize the behavior of
the function and let applications specify the language whose formatting conventions
should be used. In implementations, which ignore the `locales` and
`options` arguments, the locale used and the form of the string returned are
entirely implementation-dependent.

- `locales` {{optional_inline}}
  - : A string containing the {{Glossary("locale")}} to convert to.

- `options` {{optional_inline}}

  - : An object with some or all of the following properties:
    - `currency`
      - : The currency to use in currency formatting. Possible values are the ISO
        4217 currency codes, such as "`USD`" for the US dollar,
        "`EUR`" for the euro, or "`CNY`" for the Chinese RMB
        — see the [Current currency & funds code list](https://www.six-group.com/en/products-services/financial-information/data-standards.html#scrollTo=currency-codes).
        There is no default value; if the `style` is "`currency`", the `currency`
        property must be provided.
    - `currencyDisplay`

      - : How to display the currency in currency formatting. Possible values are:

        - "`symbol`" to use a localized currency symbol such as
          €, this is the default value,
        - "`code`" to use the ISO currency code,
        - "`name`" to use a localized currency name such as
          "`dollar`",

    - `localeMatcher`
      - : The locale matching algorithm to use. Possible values are
        "`lookup`" and "`best fit`"; the default is
        "`best fit`". For information about this option, see the
        {{jsxref("Global_Objects/Intl", "Intl", "#Locale_negotiation", 1)}} page.

    - `style`
      - : The formatting style to use , the default is "`decimal`".

        - "`decimal`" for plain number formatting.
        - "`currency`" for currency formatting.
        - "`percent`" for percent formatting

    - `useGrouping`
      - : Whether to use grouping separators. The default is `true`.

        - "`true`": display grouping separators even if the locale prefers otherwise
        - "`false`": do not display grouping separators

    The following properties fall into two groups:
    `minimumIntegerDigits`, `minimumFractionDigits`, and
    `maximumFractionDigits` in one group,
    `minimumSignificantDigits` and
    `maximumSignificantDigits` in the other. If at least one property
    from the second group is defined, then the first group is ignored.
    - `minimumIntegerDigits`
      - : The minimum number of integer digits to use. Possible values are from 1 to
        21; the default is 1.
    - `minimumFractionDigits`
      - : The minimum number of fraction digits to use. Possible values are from 0
        to 20; the default for plain number and percent formatting is 0; the
        default for currency formatting is the number of minor unit digits
        provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml)
        (2 if the list doesn't provide that information).
    - `maximumFractionDigits`
      - : The maximum number of fraction digits to use. Possible values are from 0
        to 20; the default for plain number formatting is the larger of
        `minimumFractionDigits` and 3; the default for currency
        formatting is the larger of `minimumFractionDigits` and the
        number of minor unit digits provided by the [ISO 4217 currency code list](https://www.six-group.com/dam/download/financial-information/data-center/iso-currrency/lists/list_one.xml)
        (2 if the list doesn't provide that information); the default for percent formatting is the larger of
        `minimumFractionDigits` and 0.
    - `minimumSignificantDigits`
      - : The minimum number of significant digits to use. Possible values are from
        1 to 21; the default is 1.
    - `maximumSignificantDigits`
      - : The maximum number of significant digits to use. Possible values are from
        1 to 21; the default is 21.

See the [`Intl.NumberFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)
for details on these parameters and how to use them.

### Return value

A string with a language-sensitive representation of the given number.

## Performance

When formatting large numbers of numbers, it is better to create a
{{jsxref("Intl.NumberFormat")}} object and use the function provided by its
{{jsxref("Intl/NumberFormat/format", "format")}} property.

## Examples

### Using `toLocaleString`

In basic use without specifying a locale, a formatted string in the default locale and
with default options is returned.

```js
const number = 3500;

console.log(number.toLocaleString()); // Displays "3,500" if in U.S. English locale
```

### Checking for support for `locales` and `options` arguments

The `locales` and `options` arguments are not supported in all
browsers yet. To check for support in ES5.1 and later implementations, the requirement
that illegal language tags are rejected with a {{jsxref("Global_Objects/RangeError",
  "RangeError")}} exception can be used:

```js
function toLocaleStringSupportsLocales() {
  const number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

Prior to ES5.1, implementations were not required to throw a range error exception if
`toLocaleString` is called with arguments.

A check that works in all hosts, including those supporting ECMA-262 prior to ed 5.1,
is to test for the features specified in ECMA-402 that are required to support regional
options for `Number.prototype.toLocaleString` directly:

```js
function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}
```

This tests for a global `Intl` object, checks that it's not
`null` and that it has a `NumberFormat` property that is a
function.

### Using `locales`

This example shows some of the variations in localized number formats. In order to get
the format of the language used in the user interface of your application, make sure to
specify that language (and possibly some fallback languages) using the
`locales` argument:

```js
const number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(number.toLocaleString('de-DE'));
// → 123.456,789

// Arabic in most Arabic speaking countries uses Eastern Arabic digits
console.log(number.toLocaleString('ar-EG'));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(number.toLocaleString('en-IN'));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(number.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(number.toLocaleString(['ban', 'id']));
// → 123.456,789
```

### Using `options`

The results provided by `toLocaleString` can be customized using the
`options` parameter:

```js
const number = 123456.789;

// request a currency format
console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(number.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
// → ￥123,457

// limit to three significant digits
console.log(number.toLocaleString('en-IN', { maximumSignificantDigits: 3 }));
// → 1,23,000

// Use the host default language with options for number formatting
const num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" where English is the default language, or
// → "30.000,65" where German is the default language, or
// → "30 000,65" where French is the default language
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.prototype.toString()")}}
