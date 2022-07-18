---
title: Date.prototype.setSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setSeconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setSeconds
---
{{JSRef}}

The **`setSeconds()`** method sets the seconds for a specified
date according to local time.

{{EmbedInteractiveExample("pages/js/date-setseconds.html")}}

## Syntax

```js
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameters

- `secondsValue`
  - : An integer between 0 and 59, representing the seconds.
- `msValue` {{Optional_inline}}
  - : Optional. A number between 0 and 999, representing the milliseconds.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

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
