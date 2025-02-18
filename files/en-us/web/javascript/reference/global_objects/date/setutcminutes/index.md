---
title: Date.prototype.setUTCMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setUTCMinutes
---

{{JSRef}}

The **`setUTCMinutes()`** method of {{jsxref("Date")}} instances changes the minutes for this date according to universal time.

{{InteractiveExample("JavaScript Demo: Date.setUTCMinutes()")}}

```js interactive-example
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date1.getUTCMinutes());
// Expected output: 15

date1.setUTCMinutes(25);

console.log(date1.getUTCMinutes());
// Expected output: 25
```

## Syntax

```js-nolint
setUTCMinutes(minutesValue)
setUTCMinutes(minutesValue, secondsValue)
setUTCMinutes(minutesValue, secondsValue, msValue)
```

### Parameters

- `minutesValue`
  - : An integer between 0 and 59 representing the minutes.
- `secondsValue` {{optional_inline}}
  - : An integer between 0 and 59 representing the seconds. If you specify `secondsValue`, you must also specify `minutesValue`.
- `msValue` {{optional_inline}}
  - : An integer between 0 and 999 representing the milliseconds. If you specify `msValue`, you must also specify `minutesValue` and `secondsValue`.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `secondsValue` and
`msValue` parameters, the values returned from
{{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}} and
{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}} methods are
used.

If a parameter you specify is outside of the expected range,
`setUTCMinutes()` attempts to update the date information in the
{{jsxref("Date")}} object accordingly. For example, if you use 100 for
`secondsValue`, the minutes will be incremented by 1
(`minutesValue + 1`), and 40 will be used for seconds.

## Examples

### Using setUTCMinutes()

```js
const theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCMinutes()")}}
- {{jsxref("Date.prototype.setMinutes()")}}
