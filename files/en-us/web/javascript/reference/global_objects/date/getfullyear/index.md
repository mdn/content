---
title: Date.prototype.getFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getFullYear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getFullYear
---

{{JSRef}}

The **`getFullYear()`** method of {{jsxref("Date")}} instances returns the year for this date according to local time.

Use this method instead of the {{jsxref("Date/getYear", "getYear()")}} method.

{{EmbedInteractiveExample("pages/js/date-getfullyear.html","shorter")}}

## Syntax

```js-nolint
getFullYear()
```

### Return value

An integer representing the year for the given date according to local time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

Unlike {{jsxref("Date/getYear", "getYear()")}}, the value returned by `getFullYear()` is an absolute number. For dates between the years 1000 and 9999, `getFullYear()` returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.

## Examples

### Using getFullYear()

The `fullYear` variable has value `1995`, based on the value of the {{jsxref("Date")}} object `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const fullYear = xmas95.getFullYear();

console.log(fullYear); // 1995
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
- {{jsxref("Date.prototype.getYear()")}}
