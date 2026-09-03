---
title: Date.prototype.setHours()
short-title: setHours()
slug: Web/JavaScript/Reference/Global_Objects/Date/setHours
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setHours
sidebar: jsref
---

The **`setHours()`** method of {{jsxref("Date")}} instances changes the hours, minutes, seconds, and/or milliseconds for this date according to local time.

{{InteractiveExample("JavaScript Demo: Date.prototype.setHours()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");
event.setHours(20);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary

event.setHours(20, 21, 22);

console.log(event);
// Expected output: "Tue Aug 19 1975 20:21:22 GMT+0200 (CEST)"
```

## Syntax

```js-nolint
setHours(hoursValue)
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue)
setHours(hoursValue, minutesValue, secondsValue, msValue)
```

### Parameters

- `hoursValue`
  - : An integer between 0 and 23 representing the hours.
- `minutesValue` {{optional_inline}}
  - : An integer between 0 and 59 representing the minutes.
- `secondsValue` {{optional_inline}}
  - : An integer between 0 and 59 representing the seconds. If you specify `secondsValue`, you must also specify `minutesValue`.
- `msValue` {{optional_inline}}
  - : An integer between 0 and 999 representing the milliseconds. If you specify `msValue`, you must also specify `minutesValue` and `secondsValue`.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `minutesValue`, `secondsValue`, and `msValue` parameters, the same values as what are returned by {{jsxref("Date/getMinutes", "getMinutes()")}}, {{jsxref("Date/getSeconds", "getSeconds()")}}, and {{jsxref("Date/getMilliseconds", "getMilliseconds()")}} are used.

If a parameter you specify is outside of the expected range, other parameters and the date information in the {{jsxref("Date")}} object are updated accordingly. For example, if you specify 100 for `secondsValue`, the minutes are incremented by 1 (`minutesValue + 1`), and 40 is used for seconds.

Because `setHours()` operates on the local time, crossing a Daylight Saving Time (DST) boundary may result in a different elapsed time than expected. For example, if setting the hours crosses a spring-forward transition (losing an hour), the difference in timestamps between the new and old date is one hour less than the nominal hour difference. Conversely, crossing a fall-back transition (gaining an hour) result in an extra hour. If you need to adjust the date by a fixed amount of time, consider using {{jsxref("Date/setUTCHours", "setUTCHours()")}} or {{jsxref("Date/setTime", "setTime()")}}.

If the new local time falls within an offset transition, the exact time is derived using the same behavior as `Temporal`'s [`disambiguation: "compatible"`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) option. That is, if the local time corresponds to two instants, the earlier one is chosen; if the local time does not exist (there is a gap), we go forward by the gap duration.

## Examples

### Using setHours()

```js
const theBigDay = new Date();
theBigDay.setHours(7);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getHours()")}}
- {{jsxref("Date.prototype.setUTCHours()")}}
