---
title: Date() constructor
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
page-type: javascript-constructor
browser-compat: javascript.builtins.Date.Date
---

{{JSRef}}

The **`Date()`** constructor creates {{jsxref("Date")}} objects. When called as a function, it returns a string representing the current time.

{{InteractiveExample("JavaScript Demo: Date Constructor")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Expected output: false

console.log(date1 - date2);
// Expected output: 0
```

## Syntax

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
```

> **Note:** `Date()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but with different effects. See [Return value](#return_value).

### Parameters

There are five basic forms for the `Date()` constructor:

#### No parameters

When no parameters are provided, the newly-created `Date` object represents the current date and time as of the time of instantiation. The returned date's [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) is the same as the number returned by {{jsxref("Date.now()")}}.

#### Time value or timestamp number

- `value`
  - : An integer value representing the [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) (the number of milliseconds since midnight at the beginning of January 1, 1970, UTC — a.k.a. the [epoch](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Date string

- `dateString`
  - : A string value representing a date, parsed and interpreted using the same algorithm implemented by {{jsxref("Date.parse()")}}. See [date time string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) for caveats on using different formats.

#### Date object

- `dateObject`
  - : An existing `Date` object. This effectively makes a copy of the existing `Date` object with the same date and time. This is equivalent to `new Date(dateObject.valueOf())`, except the `valueOf()` method is not called.

When one parameter is passed to the `Date()` constructor, `Date` instances are specially treated. All other values are [converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion). If the result is a string, it will be parsed as a date string. Otherwise, the resulting primitive is further coerced to a number and treated as a timestamp.

#### Individual date and time component values

Given at least a year and month, this form of `Date()` returns a `Date` object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (`1` for `day` and `0` for every other component). The parameter values are all evaluated against the local time zone, rather than UTC. {{jsxref("Date.UTC()")}} accepts similar parameters but interprets the components as UTC and returns a timestamp.

If any parameter overflows its defined bounds, it "carries over". For example, if a `monthIndex` greater than `11` is passed in, those months will cause the year to increment; if a `minutes` greater than `59` is passed in, `hours` will increment accordingly, etc. Therefore, `new Date(1990, 12, 1)` will return January 1st, 1991; `new Date(2020, 5, 19, 25, 65)` will return 2:05 A.M. June 20th, 2020.

Similarly, if any parameter underflows, it "borrows" from the higher positions. For example, `new Date(2020, 5, 0)` will return May 31st, 2020.

- `year`
  - : Integer value representing the year. Values from `0` to `99` map to the years `1900` to `1999`. All other values are the actual year. See the [example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Integer value representing the month, beginning with `0` for January to `11` for December.
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

Calling `new Date()` (the `Date()` constructor) returns a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. If called with an invalid date string, or if the date to be constructed will have a timestamp less than `-8,640,000,000,000,000` or greater than `8,640,000,000,000,000` milliseconds, it returns an [invalid date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) (a `Date` object whose {{jsxref("Date/toString", "toString()")}} method returns `"Invalid Date"` and {{jsxref("Date/valueOf", "valueOf()")}} method returns `NaN`).

Calling the `Date()` function (without the `new` keyword) returns a string representation of the current date and time, exactly as `new Date().toString()` does. Any arguments given in a `Date()` function call (without the `new` keyword) are ignored; regardless of whether it's called with an invalid date string — or even called with any arbitrary object or other primitive as an argument — it always returns a string representation of the current date and time.

## Description

### Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of `new Date()` might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, with reduced time precision, the result of `new Date().getTime()` will always be a multiple of 2, or a multiple of 100 (or `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) with `privacy.resistFingerprinting` enabled.

```js
// reduced time precision (2ms) in Firefox 60
new Date().getTime();
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
new Date().getTime();
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Examples

### Several ways to create a Date object

The following examples show several ways to create JavaScript dates:

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday = new Date(1995, 11, 17); // the month is 0-indexed
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // passing epoch timestamp
```

### Passing a non-Date, non-string, non-number value

If the `Date()` constructor is called with one parameter which is not a `Date` instance, it will be coerced to a primitive and then checked whether it's a string. For example, `new Date(undefined)` is different from `new Date()`:

```js
console.log(new Date(undefined)); // Invalid Date
```

This is because `undefined` is already a primitive but not a string, so it will be coerced to a number, which is [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) and therefore not a valid timestamp. On the other hand, `null` will be coerced to `0`.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

[Arrays](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) would be coerced to a string via [`Array.prototype.toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString), which joins the elements with commas. However, the resulting string for any array with more than one element is not a valid ISO 8601 date string, so its parsing behavior would be implementation-defined. **Do not pass arrays to the `Date()` constructor.**

```js
console.log(new Date(["2020-06-19", "17:13"]));
// 2020-06-19T17:13:00.000Z in Chrome, since it recognizes "2020-06-19,17:13"
// "Invalid Date" in Firefox
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date")}}
