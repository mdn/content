---
title: Temporal.Duration.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.add
---

{{JSRef}}{{SeeCompatTable}}

The **`add()`** method of {{jsxref("Temporal.Duration")}} instances returns a new `Temporal.Duration` object with the sum of this duration and a given duration. The result is [balanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing).

## Syntax

```js-nolint
add(other)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.Duration")}} instance representing a duration to add to this duration. It is converted to a `Temporal.Duration` object using the same algorithm as {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.

### Return value

A new `Temporal.Duration` object representing the sum of this duration and `other`.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - Either `this` or `other` is a [calendar duration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (it has a non-zero `years`, `months`, or `weeks`), because calendar durations are ambiguous without a calendar and time reference.
    - The sum of `this` and `other` overflows the maximum or underflows the minimum representable duration, which is ±2<sup>53</sup> seconds.

## Description

Non-calendar durations unambiguously represent a fixed amount of time. Internally, `this` and `other` are both converted to nanoseconds (assuming 24-hour days) and added together. The result is then converted back to a `Temporal.Duration` object, so the result is always [balanced or top-heavy](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) with the largest possible unit being `days`.

If you want to perform addition or subtraction with a calendar duration, you can add both durations to a starting point and then figure out the difference between the two resulting instants; that is, `dur1 + dur2` is equivalent to `(start + dur1 + dur2) - start`.

To add a duration to a date or time, use the `add()` method of the date or time object instead.

## Examples

### Using add()

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.add(d2);
console.log(d3.toString()); // "PT10M"
```

### Adding calendar durations

```js
const d1 = Temporal.Duration.from({ days: 1 });
const d2 = Temporal.Duration.from({ months: 1 });

d1.add(d2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const start = Temporal.PlainDateTime.from("2022-01-01T00:00"); // ISO 8601 calendar
const result = start.add(d1).add(d2).since(start);
console.log(result.toString()); // "P32D"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
