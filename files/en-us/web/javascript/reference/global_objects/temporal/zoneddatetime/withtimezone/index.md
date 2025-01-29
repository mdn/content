---
title: Temporal.ZonedDateTime.prototype.withTimeZone()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withTimeZone
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.withTimeZone
---

{{JSRef}}{{SeeCompatTable}}

The **`withTimeZone()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a new `Temporal.ZonedDateTime` object representing the same instant as this date-time but in the new time zone. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the date-time's {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} property.

To replace the date-time component properties, use the {{jsxref("Temporal/ZonedDateTime/with", "with()")}} method. To replace its calendar, use the {{jsxref("Temporal/ZonedDateTime/withCalendar", "withCalendar()")}} method.

## Syntax

```js-nolint
withTimeZone(timeZone)
```

### Parameters

- `timeZone`
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to use. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information).

### Return value

A new `Temporal.ZonedDateTime` object representing the same instant as this date-time but in the new time zone.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `timeZone` is not a string or a `Temporal.ZonedDateTime` instance.
- {{jsxref("RangeError")}}
  - : Thrown if the time zone name is invalid.

## Examples

### Using withTimeZone()

```js
const meetingTime = Temporal.ZonedDateTime.from(
  "2021-08-01T12:00[America/New_York]",
);
const meetingTimeInParis = meetingTime.withTimeZone("Europe/Paris");
console.log(meetingTimeInParis.toString()); // 2021-08-01T18:00:00+02:00[Europe/Paris]
```

### Replacing the time zone while keeping the same wall-clock time

In the rare case where you want to keep the wall-clock time the same but change the time zone (and result in a different instant), convert it to a {{jsxref("Temporal.PlainDateTime")}} first:

```js
const meetingTime = Temporal.ZonedDateTime.from(
  "2021-08-01T12:00[America/New_York]",
);
const meetingTimeInParis = meetingTime
  .toPlainDateTime()
  .toZonedDateTime("Europe/Paris");
console.log(meetingTimeInParis.toString()); // 2021-08-01T12:00:00+02:00[Europe/Paris]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withCalendar", "Temporal.ZonedDateTime.prototype.withCalendar()")}}
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
