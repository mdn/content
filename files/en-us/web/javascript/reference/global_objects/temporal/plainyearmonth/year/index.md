---
title: Temporal.PlainYearMonth.prototype.year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/year
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.year
---

{{JSRef}}{{SeeCompatTable}}

The **`year`** accessor property of {{jsxref("Temporal.PlainYearMonth")}} instances returns an integer representing the number of years of this year-month relative to the start of a calendar-specific epoch year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `year` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainYearMonth/with", "with()")}} method to create a new `Temporal.PlainYearMonth` object with the desired new value.

For general information and more examples, see {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}.

## Examples

### Using year

```js
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.year); // 2021
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
- {{jsxref("Temporal/PlainYearMonth/era", "Temporal.PlainYearMonth.prototype.era")}}
- {{jsxref("Temporal/PlainYearMonth/eraYear", "Temporal.PlainYearMonth.prototype.eraYear")}}
- {{jsxref("Temporal/PlainYearMonth/month", "Temporal.PlainYearMonth.prototype.month")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
