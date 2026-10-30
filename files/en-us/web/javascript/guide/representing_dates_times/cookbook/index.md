---
title: Temporal cookbook
slug: Web/JavaScript/Guide/Representing_dates_times/Cookbook
page-type: how-to
sidebar: jssidebar
---

> [!NOTE]
> This document is based on the [Cookbook](https://tc39.es/proposal-temporal/docs/cookbook.html) in the original TC39 proposal docs.

This guide provides snippets for some common use cases of {{jsxref("Temporal")}}. You should probably first read the [Representing dates & times](/en-US/docs/Web/JavaScript/Guide/Representing_dates_times) guide to understand the fundamental concepts and the API surface of `Temporal`.

## Current date and time

[How to get the current date and time in the local time zone?](https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript)

```js
const date = Temporal.Now.plainDateISO(); // Gets the current date
date.toString(); // returns the date in ISO 8601 date format

// If you additionally want the time:
Temporal.Now.plainDateTimeISO().toString(); // date and time in ISO 8601 format
```

Note that if you just want the date and not the time, you should use `Temporal.PlainDate`. If you want both, use `Temporal.PlainDateTime`.

## Unix timestamp

[How to get a Unix timestamp?](https://stackoverflow.com/questions/221294/how-do-you-get-a-timestamp-in-javascript)

```js
const timeStamp = Temporal.Now.instant();

// Timestamp in milliseconds
timeStamp.epochMilliseconds;

// Timestamp in seconds
Math.floor(timeStamp.epochMilliseconds / 1000);
```

## Converting between `Temporal` types and legacy `Date`

### Legacy `Date` to `Temporal.Instant` and/or `Temporal.ZonedDateTime`

Here's how to convert legacy ECMAScript `Date` into a `Temporal.Instant` or `Temporal.ZonedDateTime` instance corresponding to the same instant in exact time.

If you need a `ZonedDateTime`, use the `toZonedDateTimeISO()` method of the resulting `Instant`. You will need to specify a time zone, because legacy `Date` only stores an exact time, and does not store a time zone.

When calling methods on a legacy `Date` instance, you must decide whether you want that exact time interpreted as a UTC value (using methods containing "UTC" in their names) or in the current system time zone (using other methods). This is confusing, so `Temporal` has a more explicit way to do this.

To use the system's local time zone, which corresponds to using legacy `Date`'s `getFullYear()`, `getMonth()`, etc. methods, pass `Temporal.Now.timeZoneId()` as the time zone. In a browser, this will be the user's time zone, but on a server the value may not be what you expect, so avoid doing this in a server context.

```js
const legacyDate = new Date("1970-01-01T00:00:01Z");
const instant = legacyDate.toTemporalInstant();

console.log(instant.epochMilliseconds === legacyDate.getTime()); // true
console.log(instant.toString()); // '1970-01-01T00:00:01Z'

const zoned = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());

console.log(zoned.epochMilliseconds === legacyDate.getTime()); // true
```

Here's an example of using a particular time zone. Especially in a server context, you would be getting this time zone from elsewhere in the data that you are processing. If the legacy `Date` instance was accessed using the `getUTCFullYear()`, `getUTCMonth()`, etc. methods, consider just using `Instant`. If you have to use `ZonedDateTime`, the specific time zone may need to be `"UTC"`.

```js
const zoned2 = instant.toZonedDateTimeISO("Asia/Shanghai");

console.log(zoned2.epochMilliseconds === legacyDate.getTime()); // true
console.log(zoned2.timeZoneId); // 'Asia/Shanghai'
```

### Date-only values: legacy `Date` to `Temporal.PlainDate`

A common bug arises from a simple question: what date (year, month, and day) is represented by this `Date`? The problem: the answer depends on the time zone. The same `Date` can be December 31 in San Francisco but January 1 in London or Tokyo.

Therefore, it's critical to interpret the `Date` in context of the correct time zone _before_ trying to extract the year, month, or day, or before doing calculations like "did this happen yesterday?" involving date units. For this reason, `Temporal.Instant` (which is the `Temporal` equivalent of `Date`) does not have `year`, `month`, `day` properties. To access date or time units in `Temporal`, a time zone must be provided, as described in the code example above.

Another bug-prone case is when `Date` is (ab)used to store a date-only value, like a user's date of birth. With `Date` these values are typically stored with midnight times, but to read back the date correctly you need to know which time zone's midnight was used to create the `Date`. For example, `new Date(2000, 0, 1)` uses the caller's time zone, while `new Date("2000-01-01")` uses UTC.

To correctly convert a date-only `Date` to a `Temporal.PlainDate` without being vulnerable to off-by-one-day bugs, you must determine which time zone's midnight was used to construct the `Date`, and then use that same time zone when converting from `Temporal.Instant` to `Temporal.PlainDate`.

```js
// Convert a year/month/day `Date` to a `Temporal.PlainDate`. Uses the caller's time zone.
let date = new Date(2000, 0, 1);
// Sat Jan 01 2000 00:00:00 GMT-0800 (Pacific Standard Time)
let plainDate = date
  .toTemporalInstant() // 2000-01-01T08:00:00Z
  .toZonedDateTimeISO(Temporal.Now.timeZoneId()) // 2000-01-01T00:00:00-08:00[America/Los_Angeles]
  .toPlainDate(); // 2000-01-01

console.log(plainDate.toString()); // '2000-01-01'

// Convert a year/month/day `Date` to a `Temporal.PlainDate`. Uses UTC.
date = new Date(Date.UTC(2000, 0, 1));
// Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
date = new Date("2000-01-01T00:00Z");
// Fri Dec 31 1999 16:00:00 GMT-0800 (Pacific Standard Time)
plainDate = date
  .toTemporalInstant() // 2000-01-01T00:00:00Z
  .toZonedDateTimeISO("UTC") // 2000-01-01T00:00:00+00:00[UTC]
  .toPlainDate(); // 2000-01-01

console.log(plainDate.toString()); // '2000-01-01'
```

### `Temporal` types to legacy `Date`

Legacy `Date` represents an exact time, so it's straightforward to convert a `Temporal.Instant` or `Temporal.ZonedDateTime` instance into a legacy `Date` instance that corresponds to it. To convert `Instant` to legacy `Date`, use the `epochMilliseconds` property.

```js
const instant = Temporal.Instant.from("2020-01-01T00:00:01.000999Z");
const result = new Date(instant.epochMilliseconds);

console.log(result.getTime()); // 1577836801000 // ms since Unix epoch
console.log(result.toISOString()); // '2020-01-01T00:00:01.000Z'
```

Same thing for `ZonedDateTime`. Note that legacy `Date` will not preserve the `ZonedDateTime`'s time zone.

```js
const zoned = Temporal.ZonedDateTime.from(
  "2020-01-01T00:00:01.001[Asia/Tokyo]",
);
const result2 = new Date(zoned.epochMilliseconds);

console.log(result2.getTime()); // 1577804401001 // note, different time
console.log(result2.toISOString()); // '2019-12-31T15:00:01.001Z'
```

For most use cases, `new Date(x.epochMilliseconds)` is fine. You may need to add an extra `round()` step if you want other rounding behavior than truncation. For example, here the 999 microseconds is rounded to 1 millisecond.

```js
const result3 = new Date(
  instant.round({ smallestUnit: "millisecond" }).epochMilliseconds,
);

console.log(result3.getTime()); // 1577836801001
console.log(result3.toISOString()); // '2020-01-01T00:00:01.001Z'
```

## Construction

### Calendar input element

You can use `Temporal` objects to set properties on a calendar control. Here is an example using an HTML `<input type="date">` element with any day beyond "today" disabled and not selectable.

(To get a `Temporal` object back out of the calendar control, see the [Future Date](#how_many_days_until_a_future_date) example.)

```html
<input type="date" id="calendar-input" />
```

```js
const datePicker = document.getElementById("calendar-input");
const today = Temporal.Now.plainDateISO();
datePicker.max = today;
datePicker.value = today;
```

{{EmbedLiveSample("Calendar input element", "100%", 100)}}

## Converting between types

### Noon on a particular date

An example of combining a calendar date (`Temporal.PlainDate`) and a wall-clock time (`Temporal.PlainTime`) into a `Temporal.PlainDateTime`.

```js
const date = Temporal.PlainDate.from("2020-05-14");

const noonOnDate = date.toPlainDateTime(Temporal.PlainTime.from({ hour: 12 }));

console.log(noonOnDate.toString()); // '2020-05-14T12:00:00'
```

### Birthday in 2030

An example of combining a day on the calendar (`Temporal.PlainMonthDay`) and a year into a `Temporal.PlainDate`.

```js
const birthday = Temporal.PlainMonthDay.from("12-15");

const birthdayIn2030 = birthday.toPlainDate({ year: 2030 });
birthdayIn2030.dayOfWeek; // 7

console.log(birthdayIn2030.toString()); // '2030-12-15'
```

## Serialization

### Zoned instant from instant and time zone

To serialize an exact-time `Temporal.Instant` into a string, use `toString()`. Without any arguments, this gives you a string in UTC time.

```js
const instant = Temporal.Instant.from("2020-01-03T10:41:51Z");

const result = instant.toString();

console.log(result); // '2020-01-03T10:41:51Z'
console.log(instant.equals(Temporal.Instant.from(result))); // true
```

If you need your string to include a UTC offset, then use the `timeZone` option of `Temporal.Instant.prototype.toString()` which will return a string serialization of the wall-clock time in that time zone corresponding to the exact time.

```js
const result2 = instant.toString({ timeZone: "America/Yellowknife" });

console.log(result2); // '2020-01-03T03:41:51-07:00'
console.log(instant.equals(Temporal.Instant.from(result2))); // true
```

This loses the information about which time zone the string was in, because it only preserves the UTC offset from the time zone at that particular exact time. If you need your string to include the time zone name, use `Temporal.ZonedDateTime` instead, which retains this information.

```js
const zoned = instant.toZonedDateTimeISO("Asia/Seoul");
const result3 = zoned.toString();

console.log(result3); // '2020-01-03T19:41:51+09:00[Asia/Seoul]'
console.log(instant.equals(Temporal.Instant.from(result3))); // true
console.log(zoned.equals(Temporal.ZonedDateTime.from(result3))); // true
```

## Sorting

Each `Temporal` type except `Temporal.PlainMonthDay` has a `compare()` static method, which can be passed to `Array.prototype.sort()` as the compare function in order to sort an array of `Temporal` types.

### Sort PlainDateTime values

Sort a list of `Temporal.PlainDateTime`s, for example in order to get a conference schedule in the correct order. Sorting other `Temporal` types would work exactly the same way. The following function returns a sorted copy of the array, with an optional `reverse` argument for descending order.

```js
function getSortedLocalDateTimes(dateTimes, reverse = false) {
  let newDateTimes = Array.from(dateTimes).sort(Temporal.PlainDateTime.compare);

  return reverse ? newDateTimes.reverse() : newDateTimes;
}

// Sorting some conferences without timezones for example vue.js Amsterdam 2020
const a = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 8,
  minute: 45,
}); // Introduction
const b = Temporal.PlainDateTime.from({
  year: 2020,
  day: 21,
  month: 2,
  hour: 13,
  minute: 10,
}); // Lunch Break
const c = Temporal.PlainDateTime.from({
  year: 2020,
  day: 20,
  month: 2,
  hour: 15,
  minute: 30,
}); // Coffee Break
const results = getSortedLocalDateTimes([a, b, c]);
console.log(results.map((x) => x.toString()));
// ['2020-02-20T08:45:00', '2020-02-20T15:30:00', '2020-02-21T13:10:00']
```

### Sort ISO date/time strings

Sort a list of ISO 8601 or RFC 9557 date/time strings, for example to place log entries in order. The following function takes an array of strings parseable as `Temporal.Instant` values and returns a copy sorted by exact time, with an optional `reverse` argument for descending order.

```js
function sortInstantStrings(strings, reverse = false) {
  const sortedInstants = strings
    .map((v) => [v, Temporal.Instant.from(v)])
    .sort(([, i1], [, i2]) => Temporal.Instant.compare(i1, i2))
    .map(([str]) => str);

  return reverse ? sortedInstants.reverse() : sortedInstants;
}

// simple string comparison order would not be correct here:
const a = "2020-01-23T17:04:36.491865121-08:00";
const b = "2020-02-10T17:04:36.491865121-08:00";
const c = "2020-04-01T05:01:00-04:00[America/New_York]";
const d = "2020-04-01T10:00:00+01:00[Europe/London]";
const e = "2020-04-01T11:02:00+02:00[Europe/Berlin]";

const results = sortInstantStrings([a, b, c, d, e]);

// results will have correct order
console.log(results);
// [
//   '2020-01-23T17:04:36.491865121-08:00',
//   '2020-02-10T17:04:36.491865121-08:00',
//   '2020-04-01T10:00:00+01:00[Europe/London]',
//   '2020-04-01T05:01:00-04:00[America/New_York]',
//   '2020-04-01T11:02:00+02:00[Europe/Berlin]'
// ]
```

## Rounding

### Round a time down to whole hours

Use the `round()` method of each `Temporal` type if you want to round the time fields. Here's an example of rounding a time _down_ to the previously occurring whole hour:

```js
const time = Temporal.PlainTime.from("12:38:28.138818731");

const wholeHour = time.round({ smallestUnit: "hour", roundingMode: "floor" });

console.log(wholeHour.toString()); // '12:00:00'
```

### Round a date to the nearest start of the month

Rounding is only defined for time fields. Rounding a date field can be ambiguous, so date-only types such as `Temporal.PlainDate` don't have a `round()` method. If you need to round a date to the nearest month, for example, then you must explicitly pick what kind of rounding you want. Here is an example of rounding to the nearest start of a month, rounding up in case of a tie:

```js
const date = Temporal.PlainDate.from("2018-09-16");

const firstOfCurrentMonth = date.with({ day: 1 });
const firstOfNextMonth = firstOfCurrentMonth.add({ months: 1 });

const sinceCurrent = date.since(firstOfCurrentMonth);
const untilNext = date.until(firstOfNextMonth);

const isCloserToNextMonth =
  Temporal.Duration.compare(sinceCurrent, untilNext) >= 0;
const nearestMonth = isCloserToNextMonth
  ? firstOfNextMonth
  : firstOfCurrentMonth;

console.log(nearestMonth.toString()); // '2018-10-01'
```

See also [Push back a launch date](#push_back_a_launch_date) for an easier way to round up unconditionally to the _next_ start of a month.

## Time zone conversion

### Preserving local time

Map a zoneless date and time of day into a `Temporal.Instant` instance at which the local date and time of day in a specified time zone matches it. This is easily done with `dateTime.toZonedDateTime(timeZone).toInstant()`, but here is an example of implementing different disambiguation behaviors than the `"compatible"`, `"earlier"`, `"later"`, and `"reject"` ones built in to `Temporal`. The following function takes a `Temporal.PlainDateTime`, a time zone identifier, and a disambiguation mode (defaulting to `"earlier"`). It returns a `Temporal.Instant` and supports two additional modes:

- `"clipEarlier"`: Uses the earlier instant when the clock moves backward, or the instant just before the transition when the clock moves forward.
- `"clipLater"`: Uses the later instant when the clock moves backward, or the instant of the transition when the clock moves forward.

```js
function getInstantWithLocalTimeInZone(
  dateTime,
  timeZone,
  disambiguation = "earlier",
) {
  // Handle the built-in modes first
  if (["compatible", "earlier", "later", "reject"].includes(disambiguation)) {
    return dateTime.toZonedDateTime(timeZone, { disambiguation }).toInstant();
  }

  const possibilities = ["earlier", "later"].map((disambiguation) =>
    dateTime.toZonedDateTime(timeZone, { disambiguation }),
  );
  const instants = possibilities
    .map((zdt) => zdt.toInstant())
    .reduce((a, b) => (a.equals(b) ? [a] : [a, b]));

  // Return only possibility if no disambiguation needed
  if (instants.length === 1) return instants[0];

  switch (disambiguation) {
    case "clipEarlier":
      if (possibilities[0].toPlainDateTime().equals(dateTime)) {
        return instants[0];
      }
      return possibilities[0]
        .getTimeZoneTransition("next")
        .subtract({ nanoseconds: 1 })
        .toInstant();
    case "clipLater":
      if (possibilities[1].toPlainDateTime().equals(dateTime)) {
        return instants[1];
      }
      return possibilities[0].getTimeZoneTransition("next").toInstant();
  }
  throw new RangeError(`invalid disambiguation ${disambiguation}`);
}

const nonexistentGermanWallTime =
  Temporal.PlainDateTime.from("2019-03-31T02:45");

const germanResults = {
  earlier: "2019-03-31T01:45:00+01:00",
  later: "2019-03-31T03:45:00+02:00",
  compatible: "2019-03-31T03:45:00+02:00",
  clipEarlier: "2019-03-31T01:59:59.999999999+01:00",
  clipLater: "2019-03-31T03:00:00+02:00",
};
for (const [disambiguation, result] of Object.entries(germanResults)) {
  console.log(
    getInstantWithLocalTimeInZone(
      nonexistentGermanWallTime,
      "Europe/Berlin",
      disambiguation,
    ).toString({
      timeZone: "Europe/Berlin",
    }) === result,
  ); // true
}

const doubleEasternBrazilianWallTime =
  Temporal.PlainDateTime.from("2019-02-16T23:45");

const brazilianResults = {
  earlier: "2019-02-16T23:45:00-02:00",
  later: "2019-02-16T23:45:00-03:00",
  compatible: "2019-02-16T23:45:00-02:00",
  clipEarlier: "2019-02-16T23:45:00-02:00",
  clipLater: "2019-02-16T23:45:00-03:00",
};
for (const [disambiguation, result] of Object.entries(brazilianResults)) {
  console.log(
    getInstantWithLocalTimeInZone(
      doubleEasternBrazilianWallTime,
      "America/Sao_Paulo",
      disambiguation,
    ).toString({
      timeZone: "America/Sao_Paulo",
    }) === result,
  ); // true
}
```

### Preserving exact time

Map a zoned date and time of day into another zoned date and time of day in a target time zone at the corresponding exact time. This could be used when converting user-input date-time values between time zones.

```js
const source = Temporal.ZonedDateTime.from("2020-01-09T00:00[America/Chicago]");

const result = source.withTimeZone("America/Los_Angeles");

// On this date, when it's midnight in Chicago, it's 10 PM the previous night in LA
console.log(result.toString());
// '2020-01-08T22:00:00-08:00[America/Los_Angeles]'
```

Here is another example similar to the previous one, using the time zone for future events. The times and locations of a series of future meetings are stored as a pair of strings: one for the calendar date and wall-clock time, and one for the time zone. They cannot be stored as an exact time because between now and the time when the event happens, the time zone rules for daylight saving time could change — for example, Brazil abolished daylight saving time in 2019 — but the meeting would still be held at the same wall-clock time on that date. So if the time zone rules changed, the event's exact time would change.

This example calculates the starting times of all the Ecma TC39 meetings in 2019, in local time in Tokyo.

```js
// Dates of the 2019 TC39 meetings:
const tc39meetings = [
  {
    dateTime: "2019-01-28T10:00",
    timeZone: "America/Phoenix",
  },
  {
    dateTime: "2019-03-26T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-06-04T10:00",
    timeZone: "Europe/Berlin",
  },
  {
    dateTime: "2019-07-23T10:00",
    timeZone: "America/Los_Angeles",
  },
  {
    dateTime: "2019-10-01T10:00",
    timeZone: "America/New_York",
  },
  {
    dateTime: "2019-12-03T10:00",
    timeZone: "America/Los_Angeles",
  },
];

// To follow the meetings remotely from Tokyo, calculate the times you would
// need to join:
const localTimeZone = "Asia/Tokyo";
const localTimes = tc39meetings.map(({ dateTime, timeZone }) => {
  return Temporal.PlainDateTime.from(dateTime)
    .toZonedDateTime(timeZone, { disambiguation: "reject" })
    .withTimeZone(localTimeZone)
    .toPlainDateTime();
});

console.log(localTimes.map((dt) => dt.toString()));
// [
//   "2019-01-29T02:00:00",
//   "2019-03-26T23:00:00",
//   "2019-06-04T17:00:00",
//   "2019-07-24T02:00:00",
//   "2019-10-01T23:00:00",
//   "2019-12-04T03:00:00",
// ]
```

### Daily occurrence in local time

Similar to the previous recipe, calculate the exact times of a daily occurrence that happens at a particular local time in a particular time zone. The following generator takes a starting `Temporal.PlainDate`, a `Temporal.PlainTime`, and a time zone identifier, and yields each occurrence as a `Temporal.Instant`.

```js
function* calculateDailyOccurrence(startDate, plainTime, timeZone) {
  for (let date = startDate; ; date = date.add({ days: 1 })) {
    yield date.toZonedDateTime({ plainTime, timeZone }).toInstant();
  }
}

// Daily meeting at 8 AM California time
const startDate = Temporal.PlainDate.from("2017-03-10");
const time = Temporal.PlainTime.from("08:00");
const timeZone = "America/Los_Angeles";
const iter = calculateDailyOccurrence(startDate, time, timeZone);

console.log(iter.next().value.toString()); // '2017-03-10T16:00:00Z'
console.log(iter.next().value.toString()); // '2017-03-11T16:00:00Z'
// DST change:
console.log(iter.next().value.toString()); // '2017-03-12T15:00:00Z'
console.log(iter.next().value.toString()); // '2017-03-13T15:00:00Z'
```

### UTC offset for a zoned event, as a string

Use `Temporal.Instant.prototype.toZonedDateTimeISO()` and `Temporal.ZonedDateTime.offset` to map a `Temporal.Instant` instance and a time zone into the UTC offset at that exact time in that time zone, as a string.

```js
const instant = Temporal.Instant.from("2020-01-09T00:00Z");

const source = instant.toZonedDateTimeISO("America/New_York");
source.offset; // '-05:00'
```

### UTC offset for a zoned event, as a number of seconds

Similarly, use `Temporal.Instant.prototype.toZonedDateTimeISO()` and `Temporal.ZonedDateTime.offsetNanoseconds` to do the same thing for the offset as a number of seconds. (Remember to divide by 10<sup>9</sup> to convert nanoseconds to seconds.)

```js
const instant = Temporal.Instant.from("2020-01-09T00:00Z");

instant.toZonedDateTimeISO("America/New_York").offsetNanoseconds / 1e9;
// -18000
```

### Offset between two time zones at an exact time

Also using `Temporal.Instant.prototype.toZonedDateTimeISO()` and `Temporal.ZonedDateTime.offsetNanoseconds`, we can map a `Temporal.Instant` instance and two time zones into the signed difference of UTC offsets between those time zones at that exact time, as a number of seconds.

```js
function getUtcOffsetDifferenceSecondsAtInstant(
  instant,
  sourceTimeZone,
  targetTimeZone,
) {
  const sourceOffsetNs =
    instant.toZonedDateTimeISO(sourceTimeZone).offsetNanoseconds;
  const targetOffsetNs =
    instant.toZonedDateTimeISO(targetTimeZone).offsetNanoseconds;
  return (targetOffsetNs - sourceOffsetNs) / 1e9;
}

const instant = Temporal.Instant.from("2020-01-09T00:00Z");

// At this exact time, Chicago is 3600 seconds earlier than New York
console.log(
  getUtcOffsetDifferenceSecondsAtInstant(
    instant,
    "America/New_York",
    "America/Chicago",
  ),
); // -3600
```

### Dealing with dates and times in a fixed location

Here is an example of `Temporal` used in a graph, showing fictitious activity for a storage tank in a fixed location (Stockholm, Sweden). The graph always starts at midnight in the tank's location, but the graph labels are in the viewer's time zone.

```html hidden
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
<canvas id="storage-tank" width="600" height="400"></canvas>
```

```js
// Generate fictitious "data"
const start = Temporal.Now.instant().subtract({ hours: 24 });
const blank = Array(24 * 12);
const tankDataX = Array.from(blank, (_, ix) => start.add({ minutes: ix * 5 }));
const tankDataY = Array.from(blank);
tankDataY[0] = 25;
for (let ix = 1; ix < tankDataY.length; ix++) {
  tankDataY[ix] = Math.max(0, tankDataY[ix - 1] + 3 * (Math.random() - 0.5));
}

// tankDataX and tankDataY are X and Y-axis data for the last 24 hours,
// obtained from elsewhere, e.g. const [tankDataX, tankDataY] = fetchData();
// tankDataX is an array of Temporal.Instant, and tankDataY is an array of numbers.

// Show data starting from the most recent midnight in the tank's location (Stockholm)
const tankTimeZone = "Europe/Stockholm";
const labelFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "short",
  hour: "numeric",
  minute: "numeric",
  timeZone: Temporal.Now.timeZoneId(),
});
const browserCalendar = labelFormatter.resolvedOptions().calendar;
const tankMidnight = Temporal.Now.zonedDateTimeISO()
  .withCalendar(browserCalendar)
  .withTimeZone(tankTimeZone)
  .startOfDay()
  .toInstant();
const atOrAfterMidnight = (x) => Temporal.Instant.compare(x, tankMidnight) >= 0;
const dataStartIndex = tankDataX.findIndex(atOrAfterMidnight);
const graphLabels = tankDataX
  .slice(dataStartIndex)
  .map((x) => labelFormatter.format(new Date(x.epochMilliseconds)));
const graphPoints = tankDataY.slice(dataStartIndex);

const ctx = document.getElementById("storage-tank").getContext("2d");
// The graph is made with Chart.js (https://www.chartjs.org/)
new Chart(ctx, {
  type: "line",
  data: {
    labels: graphLabels,
    datasets: [
      {
        label: "Fill level",
        data: graphPoints,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Stockholm storage tank",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
```

{{EmbedLiveSample("Dealing with dates and times in a fixed location", "100%", 500)}}

### Book a meeting across time zones

Across the web there are several tools for finding meeting times that are appropriate for all the participants' time zones, such as [World Time Buddy](https://www.worldtimebuddy.com/), [World Clock Meeting Planner](https://www.timeanddate.com/worldclock/meeting.html), and built into various calendar software.

```css hidden
#meeting-planner {
  border-collapse: separate;
  border-spacing: 0 10px;
  font-size: 0.6rem;
  text-align: center;
}

/* https://materializecss.com/color.html */
.time-0,
.time-1,
.time-2,
.time-3,
.time-4,
.time-5,
.time-22,
.time-23 {
  background-color: #ef9a9a; /* red lighten-3 */
  border-color: #e57373; /* red lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}
.time-6,
.time-7,
.time-18,
.time-19,
.time-20,
.time-21 {
  background-color: #fff59d; /* yellow lighten-3 */
  border-color: #ffd54f; /* amber lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}
.time-8,
.time-9,
.time-10,
.time-11,
.time-12,
.time-13,
.time-14,
.time-15,
.time-16,
.time-17 {
  background-color: #a5d6a7; /* green lighten-3 */
  border-color: #81c784; /* green lighten-2 */
  border-style: solid;
  border-width: 0 1px;
}

.time-0 {
  border-bottom-left-radius: 12px;
  border-left-color: white;
  border-left-width: 2px;
  border-top-left-radius: 12px;
  font-weight: bold;
}
.time-23 {
  border-bottom-right-radius: 12px;
  border-right-color: white;
  border-right-width: 2px;
  border-top-right-radius: 12px;
}

.time-current {
  border: 2px solid black;
}
```

```html hidden
<table id="meeting-planner"></table>
```

```js
// Display local time zone and three others
const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
const now = Temporal.Now.zonedDateTimeISO().withCalendar(browserCalendar);
const timeZones = [
  { name: "Here", tz: now.timeZoneId },
  { name: "New York", tz: "America/New_York" },
  { name: "London", tz: "Europe/London" },
  { name: "Tokyo", tz: "Asia/Tokyo" },
];

// Start the table at midnight local time
const startTime = now.startOfDay();

// Build the table
const table = document.getElementById("meeting-planner");
timeZones.forEach(({ name, tz }) => {
  const row = document.createElement("tr");

  const title = document.createElement("td");
  const startTimeHere = startTime.withTimeZone(tz);
  title.textContent = `${name} (UTC${startTimeHere.offset})`;
  row.appendChild(title);

  for (let hours = 0; hours < 24; hours++) {
    const cell = document.createElement("td");

    const columnTime = startTimeHere.add({ hours });
    cell.className = `time-${columnTime.hour}`;

    // Highlight the current hour in each row
    if (hours === now.hour) cell.className += " time-current";

    // Show the date in midnight cells
    let formatOptions;
    if (columnTime.hour === columnTime.startOfDay().hour) {
      formatOptions = { month: "short", day: "numeric" };
    } else {
      formatOptions = { hour: "numeric" };
    }
    cell.textContent = columnTime.toLocaleString(undefined, formatOptions);
    row.appendChild(cell);
  }

  table.appendChild(row);
});
```

{{EmbedLiveSample("Book a meeting across time zones", "100%", 200)}}

## Arithmetic

### How many days until a future date

An example HTML form inspired by [Days Calculator](https://www.timeanddate.com/date/durationresult.html) on timeanddate.com:

```html
<form>
  <label>
    Enter future date:
    <input type="date" name="futuredate" />
  </label>
  <button>Submit</button>
</form>

<div id="futuredate-results"></div>
```

```js
// Initialize the input; see 'Calendar input element'.
const futureDatePicker = document.querySelector('input[name="futuredate"]');
const today = Temporal.Now.plainDateISO();
futureDatePicker.min = today;
futureDatePicker.value = today.add({ months: 1 });

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const futuredateParam = futureDatePicker.value;
  if (!futuredateParam) return;

  const browserCalendar = new Intl.DateTimeFormat().resolvedOptions().calendar;
  const futureDate =
    Temporal.PlainDate.from(futuredateParam).withCalendar(browserCalendar);
  const today = Temporal.Now.plainDateISO().withCalendar(browserCalendar);
  const until = today.until(futureDate, { largestUnit: "day" });
  const untilMonths = until.round({ largestUnit: "month", relativeTo: today });

  const dayString = until.toLocaleString();
  const results = document.getElementById("futuredate-results");
  results.innerHTML = `
    <p>From and including: <strong>${today.toLocaleString()}</strong></p>
    <p>To but not including: <strong>${futureDate.toLocaleString()}</strong></p>
    <h4>Result: ${dayString}</h4>
    <p>It is ${dayString} from the start date to the end date, but not
    including the end date.</p>
    <p>Or ${untilMonths.toLocaleString()} excluding the end date.</p>
  `;
});
```

{{EmbedLiveSample("How many days until a future date", "100%", 350)}}

### Unit-constrained duration between now and a past/future zoned event

Take the difference between two `Temporal.Instant` instances as a `Temporal.Duration` instance (positive or negative), representing the duration between the two instants without using units coarser than specified (e.g., for presenting a meaningful countdown with vs. without using months or days).

```js
const result = Temporal.Instant.from("2020-01-09T04:00Z").since(
  Temporal.Instant.from("2020-01-09T00:00Z"),
  {
    largestUnit: "hour",
  },
);
console.log(`${result}`); // 'PT4H'

const result2 = Temporal.Instant.from("2020-01-09T00:00Z").until(
  Temporal.Instant.from("2020-01-09T04:00Z"),
  {
    largestUnit: "minute",
  },
);
console.log(`${result2}`); // 'PT240M'

// Example of using it in a countdown:

const duration = Temporal.Now.instant().until(
  Temporal.Instant.from("2020-04-01T13:00-07:00[America/Los_Angeles]"),
);
`It's ${duration.abs().toLocaleString()} ${duration.sign < 0 ? "since" : "until"} the TC39 Temporal presentation`;
```

### Next offset transition in a time zone

Map a `Temporal.ZonedDateTime` instance into another `Temporal.ZonedDateTime` instance representing the nearest following exact time at which there is an offset transition in the time zone (e.g., for setting reminders). The following function also takes an `inclusive` flag to include a transition at the starting instant, and returns `null` if no transition is known.

```js
function getNextOffsetTransitionFromExactTime(zonedDateTime, inclusive) {
  let nearest;
  if (inclusive) {
    // In case instant itself is the exact time of a transition:
    nearest = zonedDateTime
      .subtract({ nanoseconds: 1 })
      .getTimeZoneTransition("next");
  } else {
    nearest = zonedDateTime.getTimeZoneTransition("next");
  }
  return nearest;
}

const nycTime = Temporal.ZonedDateTime.from(
  "2019-04-16T21:01Z[America/New_York]",
);

const nextTransition = getNextOffsetTransitionFromExactTime(nycTime, false);
console.log(nextTransition.toString());
// '2019-11-03T01:00:00-05:00[America/New_York]'

// Inclusive
const sameTransition = getNextOffsetTransitionFromExactTime(
  nextTransition,
  true,
);
console.log(sameTransition.toString() === nextTransition.toString()); // true

// No known future DST transitions in a time zone
const reginaTime = Temporal.ZonedDateTime.from(
  "2019-04-16T21:01Z[America/Regina]",
);
console.log(getNextOffsetTransitionFromExactTime(reginaTime)); // null
```

### Comparison of an exact time to business hours

The following function takes a `Temporal.ZonedDateTime`, a weekly schedule, and a `Temporal.Duration` defining how soon is "soon". It returns "opening soon", "open", "closing soon", or "closed". The schedule is an array of seven entries, starting with Sunday; each entry is either `null` for a closed day or an object with `open` and `close` properties containing `Temporal.PlainTime` values.

```js
function getBusinessOpenStateText(now, businessHours, soonWindow) {
  const compare = Temporal.ZonedDateTime.compare;
  function inRange(zdt, start, end) {
    return compare(zdt, start) >= 0 && compare(zdt, end) < 0;
  }

  // Because of times wrapping around at midnight, we may need to consider
  // yesterday's and tomorrow's hours as well
  for (const delta of [-1, 0]) {
    const openDate = now.toPlainDate().add({ days: delta });
    // convert weekday (1..7) to 0-based index, for array:
    const index = (openDate.dayOfWeek + 7) % 7;
    if (!businessHours[index]) continue;

    const timeZone = now.timeZoneId;
    const { open: openTime, close: closeTime } = businessHours[index];
    const open = openDate.toZonedDateTime({ plainTime: openTime, timeZone });
    const isWrap = Temporal.PlainTime.compare(closeTime, openTime) < 0;
    const closeDate = isWrap ? openDate.add({ days: 1 }) : openDate;
    const close = closeDate.toZonedDateTime({ plainTime: closeTime, timeZone });

    if (inRange(now, open, close)) {
      return compare(now, close.subtract(soonWindow)) >= 0
        ? "closing soon"
        : "open";
    }
    if (inRange(now.add(soonWindow), open, close)) return "opening soon";
  }
  return "closed";
}

// For example, a restaurant or bar might have opening hours that go past
// midnight; make sure this is handled correctly
const businessHours = [
  /* Sun */ {
    open: Temporal.PlainTime.from("13:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* Mon */ null, // closed Mondays
  /* Tue */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* Wed */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("20:30"),
  },
  /* Thu */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("22:00"),
  },
  /* Fri */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("00:00"),
  },
  /* Sat */ {
    open: Temporal.PlainTime.from("11:00"),
    close: Temporal.PlainTime.from("02:00"),
  },
];

const now = Temporal.ZonedDateTime.from(
  "2019-04-07T00:00+02:00[Europe/Berlin]",
);
const soonWindow = Temporal.Duration.from({ minutes: 30 });
const saturdayNightState = getBusinessOpenStateText(
  now,
  businessHours,
  soonWindow,
);
console.log(saturdayNightState); // 'open'

const lastCall = now.add({ hours: 1, minutes: 50 });
console.log(lastCall.toString()); // '2019-04-07T01:50:00+02:00[Europe/Berlin]'
const lastCallState = getBusinessOpenStateText(
  lastCall,
  businessHours,
  soonWindow,
);
console.log(lastCallState); // 'closing soon'

const tuesdayEarly = now.add({ days: 2, hours: 6 });
const tuesdayEarlyState = getBusinessOpenStateText(
  tuesdayEarly,
  businessHours,
  soonWindow,
);
console.log(tuesdayEarlyState); // 'closed'
```

### Flight arrival/departure/duration

Map localized trip departure and arrival times into trip duration in units no larger than hours. (By default, differences between ZonedDateTime instances are exact differences in time units.)

```js
const departure = Temporal.ZonedDateTime.from(
  "2020-03-08T11:55:00+08:00[Asia/Hong_Kong]",
);
const arrival = Temporal.ZonedDateTime.from(
  "2020-03-08T09:50:00-07:00[America/Los_Angeles]",
);

const flightTime = departure.until(arrival);

console.log(flightTime.toString()); // 'PT12H55M'
```

Given a departure time with time zone and a flight duration, get an arrival time in the destination time zone, using time zone-aware math.

```js
const departure = Temporal.ZonedDateTime.from(
  "2020-03-08T11:55:00+08:00[Asia/Hong_Kong]",
);
const flightTime = Temporal.Duration.from({ minutes: 775 });

const arrival = departure.add(flightTime).withTimeZone("America/Los_Angeles");

console.log(arrival.toString());
// '2020-03-08T09:50:00-07:00[America/Los_Angeles]'
```

### Push back a launch date

The following function takes a `Temporal.PlainDate` and a number of days of delay (for example, the time it took to get an approval), and returns a `Temporal.PlainDate` for the start of the month following the delayed date.

```js
function plusAndRoundToMonthStart(date, delayDays) {
  return (
    date
      .add({ days: delayDays })
      .add({ months: 1 })
      // constrains to end of month if needed, e.g. Jan 31 -> Feb 28
      .with({ day: 1 })
  );
}

const oldLaunchDate = Temporal.PlainDate.from("2019-06-01");

const fifteenDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 15);
console.log(fifteenDaysDelay.toString()); // '2019-07-01'

const sixtyDaysDelay = plusAndRoundToMonthStart(oldLaunchDate, 60);
console.log(sixtyDaysDelay.toString()); // '2019-08-01'
```

### Schedule a reminder ahead of matching a record-setting duration

When considering a record (for example, a personal-best time in a sport), you might want to receive an alert just before the record is about to be broken. This example takes a record as a `Temporal.Duration`, the starting exact time of the current attempt as a `Temporal.Instant`, and another `Temporal.Duration` indicating how long before the potentially record-setting exact time you would like to receive an alert. It returns the exact time at which a notification could be sent, for example "Keep going! 5 more minutes and it will be your personal best!"

This could be used for workout tracking, racing (including _long_ and potentially time-zone-crossing races like the Bullrun Rally, Iditarod, Self-Transcendence 3100, and Clipper Round The World), or even open-ended analogs like event-every-day "streaks".

```js
function getInstantBeforeOldRecord(start, previousRecord, noticeWindow) {
  return start.add(previousRecord).subtract(noticeWindow);
}

// Start of the men's 10000 meters at the Rio de Janeiro 2016 Olympic Games
const raceStart = Temporal.Instant.from(
  "2016-08-13T21:27-03:00[America/Sao_Paulo]",
);
// Kenenisa Bekele's world record set in 2005
const record = Temporal.Duration.from({
  minutes: 26,
  seconds: 17,
  milliseconds: 530,
});
const noticeWindow = Temporal.Duration.from({ minutes: 1 });
// Time to send a "hurry up, can you finish the race in 1 minute?" push
// notification to all the runners
const reminderAt = getInstantBeforeOldRecord(raceStart, record, noticeWindow);

console.log(reminderAt.toString()); // '2016-08-14T00:52:17.53Z'
```

### Nth weekday of the month

The following function takes a `Temporal.PlainYearMonth` and returns a `Temporal.PlainDate` representing its first Tuesday, adaptable to other weekdays.

```js
function getFirstTuesday(queriedMonth) {
  // We first need to convert to a date
  const firstOfMonth = queriedMonth.toPlainDate({ day: 1 });

  // We have Monday = 1, Sunday = 7, and we want to add a positive number
  // smaller than 7 to get to the first Tuesday.
  // If we're already on a Tuesday (2) then we want to add 0.
  // So for the first of the month being a Monday through Sunday the additions are:
  //    1, 0, 6, 5, 4, 3, 2 which is given by that formula.
  // This lookup table makes this example easier to read, but you can also
  // calculate the answer: (7 + desiredWeekday - firstOfMonth.dayOfWeek) % 7
  return firstOfMonth.add({
    days: [1, 0, 6, 5, 4, 3, 2][firstOfMonth.dayOfWeek - 1],
  });
}

const myMonth = Temporal.PlainYearMonth.from("2020-02");
const firstTuesdayOfMonth = getFirstTuesday(myMonth);
console.log(firstTuesdayOfMonth.toString()); // '2020-02-04'
console.log(firstTuesdayOfMonth.dayOfWeek); // 2

// Similarly, to get the second Tuesday:
const secondWeek = myMonth.toPlainDate({ day: 8 });
const secondTuesday = secondWeek.add({
  days: [1, 0, 6, 5, 4, 3, 2][secondWeek.dayOfWeek - 1],
});
console.log(secondTuesday.day === firstTuesdayOfMonth.day + 7); // true

// And the last Tuesday:
const lastOfMonth = myMonth.toPlainDate({ day: myMonth.daysInMonth });
const lastTuesday = lastOfMonth.subtract({
  days: [6, 0, 1, 2, 3, 4, 5][lastOfMonth.dayOfWeek - 1],
});
console.log(lastTuesday.toString()); // '2020-02-25'
console.log(lastTuesday.dayOfWeek); // 2
// or:
const lastTuesday2 = lastOfMonth.subtract({
  days: (7 + lastOfMonth.dayOfWeek - 2) % 7,
});
console.log(Temporal.PlainDate.compare(lastTuesday, lastTuesday2)); // 0
```

The following function takes a `Temporal.PlainYearMonth` and a day of the week ranging from 1 (Monday) to 7 (Sunday), and returns a chronologically ordered array of `Temporal.PlainDate` instances for every matching day in the month.

```js
function getWeeklyDaysInMonth(yearMonth, dayNumberOfTheWeek) {
  const firstOfMonth = yearMonth.toPlainDate({ day: 1 });
  let nextWeekday = firstOfMonth.add({
    days: (7 + dayNumberOfTheWeek - firstOfMonth.dayOfWeek) % 7,
  });
  const result = [];
  while (nextWeekday.month === yearMonth.month) {
    result.push(nextWeekday);
    nextWeekday = nextWeekday.add({ days: 7 });
  }
  return result;
}

console.log(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from("2020-02"), 1).join(" "),
); // '2020-02-03 2020-02-10 2020-02-17 2020-02-24'
console.log(
  getWeeklyDaysInMonth(Temporal.PlainYearMonth.from("2020-02"), 6).join(" "),
); // '2020-02-01 2020-02-08 2020-02-15 2020-02-22 2020-02-29'
```

The following function takes a `Temporal.PlainDate` and returns the count of preceding days in its month that share its day of the week.

```js
function countPrecedingWeeklyDaysInMonth(date) {
  // This doesn't actually require Temporal
  return Math.floor((date.day - 1) / 7);
}

console.log(
  countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from("2020-02-28")),
); // 3
console.log(
  countPrecedingWeeklyDaysInMonth(Temporal.PlainDate.from("2020-02-29")),
); // 4
```

### Manipulating the day of the month

Here are some examples of taking an existing date, and adjusting the day of the month.

```js
const date = Temporal.PlainDate.from("2020-04-14");

// Third day of next month:

const thirdOfNextMonth = date.add({ months: 1 }).with({ day: 3 });

console.log(thirdOfNextMonth.toString()); // '2020-05-03'

// Last day of this month:

const lastOfThisMonth = date.with({ day: date.daysInMonth });

console.log(lastOfThisMonth.toString()); // '2020-04-30'

// On the 18th of this month at 8 PM:

const thisMonth18thAt8PM = date
  .with({ day: 18 })
  .toPlainDateTime(Temporal.PlainTime.from("20:00"));

console.log(thisMonth18thAt8PM.toString()); // '2020-04-18T20:00:00'
```

### Same date in another month

Likewise, here are some examples of taking an existing date and adjusting the month, but keeping the day and year the same.

Depending on the behavior you want, you will need to pick the right `overflow` option, but the default of `"constrain"` should be correct for most cases.

```js
const date = Temporal.PlainDate.from("2020-05-31");

// Same date and time, but in February
// (and use the last day if the date doesn't exist in February):

const feb = date.with({ month: 2 });

console.log(feb.toString()); // '2020-02-29'

// Same date and time, but in April
// (and throw an exception if the date doesn't exist in April):

date.with({ month: 4 }, { overflow: "reject" }); // Throws a RangeError
```

### Next weekly occurrence

The following function takes a starting `Temporal.ZonedDateTime`, a weekday from 1 (Monday) to 7 (Sunday), a `Temporal.PlainTime`, and a time zone identifier. It returns a `Temporal.ZonedDateTime` representing the next occurrence of the weekly event (for example, "weekly on Thursdays at 08:45 California time").

```js
function nextWeeklyOccurrence(now, weekday, eventTime, eventTimeZone) {
  const nowInEventTimeZone = now.withTimeZone(eventTimeZone);
  const nextDate = nowInEventTimeZone
    .toPlainDate()
    .add({ days: (weekday + 7 - nowInEventTimeZone.dayOfWeek) % 7 });
  let nextOccurrence = nextDate.toZonedDateTime({
    plainTime: eventTime,
    timeZone: eventTimeZone,
  });

  // Handle the case where the event is today but already happened
  if (Temporal.ZonedDateTime.compare(now, nextOccurrence) > 0) {
    nextOccurrence = nextOccurrence.add({ weeks: 1 });
  }

  return nextOccurrence.withTimeZone(now.timeZoneId);
}

// "Weekly on Thursdays at 08:45 California time":
const weekday = 4;
const eventTime = Temporal.PlainTime.from("08:45");
const eventTimeZone = "America/Los_Angeles";

const rightBefore = Temporal.ZonedDateTime.from(
  "2020-03-26T15:30+00:00[Europe/London]",
);
let next = nextWeeklyOccurrence(rightBefore, weekday, eventTime, eventTimeZone);
console.log(next.toString()); // '2020-03-26T15:45:00+00:00[Europe/London]'

const rightAfter = Temporal.ZonedDateTime.from(
  "2020-03-26T16:00+00:00[Europe/London]",
);
next = nextWeeklyOccurrence(rightAfter, weekday, eventTime, eventTimeZone);
console.log(next.toString()); // '2020-04-02T16:45:00+01:00[Europe/London]'
```

### Weekday of yearly occurrence

In some countries, when a public holiday falls on a Tuesday or Thursday, an extra "bridge" public holiday is observed on Monday or Friday in order to give workers a long weekend off. The following function takes a `Temporal.PlainMonthDay` and a year, and returns an array of `Temporal.PlainDate` values for the holiday and any bridge day, or an empty array if the holiday falls on a weekend.

```js
function bridgePublicHolidays(holiday, year) {
  const date = holiday.toPlainDate({ year });
  switch (date.dayOfWeek) {
    case 1: // Mon
    case 3: // Wed
    case 5: // Fri
      return [date];
    case 2: // Tue; take Monday off
      return [date.subtract({ days: 1 }), date];
    case 4: // Thu; take Friday off
      return [date, date.add({ days: 1 })];
    case 6: // Sat
    case 7: // Sun
      return [];
  }
}

const laborDay = Temporal.PlainMonthDay.from("05-01");

// No bridge day
console.log(bridgePublicHolidays(laborDay, 2020).map((d) => d.toString()));
// ['2020-05-01']

// Bridge day
console.log(bridgePublicHolidays(laborDay, 2018).map((d) => d.toString()));
// ['2018-04-30', '2018-05-01']

// Bad luck, the holiday is already on a weekend
console.log(bridgePublicHolidays(laborDay, 2021).map((d) => d.toString()));
// []
```
