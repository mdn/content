---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
page-type: javascript-class
browser-compat: javascript.builtins.Date
---

{{JSRef}}

JavaScript **`Date`** objects represent a single moment in time in a platform-independent format. `Date` objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the _epoch_).

> **Note:** TC39 is working on [Temporal](https://tc39.es/proposal-temporal/docs/index.html), a new Date/Time API. Read more about it on the [Igalia blog](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/). It is not yet ready for production use!

## Description

### The epoch, timestamps, and invalid date

A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the [epoch](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range), which is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the [UNIX epoch](/en-US/docs/Glossary/Unix_time)). This timestamp is _timezone-agnostic_ and uniquely defines an instant in history.

> **Note:** While the time value at the heart of a Date object is UTC, the basic methods to fetch the date and time or its components all work in the local (i.e. host system) time zone and offset.

The maximum timestamp representable by a `Date` object is slightly smaller than the maximum safe integer ({{jsxref("Number.MAX_SAFE_INTEGER")}}, which is 9,007,199,254,740,991). A `Date` object can represent a maximum of ±8,640,000,000,000,000 milliseconds, or ±100,000,000 (one hundred million) days, relative to the epoch. This is the range from April 20, 271821 BC to September 13, 275760 AD. Any attempt to represent a time outside this range results in the `Date` object holding a timestamp value of [`NaN`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), which is an "Invalid Date".

```js
console.log(new Date(8.64e15).toString()); // "Sat Sep 13 275760 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(new Date(8.64e15 + 1).toString()); // "Invalid Date"
```

There are various methods that allow you to interact with the timestamp stored in the date:

- You can interact with the timestamp value directly using the {{jsxref("Date/getTime", "getTime()")}} and {{jsxref("Date/setTime", "setTime()")}} methods.
- The {{jsxref("Date/valueOf", "valueOf()")}} and [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive) (when passed `"number"`) methods — which are automatically called in [number coercion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) — return the timestamp, causing `Date` objects to behave like their timestamps when used in number contexts.
- All static methods ({{jsxref("Date.now()")}}, {{jsxref("Date.parse()")}}, and {{jsxref("Date.UTC()")}}) return timestamps instead of `Date` objects.
- The {{jsxref("Date/Date", "Date()")}} constructor can be called with a timestamp as the only argument.

### Date components and time zones

