---
title: Date.prototype.getUTCDay()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCDay
---

{{JSRef}}

The **`getUTCDay()`** method of {{jsxref("Date")}} instances returns the day of the week for this date according to universal time, where 0 represents Sunday.

{{EmbedInteractiveExample("pages/js/date-getutcday.html")}}

## Syntax

```js-nolint
getUTCDay()
```

### Parameters

None.

### Return value

An integer corresponding to the day of the week for the given date according to universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCDay()

The following example assigns the weekday portion of the current date to the variable `weekday`.

```js
const today = new Date();
const weekday = today.getUTCDay();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getDay()")}}
- {{jsxref("Date.prototype.setUTCDate()")}}
