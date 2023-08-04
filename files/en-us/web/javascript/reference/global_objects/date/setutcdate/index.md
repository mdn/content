---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setUTCDate
---

{{JSRef}}

The **`setUTCDate()`** method of {{jsxref("Date")}} instances changes the day of the month for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutcdate.html")}}

## Syntax

```js-nolint
setUTCDate(dateValue)
```

### Parameters

- `dateValue`
  - : An integer from 1 to 31 representing the day of the month.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If `dateValue` is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If the `dateValue` is outside of the range of date values for the month, `setDate()` will update the {{jsxref("Date")}} object accordingly.

For example, if 0 is provided for `dateValue`, the date will be set to the last day of the previous month. If you use 40 for `dateValue`, and the month stored in the {{jsxref("Date")}} object is June, the day will be changed to 10 and the month will be incremented to July.

If a negative number is provided for `dateValue`, the date will be set counting backwards from the last day of the previous month. -1 would result in the date being set to 1 day before the last day of the previous month.

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
