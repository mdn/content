---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setMonth
---
{{JSRef}}

The **`setMonth()`** method sets the month for a specified date according to the currently set year.

{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## Syntax

```js
setMonth(monthValue)
setMonth(monthValue, dayValue)
```

### Parameters

- `monthValue`
  - : A zero-based integer representing the month of the year offset from the start of the
    year. So, 0 represents January, 11 represents December, -1 represents December of the
    previous year, and 12 represents January of the following year.
- `dayValue`
  - : Optional. An integer from 1 to 31, representing the day of the month.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `dayValue` parameter, the value
returned from the {{jsxref("Date.prototype.getDate()", "getDate()")}} method is used.

If a parameter you specify is outside of the expected range, `setMonth()`
attempts to update the date information in the {{jsxref("Date")}} object accordingly.
For example, if you use 15 for `monthValue`, the year will be
incremented by 1, and 3 will be used for month.

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

//Watch out for end of month transitions
const endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
