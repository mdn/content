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
portion of the time object's value according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html","shorter")}}

## Syntax

```js
getUTCMilliseconds()
```

### Return value

A `number`.
If the `Date` object represents a valid date, an integer between 0 and 999, representing
the milliseconds portion of the given `Date` object according to universal time.
Otherwise, [`NaN`](/en-us/docs/Web/JavaScript/Reference/Global_Objects/Number/NaN)
if the `Date` object doesn’t represent a valid date.

This method is a companion to the other UTC based methods that give
hour portion ([`getUTCHours`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours)),
minute portion ([`getUTCMinutes`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes)), etc.; this method gives milliseconds portion.

Not to be confused with Unix epoch time. To get the total milliseconds since 1970/01/01,
use the [`Date.getTime()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) method.

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
