---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
page-type: javascript-namespace
status:
  - experimental
browser-compat: javascript.builtins.Temporal
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal`** object enables date and time management in various scenarios, including built-in time zone and calendar representation, wall-clock time conversions, arithmetics, formatting, and more. It is designed as a full replacement for the {{jsxref("Date")}} object.

## Description

Unlike most global objects, `Temporal` is not a constructor. You cannot use it with the [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Temporal` object as a function. All properties and methods of `Temporal` are static (just like the {{jsxref("Math")}} object).

`Temporal` has an intricate and powerful API. It exposes over 200 utility methods via several classes, so it could appear very complex. We will provide a high-level overview of how these APIs are related to each other.

### Background and concepts

JavaScript has had the {{jsxref("Date")}} object for handling date and time since its first days. However, the `Date` API is based on the poorly designed `java.util.Date` class from Java, which was replaced in the early 2010s; but, because of JavaScript's goal of backward compatibility, `Date` sticks around in the language.

The important lesson to preface the whole introduction is that **date handling is complex**. Most of the problems of `Date` are fixable by adding more methods, but a fundamental design flaw remains: it exposes so many methods on the same object that developers are often confused about what to use, leading to unexpected pitfalls. A well-designed API not only needs to do more, but also should do _less_ with each level of abstraction, because preventing misuse is as important as enabling use cases.

`Date` objects wear two hats simultaneously:

- As a [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date): the number of milliseconds or nanoseconds elapsed since a fixed point in time (known as the _epoch_).
- As a combination of [components](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones): year, month, day, hour, minute, second, millisecond, and nanosecond. The year, month, and day identifiers only make sense with reference to a _calendar system_. The whole combination maps to a unique instant in history when associated with a time zone. `Date` objects provide methods for reading and modifying these components.

[Time zones](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) underlie a significant number of date-related bugs. When interacting with a `Date` via the "combination of components" model, the time can only be in two time zones: UTC and local (device), and there's no way to specify an arbitrary time zone. Also lacking is the concept of "no time zone": this is known as a _calendar date_ (for dates) or _wall-clock time_ (for times), which is a time you "read off a calendar or clock". For example, if you are setting a daily wake up alarm, you will want to set it to "8:00AM" regardless of whether it is daylight saving time or not, whether you have traveled to a different time zone, etc.

