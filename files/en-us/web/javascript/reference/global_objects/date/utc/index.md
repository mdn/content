---
title: Date.UTC()
slug: Web/JavaScript/Reference/Global_Objects/Date/UTC
page-type: javascript-static-method
browser-compat: javascript.builtins.Date.UTC
---

{{JSRef}}

The **`Date.UTC()`** static method accepts parameters representing the date and time components similar to the {{jsxref("Date")}} constructor, but treats them as UTC. It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

{{InteractiveExample("JavaScript Demo: Date.UTC()")}}

```js interactive-example
const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// Expected output: "Fri, 02 Feb 1996 03:04:05 GMT"

console.log(utcDate2.toUTCString());
// Expected output: "Sun, 31 Dec 1899 00:00:00 GMT"
```

## Syntax

```js-nolint
Date.UTC(year)
Date.UTC(year, monthIndex)
Date.UTC(year, monthIndex, day)
Date.UTC(year, monthIndex, day, hours)
Date.UTC(year, monthIndex, day, hours, minutes)
Date.UTC(year, monthIndex, day, hours, minutes, seconds)
Date.UTC(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

### Parameters

- `year`
  - : Integer value representing the year. Values from `0` to `99` map to the years `1900` to `1999`. All other values are the actual year. See the [example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex` {{optional_inline}}
  - : Integer value representing the month, beginning with `0` for January to `11` for December. Defaults to `0`.
- `day` {{optional_inline}}
  - : Integer value representing the day of the month. Defaults to `1`.
- `hours` {{optional_inline}}
  - : Integer value between `0` and `23` representing the hour of the day. Defaults to `0`.
- `minutes` {{optional_inline}}
  - : Integer value representing the minute segment of a time. Defaults to `0`.
- `seconds` {{optional_inline}}
  - : Integer value representing the second segment of a time. Defaults to `0`.
- `milliseconds` {{optional_inline}}
  - : Integer value representing the millisecond segment of a time. Defaults to `0`.

### Return value

A number representing the [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) of the given date. Returns `NaN` if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

## Description

Years between `0` and `99` are converted to a year in the 20th century `(1900 + year)`. For example, `95` is converted to the year `1995`.

The `UTC()` method differs from the {{jsxref("Date/Date", "Date()")}} constructor in three ways:

1. `Date.UTC()` uses universal time instead of the local time.
2. `Date.UTC()` returns a time value as a number instead of creating a {{jsxref("Date")}} object.
3. When passed a single number, `Date.UTC()` interprets it as a year instead of a timestamp.

If a parameter is outside of the expected range, the `UTC()` method updates the other parameters to accommodate the value. For example, if `15` is used for `monthIndex`, the year will be incremented by 1 `(year + 1)` and `3` will be used for the month.

Because `UTC()` is a static method of `Date`, you always use it as `Date.UTC()`, rather than as a method of a `Date` object you created.

## Examples

### Using Date.UTC()

The following statement creates a {{jsxref("Date")}} object with the arguments treated as UTC instead of local:

```js
const utcDate = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
```

### Behavior of Date.UTC() with one argument

`Date.UTC()` when passed one argument used to have inconsistent behavior, because implementations only kept the behavior consistent with the {{jsxref("Date/Date", "Date()")}} constructor, which does not interpret a single argument as the year number. Implementations are now required to treat omitted `monthIndex` as `0`, instead of coercing it to `NaN`.

```js
Date.UTC(2017); // 1483228800000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date.parse()")}}
- {{jsxref("Date")}}
