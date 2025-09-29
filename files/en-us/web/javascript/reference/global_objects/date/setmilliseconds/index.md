---
title: Date.prototype.setMilliseconds()
short-title: setMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setMilliseconds
sidebar: jsref
---

The **`setMilliseconds()`** method of {{jsxref("Date")}} instances changes the milliseconds for this date according to local time.

{{InteractiveExample("JavaScript Demo: Date.prototype.setMilliseconds()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30");

console.log(event.getMilliseconds());
// Expected output: 0

event.setMilliseconds(456);

console.log(event.getMilliseconds());
// Expected output: 456
```

## Syntax

```js-nolint
setMilliseconds(millisecondsValue)
```

### Parameters

- `millisecondsValue`
  - : An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If `millisecondsValue` is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you specify a number outside the expected range, the date information in the {{jsxref("Date")}} object is updated accordingly. For example, if you specify 1005, the number of seconds is incremented by 1, and 5 is used for the milliseconds.

Because `setMilliseconds()` operates on the local time, crossing a Daylight Saving Time (DST) boundary may result in a different elapsed time than expected. For example, if setting the milliseconds crosses a spring-forward transition (losing an hour), the difference in timestamps between the new and old date is one hour less than the nominal time difference. Conversely, crossing a fall-back transition (gaining an hour) result in an extra hour. If you need to adjust the date by a fixed amount of time, consider using {{jsxref("Date/setUTCMilliseconds", "setUTCMilliseconds()")}} or {{jsxref("Date/setTime", "setTime()")}}.

If the new local time falls within an offset transition, the exact time is derived using the same behavior as `Temporal`'s [`disambiguation: "compatible"`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#ambiguity_and_gaps_from_local_time_to_utc_time) option. That is, if the local time corresponds to two instants, the earlier one is chosen; if the local time does not exist (there is a gap), we go forward by the gap duration.

## Examples

### Using setMilliseconds()

```js
const theBigDay = new Date();
theBigDay.setMilliseconds(100);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getMilliseconds()")}}
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
