---
title: Temporal.ZonedDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.ZonedDateTime
---

{{JSRef}}

The **`Temporal.ZonedDateTime`** object represents a date and time with a time zone. It is fundamentally represented as a combination of an [instant](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), a time zone, and a calendar system.

## Description

A `ZonedDateTime` functions as a bridge between an exact time and a wall-clock time: it simultaneously represents an instant in history (like a {{jsxref("Temporal.Instant")}}) and a local, wall-clock time (like a {{jsxref("Temporal.PlainDateTime")}}). It does so by storing the instant, the time zone, and the calendar system. The time zone is used to convert between the instant and the local time, and the calendar system is used to interpret the local time.

`ZonedDateTime` is the only `Temporal` class that is time zone-aware. The addition of a time zone makes `ZonedDateTime` objects have important behavior differences from {{jsxref("Temporal.PlainDateTime")}} objects. Namely, you can no longer assume that "the time 1 minute afterwards" is the same every day, or that a day has 24 hours. In the worst case, an entire day may be missing from the local calendar. Below, we offer a quick overview of time zones and offsets and how they affect conversion between UTC time and local time.

### Time zones and offsets

All times in JavaScript has one golden standard: the UTC time. This time increments continuously and uniformly as physical time progresses. But, users are more interested in their local time, which is the time they read off their calendars and clocks. The process of converting between UTC time and local time involves a time zone _offset_, which is calculated as:

```plain
local time = UTC time + offset
```

For example, if the UTC time is 1970-01-01T00:00:00, and the offset is "-05:00", then the local time is:

```plain
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

We suffix this time with the corresponding offset, so we may express this time as "1969-12-31T19:00:00-05:00", which can now be unambiguously understood as an instant in history.

To know the offset, we need two pieces of information, the _time zone_, and the _instant_. The time zone is a region on Earth where the same offset is used at all times. Two clocks in the same time zone will always show the same time simultaneously, but the offset is not constant: that is, these clocks' times may change abruptly. This commonly happens during daylight saving time transitions, where the offset changes by an hour, which happens twice a year. Offsets can also change permanently due to political changes, e.g., a country switching time zones.

The time zones are stored in the [IANA Time Zone Database](https://www.iana.org/time-zones). Each IANA time zone has:

- A _primary time zone identifier_ that uniquely identifies the time zone. It usually refers to a geographic area anchored by a city (e.g. `Europe/Paris` or `Africa/Kampala`), but can also denote single-offset time zones like `UTC` (a consistent `+00:00` offset) or `Etc/GMT+5` (which for historical reasons is a negative offset `-05:00`).
- A _time zone definition_ in the form of a table that maps UTC date/time ranges (including future ranges) to specific offsets.
- Zero or more _non-primary time zone identifiers_ that are aliases to the primary time zone identifier. These are usually historical names that are no longer in use, but are kept for compatibility reasons. See {{jsxref("Intl/Locale/getTimeZones", "Intl.Locale.prototype.getTimeZones")}} for more information.

When a `Temporal` API accepts a _time zone identifier_, in addition to primary time zone identifiers and non-primary time zone identifiers, it also accepts an _offset time zone identifier_, which is in the time zone offset format specified below, except that subminute components are not allowed. For example, `+05:30`, `-08`, `+0600` are all valid offsets identifiers. Named identifiers are matched case-insensitively.

When a `Temporal` API returns a time zone identifier, it always returns named identifiers in the preferred case, and offset identifiers in the form `+HH:MM` or `-HH:MM`.

When a `Temporal` API accepts a _time zone offset_, it is in the following form:

```plain
±HH:MM:SS.sssssssss
```

- The string starts with either `+` or `-`.
- `HH` is a two-digit number from `00` to `23`.
- `MM` is a two-digit number from `00` to `59`.
- `SS.sssssssss` is a two-digit number from `00` to `59`, optionally followed by a `.` or `,` and one to nine digits.

The `HH`, `MM`, and `SS` components can be separated by `:` or nothing. You can omit either just `SS` or both `SS` and `MM`, so the offset can be one of three forms: `±HH`, `±HH:MM`, or `±HH:MM:SS.sssssssss`. This allows specifying offsets at the nanosecond precision.

Note that subminute offset (such as `+12:30:15`) is not allowed as a time zone identifier, and may not be universally supported by other systems in the serialization format.

### ISO 8601 format

`ZonedDateTime` objects can be serialized and parsed using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) (with some extensions specified by ECMAScript). The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
YYYY-MM-DD T HH:MM:SS.sssssssss Z/±HH:MM:SS.sssssssss [time_zone_id] [u-ca=calendar_id]
```

