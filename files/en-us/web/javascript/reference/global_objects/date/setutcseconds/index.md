---
title: Date.prototype.setUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setUTCSeconds
---
{{JSRef}}

The **`setUTCSeconds()`** method sets the seconds for a
specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutcseconds.html")}}

## Syntax

```js
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameters

- `secondsValue`
  - : An integer between 0 and 59, representing the seconds.
- `msValue`
  - : Optional. A number between 0 and 999, representing the milliseconds.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If you do not specify the `msValue` parameter, the value returned from the
{{jsxref("Date.prototype.getUTCMilliseconds()", "getUTCMilliseconds()")}} method is
used.

If a parameter you specify is outside of the expected range,
`setUTCSeconds()` attempts to update the date information in the
{{jsxref("Date")}} object accordingly. For example, if you use 100 for
`secondsValue`, the minutes stored in the {{jsxref("Date")}} object will be
incremented by 1, and 40 will be used for seconds.

## Examples

### Using setUTCSeconds()

```js
const theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
