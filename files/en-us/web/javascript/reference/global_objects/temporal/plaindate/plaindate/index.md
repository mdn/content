---
title: Temporal.PlainDate()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
page-type: javascript-constructor
browser-compat: javascript.builtins.Temporal.PlainDate.PlainDate
---

{{JSRef}}

The **`Temporal.PlainDate()`** constructor creates {{jsxref("Temporal.PlainDate")}} objects.

Like all other `Temporal` classes, you should usually construct `Temporal.PlainDate` objects using the {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}} static method, which can handle a variety of input types.

## Syntax

```js-nolint
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

### Parameters

- `year`
  - : A number, truncated to an integer, representing the year in the ISO calendar system.
- `month`
  - : A number, truncated to an integer, representing the month in the ISO calendar system.
- `day`
  - : A number, truncated to an integer, representing the day of the month in the ISO calendar system.
- `calendar` {{optional_inline}}
  - : A string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) to use. Note that irrespective of the `calendar`, the `year`, `month`, and `day` must be in the ISO 8601 calendar system. Defaults to `"iso8601"`.

### Return value

A new `Temporal.PlainDate` object, representing the date specified by `year`, `month`, `day` (in the ISO calendar), interpreted in the calendar system specified by `calendar`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `calendar` is not a string or `undefined`.
- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `year`, `month`, or `day` is not a finite number, or do not represent a valid date in the ISO calendar system.
    - `calendar` is not a valid calendar identifier.

## Examples

### Using Temporal.PlainDate()

```js
const plainDate = new Temporal.PlainDate(2021, 7, 1);
console.log(plainDate.toString()); // 2021-07-01

// Note that the date is stored internally as ISO 8601, even when it's
// interpreted in a different calendar system. For example, even though
// 2021-07-01 is 2021-05-22 in the Chinese calendar, you still pass the
// ISO date to the constructor.
const plainDate2 = new Temporal.PlainDate(2021, 7, 1, "chinese");
console.log(plainDate2.toString()); // 2021-07-01[u-ca=chinese]
console.log(plainDate2.month); // 5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
