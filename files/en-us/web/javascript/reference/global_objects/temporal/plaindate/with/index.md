---
title: Temporal.PlainDate.prototype.with()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/with
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainDate.with
---

{{JSRef}}

The **`with()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new `Temporal.PlainDate` object representing this date with some fields replaced by new values. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the date's fields.

To replace the {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} property, use the {{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}} method instead.

## Syntax

```js-nolint
with(info)
with(info, options)
```

### Parameters

- `info`
  - : An object containing at least one of the following properties (in the order they are retrieved and validated):
    - `day` {{optional_inline}}
      - : An integer that corresponds to the {{jsxref("Temporal/PlainDate/day", "day")}} property. Must be positive regardless of the `overflow` option.
    - `era` and `eraYear` {{optional_inline}}
      - : A string and an integer that correspond to the {{jsxref("Temporal/PlainDate/era", "era")}} and {{jsxref("Temporal/PlainDate/eraYear", "eraYear")}} properties. Are only used if the calendar system has eras. `era` and `eraYear` must be provided simultaneously. If all of `era`, `eraYear`, and `year` are provided, they must be consistent.
    - `month` {{optional_inline}}
      - : Corresponds to the {{jsxref("Temporal/PlainDate/month", "month")}} property. Must be positive regardless of the `overflow` option.
    - `monthCode` {{optional_inline}}
      - : Corresponds to the {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} property. If both `month` and `monthCode` are provided, they must be consistent.
    - `year` {{optional_inline}}
      - : Corresponds to the {{jsxref("Temporal/PlainDate/year", "year")}} property.
- `options` {{optional_inline}}
  - : An object containing the following property:
    - `overflow` {{optional_inline}}
      - : A string specifying the behavior when a date component is out of range. Possible values are:
        - `"constrain"` (default)
          - : The date component is clamped to the valid range.
        - `"reject"`
          - : A {{jsxref("RangeError")}} is thrown if the date component is out of range.

### Return value

A new `Temporal.PlainDate` object, where the fields specified in `info` that are not `undefined` are replaced by the corresponding values, and the rest of the fields are copied from the original date.

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
const date = new Temporal.PlainDate(2021, 7, 6);
const newDate = date.with({ day: date.daysInMonth });
console.log(newDate.toString()); // 2021-07-31
```

For more examples, see the documentation for the individual properties that can be set using `with()`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/withCalendar", "Temporal.PlainDate.prototype.withCalendar()")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
