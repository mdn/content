---
title: Temporal.PlainDateTime.prototype.monthsInYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/monthsInYear
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDateTime.monthsInYear
---

{{JSRef}}{{SeeCompatTable}}

The **`monthsInYear`** accessor property of {{jsxref("Temporal.PlainDateTime")}} instances returns a positive integer representing the number of months in the year of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `monthsInYear` is `undefined`. You cannot change this property directly.

For general information and more examples, see {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}.

## Examples

### Using monthsInYear

```js
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.monthsInYear); // 12
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
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
