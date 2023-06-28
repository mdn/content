---
title: Intl.NumberFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.NumberFormat.formatToParts
---

{{JSRef}}

The **`formatToParts()`** method of {{jsxref("Intl.NumberFormat")}} instances allows locale-aware formatting of strings produced by this `Intl.NumberFormat` object.

{{EmbedInteractiveExample("pages/js/intl-numberformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts()
formatToParts(number)
```

### Parameters

- `number` {{optional_inline}}
  - : A {{jsxref("Number")}} or {{jsxref("BigInt")}} to format.

### Return value

An {{jsxref("Array")}} of objects containing the formatted number in parts.

## Description

The `formatToParts()` method is useful for custom formatting of number
strings. It returns an {{jsxref("Array")}} of objects containing the locale-specific
tokens from which it possible to build custom strings while preserving the
locale-specific parts. The structure the `formatToParts()` method returns,
looks like this:

```js
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
];
```

Possible types are the following:

- `compact`
  - : The exponent in `"long"` or `"short"` form, depending on how `compactDisplay` (which defaults to `short`) is specified when `notation` is set to `compact`.
- `currency`
  - : The currency string, such as the symbols "$" and "€" or the name "Dollar", "Euro", depending on how `currencyDisplay` is specified.
- `decimal`
  - : The decimal separator string (".").
- `exponentInteger`
  - : The exponent integer value, when `notation` is set to `scientific` or `engineering`.
- `exponentMinusSign`
  - : The exponent minus sign string ("-").
- `exponentSeparator`
  - : The exponent separator, when `notation` is set to `scientific` or `engineering`.
- `fraction`
  - : The fraction number.
- `group`
  - : The group separator string (",").
- `infinity`
  - : The {{jsxref("Infinity")}} string ("∞").
- `integer`
  - : The integer number.
- `literal`
  - : Any literal strings or whitespace in the formatted number.
- `minusSign`
  - : The minus sign string ("-").
- `nan`
  - : The {{jsxref("NaN")}} string ("NaN").
- `plusSign`
  - : The plus sign string ("+").
- `percentSign`
  - : The percent sign string ("%").
- `unit`
  - : The unit string, such as the "l" or "litres", depending on how `unitDisplay` is specified.
- `unknown`
  - : The string for `unknown` type results.

## Examples

### Comparing format and formatToParts

`NumberFormat` outputs localized, opaque strings that cannot be manipulated
directly:

```js
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

However, in many User Interfaces there is a desire to customize the formatting of this
string. The `formatToParts` method enables locale-aware formatting of
strings produced by `NumberFormat` formatters by providing you the string
in parts:

```js
formatter.formatToParts(number);

// return value:
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

Now the information is available separately and it can be formatted and concatenated
again in a customized way. For example by using {{jsxref("Array.prototype.map()")}},
[arrow functions](/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions),
a [switch statement](/en-US/docs/Web/JavaScript/Reference/Statements/switch),
[template literals](/en-US/docs/Web/JavaScript/Reference/Template_literals), and {{jsxref("Array.prototype.reduce()")}}.

```js
const numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .reduce((string, part) => string + part);
```

This will make the currency bold, when using the `formatToParts()` method.

```js
console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format")}}
- Formatting dates: {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
