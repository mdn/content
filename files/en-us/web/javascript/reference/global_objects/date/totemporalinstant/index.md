---
title: Date.prototype.toTemporalInstant()
slug: Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Date.toTemporalInstant
---

{{JSRef}}{{SeeCompatTable}}

The **`toTemporalInstant()`** method of {{jsxref("Date")}} instances returns a new {{jsxref("Temporal.Instant")}} object with the same {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} value as this date's [timestamp](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).

Use this method to convert legacy `Date` values to the `Temporal` API, then further convert it to other {{jsxref("Temporal")}} classes as necessary.

## Syntax

```js-nolint
toTemporalInstant()
```

### Parameters

None.

### Return value

A new {{jsxref("Temporal.Instant")}} object with the same {{jsxref("Temporal/Instant/epochMilliseconds", "epochMilliseconds")}} value as this date's timestamp. Its microsecond and nanosecond components are always `0`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the date is [invalid](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) (it has a timestamp of `NaN`).

## Examples

### Using toTemporalInstant()

```js
const legacyDate = new Date("2021-07-01T12:34:56.789Z");
const instant = legacyDate.toTemporalInstant();

// Further convert it to other objects
const zdt = instant.toZonedDateTimeISO("UTC");
const date = zdt.toPlainDate();
console.log(date.toString()); // 2021-07-01
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
