---
title: Temporal.PlainYearMonth.prototype.since()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainYearMonth.since
---

{{JSRef}}

The **`since()`** method of {{jsxref("Temporal.PlainYearMonth")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another year-month (in a form convertible by {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}) to this year-month. The duration is positive if the other month is before this month, and negative if after.

This method does `this - other`. To do `other - this`, use the {{jsxref("Temporal/PlainYearMonth/until", "until()")}} method.

## Syntax

```js-nolint
since(other)
since(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainYearMonth")}} instance representing a year-month to subtract from this year-month. It is converted to a `Temporal.PlainYearMonth` object using the same algorithm as {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}. It must have the same calendar as `this`.
- `options` {{optional_inline}}
  - : An object containing some or all of the following properties (in the order they are retrieved and validated):
    - `largestUnit` {{optional_inline}}
      - : A string representing the largest unit to include in the output. The value must be one of the following: `"year"`, `"month"`, or their plural forms, or the value `"auto"` which means `"year"`. Defaults to `"auto"`. The result will not contain units larger than this; for example, if the largest unit is `"month"`, then "1 year 2 months" will become "14 months". Note that the result is always a [calendar duration](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#calendar_durations) and is not portable to other calendars or dates.
    - `roundingIncrement` {{optional_inline}}
      - : A number (truncated to an integer) representing the rounding increment in the given `smallestUnit`. Defaults to `1`. Must be in the inclusive range of 1 to 1e9.
    - `roundingMode` {{optional_inline}}
      - : A string specifying how to round off the fractional part of `smallestUnit`. See [`Intl.NumberFormat()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode). Defaults to `"trunc"`.
    - `smallestUnit` {{optional_inline}}
      - : A string representing the smallest unit to include in the output. The value must be one of the following: `"year"`, `"month"`, or their plural forms. Defaults to `"month"`. For units larger than `"month"`, fractional parts of the `smallestUnit` will be [rounded](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/round) according to the `roundingIncrement` and `roundingMode` settings. Must be smaller or equal to `largestUnit`.

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration _since_ `other` to this year-month. The duration is positive if `other` is before this year-month, and negative if after.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `other` has a different calendar than `this`.
    - Any of the options is invalid.

## Examples

### Using since()

```js
const lastUpdated = Temporal.PlainYearMonth.from("2022-01");
const now = Temporal.Now.plainDateISO().toPlainYearMonth();
const duration = now.since(lastUpdated);
console.log(`Last updated ${duration.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] years, [number] months ago"

const duration2 = now.since(lastUpdated, { largestUnit: "month" });
console.log(`Last updated ${duration2.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] months ago"

const duration3 = now.since(lastUpdated, { smallestUnit: "year" });
console.log(`Last updated ${duration3.toLocaleString("en-US")} ago`);
// Expected output: "Last updated [number] years ago"
```

### Rounding the result

By default the fractional part of the `smallestUnit` is truncated. You can round it up using the `roundingIncrement` and `roundingMode` options.

```js
const ym1 = Temporal.PlainYearMonth.from("2022-01");
const ym2 = Temporal.PlainYearMonth.from("2022-11");
const duration = ym2.since(ym1, {
  smallestUnit: "year",
  roundingMode: "ceil",
});
console.log(duration.toString()); // "P1Y"
```

### Getting the result in days

By default, the resulting duration never contains days, because `PlainYearMonth` does not offer day-level precision. You can get the result in days by converting it to a {{jsxref("Temporal.PlainDate")}} first with an unambiguous day.

```js
const ym1 = Temporal.PlainYearMonth.from("2022-01");
const ym2 = Temporal.PlainYearMonth.from("2022-11");
const duration = ym2.toPlainDate({ day: 1 }).since(ym1.toPlainDate({ day: 1 }));
console.log(duration.toString()); // "P304D"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- {{jsxref("Temporal/PlainYearMonth/until", "Temporal.PlainYearMonth.prototype.until()")}}
