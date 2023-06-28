---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setSeconds
---

{{JSRef}}

The **`setSeconds()`** method of {{jsxref("Date")}} instances changes the seconds and/or milliseconds for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-setseconds.html")}}

## Syntax

```js-nolint
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameters

- `secondsValue`
  - : An integer between 0 and 59 representing the seconds.
- `msValue` {{optional_inline}}
  - : An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `msValue` parameter, the value returned
from the {{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} method is
used.

If a parameter you specify is outside of the expected range, `setSeconds()`
attempts to update the date information in the {{jsxref("Date")}} object accordingly.
For example, if you use 100 for `secondsValue`, the minutes stored
in the {{jsxref("Date")}} object will be incremented by 1, and 40 will be used for
seconds.

## Examples

### Using setSeconds()

```js
const theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
