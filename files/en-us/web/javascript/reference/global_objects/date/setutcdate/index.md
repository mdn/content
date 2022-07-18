---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setUTCDate
---
{{JSRef}}

The **`setUTCDate()`** method changes the day of the month of a given {{jsxref("Date")}} instance, based on UTC time.

To instead change the day of the month for a given {{jsxref("Date")}} instance based on local time, use the {{jsxref("Date.prototype.setDate()", "setDate()")}} method.

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## Syntax

```js
setUTCDate(dayValue)
```

### Parameters

- `dayValue`
  - : An integer from 1 to 31, representing the day of the month.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If the `dayValue` is outside of the range of date values for the month, `setDate()` will update the {{jsxref("Date")}} object accordingly.

For example, if 0 is provided for `dayValue`, the date will be set to the last day of the previous month. If you use 40 for `dayValue`, and the month stored in the {{jsxref("Date")}} object is June, the day will be changed to 10 and the month will be incremented to July.

If a negative number is provided for `dayValue`, the date will be set counting backwards from the last day of the previous month. -1 would result in the date being set to 1 day before the last day of the previous month.

## Examples

### Using setUTCDate()

```js
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
