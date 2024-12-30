---
title: Temporal.Instant.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.Instant.since
---

{{JSRef}}

The **`since()`** method of {{jsxref("Temporal.Instant")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) to this instant. The duration is positive if the other instant is before this instant, and negative if after.

This method does `this - other`. To do `other - this`, use the {{jsxref("Temporal/Instant/until", "until()")}} method.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameters

- `other`
  - : A string or a {{jsxref("Temporal.Instant")}} instance representing an instant to subtract from this instant. It is converted to a `Temporal.Instant` object using the same algorithm as {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `options` {{optional_inline}}
  - : An object containing some or all of the following properties (in the order they are retrieved and validated):
    - `largestUnit` {{optional_inline}}
      - : A string representing the largest unit to include in the output. The value must be one of the following: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms, or the value `"auto"` which means `"second"` or `smallestUnit`, whichever is greater. Defaults to `"auto"`. The result will not contain units larger than this; for example, if the largest unit is `"minute"`, then "1 hour 30 minutes" will become "90 minutes".
    - `roundingIncrement` {{optional_inline}}
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. Must be in the inclusive range of 1 to 1e9. The increment must be a divisor of the maximum value of the unit; for example, if the unit is hours, the increment must be a divisor of 24 and must not be 24 itself, which means it can be 1, 2, 3, 4, 6, 8, or 12.
    - `roundingMode` {{optional_inline}}
      - : A string specifying how to round off the fractional part of `smallestUnit`. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : A string representing the smallest unit to include in the output. The value must be one of the following: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms. Defaults to `"nanosecond"`. For units larger than `"nanosecond"`, fractional parts of the `smallestUnit` will be [rounded](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) according to the `roundingIncrement` and `roundingMode` settings. Must be smaller or equal to `largestUnit`.

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration _since_ `other` to this instant. The duration is positive if `other` is before this instant, and negative if after.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Examples

### Using since()

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minute" });
console.log(`Last updated ${duration.toLocaleString("en-US")} ago`);
```

### Balancing the resulting duration

Because an instant does not carry calendar information, the resulting duration avoids [calendar durations](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations), which are ambiguous without a calendar and time reference. Therefore, the result is [unbalanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) because `hours` may be greater than `24`. To balance the duration, [round](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) the resulting duration again with the desired `largestUnit`.

```js
const lastUpdated = Temporal.Instant.fromEpochMilliseconds(1735235418000);
const now = Temporal.now.instant();
const duration = now.since(lastUpdated, { smallestUnit: "minute" });
const roundedDuration = duration.round({ largestUnit: "year" });
console.log(`Last updated ${roundedDuration.toLocaleString("en-US")} ago`);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
