---
title: Temporal.ZonedDateTime.prototype.dayOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/dayOfWeek
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.dayOfWeek
---

{{JSRef}}{{SeeCompatTable}}

The **`dayOfWeek`** accessor property of {{jsxref("Temporal.ZonedDateTime")}} instances returns a positive integer representing the 1-based day index in the week of this date. Days in a week are numbered sequentially from `1` to {{jsxref("Temporal/ZonedDateTime/daysInWeek", "daysInWeek")}}, with each number mapping to its name. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `dayOfWeek` is `undefined`. You cannot change this property directly. To create a new `Temporal.ZonedDateTime` object with the desired new `dayOfWeek` value, use the {{jsxref("Temporal/ZonedDateTime/add", "add()")}} or {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} method with the appropriate number of `days`.

For general information and more examples, see {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}.

## Examples

### Using dayOfWeek

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.dayOfWeek); // 4; Thursday
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/day", "Temporal.ZonedDateTime.prototype.day")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfYear", "Temporal.ZonedDateTime.prototype.dayOfYear")}}
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
