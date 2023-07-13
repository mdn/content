---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getMilliseconds
---

{{JSRef}}

The **`getMilliseconds()`** method of {{jsxref("Date")}} instances returns the milliseconds for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-getmilliseconds.html","shorter")}}

## Syntax

```js-nolint
getMilliseconds()
```

### Return value

An integer, between 0 and 999, representing the milliseconds for the given date according to local time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getMilliseconds()

The `milliseconds` variable has value `0`, based on the value of the {{jsxref("Date")}} object `xmas95`, which doesn't specify the milliseconds component, so it defaults to 0.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const milliseconds = xmas95.getMilliseconds();

console.log(milliseconds); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
