---
title: Temporal.PlainDate.prototype.toPlainDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainDateTime
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.toPlainDateTime
---

{{JSRef}}{{SeeCompatTable}}

The **`toPlainDateTime()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new {{jsxref("Temporal.PlainDateTime")}} object representing this date and a supplied time in the same calendar system.

## Syntax

```js-nolint
toPlainDateTime()
toPlainDateTime(plainTime)
```

### Parameters

- `plainTime` {{optional_inline}}
  - : A string, an object, or a {{jsxref("Temporal.PlainTime")}} instance representing the time component of the resulting `PlainDateTime`. It is converted to a `Temporal.PlainTime` object using the same algorithm as {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. Defaults to `"00:00:00"`.

### Return value

A new `Temporal.PlainDateTime` object representing the date and time specified by this date and `plainTime`, interpreted in the calendar system of this date.

## Examples

### Using toPlainDateTime()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const dateTime = date.toPlainDateTime("12:34:56");
console.log(dateTime.toString()); // 2021-07-01T12:34:56

const midnight = date.toPlainDateTime();
console.log(midnight.toString()); // 2021-07-01T00:00:00

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
const dateTime2 = date2.toPlainDateTime("12:34:56");
console.log(dateTime2.toString()); // 2021-07-01T12:34:56[u-ca=chinese]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toPlainYearMonth", "Temporal.PlainDate.prototype.toPlainYearMonth()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
