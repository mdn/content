---
title: Temporal.PlainYearMonth.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/add
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.add
---

{{JSRef}}{{SeeCompatTable}}

The **`add()`** method of {{jsxref("Temporal.PlainYearMonth")}} instances returns a new `Temporal.PlainYearMonth` object representing this year-month moved forward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameters

- `duration`
  - : A string, an object, or a {{jsxref("Temporal.Duration")}} instance representing a duration to add to this year-month. It is converted to a `Temporal.Duration` object using the same algorithm as {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : An object containing the following property:
    - `overflow` {{optional_inline}}
      - : A string specifying the behavior when a date component is out of range. Possible values are:
        - `"constrain"` (default)
          - : The date component is [clamped](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) to the valid range.
        - `"reject"`
          - : A {{jsxref("RangeError")}} is thrown if the date component is out of range.

### Return value

A new `Temporal.PlainYearMonth` object representing the year-month specified by the original `PlainYearMonth`, plus the duration.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the result is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), which is ±(10<sup>8</sup> + 1) days, or about ±273,972.6 years, from the Unix epoch.

## Description

The `duration` is handled in this way:

- Move forward by the number of years, keeping the `monthCode` the same. If the `monthCode` is invalid in the resulting year (impossible for Gregorian and ISO 8601, but possible for calendars with leap months), we adjust based on the `overflow` option: for `constrain`, we pick another month according to the cultural conventions of that calendar's users. For example, because the leap month is usually thought of as a duplicate of another month, we may pick the month that it is a duplicate of.
- Move forward by the number of months, adjusting the year if necessary.
- For all units smaller than `months` (weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds), they are converted to the number of days. All commonly supported calendars use fixed-length weeks, so the number of weeks is just converted to the number of days. If the rule is more complex, we may take an approach similar to shifting months. Then, we move forward by that number of days, starting on the first day of the month, adjusting the month and year if necessary. Durations smaller than the current month's length therefore have no effect.

The internal reference day is then chosen to be the first valid day of the month, irrespective of the original reference day or the number of days in the duration. For the Gregorian calendar, overflow cannot happen because every year always has 12 months, and any increment less than a month is just ignored.

Adding a duration is equivalent to [subtracting](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/subtract) its [negation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Examples

### Adding a duration in ISO 8601 calendar

```js
const start = Temporal.PlainYearMonth.from("2021-01");
const end = start.add({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2022-03

const end2 = start.add({ years: -1, months: -2, weeks: -3, days: -4 });
console.log(end2.toString()); // 2019-11

const distance = Temporal.PlainYearMonth.from("2020-01").until("2021-01"); // 366 days
const end3 = start.add(distance);
console.log(end3.toString()); // 2022-01
```

### Adding a duration in a non-ISO calendar

```js
const start = Temporal.PlainYearMonth.from("2021-02-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 11/2020
console.log(start.toString()); // 2021-01-13[u-ca=chinese]
const end = start.add({ months: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 12/2020
console.log(end.toString()); // 2021-02-12[u-ca=chinese]

// Adding an extra day has no effect at all
const end2 = start.add({ months: 1, days: 1 });
console.log(end2.toLocaleString("en-US", { calendar: "chinese" })); // 12/2020
// The reference day doesn't change, because it's always the first day of the Chinese month
console.log(end2.toString()); // 2021-02-12[u-ca=chinese]

// Start in a leap month
const start2 = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(start2.toLocaleString("en-US", { calendar: "hebrew" })); // Adar I 5730
// End in another leap month
const end3 = start2.add({ years: 3 });
console.log(end3.toLocaleString("en-US", { calendar: "hebrew" })); // Adar I 5733
```

### Adding a duration with overflow

If we move a few years and the corresponding month is invalid in this year, then we adjust the month based on the `overflow` option.

```js
// Start in a leap month
const start = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
// Hebrew leap years occur every 2 or 3 years, and 5731 is not a leap year
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "hebrew" })); // Adar 5731
console.log(end.monthCode); // M06
console.log(end.toString()); // 1971-02-26[u-ca=hebrew]

// Any further month additions are based on the clamped year-month
const end2 = start.add({ years: 1, months: 2 });
console.log(end2.monthCode); // M08
console.log(end2.toString()); // 1971-04-26[u-ca=hebrew]

// Compare with the same addition in a different order that results in no overflow:
const end3 = start.add({ months: 2 }).add({ years: 1 });
console.log(end3.monthCode); // M07
console.log(end3.toString()); // 1971-03-27[u-ca=hebrew]
```

Note that the following is not an overflow because the year can just increment:

```js
const start = Temporal.PlainYearMonth.from("2021-01");
const end = start.add({ months: 100 });
console.log(end.toString()); // 2029-05
```

You can also throw an error if the date component is out of range:

```js
const start = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
const end = start.add({ years: 1 }, { overflow: "reject" }); // RangeError: invalid "monthCode" calendar field: M05L
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
