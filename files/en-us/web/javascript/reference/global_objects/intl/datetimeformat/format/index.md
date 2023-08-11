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
  - : The date to format.

## Description

The `format` getter formats a date into a string according to the locale and
formatting options of this {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}} object.

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
that the function is bound to the {{jsxref("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
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

### Avoid comparing formatted date values to static values

Most of the time, the formatting returned by `format()` is consistent.
However, this might change in the future and isn't guaranteed for all the languages —
output variations are by design and allowed by the specification. Most notably, the IE
and Edge browsers insert bidirectional control characters around dates, so the output
text will flow properly when concatenated with other text.

For this reason you cannot expect to be able to compare the results of
`format()` to a static value:

```js example-bad
let d = new Date("2019-01-01T00:00:00.000000Z");
let formattedDate = Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
}).format(d);

"1.1.2019, 01:00:00" === formattedDate;
// true in Firefox and others
// false in IE and Edge
```

> **Note:** See also this [StackOverflow thread](https://stackoverflow.com/questions/25574963/ies-tolocalestring-has-strange-characters-in-results)
> for more details and examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
