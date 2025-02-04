---
title: Temporal.PlainMonthDay.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/with
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainMonthDay.with
---

{{JSRef}}{{SeeCompatTable}}

The **`with()`** method of {{jsxref("Temporal.PlainMonthDay")}} instances returns a new `Temporal.PlainMonthDay` object representing this month-day with some fields replaced by new values. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the month-day's fields.

There's no obvious way to create a new `Temporal.PlainMonthDay` object that represents the same month-day in a different calendar, so to replace its `calendarId` property, you need to convert it to a {{jsxref("Temporal.PlainDate")}} object using {{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}, change the calendar, and then convert it back.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameters

- `info`
  - : An object containing at least one of the properties recognized by {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} (except `calendar`): `day`, `era` and `eraYear`, `month`, `monthCode`, `year`. Unspecified properties use the values from the original month-day. You need to provide the year if and only if you provide `month` and the calendar is not `iso8601`. You only need to provide one of `month` or `monthCode`, and one of `era` and `eraYear` or `year`, and the other will be updated accordingly.
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
    - The provided non-numerical properties are not valid; for example, if `monthCode` is never a valid month code in this calendar.
    - The provided numerical properties are out of range, and `options.overflow` is set to `"reject"`.
    - If the year is provided, the calendar is not `iso8601`, and the year is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates) or years, which is from `-271821` to `275760`.

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
