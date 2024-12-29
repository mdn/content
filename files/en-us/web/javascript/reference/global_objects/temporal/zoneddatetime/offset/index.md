---
title: Temporal.ZonedDateTime.prototype.offset
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offset
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Temporal.ZonedDateTime.offset
---

{{JSRef}}

The **`offset`** accessor property of {{jsxref("Temporal.ZonedDateTime")}} instances returns a string representing the [offset](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) used to interpret the internal instant, in the form `±HH:MM` (or `±HH:MM:SS.sssssssss` with as much subminute precision as necessary). This offset is guaranteed to be valid for the given instant and time zone at construction time.

The set accessor of `offset` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/ZonedDateTime/with", "with()")}} method to create a new `Temporal.ZonedDateTime` object with the desired new value (usually also changing the date/time), or use the {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}} method to create a new `Temporal.ZonedDateTime` object in another time zone.

## Examples

### Using offset

```js
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.offset); // "-07:00"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00-07[-07]");
console.log(dt2.offset); // "-07:00"

const dt3 = Temporal.ZonedDateTime.from(
  "1900-01-01T00:00:00+00:09:21[Europe/Paris]",
);
console.log(dt3.offset); // "+00:09:21"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/timeZoneId", "Temporal.ZonedDateTime.prototype.timeZoneId")}}
- {{jsxref("Temporal/ZonedDateTime/offsetNanoseconds", "Temporal.ZonedDateTime.prototype.offsetNanoseconds")}}
