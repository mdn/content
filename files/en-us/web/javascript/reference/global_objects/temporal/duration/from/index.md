---
title: Temporal.Duration.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/from
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.from
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Duration.from()`** static method creates a new `Temporal.Duration` object from another `Temporal.Duration` object, an object with duration properties, or an ISO 8601 string.

## Syntax

```js-nolint
Temporal.Duration.from(info)
```

### Parameters

- `info`

  - : One of the following:

    - A {{jsxref("Temporal.Duration")}} instance, which creates a copy of the instance.
    - An [ISO 8601](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#iso_8601_duration_format) string representing a duration.
    - An object containing at least one of the following properties (in the order they are retrieved and validated):

      - {{jsxref("Temporal/Duration/days", "days")}}
      - {{jsxref("Temporal/Duration/hours", "hours")}}
      - {{jsxref("Temporal/Duration/microseconds", "microseconds")}}
      - {{jsxref("Temporal/Duration/milliseconds", "milliseconds")}}
      - {{jsxref("Temporal/Duration/minutes", "minutes")}}
      - {{jsxref("Temporal/Duration/months", "months")}}
      - {{jsxref("Temporal/Duration/nanoseconds", "nanoseconds")}}
      - {{jsxref("Temporal/Duration/seconds", "seconds")}}
      - {{jsxref("Temporal/Duration/weeks", "weeks")}}
      - {{jsxref("Temporal/Duration/years", "years")}}

      Each property should contain an integer number value. The resulting duration must not have [mixed signs](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_sign), so all of these properties must have the same sign (or zero). Missing properties are treated as zero.

### Return value

A new `Temporal.Duration` object, possibly [unbalanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), with the specified components.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - Any of the recognized properties in the `info` object is not an integer (including non-finite values).
    - A [calendar unit](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) (years, months, weeks) has an absolute value ≥ 2<sup>32</sup>.
    - The non-calendar part of the duration (days and below), when expressed in seconds, has an absolute value ≥ 2<sup>53</sup>.
- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - `info` is not an object or a string.
    - All of the recognized properties in the `info` object are `undefined`.

## Examples

### Creating a duration from an object

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
console.log(d1.toString()); // "PT1H30M"

const d2 = Temporal.Duration.from({ months: 1, days: 2 });
console.log(d2.toString()); // "P1M2D"

// Uncommon because unbalanced, but valid
const unbalanced = Temporal.Duration.from({
  hours: 100,
  minutes: 100,
  seconds: 100,
});
console.log(unbalanced.toString()); // "PT100H100M100S"

const neg = Temporal.Duration.from({ hours: -1, minutes: -30 });
console.log(neg.toString()); // "-PT1H30M"
```

### Creating a duration from a string

```js
const d = Temporal.Duration.from("P1Y2M3W4DT5H6M7.00800901S");
console.log(d.hours); // 5
```

### Creating a duration from another duration

```js
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from(d1);
console.log(d2.toString()); // "PT1H30M"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
