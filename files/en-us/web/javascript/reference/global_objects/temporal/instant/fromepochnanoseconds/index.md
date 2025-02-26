---
title: Temporal.Instant.fromEpochNanoseconds()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochNanoseconds
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.fromEpochNanoseconds
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Instant.fromEpochNanoseconds()`** static method creates a new `Temporal.Instant` object from the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC).

To convert a {{jsxref("Date")}} object to a `Temporal.Instant` object, use {{jsxref("Date.prototype.toTemporalInstant()")}} instead.

## Syntax

```js-nolint
Temporal.Instant.fromEpochNanoseconds(epochNanoseconds)
```

### Parameters

- `epochNanoseconds`
  - : A [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) representing the number of nanoseconds since the Unix epoch.

### Return value

A new `Temporal.Instant` object representing the instant in time specified by `epochNanoseconds`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `epochNanoseconds` is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), which is ±10<sup>8</sup> days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Using Temporal.Instant.fromEpochNanoseconds()

```js
const instant = Temporal.Instant.fromEpochNanoseconds(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff =
  Temporal.Instant.fromEpochNanoseconds(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = Temporal.Instant.fromEpochNanoseconds(355924804000000000n);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
- {{jsxref("Date.prototype.toTemporalInstant()")}}
