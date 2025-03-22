---
title: Temporal.PlainDateTime.prototype.year
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/year
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDateTime.year
---

{{JSRef}}{{SeeCompatTable}}

The **`year`** accessor property of {{jsxref("Temporal.PlainDateTime")}} instances returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `year` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainDateTime/with", "with()")}} method to create a new `Temporal.PlainDateTime` object with the desired new value.

For general information and more examples, see {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}.

## Examples

### Using year

```js
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.year); // 2021
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