A date is represented internally as a single number, the _timestamp_. When interacting with it, the timestamp needs to be interpreted as a structured date-and-time representation. There are always two ways to interpret a timestamp: as a local time or as a Coordinated Universal Time (UTC), the global standard time defined by the World Time Standard. The local timezone is not stored in the date object, but is determined by the host environment (user's device).

> **Note:** UTC should not be confused with the [Greenwich Mean Time](https://en.wikipedia.org/wiki/Greenwich_Mean_Time) (GMT), because they are not always equal — this is explained in more detail in the linked Wikipedia page.

For example, the timestamp 0 represents a unique instant in history, but it can be interpreted in two ways:

- As a UTC time, it is midnight at the beginning of January 1, 1970, UTC,
- As a local time in New York (UTC-5), it is 19:00:00 on December 31, 1969.

The {{jsxref("Date/getTimezoneOffset", "getTimezoneOffset()")}} method returns the difference between UTC and the local time in minutes. Note that the timezone offset does not only depend on the current timezone, but also on the time represented by the `Date` object, because of daylight saving time and historical changes. In essence, the timezone offset is the offset from UTC time, at the time represented by the `Date` object and at the location of the host environment.

There are two groups of `Date` methods: one group gets and sets various date components by interpreting the timestamp as a local time, while the other uses UTC.

<table class="standard-table">
  <thead>
    <tr>
      <th rowspan="2">Component</th>
      <th colspan="2">Local</th>
      <th colspan="2">UTC</th>
    </tr>
    <tr>
      <th>Get</th>
      <th>Set</th>
      <th>Get</th>
      <th>Set</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Year</td>
      <td>{{jsxref("Date/getFullYear", "getFullYear()")}}</td>
      <td>{{jsxref("Date/setFullYear", "setFullYear()")}}</td>
      <td>{{jsxref("Date/getUTCFullYear", "getUTCFullYear()")}}</td>
      <td>{{jsxref("Date/setUTCFullYear", "setUTCFullYear()")}}</td>
    </tr>
    <tr>
      <td>Month</td>
      <td>{{jsxref("Date/getMonth", "getMonth()")}}</td>
      <td>{{jsxref("Date/setMonth", "setMonth()")}}</td>
      <td>{{jsxref("Date/getUTCMonth", "getUTCMonth()")}}</td>
      <td>{{jsxref("Date/setUTCMonth", "setUTCMonth()")}}</td>
    </tr>
    <tr>
      <td>Date (of month)</td>
      <td>{{jsxref("Date/getDate", "getDate()")}}</td>
      <td>{{jsxref("Date/setDate", "setDate()")}}</td>
      <td>{{jsxref("Date/getUTCDate", "getUTCDate()")}}</td>
      <td>{{jsxref("Date/setUTCDate", "setUTCDate()")}}</td>
    </tr>
    <tr>
      <td>Hours</td>
      <td>{{jsxref("Date/getHours", "getHours()")}}</td>
      <td>{{jsxref("Date/setHours", "setHours()")}}</td>
      <td>{{jsxref("Date/getUTCHours", "getUTCHours()")}}</td>
      <td>{{jsxref("Date/setUTCHours", "setUTCHours()")}}</td>
    </tr>
    <tr>
      <td>Minutes</td>
      <td>{{jsxref("Date/getMinutes", "getMinutes()")}}</td>
      <td>{{jsxref("Date/setMinutes", "setMinutes()")}}</td>
      <td>{{jsxref("Date/getUTCMinutes", "getUTCMinutes()")}}</td>
      <td>{{jsxref("Date/setUTCMinutes", "setUTCMinutes()")}}</td>
    </tr>
    <tr>
      <td>Seconds</td>
      <td>{{jsxref("Date/getSeconds", "getSeconds()")}}</td>
      <td>{{jsxref("Date/setSeconds", "setSeconds()")}}</td>
      <td>{{jsxref("Date/getUTCSeconds", "getUTCSeconds()")}}</td>
      <td>{{jsxref("Date/setUTCSeconds", "setUTCSeconds()")}}</td>
    </tr>
    <tr>
      <td>Milliseconds</td>
      <td>{{jsxref("Date/getMilliseconds", "getMilliseconds()")}}</td>
      <td>{{jsxref("Date/setMilliseconds", "setMilliseconds()")}}</td>
      <td>{{jsxref("Date/getUTCMilliseconds", "getUTCMilliseconds()")}}</td>
      <td>{{jsxref("Date/setUTCMilliseconds", "setUTCMilliseconds()")}}</td>
    </tr>
    <tr>
      <td>Day (of week)</td>
      <td>{{jsxref("Date/getDay", "getDay()")}}</td>
      <td>N/A</td>
      <td>{{jsxref("Date/getUTCDay", "getUTCDay()")}}</td>
      <td>N/A</td>
    </tr>
  </tbody>
</table>

The {{jsxref("Date/Date", "Date()")}} constructor can be called with two or more arguments, in which case they are interpreted as the year, month, day, hour, minute, second, and millisecond, respectively, in local time. {{jsxref("Date.UTC()")}} works similarly, but it interprets the components as UTC time and also accepts a single argument representing the year.

> **Note:** Some methods, including the `Date()` constructor, `Date.UTC()`, and the deprecated {{jsxref("Date/getYear", "getYear()")}}/{{jsxref("Date/setYear", "setYear()")}} methods, interpret a two-digit year as a year in the 1900s. For example, `new Date(99, 5, 24)` is interpreted as June 24, 1999, not June 24, 99. See [Interpretation of two-digit years](#interpretation_of_two-digit_years) for more information.

When a segment overflows or underflows its expected range, it usually "carries over to" or "borrows from" the higher segment. For example, if the month is set to 12 (months are zero-based, so December is 11), it become the January of the next year. If the day of month is set to 0, it becomes the last day of the previous month. This also applies to dates specified with the [date time string format](#date_time_string_format).

### Date time string format

There are many ways to format a date as a string. The JavaScript specification only specifies one format to be universally supported: the [_date time string format_](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-date-time-string-format), a simplification of the ISO 8601 calendar date extended format. The format is as follows:

```
YYYY-MM-DDTHH:mm:ss.sssZ
```

- `YYYY` is the year, with four digits (`0000` to `9999`), or as an _expanded year_ of `+` or `-` followed by six digits. The sign is required for expanded years. `-000000` is explicitly disallowed as a valid year.
- `MM` is the month, with two digits (`01` to `12`). Defaults to `01`.
- `DD` is the day of the month, with two digits (`01` to `31`). Defaults to `01`.
- `T` is a literal character, which indicates the beginning of the _time_ part of the string. The `T` is required when specifying the time part.
- `HH` is the hour, with two digits (`00` to `23`). As a special case, `24:00:00` is allowed, and is interpreted as midnight at the beginning of the next day. Defaults to `00`.
- `mm` is the minute, with two digits (`00` to `59`). Defaults to `00`.
- `ss` is the second, with two digits (`00` to `59`). Defaults to `00`.
- `sss` is the millisecond, with three digits (`000` to `999`). Defaults to `000`.
- `Z` is the timezone offset, which can either be the literal character `Z` (indicating UTC), or `+` or `-` followed by `HH:mm`, the offset in hours and minutes from UTC.

Various components can be omitted, so the following are all valid:

- Date-only form: `YYYY`, `YYYY-MM`, `YYYY-MM-DD`
- Date-time form: one of the above date-only forms, followed by `T`, followed by `HH:mm`, `HH:mm:ss`, or `HH:mm:ss.sss`. Each combination can be followed by a time zone offset.

For example, `"2011-10-10"` (_date-only_ form), `"2011-10-10T14:48:00"` (_date-time_ form), or `"2011-10-10T14:48:00.000+09:00"` (_date-time_ form with milliseconds and time zone) are all valid date time strings.

When the time zone offset is absent, **date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time.** This is due to a historical spec error that was not consistent with ISO 8601 but could not be changed due to web compatibility. See [Broken Parser – A Web Reality Issue](https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/).

{{jsxref("Date.parse()")}} and the {{jsxref("Date/Date", "Date()")}} constructor both accept strings in the date time string format as input. Furthermore, implementations are allowed to support other date formats when the input fails to match this format.

The {{jsxref("Date/toISOString", "toISOString()")}} method returns a string representation of the date in the date time string format, with the time zone offset always set to `Z` (UTC).

> **Note:** You are encouraged to make sure your input conforms to the date time string format above for maximum compatibility, because support for other formats is not guaranteed. However, there are some formats that are supported in all major implementations — like {{rfc(2822)}} format — in which case their usage can be acceptable. Always conduct [cross-browser tests](/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing) to ensure your code works in all target browsers. A library can help if many different formats are to be accommodated.

Non-standard strings can be parsed in any way as desired by the implementation, including the time zone — most implementations use the local time zone by default. Implementations are not required to return invalid date for out-of-bounds date components, although they usually do. A string may have in-bounds date components (with the bounds defined above), but does not represent a date in reality (for example, "February 30"). Implementations behave inconsistently in this case. The [`Date.parse()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#examples) page offers more examples about these non-standard cases.

### Other ways to format a date

- {{jsxref("Date/toISOString", "toISOString()")}} returns a string in the format `1970-01-01T00:00:00.000Z` (the date time string format introduced above, which is simplified [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)). {{jsxref("Date/toJSON", "toJSON()")}} calls `toISOString()` and returns the result.
- {{jsxref("Date/toString", "toString()")}} returns a string in the format `Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)`, while {{jsxref("Date/toDateString", "toDateString()")}} and {{jsxref("Date/toTimeString", "toTimeString()")}} return the date and time parts of the string, respectively. [`[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive) (when passed `"string"` or `"default"`) calls `toString()` and returns the result.
- {{jsxref("Date/toUTCString", "toUTCString()")}} returns a string in the format `Thu, 01 Jan 1970 00:00:00 GMT` (generalized {{rfc(7231)}}).
- {{jsxref("Date/toLocaleDateString", "toLocaleDateString()")}}, {{jsxref("Date/toLocaleTimeString", "toLocaleTimeString()")}}, and {{jsxref("Date/toLocaleString", "toLocaleString()")}} use locale-specific date and time formats, usually provided by the [`Intl`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) API.

See the [Formats of `toString` method return values](#formats_of_tostring_method_return_values) section for examples.

## Constructor

- {{jsxref("Date/Date", "Date()")}}
  - : When called as a constructor, returns a new `Date` object. When called as a function, returns a string representation of the current date and time.

## Static methods

- {{jsxref("Date.now()")}}
  - : Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
- {{jsxref("Date.parse()")}}
  - : Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.
- {{jsxref("Date.UTC()")}}
  - : Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

## Instance properties

These properties are defined on `Date.prototype` and shared by all `Date` instances.

- {{jsxref("Object/constructor", "Date.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Date` instances, the initial value is the {{jsxref("Date/Date", "Date")}} constructor.

## Instance methods

- {{jsxref("Date.prototype.getDate()")}}
  - : Returns the day of the month (`1` – `31`) for the specified date according to local time.
- {{jsxref("Date.prototype.getDay()")}}
  - : Returns the day of the week (`0` – `6`) for the specified date according to local time.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Returns the year (4 digits for 4-digit years) of the specified date according to local time.
- {{jsxref("Date.prototype.getHours()")}}
  - : Returns the hour (`0` – `23`) in the specified date according to local time.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : Returns the milliseconds (`0` – `999`) in the specified date according to local time.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : Returns the minutes (`0` – `59`) in the specified date according to local time.
- {{jsxref("Date.prototype.getMonth()")}}
  - : Returns the month (`0` – `11`) in the specified date according to local time.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : Returns the seconds (`0` – `59`) in the specified date according to local time.
- {{jsxref("Date.prototype.getTime()")}}
  - : Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Returns the time-zone offset in minutes for the current locale.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Returns the day (date) of the month (`1` – `31`) in the specified date according to universal time.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Returns the day of the week (`0` – `6`) in the specified date according to universal time.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Returns the year (4 digits for 4-digit years) in the specified date according to universal time.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Returns the hours (`0` – `23`) in the specified date according to universal time.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Returns the milliseconds (`0` – `999`) in the specified date according to universal time.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Returns the minutes (`0` – `59`) in the specified date according to universal time.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Returns the month (`0` – `11`) in the specified date according to universal time.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Returns the seconds (`0` – `59`) in the specified date according to universal time.
- {{jsxref("Date.prototype.getYear()")}} {{Deprecated_Inline}}
  - : Returns the year (usually 2–3 digits) in the specified date according to local time. Use {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}} instead.
- {{jsxref("Date.prototype.setDate()")}}
  - : Sets the day of the month for a specified date according to local time.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.
- {{jsxref("Date.prototype.setHours()")}}
  - : Sets the hours for a specified date according to local time.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Sets the milliseconds for a specified date according to local time.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Sets the minutes for a specified date according to local time.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Sets the month for a specified date according to local time.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Sets the seconds for a specified date according to local time.
- {{jsxref("Date.prototype.setTime()")}}
  - : Sets the {{jsxref("Date")}} object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Sets the day of the month for a specified date according to universal time.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Sets the hour for a specified date according to universal time.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Sets the milliseconds for a specified date according to universal time.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Sets the minutes for a specified date according to universal time.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Sets the month for a specified date according to universal time.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Sets the seconds for a specified date according to universal time.
- {{jsxref("Date.prototype.setYear()")}} {{Deprecated_Inline}}
  - : Sets the year (usually 2–3 digits) for a specified date according to local time. Use {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} instead.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Returns the "date" portion of the {{jsxref("Date")}} as a human-readable string like `'Thu Apr 12 2018'`.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Converts a date to a string following the ISO 8601 Extended Format.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Returns a string representing the {{jsxref("Date")}} using {{jsxref("Date.prototype.toISOString()", "toISOString()")}}. Intended for use by {{jsxref("JSON.stringify()")}}.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Returns a string with a locality sensitive representation of the date portion of this date based on system settings.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Returns a string with a locality-sensitive representation of this date. Overrides the {{jsxref("Object.prototype.toLocaleString()")}} method.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.
- {{jsxref("Date.prototype.toString()")}}
  - : Returns a string representing the specified {{jsxref("Date")}} object. Overrides the {{jsxref("Object.prototype.toString()")}} method.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Returns the "time" portion of the {{jsxref("Date")}} as a human-readable string.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Converts a date to a string using the UTC timezone.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Returns the primitive value of a {{jsxref("Date")}} object. Overrides the {{jsxref("Object.prototype.valueOf()")}} method.
- [`Date.prototype[@@toPrimitive]()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive)
  - : Converts this `Date` object to a primitive value.

## Examples

### Several ways to create a Date object

The following examples show several ways to create JavaScript dates:

> **Note:** Creating a date from a string has a lot of behavior inconsistencies. See [date time string format](#date_time_string_format) for caveats on using different formats.

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp
```

### Formats of toString method return values

```js
const date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)
date[Symbol.toPrimitive]("string"); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM
```

### To get Date, Month and Year or Time

```js
const date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] as month are 0-indexed
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
// [16, 45, 30]
```

### Interpretation of two-digit years

`new Date()` exhibits legacy undesirable, inconsistent behavior with two-digit year values; specifically, when a `new Date()` call is given a two-digit year value, that year value does not get treated as a literal year and used as-is but instead gets interpreted as a relative offset — in some cases as an offset from the year `1900`, but in other cases, as an offset from the year `2000`.

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Legacy method; always interprets two-digit year values as relative to 1900
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

So, to create and get dates between the years `0` and `99`, instead use the preferred {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} and {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}} methods:.

```js
// Preferred method; never interprets any value as being a relative offset,
// but instead uses the year value as-is
date.setFullYear(98);
date.getFullYear(); // 98 (not 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (not 1922, not 2022)
```

### Calculating elapsed time

The following examples show how to determine the elapsed time between two JavaScript dates in milliseconds.

Due to the differing lengths of days (due to daylight saving changeover), months, and years, expressing elapsed time in units greater than hours, minutes, and seconds requires addressing a number of issues, and should be thoroughly researched before being attempted.

```js
// Using Date objects
const start = Date.now();

// The event to time goes here:
doSomethingForALongTime();
const end = Date.now();
const elapsed = end - start; // elapsed time in milliseconds
```

```js
// Using built-in methods
const start = new Date();

// The event to time goes here:
doSomethingForALongTime();
const end = new Date();
const elapsed = end.getTime() - start.getTime(); // elapsed time in milliseconds
```

```js
// To test a function and get back its return
function printElapsedTime(testFn) {
  const startTime = Date.now();
  const result = testFn();
  const endTime = Date.now();

  console.log(`Elapsed time: ${String(endTime - startTime)} milliseconds`);
  return result;
}

const yourFunctionReturn = printElapsedTime(yourFunction);
```

> **Note:** In browsers that support the {{domxref("performance_property", "Web Performance API", "", 1)}}'s high-resolution time feature, {{domxref("Performance.now()")}} can provide more reliable and precise measurements of elapsed time than {{jsxref("Date.now()")}}.

### Get the number of seconds since the ECMAScript Epoch

```js
const seconds = Math.floor(Date.now() / 1000);
```

In this case, it's important to return only an integer—so a simple division won't do. It's also important to only return actually elapsed seconds. (That's why this code uses {{jsxref("Math.floor()")}}, and _not_ {{jsxref("Math.round()")}}.)

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Date/Date", "Date()")}} constructor
