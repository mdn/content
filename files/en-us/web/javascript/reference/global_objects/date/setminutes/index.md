---
title: Date.prototype.setMinutes()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMinutes
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setMinutes
---

{{JSRef}}

The **`setMinutes()`** method of {{jsxref("Date")}} instances changes the minutes for this date according to local time.

{{InteractiveExample("JavaScript Demo: Date.setMinutes()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

event.setMinutes(45);

console.log(event.getMinutes());
// Expected output: 45

console.log(event);
// Expected output: "Tue Aug 19 1975 23:45:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntax

```js-nolint
setMinutes(minutesValue)
setMinutes(minutesValue, secondsValue)
setMinutes(minutesValue, secondsValue, msValue)
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

If you do not specify the `secondsValue` and `msValue` parameters, the same values as what are returned by {{jsxref("Date/getSeconds", "getSeconds()")}} and {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} are used.

If a parameter you specify is outside of the expected range, other parameters and the date information in the {{jsxref("Date")}} object are updated accordingly. For example, if you specify 100 for `secondsValue`, the minutes is incremented by 1 (`minutesValue + 1`), and 40 is used for seconds.

## Examples

### Using setMinutes()

```js
const theBigDay = new Date();
theBigDay.setMinutes(45);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMinutes()")}}
- {{jsxref("Date.prototype.setUTCMinutes()")}}
