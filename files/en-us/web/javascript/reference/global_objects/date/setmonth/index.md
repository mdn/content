---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setMonth
---

{{JSRef}}

The **`setMonth()`** method of {{jsxref("Date")}} instances changes the month and/or day of the month for this date according to local time.

{{InteractiveExample("JavaScript Demo: Date.prototype.setMonth()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMonth(3);

console.log(event.getMonth());
// Expected output: 3

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:30 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setMonth(monthValue)
setMonth(monthValue, dateValue)
```

### Parameters

- `monthValue`
  - : An integer representing the month: 0 for January, 1 for February, and so on.
- `dateValue` {{optional_inline}}
  - : An integer from 1 to 31 representing the day of the month.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `dateValue` parameter, the same value as what is returned by {{jsxref("Date/getDate", "getDate()")}} is used.

If a parameter you specify is outside of the expected range, other parameters and the date information in the {{jsxref("Date")}} object are updated accordingly. For example, if you specify 15 for `monthValue`, the year is incremented by 1, and 3 is used for month.

The current day of month will have an impact on the behavior of this method.
Conceptually it will add the number of days given by the current day of the month to the
1st day of the new month specified as the parameter, to return the new date.
For example, if the current value is 31st January 2016, calling setMonth with a value of 1 will return 2nd March 2016.
This is because in 2016 February had 29 days.

## Examples

### Using setMonth()

```js
const theBigDay = new Date();
theBigDay.setMonth(6);

// Watch out for end of month transitions
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); // Wed Mar 02 2016 00:00:00
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
