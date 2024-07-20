---
title: Date.prototype.getUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCMinutes
---

{{JSRef}}

The **`getUTCMinutes()`** method of {{jsxref("Date")}} instances returns the minutes for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutcminutes.html")}}

## Syntax

```js-nolint
getUTCMinutes()
```

### Parameters

None.

### Return value

An integer, between 0 and 59, representing the minutes for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCMinutes()

The following example assigns the minutes portion of the current time to the variable `minutes`.

```js
const today = new Date();
const minutes = today.getUTCMinutes();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