A second feature lacking from `Date` is a [calendar system](#calendars). Most people may be familiar with the Gregorian calendar, where there are two eras, BC and AD; there are 12 months; each month has a different number of days; there's a leap year every 4 years; and so on. However, some of these concepts may not apply when you are working with another calendar system, such as the Hebrew calendar, the Chinese calendar, the Japanese calendar, etc. With `Date`, you can only work with the Gregorian calendar model.

There are many other undesirable legacies about `Date`, such as all setters being mutating (which often causes unwanted side effects), the [date time string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) being impossible to parse in a consistent way, etc. In the end, the best solution is to build a new API from scratch, which is what `Temporal` is.

### API overview

`Temporal` is a namespace, like {{jsxref("Intl")}}. It contains several classes and namespaces, each of which is designed to handle a specific aspect of date and time management. The classes can be grouped as such:

- Representing a time duration (a difference between two time points): {{jsxref("Temporal.Duration")}}
- Representing a time point:
  - Representing a unique instant in history:
    - As a timestamp: {{jsxref("Temporal.Instant")}}
    - As a date-time component combination paired with a time zone: {{jsxref("Temporal.ZonedDateTime")}}
  - Representing a time-zone-unaware date/time (which are all prefixed with "Plain"):
    - Date (year, month, day) + time (hour, minute, second, millisecond, microsecond, nanosecond): {{jsxref("Temporal.PlainDateTime")}} (Note: `ZonedDateTime` is equivalent to `PlainDateTime` plus a time zone)
      - Date (year, month, day): {{jsxref("Temporal.PlainDate")}}
        - Year, month: {{jsxref("Temporal.PlainYearMonth")}}
        - Month, day: {{jsxref("Temporal.PlainMonthDay")}}
      - Time (hour, minute, second, millisecond, microsecond, nanosecond): {{jsxref("Temporal.PlainTime")}}

Furthermore, there's also another utility namespace, {{jsxref("Temporal.Now")}}, which provides methods for getting the current time in various formats.

### Shared class interface

There are many classes in the `Temporal` namespace, but they share many similar methods. The following table lists all methods of each class (except [conversion methods](#conversion_between_classes)):

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Construction</th>
<td>{{jsxref("Temporal/Instant/Instant", "Instant()")}}<br>{{jsxref("Temporal/Instant/from", "Instant.from()")}}<br>{{jsxref("Temporal/Instant/fromEpochMilliseconds", "Instant.fromEpochMilliseconds()")}}<br>{{jsxref("Temporal/Instant/fromEpochNanoseconds", "Instant.fromEpochNanoseconds()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/ZonedDateTime", "ZonedDateTime()")}}<br>{{jsxref("Temporal/ZonedDateTime/from", "ZonedDateTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/PlainDateTime", "PlainDateTime()")}}<br>{{jsxref("Temporal/PlainDateTime/from", "PlainDateTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainDate/PlainDate", "PlainDate()")}}<br>{{jsxref("Temporal/PlainDate/from", "PlainDate.from()")}}</td>
<td>{{jsxref("Temporal/PlainTime/PlainTime", "PlainTime()")}}<br>{{jsxref("Temporal/PlainTime/from", "PlainTime.from()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "PlainYearMonth()")}}<br>{{jsxref("Temporal/PlainYearMonth/from", "PlainYearMonth.from()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "PlainMonthDay()")}}<br>{{jsxref("Temporal/PlainMonthDay/from", "PlainMonthDay.from()")}}</td>
</tr>
<tr>
<th>Updater</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/with", "with()")}}<br>{{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}}<br>{{jsxref("Temporal/ZonedDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/with", "with()")}}<br>{{jsxref("Temporal/PlainDateTime/withCalendar", "withCalendar()")}}<br>{{jsxref("Temporal/PlainDateTime/withPlainTime", "withPlainTime()")}}</td>
<td>{{jsxref("Temporal/PlainDate/with", "with()")}}<br>{{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}}</td>
<td>{{jsxref("Temporal/PlainTime/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/with", "with()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/with", "with()")}}</td>
</tr>
<tr>
<th>Arithmetic</th>
<td>{{jsxref("Temporal/Instant/add", "add()")}}<br>{{jsxref("Temporal/Instant/subtract", "subtract()")}}<br>{{jsxref("Temporal/Instant/since", "since()")}}<br>{{jsxref("Temporal/Instant/until", "until()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/add", "add()")}}<br>{{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/ZonedDateTime/since", "since()")}}<br>{{jsxref("Temporal/ZonedDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/add", "add()")}}<br>{{jsxref("Temporal/PlainDateTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDateTime/since", "since()")}}<br>{{jsxref("Temporal/PlainDateTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainDate/add", "add()")}}<br>{{jsxref("Temporal/PlainDate/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainDate/since", "since()")}}<br>{{jsxref("Temporal/PlainDate/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainTime/add", "add()")}}<br>{{jsxref("Temporal/PlainTime/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainTime/since", "since()")}}<br>{{jsxref("Temporal/PlainTime/until", "until()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/add", "add()")}}<br>{{jsxref("Temporal/PlainYearMonth/subtract", "subtract()")}}<br>{{jsxref("Temporal/PlainYearMonth/since", "since()")}}<br>{{jsxref("Temporal/PlainYearMonth/until", "until()")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Rounding</th>
<td>{{jsxref("Temporal/Instant/round", "round()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/round", "round()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/round", "round()")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainTime/round", "round()")}}</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Comparison</th>
<td>{{jsxref("Temporal/Instant/equals", "equals()")}}<br>{{jsxref("Temporal/Instant/compare", "Instant.compare()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/ZonedDateTime/compare", "ZonedDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDateTime/compare", "PlainDateTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainDate/equals", "equals()")}}<br>{{jsxref("Temporal/PlainDate/compare", "PlainDate.compare()")}}</td>
<td>{{jsxref("Temporal/PlainTime/equals", "equals()")}}<br>{{jsxref("Temporal/PlainTime/compare", "PlainTime.compare()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/equals", "equals()")}}<br>{{jsxref("Temporal/PlainYearMonth/compare", "PlainYearMonth.compare()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/equals", "equals()")}}</td>
</tr>
<tr>
<th>Serialization</th>
<td>{{jsxref("Temporal/Instant/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/Instant/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/Instant/toString", "toString()")}}<br>{{jsxref("Temporal/Instant/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/ZonedDateTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/ZonedDateTime/toString", "toString()")}}<br>{{jsxref("Temporal/ZonedDateTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainDateTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainDateTime/toString", "toString()")}}<br>{{jsxref("Temporal/PlainDateTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainDate/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainDate/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainDate/toString", "toString()")}}<br>{{jsxref("Temporal/PlainDate/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainTime/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainTime/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainTime/toString", "toString()")}}<br>{{jsxref("Temporal/PlainTime/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainYearMonth/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainYearMonth/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}<br>{{jsxref("Temporal/PlainYearMonth/valueOf", "valueOf()")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/toJSON", "toJSON()")}}<br>{{jsxref("Temporal/PlainMonthDay/toLocaleString", "toLocaleString()")}}<br>{{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}<br>{{jsxref("Temporal/PlainMonthDay/valueOf", "valueOf()")}}</td>
</tr>
</tbody>
</table>

The following table summarizes which properties are available on each class, giving you a sense of what information each class can represent.

<table>
<thead>
<tr>
<td></td>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
</thead>
<tbody>
<tr>
<th>Calendar</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainDate/calendarId", "calendarId")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}}</td>
</tr>
<tr>
<th>Year-related</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/era", "era")}}<br>{{jsxref("Temporal/ZonedDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/ZonedDateTime/year", "year")}}<br>{{jsxref("Temporal/ZonedDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/ZonedDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/era", "era")}}<br>{{jsxref("Temporal/PlainDateTime/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDateTime/year", "year")}}<br>{{jsxref("Temporal/PlainDateTime/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDateTime/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDateTime/daysInYear", "daysInYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/era", "era")}}<br>{{jsxref("Temporal/PlainDate/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainDate/year", "year")}}<br>{{jsxref("Temporal/PlainDate/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainDate/daysInYear", "daysInYear")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainYearMonth/era", "era")}}<br>{{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}}<br>{{jsxref("Temporal/PlainYearMonth/year", "year")}}<br>{{jsxref("Temporal/PlainYearMonth/inLeapYear", "inLeapYear")}}<br>{{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInYear", "daysInYear")}}</td>
<td>N/A</td>
</tr>
<tr>
<th>Month-related</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/month", "month")}}<br>{{jsxref("Temporal/ZonedDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/month", "month")}}<br>{{jsxref("Temporal/PlainDateTime/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDateTime/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainDate/month", "month")}}<br>{{jsxref("Temporal/PlainDate/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainYearMonth/month", "month")}}<br>{{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}}<br>{{jsxref("Temporal/PlainYearMonth/daysInMonth", "daysInMonth")}}</td>
<td>{{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}}</td>
</tr>
<tr>
<th>Week-related</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDateTime/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/daysInWeek", "daysInWeek")}}</td>
<td>{{jsxref("Temporal/PlainDate/weekOfYear", "weekOfYear")}}<br>{{jsxref("Temporal/PlainDate/yearOfWeek", "yearOfWeek")}}<br>{{jsxref("Temporal/PlainDate/daysInWeek", "daysInWeek")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Day-related</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/day", "day")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/ZonedDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/day", "day")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDateTime/dayOfYear", "dayOfYear")}}</td>
<td>{{jsxref("Temporal/PlainDate/day", "day")}}<br>{{jsxref("Temporal/PlainDate/dayOfWeek", "dayOfWeek")}}<br>{{jsxref("Temporal/PlainDate/dayOfYear", "dayOfYear")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainMonthDay/day", "day")}}</td>
</tr>
<tr>
<th>Time components</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/hour", "hour")}}<br>{{jsxref("Temporal/ZonedDateTime/minute", "minute")}}<br>{{jsxref("Temporal/ZonedDateTime/second", "second")}}<br>{{jsxref("Temporal/ZonedDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/ZonedDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/ZonedDateTime/nanosecond", "nanosecond")}}</td>
<td>{{jsxref("Temporal/PlainDateTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainDateTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainDateTime/second", "second")}}<br>{{jsxref("Temporal/PlainDateTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainDateTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainDateTime/nanosecond", "nanosecond")}}</td>
<td>N/A</td>
<td>{{jsxref("Temporal/PlainTime/hour", "hour")}}<br>{{jsxref("Temporal/PlainTime/minute", "minute")}}<br>{{jsxref("Temporal/PlainTime/second", "second")}}<br>{{jsxref("Temporal/PlainTime/millisecond", "millisecond")}}<br>{{jsxref("Temporal/PlainTime/microsecond", "microsecond")}}<br>{{jsxref("Temporal/PlainTime/nanosecond", "nanosecond")}}</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Time zone</th>
<td>N/A</td>
<td>{{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}}<br>{{jsxref("Temporal/ZonedDateTime/offset", "offset")}}<br>{{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "offsetNanoseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/hoursInDay", "hoursInDay")}}<br>{{jsxref("Temporal/ZonedDateTime/getTimeZoneTransition", "getTimeZoneTransition()")}}<br>{{jsxref("Temporal/ZonedDateTime/startOfDay", "startOfDay()")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<th>Epoch time</th>
<td>{{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}</td>
<td>{{jsxref("Temporal/ZonedDateTime/epochMilliseconds", "epochMilliseconds")}}<br>{{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}}</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
<td>N/A</td>
</tr>
</tbody>
</table>

### Conversion between classes

The table below summarizes all conversion methods that exist on each class.

<table>
<tbody>
<tr>
<td rowspan="2" colspan="2"></td>
<td colspan="7">How to convert from...</td>
</tr>
<tr>
<th><code>Instant</code></th>
<th><code>ZonedDateTime</code></th>
<th><code>PlainDateTime</code></th>
<th><code>PlainDate</code></th>
<th><code>PlainTime</code></th>
<th><code>PlainYearMonth</code></th>
<th><code>PlainMonthDay</code></th>
</tr>
<tr><td rowspan="7">to...</td><th><code>Instant</code></th><td>/</td><td>{{jsxref("Temporal/ZonedDateTime/toInstant", "toInstant()")}}</td><td colspan="5">Convert to <code>ZonedDateTime</code> first</td></tr>
<tr><th><code>ZonedDateTime</code></th><td>{{jsxref("Temporal/Instant/toZonedDateTimeISO", "toZonedDateTimeISO()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDateTime/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "toZonedDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toZonedDateTime", "PlainDate#toZonedDateTime()")}} (pass as argument)</td><td rowspan="2" colspan="2">Convert to <code>PlainDate</code> first</td></tr>
<tr><th><code>PlainDateTime</code></th><td rowspan="5">Convert to <code>ZonedDateTime</code> first</td><td>{{jsxref("Temporal/ZonedDateTime/toPlainDateTime", "toPlainDateTime()")}}</td><td>/</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "toPlainDateTime()")}}</td><td>{{jsxref("Temporal/PlainDate/toPlainDateTime", "PlainDate#toPlainDateTime()")}} (pass as argument)</td></tr>
<tr><th><code>PlainDate</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainDate", "toPlainDate()")}}</td><td>/</td><td>No overlap in information</td><td>{{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}</td><td>{{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}</td></tr>
<tr><th><code>PlainTime</code></th><td>{{jsxref("Temporal/ZonedDateTime/toPlainTime", "toPlainTime()")}}</td><td>{{jsxref("Temporal/PlainDateTime/toPlainTime", "toPlainTime()")}}</td><td>No overlap in information</td><td>/</td><td colspan="2">No overlap in information</td></tr>
<tr><th><code>PlainYearMonth</code></th><td rowspan="2" colspan="2">Convert to <code>PlainDate</code> first</td><td>{{jsxref("Temporal/PlainDate/toPlainYearMonth", "toPlainYearMonth()")}}</td><td rowspan="2">No overlap in information</td><td>/</td><td>Convert to <code>PlainDate</code> first</td></tr>
<tr><th><code>PlainMonthDay</code></th><td>{{jsxref("Temporal/PlainDate/toPlainMonthDay", "toPlainMonthDay()")}}</td><td>Convert to <code>PlainDate</code> first</td><td>/</td></tr>
</tbody>
</table>

With these tables, you should have a basic idea of how to navigate the `Temporal` API.

### Calendars

A calendar is a way to organize days, typically into periods of weeks, months, years, and eras. Most of the world uses the Gregorian calendar, but there are many other calendars in use, especially in religious and cultural contexts. By default, all calendar-aware `Temporal` objects use the ISO 8601 calendar system, which is based on the Gregorian calendar and defines additional week-numbering rules. [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) lists most of the calendars likely to be supported by browsers. Here we provide a brief overview of how calendar systems are formed to help you internalize what factors may vary between calendars.

There are three prominent periodic events on Earth: its rotation around the sun (365.242 days for one revolution), the moon's rotation around the Earth (29.53 days from new moon to new moon), and its rotation around its axis (24 hours from sunrise to sunrise). Every culture has the same measure of a "day", which is 24 hours. Occasional changes such as daylight saving time are not part of the calendar, but are part of the [time zone](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets)'s information.

- Some calendars primarily define one year as 365.242 days on average, by defining years to have 365 days, and adding an extra day, the _leap day_, about every 4 years. Then, the year may be further divided into parts called months. These calendars are called _solar calendars_. The Gregorian calendar and the Solar Hijri calendar are solar calendars.
- Some calendars primarily define one month as 29.5 days on average, by defining months to alternate between 29 and 30 days. Then, 12 months may be grouped into a year of 354 days. These calendars are called _lunar calendars_. The Islamic calendar is a lunar calendar. Because a lunar year is artificial and does not correlate with the season cycle, lunar calendars are generally rarer.
- Some calendars also primarily define months based on lunar cycles, like lunar calendars. Then, to compensate for the 11-day discrepancy with the solar year, an extra month, the _leap month_, is added about every 3 years. These calendars are called _lunisolar calendars_. The Hebrew calendar and the Chinese calendar are lunisolar calendars.

In `Temporal`, every date under one calendar system is uniquely identified by three components: `year`, `month`, and `day`. While `year` is typically a positive integer, it may also be zero or negative, and increases monotonically with time. The year `1` (or `0`, if it exists) is known as the calendar epoch, and is arbitrary for each calendar. `month` is a positive integer that increments by 1 every time, starting at `1` and ending at `date.monthsInYear`, then resetting back to `1` as the year advances. `day` is also a positive integer, but it may not start at 1 or increment by 1 every time, because political changes may cause days to be skipped or repeated. But in general, `day` monotonically increases and resets as the month advances.

In addition to `year`, a year can also be uniquely identified by the combination of `era` and `eraYear`, for calendars that use eras. For example, the Gregorian calendar uses the era "CE" (Common Era) and "BCE" (Before Common Era), and the year `-1` is the same as `{ era: "bce", eraYear: 1 }`. `era` is a lowercase string, and `eraYear` is an arbitrary integer that may be zero or negative, or even decrease with time (usually for the oldest era).

> [!NOTE]
> Always use `era` and `eraYear` as a pair; don't use one property without also using the other. In addition, to avoid conflicts, don't combine `year` and `era`/`eraYear` when designating a year. Pick one year representation and use it consistently.
>
> Be careful of the following incorrect assumptions about years:
>
> - Don't assume that `era` and `eraYear` are always present; they may be `undefined`.
> - Don't assume that `era` is a user-friendly string; use `toLocaleString()` to format your date instead.
> - Don't assume that two `year` values from different calendars are comparable; use the `compare()` static method instead.
> - Don't assume that years have 365/366 days and 12 months; use `daysInYear` and `monthsInYear` instead.
> - Don't assume that leap years (`inLeapYear` is `true`) have one extra day; they may have an extra month.

In addition to `month`, a month in a year can also be uniquely identified by the `monthCode`. `monthCode` usually maps to the month's name, but `month` does not. For example, in the case of lunisolar calendars, two months with the same `monthCode`, where one belongs to a leap year and the other one does not, will have different `month` values if they come after the leap month, due to the insertion of an extra month.

> [!NOTE]
> To avoid conflicts, don't combine `month` and `monthCode` when designating a month. Pick one month representation and use it consistently. `month` is more useful if you need the order of months in a year (e.g., when looping through the months), while `monthCode` is more useful if you need the name of the month (e.g., when storing birthdays).
>
> Be careful of the following incorrect assumptions about months:
>
> - Don't assume that `monthCode` and `month` always correspond.
> - Don't assume the number of days in a month; use `daysInMonth` instead.
> - Don't assume that `monthCode` is a user-friendly string; use `toLocaleString()` to format your date instead.
> - Generally, don't cache the name of months in an array or object. Even though `monthCode` usually maps to the month's name within one calendar, we recommend always computing the month's name using, for example, `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })`.

In addition to `day` (which is a month-based index), a day in a year can also be uniquely identified by the `dayOfYear`. `dayOfYear` is a positive integer that increments by 1 every time, starting at `1` and ending at `date.daysInYear`.

The concept of a "week" is not connected with any astronomical event, but is a cultural construct. While the most common length is `7` days, weeks can also have 4, 5, 6, 8, or more days — or even lack a fixed number of days altogether. To get the specific number of days of the week of a date, use the date's `daysInWeek`. `Temporal` identifies weeks by the combination of `weekOfYear` and `yearOfWeek`. `weekOfYear` is a positive integer that increments by 1 every time, starting at `1`, then resetting back to `1` as the year advances. `yearOfWeek` is generally the same as `year`, but may be different at the start or end of each year, because one week may cross two years, and `yearOfWeek` picks one of the two years based on the calendar's rules.

> [!NOTE]
> Always use `weekOfYear` and `yearOfWeek` as a pair; don't use `weekOfYear` and `year`.
>
> Be careful of the following incorrect assumptions about weeks:
>
> - Don't assume that `weekOfYear` and `yearOfWeek` are always present; they may be `undefined`.
> - Don't assume that weeks are always 7 days long; use `daysInWeek` instead.
> - Note that the current `Temporal` API does not support year-week dates, so you can't construct dates using these properties or serialize dates to year-week representations. They are only informational properties.

### RFC 9557 format

All `Temporal` classes can be serialized and deserialized using the format specified in [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557), which is based on [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). The format, in its full form, is as follows (spaces are only for readability and should not be present in the actual string):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Different classes have different requirements for the presence of each component, so you will find a section titled "RFC 9557 format" in each class's documentation, which specifies the format recognized by that class.

This is very similar to the [date time string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) used by {{jsxref("Date")}}, which is also based on ISO 8601. The main addition is the ability to specify micro- and nanosecond components, and the ability to specify the time zone and calendar system.

### Representable dates

All `Temporal` objects that represent a specific calendar date impose a similar limit on the range of representable dates, which is ±10<sup>8</sup> days (inclusive) from the Unix epoch, or the range of instants from `-271821-04-20T00:00:00` to `+275760-09-13T00:00:00`. This is the same range as [valid dates](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date). More specifically:

- {{jsxref("Temporal.Instant")}} and {{jsxref("Temporal.ZonedDateTime")}} apply this limit directly on its `epochNanoseconds` value.
- {{jsxref("Temporal.PlainDateTime")}} interprets the date-time in the UTC time zone and requires it to be ±(10<sup>8</sup> + 1) days (exclusive) from the Unix epoch, so its valid range is `-271821-04-19T00:00:00` to `+275760-09-14T00:00:00`, exclusive. This allows any `ZonedDateTime` to be converted to a `PlainDateTime` regardless of its offset.
- {{jsxref("Temporal.PlainDate")}} applies the same check as `PlainDateTime` to the noon (`12:00:00`) of that date, so its valid range is `-271821-04-19` to `+275760-09-13`. This allows any `PlainDateTime` to be converted to a `PlainDate` regardless of its time, and vice versa.
- {{jsxref("Temporal.PlainYearMonth")}} has the valid range of `-271821-04` to `+275760-09`. This allows any `PlainDate` to be converted to a `PlainYearMonth` regardless of its date (except if a non-ISO month's first day falls in the ISO month `-271821-03`).

The `Temporal` objects will refuse to construct an instance representing a date/time beyond this limit. This includes:

- Using the constructor or `from()` static method.
- Using the `with()` method to update calendar fields.
- Using `add()`, `subtract()`, `round()`, or any other method to derive new instances.

## Static properties

- {{jsxref("Temporal.Duration")}} {{experimental_inline}}
  - : Represents a difference between two time points, which can be used in date/time arithmetic. It is fundamentally represented as a combination of years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, and nanoseconds values.
- {{jsxref("Temporal.Instant")}} {{experimental_inline}}
  - : Represents a unique point in history, with nanosecond precision. It is fundamentally represented as the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC), without any time zone or calendar system.
- {{jsxref("Temporal.Now")}} {{experimental_inline}}
  - : Provides methods for getting the current time in various formats.
- {{jsxref("Temporal.PlainDate")}} {{experimental_inline}}
  - : Represents a calendar date (a date without a time or time zone); for example, an event on a calendar which happens during the whole day no matter which time zone it's happening in. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system.
- {{jsxref("Temporal.PlainDateTime")}} {{experimental_inline}}
  - : Represents a date (calendar date) and time (wall-clock time) without a time zone. It is fundamentally represented as a combination of a [date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (with an associated calendar system) and a [time](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).
- {{jsxref("Temporal.PlainMonthDay")}} {{experimental_inline}}
  - : Represents the month and day of a calendar date, without a year or time zone; for example, an event on a calendar that recurs every year and happens during the whole day. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The year is used to disambiguate the month-day in non-ISO calendar systems.
- {{jsxref("Temporal.PlainTime")}} {{experimental_inline}}
  - : Represents a time without a date or time zone; for example, a recurring event that happens at the same time every day. It is fundamentally represented as a combination of hour, minute, second, millisecond, microsecond, and nanosecond values.
- {{jsxref("Temporal.PlainYearMonth")}} {{experimental_inline}}
  - : Represents the year and month of a calendar date, without a day or time zone; for example, an event on a calendar that happens during the whole month. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The day is used to disambiguate the year-month in non-ISO calendar systems.
- {{jsxref("Temporal.ZonedDateTime")}} {{experimental_inline}}
  - : Represents a date and time with a time zone. It is fundamentally represented as a combination of an [instant](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), a time zone, and a calendar system.
- `Temporal[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Intl.DateTimeFormat")}}
- {{jsxref("Intl.RelativeTimeFormat")}}
- {{jsxref("Intl.DurationFormat")}}
