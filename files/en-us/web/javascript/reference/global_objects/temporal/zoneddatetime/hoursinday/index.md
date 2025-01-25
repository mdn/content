---
title: Temporal.ZonedDateTime.prototype.hoursInDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/hoursInDay
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.hoursInDay
---

{{JSRef}}{{SeeCompatTable}}

The **`hoursInDay`** accessor property of {{jsxref("Temporal.ZonedDateTime")}} instances returns a positive integer representing the number of hours in the day of this date in the time zone. It may be more or less than 24 in the case of offset changes such as daylight saving time.

Because `ZonedDateTime` is the only class that's time zone-aware, and hours in a day can only change by offset changes, all other classes assume 24-hour days.

The set accessor of `hoursInDay` is `undefined`. You cannot change this property directly.

## Examples

### Using hoursInDay

```js
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T01:58:00-05:00[America/New_York]",
);
console.log(dt.hoursInDay); // 23; this is the day of transition into DST

const dt2 = Temporal.ZonedDateTime.from(
  "2024-11-03T01:58:00-04:00[America/New_York]",
);
console.log(dt2.hoursInDay); // 25; this is the day of transition out of DST

const dt3 = Temporal.ZonedDateTime.from(
  "2024-11-04T01:58:00-05:00[America/New_York]",
);
console.log(dt3.hoursInDay); // 24
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/hour", "Temporal.ZonedDateTime.prototype.hour")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/ZonedDateTime/daysInMonth", "Temporal.ZonedDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
