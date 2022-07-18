---
title: Date.prototype.setUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.setUTCMilliseconds
---
{{JSRef}}

The **`setUTCMilliseconds()`** method sets the milliseconds for
a specified date according to universal time.

{{EmbedInteractiveExample("pages/js/date-setutcmilliseconds.html")}}

## Syntax

```js
setUTCMilliseconds(millisecondsValue)
```

### Parameters

- `millisecondsValue`
  - : A number between 0 and 999, representing the milliseconds.

### Return value

The number of milliseconds between 1 January 1970 00:00:00 UTC and the updated date.

## Description

If a parameter you specify is outside of the expected range,
`setUTCMilliseconds()` attempts to update the date information in the
{{jsxref("Date")}} object accordingly. For example, if you use 1100 for
`millisecondsValue`, the seconds stored in the {{jsxref("Date")}}
object will be incremented by 1, and 100 will be used for milliseconds.

## Examples

### Using setUTCMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
