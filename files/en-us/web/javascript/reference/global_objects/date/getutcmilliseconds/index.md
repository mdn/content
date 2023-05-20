---
title: Date.prototype.getUTCMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCMilliseconds
---

{{JSRef}}

The **`getUTCMilliseconds()`** method of {{jsxref("Date")}} instances returns the milliseconds for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcmilliseconds.html","shorter")}}

## Syntax

```js-nolint
getUTCMilliseconds()
```

### Return value

An integer, between 0 and 999, representing the milliseconds for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

Not to be confused with the timestamp. To get the total milliseconds since the epoch, use the [`getTime()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) method.

## Examples

### Using getUTCMilliseconds()

The following example assigns the milliseconds portion of the current time to the variable `milliseconds`.

```js
const today = new Date();
const milliseconds = today.getUTCMilliseconds();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
