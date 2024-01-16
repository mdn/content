---
title: Date.prototype.getUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCDate
---

{{JSRef}}

The **`getUTCDate()`** method of {{jsxref("Date")}} instances returns the day of the month for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcdate.html")}}

## Syntax

```js-nolint
getUTCDate()
```

### Parameters

None.

### Return value

An integer, between 1 and 31, representing day of month for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCDate()

The following example assigns the day of month of the current date to the variable `dayOfMonth`.

```js
const today = new Date();
const dayOfMonth = today.getUTCDate();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
