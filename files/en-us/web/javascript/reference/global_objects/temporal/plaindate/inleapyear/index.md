---
title: Temporal.PlainDate.prototype.inLeapYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/inLeapYear
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.inLeapYear
---

{{JSRef}}{{SeeCompatTable}}

The **`inLeapYear`** accessor property of {{jsxref("Temporal.PlainDate")}} instances returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

For the ISO 8601 calendar, a leap year is a year that is evenly divisible by 4, except for years that are evenly divisible by 100, unless the year is also evenly divisible by 400. For the ISO 8601 calendar, leap years have 366 days, while common years have 365 days. For other calendar systems, the rules likely differ, and leap years may have more days added (such as a leap month).

The set accessor of `inLeapYear` is `undefined`. You cannot change this property directly.

## Examples

### Using inLeapYear

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.inLeapYear); // false
console.log(date.daysInYear); // 365
console.log(date.monthsInYear); // 12

const date2 = Temporal.PlainDate.from("2020-07-01");
console.log(date2.inLeapYear); // true
console.log(date2.daysInYear); // 366
console.log(date2.monthsInYear); // 12

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date3.inLeapYear); // false
console.log(date3.daysInYear); // 354
console.log(date3.monthsInYear); // 12

const date4 = Temporal.PlainDate.from("2023-07-01[u-ca=chinese]");
console.log(date4.inLeapYear); // true
console.log(date4.daysInYear); // 384
console.log(date4.monthsInYear); // 13
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/year", "Temporal.PlainDate.prototype.year")}}
- {{jsxref("Temporal/PlainDate/daysInYear", "Temporal.PlainDate.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
