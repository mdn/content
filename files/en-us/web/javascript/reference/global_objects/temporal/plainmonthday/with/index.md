---
title: Temporal.PlainMonthDay.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainMonthDay.with
---

{{JSRef}}

The **`with()`** method of {{jsxref("Temporal.PlainMonthDay")}} instances returns a new `Temporal.PlainMonthDay` object representing this month-day with some fields replaced by new values. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the month-day's fields.

There's no obvious way to create a new `Temporal.PlainMonthDay` object with a different calendar that represents the same month-day, so to replace its `calendarId` property, you need to convert it to a {{jsxref("Temporal.PlainDate")}} object first using {{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}, change the calendar, and then convert it back.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameters

- `info`
  - : An object containing the following properties (in the order they are retrieved and validated):
    - `calendar` {{optional_inline}}
      - : A string that corresponds to the {{jsxref("Temporal/PlainMonthDay/calendarId", "calendarId")}} property. Defaults to `"iso8601"`. All other properties are interpreted in this calendar system (unlike the {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} constructor, which interprets the values in the ISO calendar system).
    - `day`
      - : An integer that corresponds to the {{jsxref("Temporal/PlainMonthDay/day", "day")}} property. Must be positive regardless of the `overflow` option.
    - `era` and `eraYear` {{optional_inline}}
      - : A string and an integer that can be used instead of `year`. See {{jsxref("Temporal/PlainDate/era", "era")}} and {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} of `PlainDate`. Are only used if the calendar system has eras. `era` and `eraYear` must be provided simultaneously. If all of `era`, `eraYear`, and `year` are provided, they must be consistent.
    - `month` {{optional_inline}}
      - : A positive integer that can be used instead of `monthCode`. See {{jsxref("Temporal/PlainDate/month", "month")}} of `PlainDate`. Must be positive regardless of the `overflow` option. If `month` is provided, and the calendar is not `iso8601`, then `year` (or `era` + `eraYear` as a substitution) must be provided too, because the same `month` may map to multiple possible `monthCode` values in different years.
    - `monthCode`
      - : Corresponds to the {{jsxref("Temporal/PlainMonthDay/monthCode", "monthCode")}} property. If both `month` and `monthCode` are provided, they must be consistent.
    - `year` {{optional_inline}}
      - : An integer used to disambiguate `month` if provided, because for some calendars, the same `month` can mean different `monthCode` in different years. See {{jsxref("Temporal/PlainDate/year", "year")}} of `PlainDate`. If a year is provided, then the `overflow` option validates the month-day in the given year, not just any year.
- `options` {{optional_inline}}
  - : An object containing the following property:
    - `overflow` {{optional_inline}}
      - : A string specifying the behavior when a date component is out of range. Possible values are:
        - `"constrain"` (default)
          - : The date component is [clamped](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate#invalid_date_clamping) to the valid range.
        - `"reject"`
          - : A {{jsxref("RangeError")}} is thrown if the date component is out of range.

### Return value

A new `Temporal.PlainMonthDay` object, where the fields specified in `info` that are not `undefined` are replaced by the corresponding values, and the rest of the fields are copied from the original date.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - `info` is not an object.
    - `options` is not an object or `undefined`.
- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - The provided properties that specify the same component are inconsistent.
    - The provided non-numerical properties are not valid, for example, `monthCode` is not a valid month code.
    - The provided numerical properties are out of range, and `options.overflow` is set to `"reject"`.

## Examples

### Using with()

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMd = md.with({ day: 2 });
console.log(newMd.toString()); // "07-02"
```

For more examples, see the documentation for the individual properties that can be set using `with()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