- `YYYY`
  - : Either a four-digit number, or a six-digit number with a `+` or `-` sign.
- `MM`
  - : A two-digit number from `01` to `12`.
- `DD`
  - : A two-digit number from `01` to `31`. The `YYYY`, `MM`, and `DD` components can be separated by `-` or nothing.
- `T` {{optional_inline}}
  - : The date-time separator, which can be `T`, `t`, or a space. Present if and only if `HH` is present.
- `HH` {{optional_inline}}
  - : A two-digit number from `00` to `23`. Defaults to `00`.
- `MM` {{optional_inline}}
  - : A two-digit number from `00` to `59`. Defaults to `00`.
- `SS.sssssssss` {{optional_inline}}
  - : A two-digit number from `00` to `59`. May optionally be followed by a `.` or `,` and one to nine digits. Defaults to `00`. The `HH`, `MM`, and `SS` components can be separated by `:` or nothing. You can omit either just `SS` or both `SS` and `MM`, so the time can be one of three forms: `HH`, `HH:MM`, or `HH:MM:SS.sssssssss`.
- `Z/±HH:MM:SS.sssssssss` {{optional_inline}}
  - : Either the UTC designator `Z` or `z`, or an offset from UTC in the form `+` or `-` followed by the same format as the time component. Note that subminute precision may be unsupported by other systems. If omitted, the offset is derived from the time zone identifier. If present, then the time must be provided too.
- `[time_zone_id]`
  - : Replace `time_zone_id` with the time zone identifier (named or offset) as described above. May have a _critical flag_ by prefixing the identifier with `!`: e.g., `[!America/New_York]`. This flag generally tells other systems that it cannot be ignored if they don't support it.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Replace `calendar_id` with the calendar to use. May have a _critical flag_ by prefixing the key with `!`: e.g., `[!u-ca=iso8601]`. This flag generally tells other systems that it cannot be ignored if they don't support it. The `Temporal` parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Defaults to `[u-ca=iso8601]`. Note that the `YYYY-MM-DD` is always interpreted in ISO and then converted to the specified calendar.

As an input, other annotations in the `[key=value]` format are ignored, and they must not have the critical flag.

When serializing, you can configure the fractional second digits, whether to display the offset/time zone ID/calendar ID, and whether to add a critical flag for the annotations.

### Ambiguity and gaps from local time to UTC time

Given a time zone, conversion from UTC to local time is straightforward: you first get the offset using the time zone name and the instant, then add the offset to the instant. The reverse is not true: conversion from local time to UTC time is ambiguous, because one local time can correspond to zero, one, or many UTC times. Consider the most common cause: daylight saving time transitions. Take New York as an example. Its standard offset is UTC-5, but during DST, all clocks are set forward by an hour, so the offset becomes UTC-4. In the US, transitions happen at 2:00 AM local time, so consider these two transition days:

| UTC time             | New York time             |
| -------------------- | ------------------------- |
| 2024-03-10T06:58:00Z | 2024-03-10T01:58:00-05:00 |
| 2024-03-10T06:59:00Z | 2024-03-10T01:59:00-05:00 |
| 2024-03-10T07:00:00Z | 2024-03-10T03:00:00-04:00 |
| ---                  | ---                       |
| 2024-11-03T05:58:00Z | 2024-11-03T01:58:00-04:00 |
| 2024-11-03T05:59:00Z | 2024-11-03T01:59:00-04:00 |
| 2024-11-03T06:00:00Z | 2024-11-03T01:00:00-05:00 |

As you can see, in March, one hour disappeared from the local time, and in November, we have two hours that have the same wall-clock time. Suppose that we stored a `PlainDateTime` that says "2024-03-10T02:05:00", and we want to interpret it in the `America/New_York` time zone, there will be no time that corresponds to it, while a `PlainDateTime` that says "2024-11-03T01:05:00" can correspond to two different instants.

When constructing a `ZonedDateTime` from a local time (using {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}, {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}, {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}), the behavior for ambiguity and gaps is configurable via the `disambiguation` option:

- `earlier`
  - : If there are two possible instants, choose the earlier one. If there is a gap, go back by the gap duration.
