---
title: Intl.DateTimeFormat.prototype.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
page-type: javascript-instance-method
browser-compat: javascript.builtins.Intl.DateTimeFormat.format
---

{{JSRef}}

The **`format()`** method of {{jsxref("Intl.DateTimeFormat")}} instances formats a date according to the locale and formatting options of this `Intl.DateTimeFormat` object.

{{EmbedInteractiveExample("pages/js/intl-datetimeformat-prototype-format.html", "taller")}}

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
