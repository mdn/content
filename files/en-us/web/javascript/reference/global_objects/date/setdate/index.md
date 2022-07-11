---
title: Date.prototype.setDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setDate
---
{{JSRef}}

The **`setDate()`** method changes the day of the month of a given {{jsxref("Date")}} instance, based on local time.

To instead change the day of the month for a given {{jsxref("Date")}} instance based on UTC time, use the {{jsxref("Date.prototype.setUTCDate()", "setUTCDate()")}} method.

{{EmbedInteractiveExample("pages/js/date-setdate.html")}}

## Syntax

```js
setDate(dayValue)
```

### Parameters

- `dayValue`
  - : An integer representing the day of the month.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the given date (the
{{jsxref("Date")}} object is also changed in place).

## Description

If the `dayValue` is outside of the range of date values for the month, `setDate()` will update the {{jsxref("Date")}} object accordingly.

For example, if 0 is provided for `dayValue`, the date will be set to the last day of the previous month. If you use 40 for `dayValue`, and the month stored in the {{jsxref("Date")}} object is June, the day will be changed to 10 and the month will be incremented to July.

If a negative number is provided for `dayValue`, the date will be set counting backwards from the last day of the previous month. -1 would result in the date being set to 1 day before the last day of the previous month.

## Examples

### Using setDate()

```js
const theBigDay  = new Date(1962, 6, 7, 12); // noon of 1962-07-07 (7th of July 1962,  month is 0-indexed)
const theBigDay2 = new Date(theBigDay).setDate(24);  // 1962-07-24 (24th of July 1962)
const theBigDay3 = new Date(theBigDay).setDate(32);  // 1962-08-01 (1st of August 1962)
const theBigDay4 = new Date(theBigDay).setDate(22);  // 1962-07-22 (22nd of July 1962)
const theBigDay5 = new Date(theBigDay).setDate(0);   // 1962-06-30 (30th of June 1962)
const theBigDay6 = new Date(theBigDay).setDate(98);  // 1962-10-06 (6th of October 1962)
const theBigDay7 = new Date(theBigDay).setDate(-50); // 1962-05-11 (11th of May 1962)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.Date()", "Date()")}}
- {{jsxref("Date.prototype.getDate()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
