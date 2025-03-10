---
title: Temporal.Duration.prototype.round()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.round
---

{{JSRef}}{{SeeCompatTable}}

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
      - : Any of the temporal units: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, or their singular forms, or the value `"auto"` which means the largest non-zero component of this duration or `smallestUnit`, whichever is greater. Defaults to `"auto"`. The result will not contain units larger than this; for example, if the largest unit is `"minutes"`, then "1 hour 30 minutes" will become "90 minutes".
    - `relativeTo` {{optional_inline}}
      - : A zoned or plain date(time) that provides the time and calendar information to resolve [calendar durations](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (see the link for the general interpretation of this option). Required if either `this` or `other` is a calendar duration, or `smallestUnit` is a calendar unit.
    - `roundingIncrement` {{optional_inline}}
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. Must be in the inclusive range of 1 to 1e9. If the smallest unit is hours, minutes, seconds, milliseconds, microseconds, or nanoseconds, the increment must be a divisor of the maximum value of the unit; for example, if the unit is hours, the increment must be a divisor of 24 and must not be 24 itself, which means it can be 1, 2, 3, 4, 6, 8, or 12.
    - `roundingMode` {{optional_inline}}
      - : A string representing the rounding mode specifying to round up or down in various scenarios. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"halfExpand"`.
    - `smallestUnit` {{optional_inline}}
      - : Any of the temporal units: `"years"`, `"months"`, `"weeks"`, `"days"`, `"hours"`, `"minutes"`, `"seconds"`, `"milliseconds"`, `"microseconds"`, `"nanoseconds"`, or their singular forms. Defaults to `"nanoseconds"`. For units larger than `"nanoseconds"`, fractional parts of the `smallestUnit` will be rounded according to the `roundingIncrement` and `roundingMode` settings. Must be smaller or equal to `largestUnit`. At least one of `smallestUnit` and `largestUnit` must be provided.

### Return value

A new `Temporal.Duration` object, where the largest unit is no larger than the `largestUnit` option, and the smallest unit is no smaller than the `smallestUnit` option. The fractional parts of the `smallestUnit` are rounded according to the `roundingIncrement` and `roundingMode` settings.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Description

The `round()` method performs two operations: rounding and balancing. It does the following:

1. It makes sure the duration is balanced. If a component is above its preferred maximum (24 hours per day, 60 minutes per hour, etc.), the excess is carried over to the next larger unit, until we reach `largestUnit`. For example, "24 hours 90 minutes" becomes "25 hours 30 minutes" if `largestUnit` is `"auto"`, and "1 day 1 hour 30 minutes" if `largestUnit` is `"days"`.
2. For all components larger than `largestUnit`, they are carried down into `largestUnit`; for example, "2 hours 30 minutes" becomes "150 minutes" if `largestUnit` is `"minutes"`.
3. For all components smaller than `smallestUnit`, they are carried up into `smallestUnit` as a fractional part, and then rounded according to the `roundingIncrement` and `roundingMode` settings. For example, "1 hour 30 minutes" becomes "1.5 hours" if `smallestUnit` is `"hours"`, and then rounded to "2 hours" using the default settings.

[Calendar units](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_units) have uneven lengths. Their lengths are resolved relative to a starting point. For example, a duration of "2 years" in the Gregorian calendar may be 730 days or 731 days long, depending on whether it moves through a leap year or not. When rounding to a calendar unit, we first get the exact date-time represented by `relativeTo + duration`, then round it down and up according to `smallestUnit` and `roundingIncrement` to get two candidates. Then, we choose the candidate according to the `roundingMode` setting, and finally subtract `relativeTo` to get the final duration.

## Examples

### Rounding off small units

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
const roundedDuration = duration.round("minutes");
console.log(roundedDuration.toString()); // "PT1H30M"
```

### Avoiding larger units

```js
const duration = Temporal.Duration.from({
  days: 3,
  hours: 1,
  minutes: 41,
  seconds: 5,
});
const roundedDuration = duration.round({ largestUnit: "hours" });
console.log(
  `Time spent on this problem: ${roundedDuration.toLocaleString("en-US", { style: "digital" })}`,
);
// Time spent on this problem: 73:41:05
```

### Rounding to a whole number of hours

```js
const duration = Temporal.Duration.from({ days: 1, hours: 1, minutes: 30 });
const roundedDuration = duration.round({
  largestUnit: "hours",
  smallestUnit: "hours",
  roundingMode: "floor",
});
console.log(roundedDuration.hours); // 25
```

### Rounding by 15-minute increments

```js
const duration = Temporal.Duration.from({ hours: 1, minutes: 17 });
const roundedDuration = duration.round({
  smallestUnit: "minutes",
  roundingIncrement: 15,
});
console.log(
  `The queue will take approximately ${roundedDuration.toLocaleString("en-US")}`,
);
// The queue will take approximately 1 hr, 15 min
```

### Resolving calendar durations

If either the initial duration or largest/smallest unit contains a calendar unit, you must provide a `relativeTo` option to resolve the calendar durations.

```js
const duration = Temporal.Duration.from({ months: 1, days: 1, hours: 1 });
const roundedDuration = duration.round({
  largestUnit: "days",
  smallestUnit: "days",
  relativeTo: Temporal.PlainDateTime.from("2022-01-01"),
});
console.log(roundedDuration); // "P32D"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
