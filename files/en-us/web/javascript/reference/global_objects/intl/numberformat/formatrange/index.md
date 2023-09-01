---
title: Intl.NumberFormat.prototype.formatRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatRange
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.NumberFormat.formatRange
---

{{JSRef}}

The **`formatRange()`** method of {{jsxref("Intl.NumberFormat")}} instances formats a range of numbers according to the locale and formatting options of this `Intl.NumberFormat` object.

## Syntax

```js-nolint
formatRange(startRange, endRange)
```

### Parameters

- `startRange`
  - : A {{jsxref("Number")}} or {{jsxref("BigInt")}}.
- `endRange`
  - : A {{jsxref("Number")}} or {{jsxref("BigInt")}}.

### Return value

A string representing the given range of numbers formatted according to the locale and formatting options of this {{jsxref("Intl.NumberFormat")}} object.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `startRange` is less than `endRange`, or either value is `NaN`.
- {{jsxref("TypeError")}}
  - : Thrown if either `startRange` or `endRange` is undefined.

## Description

The `formatRange` getter function formats a range of numbers into a string according to the locale and formatting options of this {{jsxref("Intl.NumberFormat")}} object from which it is called.

## Examples

### Using formatRange

Use the `formatRange` getter function for formatting a range of currency values:

```js
const nf = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "$3 – $5"

// Note: the "approximately equals" symbol is added if
// startRange and endRange round to the same values.
console.log(nf.formatRange(2.9, 3.1)); // "~$3"
```

```js
const nf = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

console.log(nf.formatRange(3, 5)); // "3-5 €"
console.log(nf.formatRange(2.9, 3.1)); // "~3 €"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl/NumberFormat", "Intl.NumberFormat")}}
- {{jsxref("Number.prototype.toLocaleString()")}}
