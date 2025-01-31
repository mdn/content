---
title: Temporal.PlainDate.prototype.toPlainYearMonth()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainYearMonth
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.toPlainYearMonth
---

{{JSRef}}{{SeeCompatTable}}

The **`toPlainYearMonth()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new {{jsxref("Temporal.PlainYearMonth")}} object representing the {{jsxref("Temporal/PlainDate/year", "year")}} and {{jsxref("Temporal/PlainDate/month", "month")}} of this date in the same calendar system.

## Syntax

```js-nolint
toPlainYearMonth()
```

### Parameters

None.

### Return value

A new `Temporal.PlainYearMonth` object representing the {{jsxref("Temporal/PlainDate/year", "year")}} and {{jsxref("Temporal/PlainDate/month", "month")}} of this date in the same calendar system.

## Examples

### Using toPlainYearMonth()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const yearMonth = date.toPlainYearMonth();
console.log(yearMonth.toString()); // 2021-07
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainDate/toPlainDateTime", "Temporal.PlainDate.prototype.toPlainDateTime()")}}
- {{jsxref("Temporal/PlainDate/toPlainMonthDay", "Temporal.PlainDate.prototype.toPlainMonthDay()")}}
- {{jsxref("Temporal/PlainDate/toZonedDateTime", "Temporal.PlainDate.prototype.toZonedDateTime()")}}
- {{jsxref("Temporal/PlainYearMonth/toPlainDate", "Temporal.PlainYearMonth.prototype.toPlainDate()")}}
