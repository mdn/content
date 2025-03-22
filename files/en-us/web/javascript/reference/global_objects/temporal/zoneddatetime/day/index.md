---
title: Temporal.ZonedDateTime.prototype.day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/day
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.day
---

{{JSRef}}{{SeeCompatTable}}

The **`day`** accessor property of {{jsxref("Temporal.ZonedDateTime")}} instances returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `day` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/ZonedDateTime/with", "with()")}} method to create a new `Temporal.ZonedDateTime` object with the desired new value.

For general information and more examples, see {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}.

For `PlainDate`, `day` can only be non-continuous if the calendar skips days. For `ZonedDateTime`, `day` can also be non-continuous if the time zone changes its offset by 24 hours; this actually happened. See the example below.

## Examples

### Using day

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // ISO 8601 calendar
console.log(dt.day); // 1
```

### Non-continuous day

To better align times with its trading partners in Asia, the country of Samoa [changed its time zone](https://en.wikipedia.org/wiki/Time_in_Samoa) to the other side of the International Date Line, shifting its offset from -10:00 to +14:00 (daylight saving time). This resulted in a 24-hour abrupt change in the local time, therefore skipping the day December 30, 2011 entirely. `2011-12-29T23:59:59-10:00[Pacific/Apia]` is immediately followed by `2011-12-31T00:00:00+14:00[Pacific/Apia]`.

```js
const dt = Temporal.ZonedDateTime.from(
  "2011-12-29T23:59:59-10:00[Pacific/Apia]",
);
console.log(dt.day); // 29
const nextDay = dt.add({ seconds: 1 });
console.log(nextDay.day); // 31
```

For this reason, you should always prefer {{jsxref("Temporal/ZonedDateTime/add", "add()")}} and {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} to manipulate dates and times, rather than directly changing the `day` property.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- {{jsxref("Temporal/ZonedDateTime/month", "Temporal.ZonedDateTime.prototype.month")}}
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
