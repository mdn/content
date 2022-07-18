---
title: Date.prototype.setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setHours
---
{{JSRef}}

The **`setHours()`** method sets the hours for a specified date
according to local time, and returns the number of milliseconds since January 1, 1970
00:00:00 UTC until the time represented by the updated {{jsxref("Date")}} instance.

{{EmbedInteractiveExample("pages/js/date-sethours.html")}}

## Syntax

```js
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameters

- `hoursValue`
  - : Ideally, an integer between 0 and 23, representing the hour. If a value greater than
    23 is provided, the datetime will be incremented by the extra hours.
- `minutesValue`
  - : Optional. Ideally, an integer between 0 and 59, representing the minutes. If a value
    greater than 59 is provided, the datetime will be incremented by the extra minutes.
- `secondsValue`
  - : Optional. Ideally, an integer between 0 and 59, representing the seconds. If a value
    greater than 59 is provided, the datetime will be incremented by the extra seconds. If
    you specify the `secondsValue` parameter, you must also specify
    the `minutesValue`.
- `msValue`
  - : Optional. Ideally, a number between 0 and 999, representing the milliseconds. If a
    value greater than 999 is provided, the datetime will be incremented by the extra
    milliseconds. If you specify the `msValue` parameter, you must
    also specify the `minutesValue` and `secondsValue`.

### Return value

The number of milliseconds between January 1, 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `minutesValue`,
`secondsValue`, and `msValue` parameters,
the values returned from the {{jsxref("Date.prototype.getMinutes()", "getMinutes()")}},
{{jsxref("Date.prototype.getSeconds()", "getSeconds()")}}, and
{{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} methods are used.

If a parameter you specify is outside of the expected range, `setHours()`
attempts to update the date information in the {{jsxref("Date")}} object accordingly.
For example, if you use 100 for `secondsValue`, the minutes will
be incremented by 1 (`minutesValue + 1`), and 40 will be used for
seconds.

## Examples

### Using setHours()

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
