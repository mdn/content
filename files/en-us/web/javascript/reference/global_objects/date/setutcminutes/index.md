---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setUTCMinutes
---
{{JSRef}}

The **`setUTCMinutes()`** method sets the minutes for a
specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutcminutes.html")}}

## Syntax

```js
setUTCMinutes(minutesValue)
setUTCMinutes(minutesValue, secondsValue)
setUTCMinutes(minutesValue, secondsValue, msValue)
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
{{jsxref("Date.prototype.getUTCSeconds()", "getUTCSeconds()")}} and
{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} methods are
used.

If a parameter you specify is outside of the expected range,
`setUTCMinutes()` attempts to update the date information in the
{{jsxref("Date")}} object accordingly. For example, if you use 100 for
`secondsValue`, the minutes will be incremented by 1
(`minutesValue + 1`), and 40 will be used for seconds.

## Examples

### Using setUTCMinutes()

```js
const theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
