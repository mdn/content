---
title: Date.prototype.setUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setUTCHours
---
{{JSRef}}

The **`setUTCHours()`** method sets the hour for a specified
date according to universal time, and returns the number of milliseconds since January
1, 1970 00:00:00 UTC until the time represented by the updated {{jsxref("Date")}}
instance.

{{EmbedInteractiveExample("pages/js/date-setutchours.html")}}

## Syntax

```js
setUTCHours(hoursValue)
setUTCHours(hoursValue, minutesValue)
setUTCHours(hoursValue, minutesValue, secondsValue)
setUTCHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameters

- `hoursValue`
  - : An integer between 0 and 23, representing the hour.
- `minutesValue`
  - : Optional. An integer between 0 and 59, representing the minutes.
- `secondsValue`
  - : Optional. An integer between 0 and 59, representing the seconds. If you specify the
    `secondsValue` parameter, you must also specify the
    `minutesValue`.
- `msValue`
  - : Optional. A number between 0 and 999, representing the milliseconds. If you specify
    the `msValue` parameter, you must also specify the
    `minutesValue` and `secondsValue`.

### Return value

The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.

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
