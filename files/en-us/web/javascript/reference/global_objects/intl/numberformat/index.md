---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
tags:
  - Class
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - NumberFormat
  - Reference
browser-compat: javascript.builtins.Intl.NumberFormat
---
{{JSRef}}

The **`Intl.NumberFormat`** object enables language-sensitive number formatting.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Constructor

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Creates a new `NumberFormat` object.

## Static methods

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance methods

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : Getter function that formats a number according to the locale and formatting options of this {{jsxref("Intl.NumberFormat")}} object.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Returns an {{jsxref("Array")}} of objects representing the number string in parts that can be used for custom locale-aware formatting.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}} {{experimental_inline}}
  - : Getter function that formats a range of numbers according to the locale and formatting options of the {{jsxref("Intl.NumberFormat")}} object from which the method is called.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}} {{experimental_inline}}
  - : Returns an {{jsxref("Array")}} of objects representing the range of number strings in parts that can be used for custom locale-aware formatting.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

```js
const number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → '3,500' if in US English locale
```

### Using locales

This example shows some of the variations in localized number formats. In order to get the format of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the `locales` argument:

```js
const number = 123456.789;

// German uses comma as decimal separator and period for thousands
console.log(new Intl.NumberFormat('de-DE').format(number));
// → 123.456,789

// Arabic in most Arabic speaking countries uses real Arabic digits
console.log(new Intl.NumberFormat('ar-EG').format(number));
// → ١٢٣٤٥٦٫٧٨٩

// India uses thousands/lakh/crore separators
console.log(new Intl.NumberFormat('en-IN').format(number));
// → 1,23,456.789

// the nu extension key requests a numbering system, e.g. Chinese decimal
console.log(new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec').format(number));
// → 一二三,四五六.七八九

// when requesting a language that may not be supported, such as
// Balinese, include a fallback language, in this case Indonesian
console.log(new Intl.NumberFormat(['ban', 'id']).format(number));
// → 123.456,789
```

### Using options

The results can be customized using the [`options`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) argument:

```js
const number = 123456.789;

// request a currency format
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// → 123.456,79 €

// the Japanese yen doesn't use a minor unit
console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));
// → ￥123,457

// limit to three significant digits
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// → 1,23,000

// Formatting with units
console.log(new Intl.NumberFormat('pt-PT',  {
  style: 'unit',
  unit: 'kilometer-per-hour'
}).format(50));
// → 50 km/h

console.log((16).toLocaleString('en-GB', {
  style: 'unit',
  unit: 'liter',
  unitDisplay: 'long',
}));
// → 16 litres
```

For an exhaustive list of options, see the [`Intl.NumberFormat()` constructor](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options) page.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl")}}
- [A polyfill of `Intl.NumberFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-numberformat/)
