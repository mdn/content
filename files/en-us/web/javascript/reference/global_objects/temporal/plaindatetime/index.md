---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
page-type: javascript-class
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDateTime
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainDateTime`** object represents a date (calendar date) and time (wall-clock time) without a time zone. It is fundamentally represented as a combination of a [date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (with an associated calendar system) and a [time](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).

## Description

A `PlainDateTime` is essentially the combination of a {{jsxref("Temporal.PlainDate")}} and a {{jsxref("Temporal.PlainTime")}}. Because the date and time information don't have much interaction, all general information about date properties is documented in the `PlainDate` object, and all general information about time properties is documented in the `PlainTime` object.

If the date-time represents a specific instant that should remain invariant across time zones, you should use the {{jsxref("Temporal.ZonedDateTime")}} object instead. Use `PlainDateTime` when you need to represent an event happening at a specific wall-clock time that may be a different instant in different time zones.

### RFC 9557 format

`PlainDateTime` objects can be serialized and parsed using the [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) format, an extension to the [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format. The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss [u-ca=calendar_id]
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
- `mm` {{optional_inline}}
  - : A two-digit number from `00` to `59`. Defaults to `00`.
- `ss.sssssssss` {{optional_inline}}
  - : A two-digit number from `00` to `59`. May optionally be followed by a `.` or `,` and one to nine digits. Defaults to `00`. The `HH`, `mm`, and `ss` components can be separated by `:` or nothing. You can omit either just `ss` or both `ss` and `mm`, so the time can be one of three forms: `HH`, `HH:mm`, or `HH:mm:ss.sssssssss`.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Replace `calendar_id` with the calendar to use. May have a _critical flag_ by prefixing the key with `!`: e.g., `[!u-ca=iso8601]`. This flag generally tells other systems that it cannot be ignored if they don't support it. The `Temporal` parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Defaults to `[u-ca=iso8601]`. Note that the `YYYY-MM-DD` is always interpreted as an ISO 8601 calendar date and then converted to the specified calendar.

As an input, you may optionally include the offset and time zone identifier, in the same format as [`ZonedDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), but they will be ignored. Note that the offset must _not_ be `Z`. Other annotations in the `[key=value]` format are also ignored, and they must not have the critical flag.

When serializing, you can configure the fractional second digits, whether to display the calendar ID, and whether to add a critical flag for it.

## Constructor

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainDateTime` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} {{experimental_inline}}
  - : Returns a number (-1, 0, or 1) indicating whether the first date-time comes before, is the same as, or comes after the second date-time. Equivalent to first comparing their dates, then comparing their times if the dates are the same.
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainDateTime` object from another `Temporal.PlainDateTime` object, an object with date and time properties, or an [RFC 9557](#rfc_9557_format) string.

## Instance properties

These properties are defined on `Temporal.PlainDateTime.prototype` and shared by all `Temporal.PlainDateTime` instances.

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}} {{experimental_inline}}
  - : Returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainDateTime` instances, the initial value is the {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} constructor.
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Generally starts at 1 and is continuous, but not always.
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based day index in the week of this date. Days in a week are numbered sequentially from `1` to {{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}, with each number mapping to its name. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. 1 usually represents Monday in the calendar, even when locales using the calendar may consider a different day as the first day of the week (see {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is `1`, and the last day is the {{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of days in the month of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of days in the week of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For the ISO 8601 calendar, this is always 7, but in other calendar systems it may differ from week to week.
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of days in the year of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For the ISO 8601 calendar, this is 365, or 366 in a leap year.
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}} {{experimental_inline}}
  - : Returns a calendar-specific lowercase string representing the era of this date, or `undefined` if the calendar does not use eras (e.g. ISO 8601). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way that `year` does. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For Gregorian, it is either `"gregory"` or `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}} {{experimental_inline}}
  - : Returns a non-negative integer representing the year of this date within the era, or `undefined` if the calendar does not use eras (e.g. ISO 8601). The year index usually starts from 1 (more common) or 0, and years in an era can decrease with time (e.g. Gregorian BCE). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way that `year` does. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}} {{experimental_inline}}
  - : Returns a integer from 0 to 23 representing the hour component of this time.
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}} {{experimental_inline}}
  - : Returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}} {{experimental_inline}}
  - : Returns a integer from 0 to 999 representing the microsecond (10<sup>-6</sup> second) component of this time.
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}} {{experimental_inline}}
  - : Returns a integer from 0 to 999 representing the millisecond (10<sup>-3</sup> second) component of this time.
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}} {{experimental_inline}}
  - : Returns a integer from 0 to 59 representing the minute component of this time.
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is `1`, and the last month is the {{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Note that unlike {{jsxref("Date.prototype.getMonth()")}}, the index is 1-based. If the calendar has leap months, then the month with the same {{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}} may have different `month` indexes for different years.
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}} {{experimental_inline}}
  - : Returns a calendar-specific string representing the month of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Usually it is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L`. If the leap month is the first month of the year, the code is `M00L`.
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of months in the year of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For the ISO 8601 calendar, this is always 12, but in other calendar systems it may differ.
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Returns a integer from 0 to 999 representing the nanosecond (10<sup>-9</sup> second) component of this time.
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}} {{experimental_inline}}
  - : Returns a integer from 0 to 59 representing the second component of this time.
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based week index in the {{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}} of this date, or `undefined` if the calendar does not have a well-defined week system. The first week of the year is `1`. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Note that for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year.
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}} {{experimental_inline}}
  - : Returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Usually year 1 is either the first year of the latest era or the ISO 8601 year `0001`. If the epoch is in the middle of the year, that year will have the same value before and after the start date of the era.
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Returns an integer representing the year to be paired with the {{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}} of this date, or `undefined` if the calendar does not have a well-defined week system. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Usually this is the year of the date, but for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year, causing the `yearOfWeek` to differ by 1.
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainDateTime"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDateTime` object representing this date-time moved forward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}} {{experimental_inline}}
  - : Returns `true` if this date-time is equivalent in value to another date-time (in a form convertible by {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}), and `false` otherwise. They are compared both by their date and time values and their calendars, so two date-times from different calendars may be considered equal by {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} but not by `equals()`.
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDateTime` object representing this date-time rounded to the given unit.
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another date-time (in a form convertible by {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}) to this date-time. The duration is positive if the other date-time is before this date-time, and negative if after.
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDateTime` object representing this date-time moved backward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Returns a string representing this date-time in the same [RFC 9557 format](#rfc_9557_format) as calling {{jsxref("Temporal/PlainDateTime/toString", "toString()")}}. Intended to be implicitly called by {{jsxref("JSON.stringify()")}}.
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Returns a string with a language-sensitive representation of this date-time.
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.PlainDate")}} object representing the date part (year, month, day) of this date-time in the same calendar system.
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.PlainTime")}} object representing the time part (hour, minute, second, and subsecond components) of this date-time.
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}} {{experimental_inline}}
  - : Returns a string representing this date-time in the [RFC 9557 format](#rfc_9557_format).
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.ZonedDateTime")}} instance representing the same date-time as this plain date-time, but in the specified time zone.
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this date-time to another date-time (in a form convertible by {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}). The duration is positive if the other date-time is after this date-time, and negative if before.
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainDateTime` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDateTime` object representing this date-time with some fields replaced by new values.
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDateTime` object representing this date-time interpreted in the new calendar system.
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDateTime` object representing this date-time with the time part entirely replaced by the new time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
