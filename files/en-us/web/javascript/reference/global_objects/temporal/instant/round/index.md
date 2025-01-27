---
title: Temporal.Instant.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/round
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.round
---

{{JSRef}}{{SeeCompatTable}}

The **`round()`** method of {{jsxref("Temporal.Instant")}} instances returns a new `Temporal.Instant` object representing this instant rounded to the given unit.

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
    - `roundingIncrement` {{optional_inline}}
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. The increment and the `smallestUnit` must evenly divide 24 hours; for example, 45 seconds is a divisor of 86400 seconds, and 100 minutes is a divisor of 3600 minutes. This is slightly less strict than the `round()` method of the other classes, which all require the increment to be a divisor of the maximum value of the unit.
    - `roundingMode` {{optional_inline}}
      - : A string specifying how to round off the fractional part of `smallestUnit`. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"halfExpand"`.
    - `smallestUnit`
      - : A string representing the smallest unit to include in the output. The value must be one of the following: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms. For units larger than `"nanosecond"`, fractional parts of the `smallestUnit` will be rounded according to the `roundingIncrement` and `roundingMode` settings.

### Return value

A new {{jsxref("Temporal.Instant")}} object representing this instant rounded to the given unit, where all units smaller than `smallestUnit` are zeroed out.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Examples

### Rounding off small units

```js
const instant = Temporal.Instant.fromEpochMilliseconds(1000);
const roundedInstant = instant.round("second");
console.log(roundedInstant.epochMilliseconds); // 1000

const instant2 = instant.round("minute");
console.log(instant2.epochMilliseconds); // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
