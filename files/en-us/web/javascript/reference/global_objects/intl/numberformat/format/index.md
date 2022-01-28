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

The **`Intl.NumberFormat.prototype.format()`** method formats a
number according to the locale and formatting options of this
{{jsxref("Intl.NumberFormat")}} object.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-format.html", "taller")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Syntax

```js
format(number)
```

### Parameters

- `number`
  - : A {{jsxref("Number")}} or {{jsxref("BigInt")}} to format.

## Description

The `format` getter function formats a number into a string according to the
locale and formatting options of this {{jsxref("Intl.NumberFormat")}} object.

## Examples

### Using format

Use the `format` getter function for formatting a single currency value,
here for Russia:

```js
var options = { style: 'currency', currency: 'RUB' };
var numberFormat = new Intl.NumberFormat('ru-RU', options);
console.log(numberFormat.format(654321.987));
// → "654 321,99 руб."
```

### Using format with map

Use the `format` getter function for formatting all numbers in an array.
Note that the function is bound to the {{jsxref("Intl.NumberFormat")}} from which it was
obtained, so it can be passed directly to {{jsxref("Array.prototype.map")}}. This is
considered a historical artefact, as part of a convention which is no longer followed
for new features, but is preserved to maintain compatibility with existing programs.

```js
var a = [123456.789, 987654.321, 456789.123];
var numberFormat = new Intl.NumberFormat('es-ES');
var formatted = a.map(n => numberFormat.format(n));
console.log(formatted.join('; '));
// → "123.456,789; 987.654,321; 456.789,123"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
