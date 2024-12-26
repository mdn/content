---
title: Temporal.Duration.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.Duration.round
---

{{JSRef}}

The **`round()`** method of {{jsxref("Temporal.Duration")}} instances returns a new `Temporal.Duration` object with the duration rounded to the given smallest unit and/or [balanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing) to the given largest unit.

## Syntax

```js-nolint
round(smallestUnit)
round(options)
```

### Parameters

- `smallestUnit`
  - : A string representing the [`smallestUnit`](#smallestunit_2) option. This is a convenience overload, so `round(smallestUnit)` is equivalent to `round({ smallestUnit })`, where `smallestUnit` is a string.
- `options`
  - : An object containing some or all of the following properties (in the order they are retrieved and validated):
    - `largestUnit` {{optional_inline}}
      - : Any of the temporal units: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms, or the value `"auto"` which means the largest non-zero component of this duration or `smallestUnit`, whichever is greater. Defaults to `"auto"`. The result will not contain units larger than this; for example, if the largest unit is `"minute"`, then "1 hour 30 minutes" will become "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : A zoned or plain date(time) that provides the time and calendar information to resolve [calendar durations](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (see the link for the general interpretation of this option). Required if either `this` or `other` is a calendar duration, or `smallestUnit` is a calendar unit.
    - `smallestUnit` {{optional_inline}}
      - : Any of the temporal units: `"year"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms. Defaults to `"nanosecond"`. Must be smaller or equal to `largestUnit`. Fractional parts of the `smallestUnit` will be rounded according to the `roundingIncrement` and `roundingMode` settings. At least one of `smallestUnit` and `largestUnit` must be provided.
    - `roundingIncrement` {{optional_inline}}
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. Must be in the inclusive range of 1 to 1e9. If the smallest unit is hours, minutes, seconds, milliseconds, microseconds, or nanoseconds, the increment must be a divisor of the maximum value of the unit; for example, if the unit is hours, the increment must be a divisor of 24 and must not be 24 itself, which means it can be 1, 2, 3, 4, 6, 8, or 12.
    - `roundingMode` {{optional_inline}}
      - : A string representing the rounding mode specifying to round up or down in each scenario. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode).

### Return value

A new `Temporal.Duration` object, where the largest unit is no larger than the `largestUnit` option, and the smallest unit is no smaller than the `smallestUnit` option. The fractional parts of the `smallestUnit` are rounded according to the `roundingIncrement` and `roundingMode` settings.

### Exceptions

TODO

## Description

TODO

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
