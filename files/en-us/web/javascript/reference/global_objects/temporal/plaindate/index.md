---
title: Temporal.PlainDate
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.PlainDate
---

{{JSRef}}

The **`Temporal.PlainDate`** object represents a date without a time or time zone (a calendar date); for example, an event on a calendar which happens during the whole day no matter which time zone it's happening in. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system.

## Constructor

- {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}}
  - : Creates a new `Temporal.PlainDate` object.

## Static methods

- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first date comes before, is the same as, or comes after the second date. Equivalent to comparing the year, month, and day fields of the underlying ISO 8601 dates.
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
  - : Creates a new `Temporal.PlainDate` object from another `Temporal.PlainDate` object, an object with date properties, or an ISO 8601 string.

## Instance properties

These properties are defined on `Temporal.PlainDate.prototype` and shared by all `Temporal.PlainDate` instances.

- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
  - : Returns a string representing the calendar used to interpret the internal ISO 8601 date.
- {{jsxref("Object/constructor", "Temporal.PlainDate.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainDate` instances, the initial value is the {{jsxref("Temporal/PlainDate/PlainDate", "Temporal.PlainDate()")}} constructor.
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
  - : Returns a positive integer representing the 1-based day index in the month of this date. The first day of this month is `1`, and the last day is the {{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}.
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
  - : Returns a positive integer representing the 1-based day index in the week of this date. The first day of the week is `1`, and the last day of the week is the {{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}. 1 usually represents Monday.
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
  - : Returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is `1`, and the last day is the {{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}.
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
  - : Returns a positive integer representing the number of days in the month of this date.
- {{jsxref("Temporal/PlainDate/daysInWeek", "Temporal.PlainDate.prototype.daysInWeek")}}
  - : Returns a positive integer representing the number of days in the week of this date. For the ISO 8601 calendar, this is always 7, but in other calendar systems it may differ from week to week.
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
  - : Returns a positive integer representing the number of days in the year of this date. For the ISO 8601 calendar, this is 365, or 366 in a leap year.
- {{jsxref("Temporal/PlainDate/era", "Temporal.PlainDate.prototype.era")}}
  - : Returns a calendar-specific lowercase string representing the era of this date, or `undefined` if the calendar does not use eras (e.g. ISO 8601). For Gregorian, it is either `"bce"` or `"ce"`. `era` and `eraYear` together uniquely identify a year in a calendar, in the same way as `year` does.
- {{jsxref("Temporal/PlainDate/eraYear", "Temporal.PlainDate.prototype.eraYear")}}
  - : Returns a non-negative integer representing the year of this date within the era, or `undefined` if the calendar does not use eras (e.g. ISO 8601). The year index usually starts from 1 (more common) or 0, and years in an era can decrease with time (e.g. Gregorian BCE). `era` and `eraYear` together uniquely identify a year in a calendar, in the same way as `year` does.
- {{jsxref("Temporal/PlainDate/inLeapYear", "Temporal.PlainDate.prototype.inLeapYear")}}
  - : Returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (a leap day or leap month) than a common year. For the ISO 8601 calendar, a leap year is a year that is evenly divisible by 4, except for years that are evenly divisible by 100, unless the year is also evenly divisible by 400.
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
  - : Returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is `1`, and the last month is the {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. Note that unlike {{jsxref("Date/getMonth", "Date.prototype.getMonth()")}}, the index is 1-based. If the calendar has leap months, then the month with the same {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} may have different `month` indexes for different years.
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
  - : Returns a calendar-specific string representing the month of this date. Usually it is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L`. If the leap month is the first month of the year, the code is `M00L`.
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
  - : Returns a positive integer representing the number of months in the year of this date. For the ISO 8601 calendar, this is always 12, but in other calendar systems it may differ.
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
  - : Returns a positive integer representing the 1-based week index in the {{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}} of this date, or `undefined` if the calendar does not have a well-defined week system. The first week of the year is `1`, and the last week is the {{jsxref("Temporal/PlainDate/weeksInYear", "weeksInYear")}}. Note that for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year.
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
  - : Returns a non-zero integer representing the number of years of this date relative to the start of a calendar-specific epoch year. Usually year 1 is either the first year of the latest era or the ISO 8601 year `0001`. If the epoch era starts in the middle of the year, the year will be the same value before and after the start date of the era.
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
  - : Returns a non-zero integer representing the year to be paired with the {{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}} of this date, or `undefined` if the calendar does not have a well-defined week system. Usually this is the year of the date, but for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year, causing the `yearOfWeek` to differ by 1.
- `Temporal.PlainDate.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainDate"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/equals", "Temporal.PlainDate.prototype.equals()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/valueOf", "Temporal.PlainDate.prototype.valueOf()")}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainDate` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
  - : TODO
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
  - : TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
