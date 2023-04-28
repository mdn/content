---
title: Date.prototype.getUTCHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCHours
---

{{JSRef}}

The **`getUTCHours()`** method of {{jsxref("Date")}} instances returns the hours for this date according to universal time.

{{EmbedInteractiveExample("pages/js/date-getutchours.html")}}

## Syntax

```js-nolint
getUTCHours()
```

### Return value

An integer, between 0 and 23, representing the hours for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCHours()

The following example assigns the hours portion of the current time to the variable `hours`.

```js
const today = new Date();
const hours = today.getUTCHours();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
