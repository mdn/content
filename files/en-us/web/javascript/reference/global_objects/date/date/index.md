---
title: Date() constructor
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
tags:
  - Constructor
  - Date
  - JavaScript
  - Reference
browser-compat: javascript.builtins.Date.Date
---
{{JSRef}}

Creates a JavaScript **`Date`**
instance that represents a single moment in time in a platform-independent
format. `Date` objects contain a `Number` that represents
milliseconds since 1 January 1970 UTC.

{{EmbedInteractiveExample("pages/js/date-constructor.html")}}

## Syntax

```js
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
```

> **Note:** The only correct way to instantiate a new `Date`
> object is by using the [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new) operator. If you call the `Date`
> object directly, such as `now = Date()`, the returned value is a string
> rather than a `Date` object.

### Parameters

There are five basic forms for the `Date()` constructor:

#### No parameters

When no parameters are provided, the newly-created `Date` object represents the current date and time as of the time of instantiation.

#### Time value or timestamp number

- `value`
  - : An integer value representing the number of milliseconds since January 1, 1970, 00:00:00 UTC (the ECMAScript epoch, equivalent to the UNIX epoch), with leap seconds ignored. Keep in mind that most [UNIX Timestamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) functions are only accurate to the nearest second.

#### Timestamp string

- `dateString`
  - : A string value representing a date, in a format recognized by the {{jsxref("Date.parse()")}} method. (The ECMA262 spec specifies a [simplified version of ISO 8601](https://tc39.es/ecma262/#sec-date-time-string-format), but other formats can be implementation-defined, which commonly include [IETF-compliant RFC 2822 timestamps](https://datatracker.ietf.org/doc/html/rfc2822#page-14).)

    > **Note:** When parsing date strings with the `Date` constructor (and `Date.parse`, they are equivalent), always make sure that the input conforms to the ISO 8601 format (`YYYY-MM-DDTHH:mm:ss.sssZ`) — the parsing behavior with other formats is implementation-defined and may not work across all browsers. Support for [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822) format strings is by convention only. A library can help if many different formats are to be accommodated.
    >
    > Date-only strings (e.g. `"1970-01-01"`) are treated as UTC, while date-time strings (e.g. `"1970-01-01T12:00"`) are treated as local. You are therefore also advised to make sure the input format is consistent between the two types.

#### Date object

- `dateObject`
  - : An existing `Date` object. This effectively makes a copy of the existing `Date` object with the same date and time. This is equivalent to using the `new Date(value)` constructor, where `value` can be obtained using the `valueOf()` method.

#### Individual date and time component values

Given at least a year and month, this form of `Date()` returns a `Date` object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (`1` for `day` and `0` for every other component). The parameter values are all evaluated against the local time zone, rather than UTC.

If any parameter overflows its defined bounds, it "carries over". For example, if a `monthIndex` greater than `11` is passed in, those months will cause the year to increment; if a `minutes` greater than `59` is passed in, `hours` will increment accordingly, etc. Therefore, `new Date(1990, 12, 1)` will return January 1st, 1991; `new Date(2020, 5, 19, 25, 65)` will return 2:05 A.M. June 20th, 2020.

Similarly, if any parameter underflows, it "borrows" from the higher positions. For example, `new Date(2020, 5, 0)` will return May 31st, 2020.

- `year`
  - : Integer value representing the year. Values from `0` to `99` map to the years `1900` to `1999`. All other values are the actual year. See the [example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Integer value representing the month, beginning with `0` for January to `11` for December.
- `day` {{optional_inline}}
  - : Integer value representing the day of the month. The default is `1`.
- `hours` {{optional_inline}}
  - : Integer value between `0` and `23` representing the hour of the day. Defaults to `0`.
- `minutes` {{optional_inline}}
  - : Integer value representing the minute segment of a time. The default is `0` minutes past the hour.
- `seconds` {{optional_inline}}
  - : Integer value representing the second segment of a time. The default is `0` seconds past the minute.
- `milliseconds` {{optional_inline}}
  - : Integer value representing the millisecond segment of a time. The default is `0` milliseconds past the second.

### Return value

Calling `new Date()` (the `Date()` constructor) returns a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. If called with an invalid date string, or if the date to be constructed will have a UNIX timestamp less than `-8,640,000,000,000,000` or greater than `8,640,000,000,000,000` milliseconds, it returns a `Date` object whose [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) method returns the literal string `Invalid Date`.

Calling the `Date()` function (without the `new` keyword) returns a string representation of the current date and time, exactly as `new Date().toString()` does. Any arguments given in a `Date()` function call (without the `new` keyword) are ignored; regardless of whether it's called with an invalid date string — or even called wth any arbitrary object or other primitive as an argument — it always returns a string representation of the current date and time.

## Examples

### Several ways to create a Date object

The following examples show several ways to create JavaScript dates:

```js
const today = new Date()
const birthday = new Date('December 17, 1995 03:24:00') // DISCOURAGED: may not work in all runtimes
const birthday = new Date('1995-12-17T03:24:00')   // This is ISO-8601-compliant and will work reliably
const birthday = new Date(1995, 11, 17)            // the month is 0-indexed
const birthday = new Date(1995, 11, 17, 3, 24, 0)
const birthday = new Date(628021800000)            // passing epoch timestamp
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date")}}
