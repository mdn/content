---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setMinutes
---
{{JSRef}}

The **`setMinutes()`** method sets the minutes for a specified
date according to local time.

{{EmbedInteractiveExample("pages/js/date-setminutes.html")}}

## Syntax

```js
setMinutes(minutesValue)
setMinutes(minutesValue, secondsValue)
setMinutes(minutesValue, secondsValue, msValue)
```

### Parameters

- `minutesValue`
  - : An integer between 0 and 59, representing the minutes.
- `secondsValue`
  - : Optional. An integer between 0 and 59, representing the seconds. If you specify the
    `secondsValue` parameter, you must also specify the
    `minutesValue`.
- `msValue`
  - : Optional. A number between 0 and 999, representing the milliseconds. If you specify
    the `msValue` parameter, you must also specify the
    `minutesValue` and `secondsValue`.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `secondsValue` and
`msValue` parameters, the values returned from
{{jsxref("Date.prototype.getSeconds()", "getSeconds()")}} and
{{jsxref("Date.prototype.getMilliseconds()", "getMilliseconds()")}} methods are used.

If a parameter you specify is outside of the expected range, `setMinutes()`
attempts to update the date information in the {{jsxref("Date")}} object accordingly.
For example, if you use 100 for `secondsValue`, the minutes will
be incremented by 1 (`minutesValue + 1`), and 40 will be used for
seconds.

## Examples

### Using setMinutes()

```js
const theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
