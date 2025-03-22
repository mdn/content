---
title: Temporal.PlainTime.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/round
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.round
---

{{JSRef}}{{SeeCompatTable}}

The **`round()`** method of {{jsxref("Temporal.PlainTime")}} instances returns a new `Temporal.PlainTime` object representing this time rounded to the given unit.

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
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. The increment must be a divisor of the maximum value of `smallestUnit`; for example, if the unit is hours, the increment must be a divisor of 24 and must not be 24 itself, which means it can be 1, 2, 3, 4, 6, 8, or 12.
    - `roundingMode` {{optional_inline}}
      - : A string specifying how to round off the fractional part of `smallestUnit`. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"halfExpand"`.
    - `smallestUnit`
      - : A string representing the smallest unit to include in the output. The value must be one of the following: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms. For units larger than `"nanosecond"`, fractional parts of the `smallestUnit` will be rounded according to the `roundingIncrement` and `roundingMode` settings.

### Return value

A new {{jsxref("Temporal.PlainTime")}} object representing this time rounded to the given unit, where all units smaller than `smallestUnit` are zeroed out.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Examples

### Rounding off small units

```js
const time = Temporal.PlainTime.from("12:34:56.123456789");
const nearestMillisecond = time.round("millisecond");
console.log(nearestMillisecond.toString()); // 12:34:56.123

const nearestHalfHour = time.round({
  smallestUnit: "minute",
  roundingIncrement: 30,
});
console.log(nearestHalfHour.toString()); // 12:30:00

const nextHour = time.round({ smallestUnit: "hour", roundingMode: "ceil" });
console.log(nextHour.toString()); // 13:00:00
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
