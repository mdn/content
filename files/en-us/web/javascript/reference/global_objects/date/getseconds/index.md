---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getSeconds
---

{{JSRef}}

The **`getSeconds()`** method of {{jsxref("Date")}} instances returns the seconds for this date according to local time.

{{EmbedInteractiveExample("pages/js/date-getseconds.html", "shorter")}}

## Syntax

```js-nolint
getSeconds()
```

### Return value

An integer, between 0 and 59, representing the seconds for the given date according to local time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getSeconds()

The `seconds` variable has value `30`, based on the value of the {{jsxref("Date")}} object `xmas95`.

```js
const xmas95 = new Date("1995-12-25T23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
