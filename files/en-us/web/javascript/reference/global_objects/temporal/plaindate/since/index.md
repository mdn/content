---
title: Temporal.PlainDate.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainDate.since
---

{{JSRef}}

The **`since()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another date (in a form convertible by {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}) to this date. The duration is positive if the other date is before this date, and negative if after.

This method does `this - other`. To do `other - this`, use the {{jsxref("Temporal/PlainDate/until", "until()")}} method.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainDate")}} instance representing a date to subtract from this date. It is converted to a `Temporal.PlainDate` object using the same algorithm as {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}. It must have the same calendar as `this`.
- `options` {{optional_inline}}
  - : An object containing some or all of the following properties (in the order they are retrieved and validated):
    - `largestUnit` {{optional_inline}}
      - : A string representing the largest unit to include in the output. The value must be one of the following: `"year"`, `"month"`, `"week"`, `"day"`, or their plural forms, or the value `"auto"` which means `"day"` or `smallestUnit`, whichever is greater. Defaults to `"auto"`. The result will not contain units larger than this; for example, if the largest unit is `"month"`, then "1 year 2 months" will become "14 months". Note that using [units larger than `"day"`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) may make the duration not portable to other calendars or dates.
    - `roundingIncrement` {{optional_inline}}
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. Must be in the inclusive range of 1 to 1e9.
    - `roundingMode` {{optional_inline}}
      - : A string specifying how to round off the fractional part of `smallestUnit`. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : A string representing the smallest unit to include in the output. The value must be one of the following: `"year"`, `"month"`, `"week"`, `"day"`, or their plural forms. Defaults to `"day"`. For units larger than `"day"`, fractional parts of the `smallestUnit` will be [rounded](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) according to the `roundingIncrement` and `roundingMode` settings. Must be smaller or equal to `largestUnit`.

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration _since_ `other` to this date. The duration is positive if `other` is before this date, and negative if after.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `other` has a different calendar than `this`.
    - Any of the options is invalid.

## Examples

### Using since()

```js
const lastUpdated = Temporal.PlainDate.from("2022-01-01");
const now = Temporal.Now.plainDateISO();
const duration = now.since(lastUpdated);
console.log(`Last updated ${duration.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] days ago"

const duration2 = now.since(lastUpdated, { smallestUnit: "month" });
console.log(`Last updated ${duration2.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] months ago"

const duration3 = now.since(lastUpdated, {
  largestUnit: "year",
  smallestUnit: "month",
});
console.log(`Last updated ${duration3.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] years, [number] months ago"
```

### Rounding the result

By default the fractional part of the `smallestUnit` is truncated. You can round it up using the `roundingIncrement` and `roundingMode` options.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-01-28");
const duration = date2.since(date1, {
  smallestUnit: "day",
  roundingIncrement: 5,
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P30D"
```

### Comparing different calendars

By default, the two dates must have the same calendar. This is to avoid ambiguity in the meaning of months and years. If you want to compare dates from different calendars, you can convert them to the same calendar first.

```js
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-01-28[u-ca=chinese]");
const duration = date2.withCalendar("iso8601").since(date1);
console.log(duration.toString()); // "P27D"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/until", "Temporal.PlainDate.prototype.until()")}}
