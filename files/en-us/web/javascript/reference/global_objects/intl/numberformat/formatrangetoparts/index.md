---
title: Intl.NumberFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRangeToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.NumberFormat.formatRangeToParts
---

{{JSRef}}

The **`formatRangeToParts()`** method of {{jsxref("Intl.NumberFormat")}} instances returns an {{jsxref("Array")}} of objects containing the locale-specific tokens from which it is possible to build custom strings while preserving the locale-specific parts. This makes it possible to provide locale-aware custom formatting ranges of number strings.

## Syntax

```js-nolint
formatRangeToParts(startRange, endRange)
```

### Parameters

- `startRange`
  - : A {{jsxref("Number")}}, {{jsxref("BigInt")}}, or string, to format. Strings are parsed in the same way as in [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), except that `formatRangeToParts()` will use the exact value that the string represents, avoiding loss of precision during implicitly conversion to a number.
- `endRange`
  - : A {{jsxref("Number")}}, {{jsxref("BigInt")}}, or string, to format.

### Return value

An {{jsxref("Array")}} of objects containing the formatted range in parts. Each object has three properties, `type`, `value`, and `source`, each containing a string. The string concatenation of `value`, in the order provided, will result in the same string as {{jsxref("Intl/NumberFormat/formatRange", "formatRange()")}}. The `type` may have the same values as {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}}. The `source` can be one of the following:

- `startRange`
  - : The token is a part of the start number.
- `endRange`
  - : The token is a part of the end number.
- `shared`
  - : The token is shared between the start and end; for example, the currency symbol. All literals that are part of the range pattern itself, such as the `"–"` separator, are also marked as `shared`.

If the start and end numbers are equivalent, then the output has the same list of tokens as calling {{jsxref("Intl/NumberFormat/formatToParts", "formatToParts()")}} on the start number, with all tokens marked as `source: "shared"`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if either `startRange` or `endRange` is `NaN` or an inconvertible string.
- {{jsxref("TypeError")}}
  - : Thrown if either `startRange` or `endRange` is undefined.

## Examples

### Using formatRangeToParts()

The `formatRange()` method outputs localized, opaque strings that cannot be manipulated directly:

```js
const startRange = 3500;
const endRange = 9500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

console.log(formatter.formatRange(startRange, endRange));
// "3.500,00–9.500,00 €"
```

However, in many user interfaces you may want to customize the formatting of this string, or interleave it with other texts. The `formatRangeToParts()` method produces the same information in parts:

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
];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.NumberFormat")}}
- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
