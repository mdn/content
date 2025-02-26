---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCFullYear
---

{{JSRef}}

The **`getUTCFullYear()`** method of {{jsxref("Date")}} instances returns the year for this date according to universal time.

{{InteractiveExample("JavaScript Demo: Date.getUTCFullYear()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// Expected output: 1975

console.log(date2.getUTCFullYear());
// Expected output: 1976
```

## Syntax

```js-nolint
getUTCFullYear()
```

### Parameters

None.

### Return value

An integer representing the year for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

Unlike {{jsxref("Date/getYear", "getYear()")}}, the value returned by `getUTCFullYear()` is an absolute number. For dates between the years 1000 and 9999, `getFullYear()` returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.

## Examples

### Using getUTCFullYear()

The following example assigns the four-digit value of the current year to the variable `year`.

```js
const today = new Date();
const year = today.getUTCFullYear();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
