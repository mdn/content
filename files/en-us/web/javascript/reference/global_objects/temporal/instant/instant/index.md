---
title: Temporal.Instant()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/Instant
page-type: javascript-constructor
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.Instant
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Instant()`** constructor creates {{jsxref("Temporal.Instant")}} objects.

This constructor is exactly equivalent to calling {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}.

## Syntax

```js-nolint
new Temporal.Instant(epochNanoseconds)
```

> **Note:** `Temporal.Instant()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `epochNanoseconds`
  - : A [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) representing the number of nanoseconds since the Unix epoch.

### Return value

A new `Temporal.Instant` object representing the instant in time specified by `epochNanoseconds`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if `epochNanoseconds` represents an instant outside the range of representable instants, which is ±10<sup>8</sup> days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Using Temporal.Instant()

```js
const instant = new Temporal.Instant(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = new Temporal.Instant(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = new Temporal.Instant(355924804000000000n);
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
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
