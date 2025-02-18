---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DateTimeFormat.format
---

{{JSRef}}

The **`format()`** method of {{jsxref("Intl.DateTimeFormat")}} instances formats a date according to the locale and formatting options of this `Intl.DateTimeFormat` object.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat.prototype.format", "taller")}}

```js interactive-example
const options1 = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const date1 = new Date(2012, 5);

const dateTimeFormat1 = new Intl.DateTimeFormat("sr-RS", options1);
console.log(dateTimeFormat1.format(date1));
// Expected output: "петак, 1. јун 2012."

const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", options1);
console.log(dateTimeFormat2.format(date1));
// Expected output: "Friday, 1 June 2012"

const dateTimeFormat3 = new Intl.DateTimeFormat("en-US", options1);
console.log(dateTimeFormat3.format(date1));
// Expected output: "Friday, June 1, 2012"
```

## Syntax

```js-nolint
format(date)
```

### Parameters

- `date`

  - : The date to format. Can be a {{jsxref("Date")}} or {{jsxref("Temporal.PlainDateTime")}} object. Additionally can be a {{jsxref("Temporal.PlainTime")}}, {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainYearMonth")}}, or {{jsxref("Temporal.PlainMonthDay")}} object if the `DateTimeFormat` object was configured to print at least one relevant part of the date.

    > [!NOTE]
    > A {{jsxref("Temporal.ZonedDateTime")}} object will always throw a `TypeError`; use {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}} or convert it to a {{jsxref("Temporal.PlainDateTime")}} object instead.

    Omitting it results in formatting the current date (as returned by {{jsxref("Date.now()")}}), which could be slightly confusing, so it is advisable to always explicitly pass a date.

### Return value

A string representing the given `date` formatted according to the locale and formatting options of this {{jsxref("Intl.DateTimeFormat")}} object.

> [!NOTE]
> Most of the time, the formatting returned by `format()` is consistent. However, the output may vary between implementations, even within the same locale — output variations are by design and allowed by the specification. It may also not be what you expect. For example, the string may use non-breaking spaces or be surrounded by bidirectional control characters. You should not compare the results of `format()` to hardcoded constants.

## Examples

### Using format

Use the `format` getter function for formatting a single date, here for
Serbia:

```js
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dateTimeFormat = new Intl.DateTimeFormat("sr-RS", options);
console.log(dateTimeFormat.format(new Date()));
// "недеља, 7. април 2013."
```

### Using format with map

Use the `format` getter function for formatting all dates in an array. Note
that the function is bound to the {{jsxref("Intl.DateTimeFormat")}}
from which it was obtained, so it can be passed directly to
{{jsxref("Array.prototype.map()")}}.

```js
const a = [new Date(2012, 8), new Date(2012, 11), new Date(2012, 3)];
const options = { year: "numeric", month: "long" };
const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
const formatted = a.map(dateTimeFormat.format);
console.log(formatted.join("; "));
// "setembro de 2012; dezembro de 2012; abril de 2012"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
