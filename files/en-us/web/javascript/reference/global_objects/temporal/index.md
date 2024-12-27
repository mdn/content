---
title: Temporal
slug: Web/JavaScript/Reference/Global_Objects/Temporal
page-type: javascript-namespace
browser-compat: javascript.builtins.Temporal
---

{{JSRef}}

The **`Temporal`** object enables date and time management in various scenarios, including built-in time zone and calendar representation, wall-clock time conversions, arithmetics, formatting, and more. It is designed as a full replacement for the {{jsxref("Date")}} object.

## Description

`Temporal` has an intricate and powerful API. It exposes over 200 utility methods via several classes, so it could appear very complex. We will provide a high-level overview of how these APIs are related to each other.

### Background and concepts

JavaScript has had the {{jsxref("Date")}} object for handling date and time since its first days. However, the `Date` API is based on the poorly designed `java.util.Date` class from Java, which was already removed from Java since 2000s; but, because of JavaScript's goal of backward compatibility, `Date` sticks around in the language.

The important lesson to preface the whole introduction is that **date handling is complex**. One of the fundamental flaws of `Date` is that it tries to simplify the model too much and in the process introduces too many footguns. Let's start with the first principles of how dates are represented. If we want to speak about a unique instant in history, there are two ways to do so:

- As a timestamp: the number of milliseconds or nanoseconds elapsed since a fixed point in time (known as the _epoch_). `Date` objects are fundamentally timestamps.
- As a combination of components: year, month, day, hour, minute, second, millisecond, and nanosecond. The year, month, and day identifiers only make sense with reference to a _calendar system_. The whole combination maps to a unique instant in history when associated with a time zone. `Date` objects provide methods for reading and modifying these components.

Time zone underlies a significant number of date-related bugs. When interacting with a `Date` via the "combination of components" model, the time can only be in two time zones: UTC and local (device), and there's no way to specify an arbitrary time zone. Also lacking is the concept of "no time zone": this is known as a _calendar date_ (for dates) or _wall-clock time_ (for times), which is a time you "read off a calendar or clock". For example, if you are setting a daily wake up alarm, you will want to set it to "8:00AM" regardless of whether it is daylight saving time or not, whether you have traveled to a different time zone, etc.

A second feature lacking from `Date` is the calendar system. Most people may be familiar with the Gregorian calendar, where there are two eras: BC and AD, there are 12 months, each month has a different number of days, there's a leap year every 4 years, etc. However, some of these concepts may not apply when you are working with another calendar system, such as the Hebrew calendar, the Chinese calendar, the Japanese calendar, etc. With `Date`, you can only work with the Gregorian calendar model.

There are many other undesirable legacies about `Date`, such as all setters being mutating (which often causes unwanted side effects), the [datetime string format](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) being impossible to parse in a consistent way, etc. In the end, the best solution is to build a new API from scratch, which is what `Temporal` is.

### API overview

`Temporal` is a namespace, like {{jsxref("Intl")}}. It contains several classes and namespaces, each of which is designed to handle a specific aspect of date and time management. The classes can be grouped as such:

- Representing a time duration (a difference between two time points): {{jsxref("Temporal.Duration")}}
- Representing a time point:
  - Representing a unique instant in history:
    - As a timestamp: {{jsxref("Temporal.Instant")}}
    - As a datetime component combination paired with a time zone: {{jsxref("Temporal.ZonedDateTime")}}
  - Representing a time zone-unaware date/time (which are all prefixed with "Plain"):
    - Date (year, month, day) + time (hour, minute, second, millisecond, nanosecond): {{jsxref("Temporal.PlainDateTime")}} (Note: `ZonedDateTime` is equivalent to `PlainDateTime` plus a time zone)
      - Date (year, month, day): {{jsxref("Temporal.PlainDate")}}
        - Year, month: {{jsxref("Temporal.PlainYearMonth")}}
        - Month, day: {{jsxref("Temporal.PlainMonthDay")}}
      - Time (hour, minute, second, millisecond, nanosecond): {{jsxref("Temporal.PlainTime")}}

Furthermore, there's also another utility namespace, {{jsxref("Temporal.Now")}}, which provides methods for getting the current time in various formats.

### Shared class interface

There are many classes in the `Temporal` namespace, but they share many similar methods. The following methods are available on all classes:

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

With these two tables, you should have a basic idea of how to navigate the `Temporal` API.

## Static properties

- {{jsxref("Temporal.Duration")}}
  - : Represents a difference between two time points, which can be used in datetime arithmetic. It is fundamentally represented as a combination of years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, and nanoseconds values.
- {{jsxref("Temporal.Instant")}}
  - : Represents a unique point in history, with nanosecond precision. It is fundamentally represented as the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC), without any time zone or calendar system.
- {{jsxref("Temporal.Now")}}
  - : Provides methods for getting the current time in various formats.
- {{jsxref("Temporal.PlainDate")}}
  - : Represents a date without a time or time zone (a calendar date); for example, an event on a calendar which happens during the whole day no matter which time zone it's happening in. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system.
- {{jsxref("Temporal.PlainDateTime")}}
  - : Represents a date (calendar date) and time (wall-clock time) without a time zone. It is fundamentally represented as a combination of a [date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (with an associated calendar system) and a [time](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).
- {{jsxref("Temporal.PlainMonthDay")}}
  - : Represents the month and day of a calendar date, without a year or time zone; for example, an event on a calendar that recurs every year and happens during the whole day. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The year is used to disambiguate the month-day in some calendar systems.
- {{jsxref("Temporal.PlainTime")}}
  - : Represents a time without a date or time zone; for example, a recurring event that happens at the same time every day. It is fundamentally represented as a combination of hour, minute, second, millisecond, microsecond, and nanosecond values.
- {{jsxref("Temporal.PlainYearMonth")}}
  - : Represents the year and month of a calendar date, without a day or time zone; for example, an event on a calendar that happens during the whole month. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The day is used to disambiguate the year-month in some calendar systems.
- {{jsxref("Temporal.ZonedDateTime")}}
  - : Represents a date and time with a time zone. It is fundamentally represented as a combination of an [instant](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant), a time zone, and a calendar system.
- `Temporal[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
