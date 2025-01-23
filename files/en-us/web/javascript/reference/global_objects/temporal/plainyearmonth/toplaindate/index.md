---
title: Temporal.PlainYearMonth.prototype.toPlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toPlainDate
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.toPlainDate
---

{{JSRef}}{{SeeCompatTable}}

The **`toPlainDate()`** method of {{jsxref("Temporal.PlainYearMonth")}} instances returns a new {{jsxref("Temporal.PlainDate")}} object representing this year-month and a supplied day in the same calendar system.

## Syntax

```js-nolint
toPlainDate(dayInfo)
```

### Parameters

- `dayInfo` {{optional_inline}}
  - : An object representing the day component of the resulting `PlainDate`, containing the following property:
    - `day`
      - : Corresponds to the {{jsxref("Temporal/PlainDate/day", "day")}} property.

### Return value

A new `Temporal.PlainDate` object representing the date specified by this year-month and the day in `dayInfo`, interpreted in the calendar system of this year-month.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.
- {{jsxref("TypeError")}}
  - : Thrown if `dayInfo` is not an object.

## Examples

### Using toPlainDate()

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const date = ym.toPlainDate({ day: 1 });
console.log(date.toString()); // 2021-07-01

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
const date2 = ym2.toPlainDate({ day: 15 });
console.log(date2.toString()); // 2021-06-24[u-ca=chinese]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
