---
title: Temporal.PlainTime.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainTime.since
---

{{JSRef}}

The **`since()`** method of {{jsxref("Temporal.PlainTime")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}) to this time. The duration is positive if the other time is before this time, and negative if after.

This method does `this - other`. To do `other - this`, use the {{jsxref("Temporal/PlainTime/until", "until()")}} method.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainTime")}} instance representing a time to subtract from this time. It is converted to a `Temporal.PlainTime` object using the same algorithm as {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}.
- `options` {{optional_inline}}
  - : An object containing some or all of the following properties (in the order they are retrieved and validated):
    - `largestUnit` {{optional_inline}}
      - : A string representing the largest unit to include in the output. The value must be one of the following: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms, or the value `"auto"` which means `"hour"`. Defaults to `"auto"`. The result will not contain units larger than this; for example, if the largest unit is `"minute"`, then "1 hour 30 minutes" will become "90 minutes".
    - `roundingIncrement` {{optional_inline}}
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. Must be in the inclusive range of 1 to 1e9.
    - `roundingMode` {{optional_inline}}
      - : A string specifying how to round off the fractional part of `smallestUnit`. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : A string representing the smallest unit to include in the output. The value must be one of the following: `"hour"`, `"minute"`, `"second"`, `"millisecond"`, `"microsecond"`, `"nanosecond"`, or their plural forms. Defaults to `"nanosecond"`. For units larger than `"nanosecond"`, fractional parts of the `smallestUnit` will be [rounded](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) according to the `roundingIncrement` and `roundingMode` settings. Must be smaller or equal to `largestUnit`.

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration _since_ `other` to this time. The duration is positive if `other` is before this time, and negative if after.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Examples

### Using since()

```js
const lunchTime = Temporal.PlainTime.from("12:30:00");
const now = Temporal.Now.plainTimeISO();
const duration = now.since(lunchTime);
console.log(`You had lunch ${duration.toLocaleString("en-US")} ago`);
// Example output: "You had lunch 3 hr, 42 min, 21 sec, 343 ms, 131 μs, 718 ns ago"

const duration2 = now.since(lunchTime, { smallestUnit: "minute" });
console.log(`You had lunch ${duration2.toLocaleString("en-US")} ago`);
// Example output: "You had lunch 3 hr, 42 min ago"

const duration3 = now.since(lunchTime, {
  largestUnit: "minute",
  smallestUnit: "minute",
});
console.log(`You had lunch ${duration3.toLocaleString("en-US")} ago`);
// Example output: "You had lunch 222 min ago"
```

### Rounding the result

By default the fractional part of the `smallestUnit` is truncated. You can round it up using the `roundingIncrement` and `roundingMode` options.

```js
const time1 = Temporal.PlainTime.from("12:30:00");
const time2 = Temporal.PlainTime.from("12:30:01");
const duration = time2.since(time1, {
  smallestUnit: "second",
  roundingIncrement: 15,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "PT15S"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
