---
title: Intl.NumberFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
tags:
  - Internationalization
  - Intl
  - JavaScript
  - Localization
  - Method
  - NumberFormat
  - Prototype
  - Reference
  - formatRangeToParts
  - Experimental
browser-compat: javascript.builtins.Intl.NumberFormat.formatRangeToParts
---
{{JSRef}}{{SeeCompatTable}}

The **`Intl.Numberformat.prototype.formatRangeToParts()`** method enables locale-aware formatting of strings produced by `NumberFormat` formatters.

It returns an {{jsxref("Array")}} of objects containing the locale-specific tokens from which it is possible to build custom strings while preserving the locale-specific parts.
This makes it possible to provide locale-aware custom formatting ranges of number strings.

## Syntax

```js
formatRangeToParts(startRange, endRange)
```

### Parameters

- `startRange`
  - : A {{jsxref("Number")}} or {{jsxref("BigInt")}}.

- `endRange`
  - : A {{jsxref("Number")}} or {{jsxref("BigInt")}}.

### Return value

An {{jsxref("Array")}} of objects containing the formatted range of numbers in parts.

The structure of the returned looks like this:

```js
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "literal", value: "-", source: "shared" },
  { type: "integer", value: "5", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" }
]
```

Possible values for the `type` property include:

- `currency`
  - : The currency string, such as the symbols "$" and "€" or the name "Dollar", "Euro", depending on how `currencyDisplay` is specified.
- `decimal`
  - : The decimal separator string (".").
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

Possible values for the `source` property include:

- `startRange`
  - : The object is the start part of the range.
- `endRange`
  - : The object is the end part of the range.
- `shared`
  - : The object is a "shared" part of the range, such as a separator or currency.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `startRange` is less than `endRange`, or either value is `NaN`.
- {{jsxref("TypeError")}}
  - : Thrown if either `startRange` or `endRange` is undefined.

## Examples

### Comparing formatRange and formatRangeToParts

`NumberFormat` outputs localized, opaque strings that cannot be manipulated directly:

```js
const startRange = 3500;
const endRange = 9500;

const formatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
});

console.log(formatter.formatRange(startRange, endRange));
// "3.500,00–9.500,00 €"
```

However, for many user interfaces there is a need to customize the formatting of this string.
The `formatRangeToParts` method enables locale-aware formatting of strings produced by `NumberFormat` formatters by providing you the string in parts:

```js
console.log(formatter.formatRangeToParts(startRange, endRange));

// return value:
[
  { type: "integer", value: "3", source: "startRange" },
  { type: "group", value: ".", source: "startRange" },
  { type: "integer", value: "500", source: "startRange" },
  { type: "decimal", value: ",", source: "startRange" },
  { type: "fraction", value: "00", source: "startRange" },
  { type: "literal", value: "–", source: "shared" },
  { type: "integer", value: "9", source: "endRange" },
  { type: "group", value: ".", source: "endRange" },
  { type: "integer", value: "500", source: "endRange" },
  { type: "decimal", value: ",", source: "endRange" },
  { type: "fraction", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "currency", value: "€", source: "shared" },
]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format")}}
- Formatting dates: {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
