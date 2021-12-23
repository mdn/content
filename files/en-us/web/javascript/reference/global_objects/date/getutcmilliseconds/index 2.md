---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
browser-compat: javascript.builtins.Date.getUTCMilliseconds
---
{{JSRef}}

The **`getUTCMilliseconds()`** method returns the milliseconds
portion of the time object's value.

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html","shorter")}}

## Syntax

```js
getUTCMilliseconds()
```

### Return value

An integer number, between 0 and 999, representing the milliseconds portion of the
given date object.  This method is a companion to the other UTC based methods that give
hour portion, minute portion, etc.; this method gives milliseconds portion.

Not to be confused with Unix epoch time.  To get total milliseconds since 1970/01/01,
use the method ".getTime()".

## Examples

### Using getUTCMilliseconds()

The following example assigns the milliseconds portion of the current time to the
variable `milliseconds`.

```js
var today = new Date();
var milliseconds = today.getUTCMilliseconds();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
