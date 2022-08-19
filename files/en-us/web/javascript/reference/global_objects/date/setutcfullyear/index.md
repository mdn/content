---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setUTCFullYear
---
{{JSRef}}

The **`setUTCFullYear()`** method sets the full year for a
specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutcfullyear.html")}}

## Syntax

```js
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dayValue)
```

### Parameters

- `yearValue`
  - : An integer specifying the numeric value of the year, for example, 1995.
- `monthValue`
  - : Optional. An integer between 0 and 11 representing the months January through
    December.
- `dayValue`
  - : Optional. An integer between 1 and 31 representing the day of the month. If you
    specify the `dayValue` parameter, you must also specify the
    `monthValue`.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `monthValue` and
`dayValue` parameters, the values returned from the
{{jsxref("Date.prototype.getUTCMonth()", "getUTCMonth()")}} and
{{jsxref("Date.prototype.getUTCDate()", "getUTCDate()")}} methods are used.

If a parameter you specify is outside of the expected range,
`setUTCFullYear()` attempts to update the other parameters and the date
information in the {{jsxref("Date")}} object accordingly. For example, if you specify 15
for `monthValue`, the year is incremented by 1
(`yearValue + 1`), and 3 is used for the month.

## Examples

### Using setUTCFullYear()

```js
const theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
