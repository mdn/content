---
title: Date.prototype.getUTCSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.getUTCSeconds
---

{{JSRef}}

The **`getUTCSeconds()`** method of {{jsxref("Date")}} instances returns the seconds in the specified date according to universal time.

{{InteractiveExample("JavaScript Demo: Date.getUTCSeconds()", "shorter")}}

```js interactive-example
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// Expected output: 4
```

## Syntax

```js-nolint
getUTCSeconds()
```

### Parameters

None.

### Return value

An integer, between 0 and 59, representing the seconds for the given date according to universal time. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Examples

### Using getUTCSeconds()

The following example assigns the seconds portion of the current time to the variable `seconds`.

```js
const today = new Date();
const seconds = today.getUTCSeconds();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getSeconds()")}}
- {{jsxref("Date.prototype.setUTCSeconds()")}}
