---
title: Date.prototype.getUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCMonth
---

{{JSRef}}

The **`getUTCMonth()`** method of {{jsxref("Date")}} instances returns the month for this date according to universal time, as a zero-based value (where zero indicates the first month of the year).

{{InteractiveExample("JavaScript Demo: Date.getUTCMonth()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

// December
console.log(date1.getUTCMonth());
// Expected output: 11

// January
console.log(date2.getUTCMonth());
// Expected output: 0
```

## Syntax

```js-nolint
getUTCMonth()
```

### Parameters

None.

### Return value

An integer, between 0 and 11, representing the month for the given date according to universal time: 0 for January, 1 for February, and so on. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCMonth()

The following example assigns the month portion of the current date to the variable `month`.

```js
const today = new Date();
const month = today.getUTCMonth();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
