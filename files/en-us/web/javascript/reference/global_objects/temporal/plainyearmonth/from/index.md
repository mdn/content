---
title: Temporal.PlainYearMonth.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/from
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.from
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainYearMonth.from()`** static method creates a new `Temporal.PlainYearMonth` object from another `Temporal.PlainYearMonth` object, an object with year and month properties, or an [RFC 9557](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) string.

## Syntax

```js-nolint
Temporal.PlainYearMonth.from(info)
Temporal.PlainYearMonth.from(info, options)
```

### Parameters

- `info`

  - : One of the following:

    - A {{jsxref("Temporal.PlainYearMonth")}} instance, which creates a copy of the instance.
    - An [RFC 9557](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth#rfc_9557_format) string containing a date and optionally a calendar. If the calendar is not `iso8601`, a day is required.
    - An object containing the following properties (in the order they are retrieved and validated):
      - `calendar` {{optional_inline}}
        - : A string that corresponds to the {{jsxref("Temporal/PlainYearMonth/calendarId", "calendarId")}} property. Defaults to `"iso8601"`. All other properties are interpreted in this calendar system (unlike the {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}} constructor, which interprets the values in the ISO calendar system).
      - `era` and `eraYear`
        - : A string and an integer that correspond to the {{jsxref("Temporal/PlainYearMonth/era", "era")}} and {{jsxref("Temporal/PlainYearMonth/eraYear", "eraYear")}} properties. Are only used if the calendar system has eras. `era` and `eraYear` must be provided simultaneously. If they are not provided, then `year` must be provided. If all of `era`, `eraYear`, and `year` are provided, they must be consistent.
      - `month`
        - : Corresponds to the {{jsxref("Temporal/PlainYearMonth/month", "month")}} property. Must be positive regardless of the `overflow` option.
      - `monthCode`
        - : Corresponds to the {{jsxref("Temporal/PlainYearMonth/monthCode", "monthCode")}} property. If it is not provided, then `month` must be provided. If both `month` and `monthCode` are provided, they must be consistent.
      - `year`
        - : Corresponds to the {{jsxref("Temporal/PlainYearMonth/year", "year")}} property.

- `options` {{optional_inline}}
  - : An object containing the following property:
    - `overflow` {{optional_inline}}
      - : A string specifying the behavior when a date component is out of range (when using the object `info`). Possible values are:
        - `"constrain"` (default)
          - : The date component is [clamped](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) to the valid range.
        - `"reject"`
          - : A {{jsxref("RangeError")}} is thrown if the date component is out of range.

### Return value

A new `Temporal.PlainYearMonth` object, representing the year and month specified by `info` in the specified `calendar`.

Each `PlainYearMonth` stores a whole ISO 8601 date internally, which has the same year-month in the target calendar as what's exposed. The reference day is visible when stringifying with {{jsxref("Temporal/PlainYearMonth/toString", "toString()")}}, which outputs an ISO date. The reference day is chosen arbitrarily but consistently; that is, every `(year, month)` pair always maps to the same ISO reference day. It does not use the day provided in the input. Instead, the reference day is always chosen to be the first valid day of the month.

This reference day canonicalization ensures that {{jsxref("Temporal/PlainYearMonth/equals", "equals()")}} can directly compare the underlying ISO dates without extra computation.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - `info` is not an object or a string.
    - `options` is not an object or `undefined`.
    - The provided properties are insufficient to unambiguously determine a date. You usually need to provide a `year` (or `era` and `eraYear`) and a `month` (or a `monthCode`).
- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - The provided properties that specify the same component are inconsistent.
    - The provided non-numerical properties are not valid; for example, if `monthCode` is never a valid month code in this calendar.
    - The provided numerical properties are out of range, and `options.overflow` is set to `"reject"`.
    - The info is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), which is ±(10<sup>8</sup> + 1) days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Creating a PlainYearMonth from an object

```js
// Year + month code
const ym = Temporal.PlainYearMonth.from({ year: 2021, monthCode: "M05" });
console.log(ym.toString()); // 2021-05

// Year + month
const ym2 = Temporal.PlainYearMonth.from({ year: 2021, month: 7 });
console.log(ym2.toString()); // 2021-07

// Year + month in a different calendar
const ym3 = Temporal.PlainYearMonth.from({
  year: 5730,
  month: 6,
  calendar: "hebrew",
});
console.log(ym3.toString()); // 1970-02-07[u-ca=hebrew]

// Year + month code in a different calendar
const ym4 = Temporal.PlainYearMonth.from({
  year: 5730,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(ym4.toString()); // 1970-02-07[u-ca=hebrew]
```

### Controlling overflow behavior

By default, out-of-range values are clamped to the valid range.

```js
const ym1 = Temporal.PlainYearMonth.from({ year: 2021, month: 13 });
console.log(ym1.toString()); // 2021-12

// 5732 is not a Hebrew leap year, so a different monthCode is chosen
const ym2 = Temporal.PlainYearMonth.from({
  year: 5732,
  monthCode: "M05L",
  calendar: "hebrew",
});
console.log(ym2.toLocaleString("en-US", { calendar: "hebrew" })); // Adar 5732
const underlyingDate = Temporal.PlainDate.from(ym2.toString());
console.log(underlyingDate.year, underlyingDate.monthCode); // 5732 M06
```

You can change this behavior to throw an error instead:

```js
Temporal.PlainYearMonth.from({ year: 2021, month: 13 }, { overflow: "reject" });
// RangeError: date value "month" not in 1..12: 13
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/PlainYearMonth", "Temporal.PlainYearMonth()")}}
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
