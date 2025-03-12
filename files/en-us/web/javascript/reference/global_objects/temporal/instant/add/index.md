---
title: Temporal.Instant.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/add
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.add
---

{{JSRef}}{{SeeCompatTable}}

The **`add()`** method of {{jsxref("Temporal.Instant")}} instances returns a new `Temporal.Instant` object representing this instant moved forward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).

## Syntax

```js-nolint
add(duration)
```

### Parameters

- `duration`
  - : A string, an object, or a {{jsxref("Temporal.Duration")}} instance representing a duration to add to this instant. It is converted to a `Temporal.Duration` object using the same algorithm as {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Return value

A new {{jsxref("Temporal.Instant")}} object representing adding `duration` to this instant. If `duration` is positive, then the returned instant is later than this instant; if `duration` is negative, then the returned instant is earlier than this instant.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `duration` is a [calendar duration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (it has a non-zero `years`, `months`, or `weeks`), or has a non-zero `days`, because calendar durations are ambiguous without a calendar and time reference.
    - The result is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), which is ±10<sup>8</sup> days, or about ±273,972.6 years, from the Unix epoch.

## Description

In essence, the `add()` method first gets the number of nanoseconds represented by `duration`, adds it to this instant's {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}}, and then creates a new `Temporal.Instant` object from the result. Therefore, the duration must unambiguously represent a fixed amount of time.

If you want to add a calendar duration, the addition must be performed in the context of a calendar and a time zone to account for the variable lengths of months, years, and days (because of daylight saving time). In this case, convert the instant to a {{jsxref("Temporal.ZonedDateTime")}} object, add the duration, and then convert the result back to an instant.

Adding a duration is equivalent to [subtracting](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/subtract) its [negation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Examples

### Adding a Temporal.Duration

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
const duration = Temporal.Duration.from("PT1S");
const newInstant = instant.add(duration);
console.log(newInstant.epochMilliseconds); // 1000
```

### Adding an object or a string

```js
const instant = Temporal.Instant.fromEpochMilliseconds(0);
const newInstant = instant.add({ seconds: 1 });
console.log(newInstant.epochMilliseconds); // 1000

const newInstant2 = instant.add("PT1S");
console.log(newInstant2.epochMilliseconds); // 1000
```

### Adding a calendar duration

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1730610000000);
const duration = Temporal.Duration.from({ days: 1 });

// This instant is 2024-11-03T01:00:00-04:00[America/New_York],
// which is a DST transition day in the US.
const instant2 = instant
  .toZonedDateTimeISO("America/New_York")
  .add(duration)
  .toInstant();
console.log(instant2.epochMilliseconds); // 1730700000000

// The same instant is not a DST transition day in Paris.
const instant3 = instant
  .toZonedDateTimeISO("Europe/Paris")
  .add(duration)
  .toInstant();
console.log(instant3.epochMilliseconds); // 1730696400000
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