- `later`
  - : If there are two possible instants, choose the later one. If there is a gap, go forward by the gap duration.
- `compatible` (default)
  - : Same behavior as {{jsxref("Date")}}: use `later` for gaps and `earlier` for ambiguities.
- `reject`
  - : Throw a `RangeError` whenever there is an ambiguity or a gap.

### Offset ambiguity

We already demonstrated how ambiguity may arise from interpreting a local time in a time zone. There's another source of ambiguity with `ZonedDateTime`, because it stores the offset information twice: once as the offset, and once as the time zone identifier. These two may be in conflict, and it is an unavoidable real-world issue: if you store a time in the future, with an anticipated offset, then before that time comes, the time zone definition may have changed due to political reasons. For example, suppose in 2018, I set a reminder at the time `2019-12-23T12:00:00-02:00[America/Sao_Paulo]` (which is a daylight saving time; Brazil is in the southern hemisphere, so it enters DST in October and exits in February). But before that time comes, in early 2019, Brazil decides to stop observing DST, so the real offset becomes `-03:00`. Should the reminder now still fire at noon (respect time zone identifier), or should it fire at 11:00 AM (respect offset)?

When constructing a `ZonedDateTime` from an ISO 8601 string or when updating it using the {{jsxref("Temporal/ZonedDateTime/with", "with()")}} method, the behavior for offset ambiguity is configurable via the `offset` option:

- `use`
  - : Use the offset whenever it's provided, ignoring the time zone identifier. This keeps the same exact time as originally calculated when we stored the time.
- `ignore`
  - : Use the time zone identifier whenever it's provided, ignoring the offset. This keeps the same local time as originally calculated when we stored the time. Note that this causes the same local time interpretation ambiguity as demonstrated above, which is resolved using the `disambiguation` option.
- `reject`
  - : Throw a `RangeError` whenever there is a conflict between the offset and the time zone identifier. This is the default for {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}.
- `prefer`
  - : Use the offset if it's valid, otherwise calculate the offset from the time zone identifier. This is the default for {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}} (see the method for more details).

> [!NOTE]
> Although {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} also takes an ISO 8601 string in the same form, there is no ambiguity because it always ignores the time zone identifier and reads the offset only.

## Constructor

- {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}}
  - : Creates a new `Temporal.ZonedDateTime` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first date-time comes before, is the same as, or comes after the second date-time. Equivalent to comparing the {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} of the two datetimes.
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
  - : Creates a new `Temporal.ZonedDateTime` object from another `Temporal.ZonedDateTime` object, an object with date, time, and time zone properties, or an ISO 8601 string.

## Instance properties

These properties are defined on `Temporal.ZonedDateTime.prototype` and shared by all `Temporal.ZonedDateTime` instances.

- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
  - : Returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.
