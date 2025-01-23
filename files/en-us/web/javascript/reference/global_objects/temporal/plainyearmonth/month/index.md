---
title: Temporal.PlainYearMonth.prototype.month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/month
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.month
---

{{JSRef}}{{SeeCompatTable}}

The **`month`** accessor property of {{jsxref("Temporal.PlainYearMonth")}} instances returns a positive integer representing the 1-based month index in the year of this year-month. The first month of this year is `1`, and the last month is the {{jsxref("Temporal/PlainYearMonth/monthsInYear", "monthsInYear")}}. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `month` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainYearMonth/with", "with()")}} method to create a new `Temporal.PlainYearMonth` object with the desired new value.

For general information and more examples, see {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}.

## Examples

### Using month

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.monthCode); // "M07"
console.log(ym.month); // 7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/with", "Temporal.PlainYearMonth.prototype.with()")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- {{jsxref("Temporal/PlainYearMonth/year", "Temporal.PlainYearMonth.prototype.year")}}
- {{jsxref("Temporal/PlainYearMonth/monthCode", "Temporal.PlainYearMonth.prototype.monthCode")}}
- {{jsxref("Temporal/PlainYearMonth/daysInMonth", "Temporal.PlainYearMonth.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainYearMonth/monthsInYear", "Temporal.PlainYearMonth.prototype.monthsInYear")}}
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
