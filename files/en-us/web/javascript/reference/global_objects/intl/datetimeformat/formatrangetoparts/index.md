---
title: Intl.DateTimeFormat.prototype.formatRangeToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRangeToParts
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DateTimeFormat.formatRangeToParts
---

{{JSRef}}

The **`formatRangeToParts()`** method of {{jsxref("Intl.DateTimeFormat")}} instances returns an array of objects representing each part of the formatted string that would be returned by {{jsxref("Intl/DatetimeFormat/formatRange", "formatRange()")}}. It is useful for building custom strings from the locale-specific tokens.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-formatrangetoparts.html", "taller")}}

## Syntax

```js-nolint
formatRangeToParts(startDate, endDate)
```

### Parameters

- `startDate`
  - : A {{jsxref("Date")}} object representing the start of the date range.
- `endDate`
  - : A {{jsxref("Date")}} object representing the end of the date range.

### Return value

An {{jsxref("Array")}} of objects containing the formatted date range in parts. Each object has three properties, `type`, `value`, and `source`, each containing a string. The string concatenation of `value`, in the order provided, will result in the same string as {{jsxref("Intl/DateTimeFormat/formatRange", "formatRange()")}}. The `type` may have the same values as {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}}. The `source` can be one of the following:

- `startRange`
  - : The token is a part of the start date.
- `endRange`
  - : The token is a part of the end date.
- `shared`
  - : The token is shared between the start and end; for example, if the start and end dates share the same day period, that token may get reused. All literals that are part of the range pattern itself, such as the `" – "` separator, are also marked as `shared`.

If the start and end dates are equivalent at the precision of the output, then the output has the same list of tokens as calling {{jsxref("Intl/DateTimeFormat/formatToParts", "formatToParts()")}} on the start date, with all tokens marked as `source: "shared"`.

## Examples

### Using formatRangeToParts()

The `formatRange()` method outputs localized, opaque strings that cannot be manipulated directly:

```js
const date1 = new Date(Date.UTC(1906, 0, 10, 10, 0, 0)); // Wed, 10 Jan 1906 10:00:00 GMT
const date2 = new Date(Date.UTC(1906, 0, 10, 11, 0, 0)); // Wed, 10 Jan 1906 11:00:00 GMT

const fmt = new Intl.DateTimeFormat("en", {
  hour: "numeric",
  minute: "numeric",
});

console.log(fmt.formatRange(date1, date2)); // '10:00 – 11:00 AM'
```

However, in many user interfaces you may want to customize the formatting of this string, or interleave it with other texts. The `formatRangeToParts()` method produces the same information in parts:

```js
console.log(fmt.formatRangeToParts(date1, date2));

// return value:
[
  { type: "hour", value: "10", source: "startRange" },
  { type: "literal", value: ":", source: "startRange" },
  { type: "minute", value: "00", source: "startRange" },
  { type: "literal", value: " – ", source: "shared" },
  { type: "hour", value: "11", source: "endRange" },
  { type: "literal", value: ":", source: "endRange" },
  { type: "minute", value: "00", source: "endRange" },
  { type: "literal", value: " ", source: "shared" },
  { type: "dayPeriod", value: "AM", source: "shared" },
];
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
