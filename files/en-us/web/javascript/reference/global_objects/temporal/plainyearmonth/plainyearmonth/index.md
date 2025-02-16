---
title: Temporal.PlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/PlainYearMonth
page-type: javascript-constructor
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.PlainYearMonth
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainYearMonth()`** constructor creates {{jsxref("Temporal.PlainYearMonth")}} objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other `Temporal` classes, you should usually construct `Temporal.PlainYearMonth` objects using the {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} static method, which can handle a variety of input types.

## Syntax

```js-nolint
new Temporal.PlainYearMonth(year, month)
new Temporal.PlainYearMonth(year, month, calendar)
new Temporal.PlainYearMonth(year, month, calendar, referenceDay)
```

> **Note:** `Temporal.PlainYearMonth()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

> [!WARNING]
> Avoid using the `calendar` and `referenceDay` parameters, because {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} and {{jsxref("Temporal/PlainYearMonth/compare", "compare()")}} will consider the reference day for comparison, causing two equivalent year-months to be considered different if they have different reference days. To create a `Temporal.PlainYearMonth` object with a non-ISO calendar, use the {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}} static method.

### Parameters

- `year` {{optional_inline}}
  - : A number, truncated to an integer, representing the year in the ISO calendar system.
- `month`
  - : A number, truncated to an integer, representing the month in the ISO calendar system.
- `calendar` {{optional_inline}}
  - : A string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) to use. Note that irrespective of the `calendar`, the `year`, `month`, and `referenceDay` must be in the ISO 8601 calendar system. Defaults to `"iso8601"`.
- `referenceDay`
  - : A number, truncated to an integer, representing the day of the month in the ISO calendar system. Defaults to `1`. The same ISO year-month can represent different months on different days with non-ISO calendars. For example, the days 2021-07-01 and 2021-07-31 may fall in different months in a non-Gregorian calendar, and just specifying "2021-07" is insufficient to unambiguously determine a month in the target calendar. Therefore, you virtually always want to specify a `referenceDay` when using a non-ISO calendar.

### Return value

A new `Temporal.PlainYearMonth` object, representing the year-month of the date specified by `year`, `month`, and `referenceDay` (in the ISO calendar), interpreted in the calendar system specified by `calendar`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `calendar` is not a string or `undefined`.
- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `year`, `month`, or `referenceDay` is not a finite number.
    - The `year`, `month`, and `referenceDay` combination does not represent a valid date in the ISO calendar system, or is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), which is ±(10<sup>8</sup> + 1) days, or about ±273,972.6 years, from the Unix epoch.
    - `calendar` is not a valid calendar identifier.

## Examples

### Using Temporal.PlainYearMonth()

```js
const ym = new Temporal.PlainYearMonth(2021, 7);
console.log(ym.toString()); // 2021-07

const ym2 = new Temporal.PlainYearMonth(2021, 7, "chinese");
console.log(ym2.toString()); // 2021-07-01[u-ca=chinese]

const ym3 = new Temporal.PlainYearMonth(2021, 7, "chinese", 31);
console.log(ym3.toString()); // 2021-07-31[u-ca=chinese]
```

### Improper usage

You should avoid using the `calendar` and `referenceDay` parameters, unless you know that the `referenceDay` is the canonical reference day that would be selected by `Temporal.PlainYearMonth.from()` for the same year-month.

```js
const ym = new Temporal.PlainYearMonth(2021, 7, "chinese", 1);
const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
console.log(ym.equals(ym2)); // false
console.log(ym.toString()); // 2021-07-01[u-ca=chinese]
console.log(ym2.toString()); // 2021-06-10[u-ca=chinese]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}
