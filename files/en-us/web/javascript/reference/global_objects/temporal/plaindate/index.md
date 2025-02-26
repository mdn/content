---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
page-type: javascript-class
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainDate`** object represents a calendar date (a date without a time or time zone); for example, an event on a calendar which happens during the whole day no matter which time zone it's happening in. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system.

## Description

A `PlainDate` is essentially the date part of a {{jsxref("Temporal.PlainDateTime")}} object, with the time information removed. Because the date and time information don't have much interaction, all general information about date properties is documented here.

### RFC 9557 format

`PlainDate` objects can be serialized and parsed using the [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) format, an extension to the [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format. The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY`
  - : Either a four-digit number, or a six-digit number with a `+` or `-` sign.
- `MM`
  - : A two-digit number from `01` to `12`.
- `DD`
  - : A two-digit number from `01` to `31`. The `YYYY`, `MM`, and `DD` components can be separated by `-` or nothing.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Replace `calendar_id` with the calendar to use. May have a _critical flag_ by prefixing the key with `!`: e.g., `[!u-ca=iso8601]`. This flag generally tells other systems that it cannot be ignored if they don't support it. The `Temporal` parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Defaults to `[u-ca=iso8601]`. Note that the `YYYY-MM-DD` is always interpreted as an ISO 8601 calendar date and then converted to the specified calendar.

As an input, you may optionally include the time, offset, and time zone identifier, in the same format as [`PlainDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format), but they will be ignored. Other annotations in the `[key=value]` format are also ignored, and they must not have the critical flag.

When serializing, you can configure whether to display the calendar ID, and whether to add a critical flag for it.

### Invalid date clamping

The {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}, {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}, {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}, {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} methods, and their counterparts in other `Temporal` objects, allow constructing dates using calendar-specific properties. The date components may be out of range. In the ISO calendar, this is always an _overflow_, such as the month being greater than 12 or the day being greater than the number of days, and fixing it would only involve clamping the value to the maximum allowed value. In other calendars, the invalid case may be more complex. When using the `overflow: "constrain"` option, invalid dates are fixed to a valid one in the following way:

- If the day doesn't exist but the month does: pick the closest day in the same month. If there are two equally-close dates in that month, pick the later one.
- If the month is a leap month that doesn't exist in the year: pick another date according to the cultural conventions of that calendar's users. Usually this will result in the same day in the month before or after where that month would normally fall in a leap year.
- If the month doesn't exist in the year for other reasons: pick the closest date that is still in the same year. If there are two equally-close dates in that year, pick the later one.
- If the entire year doesn't exist: pick the closest date in a different year. If there are two equally-close dates, pick the later one.

## Constructor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainDate` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} {{experimental_inline}}
  - : Returns a number (-1, 0, or 1) indicating whether the first date comes before, is the same as, or comes after the second date. Equivalent to comparing the year, month, and day fields of the underlying ISO 8601 dates.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainDate` object from another `Temporal.PlainDate` object, an object with date properties, or an [RFC 9557](#rfc_9557_format) string.

## Instance properties

These properties are defined on `Temporal.PlainDate.prototype` and shared by all `Temporal.PlainDate` instances.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}} {{experimental_inline}}
  - : Returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainDate` instances, the initial value is the {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} constructor.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Generally starts at 1 and is continuous, but not always.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based day index in the week of this date. Days in a week are numbered sequentially from `1` to {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}, with each number mapping to its name. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. 1 usually represents Monday in the calendar, even when locales using the calendar may consider a different day as the first day of the week (see {{jsxref("Intl/Locale/getWeekInfo", "Intl.Locale.prototype.getWeekInfo()")}}).
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is `1`, and the last day is the {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of days in the month of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of days in the week of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For the ISO 8601 calendar, this is always 7, but in other calendar systems it may differ from week to week.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of days in the year of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For the ISO 8601 calendar, this is 365, or 366 in a leap year.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}} {{experimental_inline}}
  - : Returns a calendar-specific lowercase string representing the era of this date, or `undefined` if the calendar does not use eras (e.g. ISO 8601). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way that `year` does. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For Gregorian, it is either `"gregory"` or `"gregory-inverse"`.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}} {{experimental_inline}}
  - : Returns a non-negative integer representing the year of this date within the era, or `undefined` if the calendar does not use eras (e.g. ISO 8601). The year index usually starts from 1 (more common) or 0, and years in an era can decrease with time (e.g. Gregorian BCE). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way that `year` does. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}} {{experimental_inline}}
  - : Returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is `1`, and the last month is the {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Note that unlike {{jsxref("Date.prototype.getMonth()")}}, the index is 1-based. If the calendar has leap months, then the month with the same {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} may have different `month` indexes for different years.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}} {{experimental_inline}}
  - : Returns a calendar-specific string representing the month of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Usually it is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L`. If the leap month is the first month of the year, the code is `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the number of months in the year of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. For the ISO 8601 calendar, this is always 12, but in other calendar systems it may differ.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based week index in the {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} of this date, or `undefined` if the calendar does not have a well-defined week system. The first week of the year is `1`. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Note that for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}} {{experimental_inline}}
  - : Returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Usually year 1 is either the first year of the latest era or the ISO 8601 year `0001`. If the epoch is in the middle of the year, that year will have the same value before and after the start date of the era.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}} {{experimental_inline}}
  - : Returns an integer representing the year to be paired with the {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} of this date, or `undefined` if the calendar does not have a well-defined week system. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Usually this is the year of the date, but for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year, causing the `yearOfWeek` to differ by 1.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainDate"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDate` object representing this date moved forward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}} {{experimental_inline}}
  - : Returns `true` if this date is equivalent in value to another date (in a form convertible by {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}), and `false` otherwise. They are compared both by their date values and their calendars.
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another date (in a form convertible by {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}) to this date. The duration is positive if the other date is before this date, and negative if after.
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDate` object representing this date moved backward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}} {{experimental_inline}}
  - : Returns a string representing this date in the same [RFC 9557 format](#rfc_9557_format) as calling {{jsxref("Temporal/PlainDate/toString", "toString()")}}. Intended to be implicitly called by {{jsxref("JSON.stringify()")}}.
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Returns a string with a language-sensitive representation of this date.
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.PlainDateTime")}} object representing this date and a supplied time in the same calendar system.
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.PlainMonthDay")}} object representing the {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} and {{jsxref("Temporal/PlainDate/day", "day")}} of this date in the same calendar system.
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.PlainYearMonth")}} object representing the {{jsxref("Temporal/PlainDate/year", "year")}} and {{jsxref("Temporal/PlainDate/month", "month")}} of this date in the same calendar system.
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}} {{experimental_inline}}
  - : Returns a string representing this date in the [RFC 9557 format](#rfc_9557_format).
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.ZonedDateTime")}} object representing this date, a supplied time, and a supplied time zone, in the same calendar system.
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this date to another date (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}). The duration is positive if the other date is after this date, and negative if before.
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}} {{experimental_inline}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainDate` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDate` object representing this date with some fields replaced by new values.
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainDate` object representing this date interpreted in the new calendar system.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.ZonedDateTime")}}
