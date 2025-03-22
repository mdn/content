---
title: Temporal.Instant.prototype.toZonedDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toZonedDateTimeISO
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.toZonedDateTimeISO
---

{{JSRef}}{{SeeCompatTable}}

The **`toZonedDateTimeISO()`** method of {{jsxref("Temporal.Instant")}} instances returns a new {{jsxref("Temporal.ZonedDateTime")}} object representing this instant in the specified time zone using the ISO 8601 calendar system.

## Syntax

```js-nolint
toZonedDateTimeISO(timeZone)
```

### Parameters

- `timeZone`
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to use. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information).

### Return value

A new {{jsxref("Temporal.ZonedDateTime")}} object representing this instant in the specified time zone using the ISO 8601 calendar system.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the time zone name is invalid.
- {{jsxref("TypeError")}}
  - : Thrown if `timeZone` is not a string or a `Temporal.ZonedDateTime` instance.

## Examples

### Using toZonedDateTimeISO()

```js
const instant = Temporal.Instant.from("2021-08-01T12:34:56.123456789Z");
const zonedDateTime = instant.toZonedDateTimeISO("America/New_York");
console.log(zonedDateTime.toString()); // 2021-08-01T08:34:56.123456789-04:00[America/New_York]

const localDateTime = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
console.log(localDateTime.toString()); // This instant in your timezone
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/toInstant", "Temporal.ZonedDateTime.prototype.toInstant()")}}
