---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setUTCHours
---

{{JSRef}}

The **`setUTCHours()`** method of {{jsxref("Date")}} instances changes the hours, minutes, seconds, and/or milliseconds for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

## Syntax

```js-nolint
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameters

- `hoursValue`
  - : An integer between 0 and 23 representing the hours.
- `minutesValue` {{optional_inline}}
  - : An integer between 0 and 59 representing the minutes.
- `secondsValue` {{optional_inline}}
  - : An integer between 0 and 59 representing the seconds. If you specify `secondsValue`, you must also specify `minutesValue`.
- `msValue` {{optional_inline}}
  - : An integer between 0 and 999 representing the milliseconds. If you specify `msValue`, you must also specify `minutesValue` and `secondsValue`.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `minutesValue`,
`secondsValue`, and `msValue` parameters,
the values returned from the {{jsxref("Date.prototype.getUTCMinutes()",
  "getUTCMinutes()")}}, {{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}},
and {{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} methods
are used.

If a parameter you specify is outside of the expected range, `setUTCHours()`
attempts to update the date information in the {{jsxref("Date")}} object accordingly.
For example, if you use 100 for `secondsValue`, the minutes will
be incremented by 1 (`minutesValue + 1`), and 40 will be used for seconds.

## Examples

### Using setUTCHours()

```js
const theBigDay = new Date();
theBigDay.setUTCHours(8);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCHours()")}}
- {{jsxref("Date.prototype.setHours()")}}
