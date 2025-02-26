---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
page-type: javascript-instance-method
browser-compat: javascript.builtins.Date.setUTCFullYear
---

{{JSRef}}

The **`setUTCFullYear()`** method of {{jsxref("Date")}} instances changes the year for this date according to universal time.

{{InteractiveExample("JavaScript Demo: Date.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
```

## Syntax

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dateValue)
```

### Parameters

- `yearValue`
  - : An integer representing the year. For example, 1995.
- `monthValue` {{optional_inline}}
  - : An integer representing the month: 0 for January, 1 for February, and so on.
- `dateValue` {{optional_inline}}
  - : An integer between 1 and 31 representing the day of the month. If you specify `dateValue`, you must also specify `monthValue`.

### Return value

Changes the {{jsxref("Date")}} object in place, and returns its new [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). If a parameter is `NaN` (or other values that get [coerced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) to `NaN`, such as `undefined`), the date is set to [Invalid Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) and `NaN` is returned.

## Description

If you do not specify the `monthValue` and
`dateValue` parameters, the values returned from the
{{jsxref("Date/getUTCMonth", "getUTCMonth()")}} and
{{jsxref("Date/getUTCDate", "getUTCDate()")}} methods are used.

If a parameter you specify is outside of the expected range,
`setUTCFullYear()` attempts to update the other parameters and the date
information in the {{jsxref("Date")}} object accordingly. For example, if you specify 15
for `monthValue`, the year is incremented by 1
(`yearValue + 1`), and 3 is used for the month.

## Examples

### Using setUTCFullYear()

```js
const theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