- {{jsxref("Object/constructor", "Temporal.ZonedDateTime.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.ZonedDateTime` instances, the initial value is the {{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "Temporal.ZonedDateTime()")}} constructor.
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
  - : Returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
  - : Returns a positive integer representing the 1-based day index in the week of this date. Days in a week are numbered sequentially from `1` to {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}, with each number mapping to its name. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
  - : Returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is `1`, and the last day is the {{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
  - : Returns a positive integer representing the number of days in the month of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
  - : Returns a positive integer representing the number of days in the week of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
  - : Returns a positive integer representing the number of days in the year of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "Temporal.ZonedDateTime.prototype.epochMilliseconds")}}
  - : Returns an integer representing the number of milliseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant. Equivalent to dividing `epochNanoseconds` by `1e6` and flooring the result.
- {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}
  - : Returns a {{jsxref("BigInt")}} representing the number of nanoseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.
- {{jsxref("Temporal/ZonedDateTime/era", "Temporal.ZonedDateTime.prototype.era")}}
  - : Returns a calendar-specific lowercase string representing the era of this date, or `undefined` if the calendar does not use eras (e.g. ISO 8601). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way as `year` does. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/eraYear", "Temporal.ZonedDateTime.prototype.eraYear")}}
  - : Returns a non-negative integer representing the year of this date within the era, or `undefined` if the calendar does not use eras (e.g. ISO 8601). The year index usually starts from 1 (more common) or 0, and years in an era can decrease with time (e.g. Gregorian BCE). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way as `year` does. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
  - : Returns a integer from 0 to 23 representing the hour component of this time.
- {{jsxref("Temporal/ZonedDateTime/hoursInDay", "Temporal.ZonedDateTime.prototype.hoursInDay")}}
  - : Returns a positive integer representing the number of hours in the day of this date in the time zone. It may be more or less than 24 in the case of offset changes such as daylight saving time.
- {{jsxref("Temporal/ZonedDateTime/inLeapYear", "Temporal.ZonedDateTime.prototype.inLeapYear")}}
  - : Returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (a leap day or leap month) than a common year. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/microsecond", "Temporal.ZonedDateTime.prototype.microsecond")}}
  - : Returns a integer from 0 to 999 representing the microsecond (10<sup>-6</sup> second) component of this time.
- {{jsxref("Temporal/ZonedDateTime/millisecond", "Temporal.ZonedDateTime.prototype.millisecond")}}
  - : Returns a integer from 0 to 999 representing the millisecond (10<sup>-3</sup> second) component of this time.
- {{jsxref("Temporal/ZonedDateTime/minute", "Temporal.ZonedDateTime.prototype.minute")}}
  - : Returns a integer from 0 to 59 representing the minute component of this time.
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
  - : Returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is `1`, and the last month is the {{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/monthCode", "Temporal.ZonedDateTime.prototype.monthCode")}}
  - : Returns a calendar-specific string representing the month of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/monthsInYear", "Temporal.ZonedDateTime.prototype.monthsInYear")}}
  - : Returns a positive integer representing the number of months in the year of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/nanosecond", "Temporal.ZonedDateTime.prototype.nanosecond")}}
  - : Returns a integer from 0 to 999 representing the nanosecond (10<sup>-9</sup> second) component of this time.
- {{jsxref("Temporal/ZonedDateTime/offset", "Temporal.ZonedDateTime.prototype.offset")}}
  - : Returns a string representing the [offset](#time_zones_and_offsets) used to interpret the internal instant, in the form `±HH:MM` (or `±HH:MM:SS.sssssssss` with as much subminute precision as necessary).
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
  - : Returns an integer representing the [offset](#time_zones_and_offsets) used to interpret the internal instant, as a number of nanoseconds (positive or negative).
- {{jsxref("Temporal/ZonedDateTime/second", "Temporal.ZonedDateTime.prototype.second")}}
  - : Returns a integer from 0 to 59 representing the second component of this time.
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
  - : Returns a string representing the [time zone identifier](#time_zones_and_offsets) used to interpret the internal instant. It uses the same string used when constructing the `Temporal.ZonedDateTime` object, which is either an IANA time zone name or a fixed offset.
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
  - : Returns a positive integer representing the 1-based week index in the {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} of this date, or `undefined` if the calendar does not have a well-defined week system. The first week of the year is `1`. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
  - : Returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
  - : Returns an integer representing the year to be paired with the {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} of this date, or `undefined` if the calendar does not have a well-defined week system. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- `Temporal.ZonedDateTime.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.ZonedDateTime"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/equals", "Temporal.ZonedDateTime.prototype.equals()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "Temporal.ZonedDateTime.prototype.getTimeZoneTransition()")}}
  - : Returns a {{jsxref("Temporal.ZonedDateTime")}} object representing the first instant after or before this instant at which the time zone's UTC offset changes, or `null` if there is no such transition. This is useful for finding out the offset rules of a time zone, such as its daylight saving time pattern.
- {{jsxref("Temporal/ZonedDateTime/round", "Temporal.ZonedDateTime.prototype.round()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/startOfDay", "Temporal.ZonedDateTime.prototype.startOfDay()")}}
  - : Returns a {{jsxref("Temporal.ZonedDateTime")}} object representing the first instant of this date in the time zone. It usually has a time of `00:00:00`, but may be different if the midnight doesn't exist due to offset changes, in which case the first time that exists is returned.
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/toPlainDate", "Temporal.ZonedDateTime.prototype.toPlainDate()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "Temporal.ZonedDateTime.prototype.toPlainDateTime()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/toPlainTime", "Temporal.ZonedDateTime.prototype.toPlainTime()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/until", "Temporal.ZonedDateTime.prototype.until()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/valueOf", "Temporal.ZonedDateTime.prototype.valueOf()")}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.ZonedDateTime` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
  - : TODO
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
  - : TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainTime")}}
