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
format.`Date` objects contain a `Number` that represents
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

1. No parameters

    When no parameters are provided, the newly-created `Date` object
    represents the current date and time as of the time of instantiation.

2. Time value or timestamp number

    - `value`
      - : An integer value representing the number of milliseconds since January 1, 1970,
        00:00:00 UTC (the ECMAScript epoch, equivalent to the UNIX epoch), with leap
        seconds ignored. Keep in mind that most [UNIX
        Timestamp](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap04.html#tag_04_16) functions are only accurate to the nearest second.

3. Timestamp string

    - `dateString`

      - : A string value representing a date, specified in a format recognized by the
        {{jsxref("Date.parse()")}} method. (These formats are [IETF-compliant RFC 2822
        timestamps](https://datatracker.ietf.org/doc/html/rfc2822#page-14), and also strings in a [version
        of ISO8601](https://www.ecma-international.org/ecma-262/11.0/#sec-date.parse).)

        > **Note:** Parsing of date strings with the `Date`
        > constructor (and `Date.parse()`, which works the same way) is
        > _strongly discouraged_ due to browser differences and inconsistencies.
        >
        > - Support for [RFC 2822](https://datatracker.ietf.org/doc/html/rfc2822)
        >   format strings is by convention only.
        > - Support for ISO 8601 formats differs in that date-only strings (e.g.
        >   `"1970-01-01"`) are treated as UTC, not local.

4. Date object

    - `dateObject`

      - : An existing `Date` object. This effectively makes a copy of the existing `Date` object with the same date and time.
          This is equivalent to using the `new Date(value)` constuctor, where `value` is the can be obtained using the `valueOf()` method.


5. Individual date and time component values

    Given at least a year and month, this form of `Date()` returns a
    `Date` object whose component values (year, month, day, hour, minute,
    second, and millisecond) all come from the following parameters. Any missing fields
    are given the lowest possible value (`1` for `day`
    and `0` for every other component). The parameter values are all
    evaluated against the local time zone, rather than UTC.

    - `year`

      - : Integer value representing the year.

        Values from `0` to `99` map to the years
        `1900` to `1999`. All other values are the actual year.
        See the [example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#two_digit_years_map_to_1900_%e2%80%93_1999).

    - `monthIndex`
      - : Integer value representing the month, beginning with `0` for January
        to `11` for December. If a value greater than `11` is passed in,
        then those months will be added to the date; for example, `new Date(1990, 12, 1)` will return January 1st, 1991
    - `day` {{optional_inline}}
      - : Integer value representing the day of the month. The default is `1`.
    - `hours` {{optional_inline}}
      - : Integer value between `0` and `23` representing the hour of the day. Defaults to `0`.
    - `minutes` {{optional_inline}}
      - : Integer value representing the minute segment of a time. The default is
        `0` minutes past the hour.
    - `seconds` {{optional_inline}}
      - : Integer value representing the second segment of a time. The default is
        `0` seconds past the minute.
    - `milliseconds` {{optional_inline}}
      - : Integer value representing the millisecond segment of a time. The default is
        `0` milliseconds past the second.

### Return value

Calling `new Date()` (the `Date()`constructor) returns a [`Date`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object. If called with an invalid date string, it returns a `Date` object whose [`toString()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString) method returns the literal string `Invalid Date`.

Calling the `Date()` function (without the `new` keyword) returns a string representation of the current date and time, exactly as `new Date().toString()` does. Any arguments given in a `Date()` function call (without the `new` keyword) are ignored; regardless of whether it’s called with an invalid date string — or even called wth any arbitrary object or other primitive as an argument — it always returns a string representation of the current date and time.

## Examples

### Several ways to create a Date object

The following examples show several ways to create JavaScript dates:

> **Note:** Parsing of date strings with the `Date` constructor
> (and `Date.parse`, they are equivalent) is strongly discouraged due to
> browser differences and inconsistencies.

```js
let today = new Date()
let sameDay = new Date(today)
let birthday = new Date('December 17, 1995 13:24:00')
let birthday = new Date('1995-12-17T13:24:00')
let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
let birthday = new Date(1995, 11, 17, 13, 24, 0)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date")}}
