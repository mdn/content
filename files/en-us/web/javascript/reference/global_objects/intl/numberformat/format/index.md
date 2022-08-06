---
title: Intl.NumberFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - NumberFormat
  - Prototype
  - Reference
browser-compat: javascript.builtins.Intl.NumberFormat.format
---
{{JSRef}}

The **`Intl.NumberFormat.prototype.format()`** method formats a number according to the [locale and formatting options](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters) of this {{jsxref("Intl.NumberFormat")}} object.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
format(number)
```

### Parameters

- `number`
  - : A {{jsxref("Number")}}, {{jsxref("BigInt")}}, or string, to format.

Strings are parsed as _**string** numeric literals_ (as defined by the ECMA-262 "[StringNumericLiteral](https://tc39.es/ecma262/#prod-StringNumericLiteral)" grammar).
These support, among other things, the general syntax for decimal strings `#.#E#`, and non-base-10 numbers like hexadecimal and binary.
String values passed to the `format()` function:

- may have leading and/or trailing white space and/or line terminators.
- may have any number of leading 0 digits.
- may include a "+" or "-" character to indicate its sign.
- may be empty or whitespace-only.
  In this case the value is converted to +0.
- may include `Infinity` or `-Infinity`.
- cannot be suffixed with `n` (the suffix used to indicate that a numeric value is a `BigInt`)
- cannot include a numeric literal separator (`_`).

> **Note:** Older versions of the specification parsed strings as a {{jsxref("Number")}}.
> Check the compatibility table for your browser.

## Description

The `format()` method formats a number into a string according to the locale and formatting options of this {{jsxref("Intl.NumberFormat")}} object.

{{jsxref("Number")}} values in JavaScript suffer from loss of precision if they are too big or too small, making the text representation inaccurate.
If you are performing calculations with integers larger than {{jsxref("Number.MAX_SAFE_INTEGER")}} you should use a {{jsxref("BigInt")}} instead, which will format correctly:

```js
new Intl.NumberFormat('en-US').format(1234567891234567891) // 1,234,567,891,234,568,000
new Intl.NumberFormat('en-US').format(1234567891234567891n) // 1,234,567,891,234,567,891
```

You can also pass through very large strings to be formatted as an arbitrary-precision decimal string (if you're performing calculations on the data you will still need to work with `BigInt`):

```js
new Intl.NumberFormat('en-US').format("1234567891234567891") // 1,234,567,891,234,567,891
```

## Examples

### Using format

Use the `format` getter function for formatting a single currency value.
The code below shows how to format the roubles currency for a Russian locale:

```js
const options = { style: 'currency', currency: 'RUB' };
const numberFormat = new Intl.NumberFormat('ru-RU', options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 ₽"
```

### Using format with map

Use the `format` getter function for formatting all numbers in an array.
Note that the function is bound to the {{jsxref("Intl.NumberFormat")}} from which it was obtained, so it can be passed directly to {{jsxref("Array.prototype.map")}}.
This is considered a historical artefact, as part of a convention which is no longer followed for new features, but is preserved to maintain compatibility with existing programs.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat('es-ES');
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join('; '));
// → "123.456,789; 987.654,321; 456.789,123"
```

### Using format with a string

Using a string we can specify very numbers that are larger than {{jsxref("Number.MAX_SAFE_INTEGER")}} without losing precision.

```js
const numberFormat = new Intl.NumberFormat("en-US");

// Here the value is converted to a Number
console.log(numberFormat.format(987654321987654321))
// → 987,654,321,987,654,300

// Here we use a string and don't lose precision
console.log(numberFormat.format("987654321987654321"));
// → 987,654,321,987,654,321
```

We can also use the general "E" exponent syntax for decimal strings: `#.#E#`.
The code below creates a {{jsxref("BigInt")}},  coerces it to a string with the suffix `E-6`, and then formats it.

```js
const numberFormat = new Intl.NumberFormat("en-US");
const bigNum = 1000000000000000110000n;
console.log(numberFormat.format(bigNum));
// → "1,000,000,000,000,000,110,000"

// Format as a string using the `E` syntax:
console.log(numberFormat.format(`${bigNum}E-6`));
// → "1,000,000,000,000,000.11"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
