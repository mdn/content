---
title: Temporal.PlainDate.prototype.add()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/add
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.add
---

{{JSRef}}{{SeeCompatTable}}

The **`add()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new `Temporal.PlainDate` object representing this date moved forward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).

## Syntax

```js-nolint
add(duration)
add(duration, options)
```

### Parameters

- `duration`
  - : A string, an object, or a {{jsxref("Temporal.Duration")}} instance representing a duration to add to this date. It is converted to a `Temporal.Duration` object using the same algorithm as {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}.
- `options` {{optional_inline}}
  - : An object containing the following property:
    - `overflow` {{optional_inline}}
      - : A string specifying the behavior when a date component is out of range. Possible values are:
        - `"constrain"` (default)
          - : The date component is [clamped](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) to the valid range.
        - `"reject"`
          - : A {{jsxref("RangeError")}} is thrown if the date component is out of range.

### Return value

A new `Temporal.PlainDate` object representing the date specified by the original `PlainDate`, plus the duration.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the result is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), which is ±(10<sup>8</sup> + 1) days, or about ±273,972.6 years, from the Unix epoch.

## Description

The `duration` is handled in this way:

- Move forward by the number of years, keeping the `monthCode` and `day` the same. If the `monthCode` is invalid in the resulting year (impossible for Gregorian and ISO 8601, but possible for calendars with leap months), we adjust based on the `overflow` option: for `constrain`, we pick another month according to the cultural conventions of that calendar's users. For example, because the leap month is usually thought of as a duplicate of another month, we may pick the month that it is a duplicate of.
- Move forward by the number of months, adjusting the year if necessary, keeping the `day` the same. If the `day` is invalid in the resulting month (e.g., February 30), we adjust based on the `overflow` option: for `constrain`, we pick the closest valid day (e.g., February 28 or 29).
- All commonly supported calendars use fixed-length weeks, so the number of weeks is just converted to the number of days. If the rule is more complex, we may take an approach similar to shifting months.
- For all [non-calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) units (days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds), they are converted to the number of days. Fractional part of a day is ignored. Then, we move forward by that number of days, adjusting the month and year if necessary.

Adding a duration is equivalent to [subtracting](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract) its [negation](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated).

## Examples

### Adding a duration in ISO 8601 calendar

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2022-03-26

const end2 = start.add({ years: -1, months: -2, weeks: -3, days: -4 });
console.log(end2.toString()); // 2019-10-07

const distance = Temporal.PlainDate.from("2020-01-01").until("2021-01-01"); // 366 days
const end3 = start.add(distance);
console.log(end3.toString()); // 2022-01-02
```

### Adding a duration in a non-ISO calendar

```js
const start = Temporal.PlainDate.from("2021-01-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 11/18/2020
const end = start.add({ months: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 12/18/2020
```

### Adding a duration with overflow

If we move a few months and the corresponding day is invalid in this month, then we adjust the day based on the `overflow` option.

```js
const start = Temporal.PlainDate.from("2021-01-31");
const end = start.add({ months: 1 });
console.log(end.toString()); // 2021-02-28

// Any further day additions are based on the clamped month-day:
const end2 = start.add({ months: 1, days: 31 });
console.log(end2.toString()); // 2021-03-31

// Compare with the same addition in a different order that results in no overflow:
const end3 = start.add({ days: 31 }).add({ months: 1 });
console.log(end3.toString()); // 2021-04-03
```

Overflow can also occur for the month, for calendars where different years have different numbers of months (usually due to leap months).

```js
const start = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 2bis/11/2023; "bis" means leap month
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2024

// Compare:
const start = Temporal.PlainDate.from("2023-04-30[u-ca=chinese]");
console.log(start.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2023
const end = start.add({ years: 1 });
console.log(end.toLocaleString("en-US", { calendar: "chinese" })); // 3/11/2024; same day as above!
```

Note that the following is not an overflow because the month can just increment:

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ days: 100 });
console.log(end.toString()); // 2021-04-11
```

You can also throw an error if the date component is out of range:

```js
const start = Temporal.PlainDate.from("2021-01-31");
const end = start.add({ months: 1 }, { overflow: "reject" }); // RangeError: date value "day" not in 1..28: 31

const start = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
const end = start.add({ years: 1 }, { overflow: "reject" }); // RangeError: invalid "monthCode" calendar field: M02L
```

### Adding time durations

Fractional parts of a day are ignored.

```js
const start = Temporal.PlainDate.from("2021-01-01");
const end = start.add({ hours: 25 }); // Same as adding 1 day
console.log(end.toString()); // 2021-01-02
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
