---
title: Temporal.ZonedDateTime.prototype.weekOfYear
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/weekOfYear
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.weekOfYear
---

{{JSRef}}{{SeeCompatTable}}

The **`weekOfYear`** accessor property of {{jsxref("Temporal.ZonedDateTime")}} instances returns a positive integer representing the 1-based week index in the {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "yearOfWeek")}} of this date, or `undefined` if the calendar does not have a well-defined week system. The first week of the year is `1`. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `weekOfYear` is `undefined`. You cannot change this property directly. To create a new `Temporal.ZonedDateTime` object with the desired new `weekOfYear` value, use the {{jsxref("Temporal/ZonedDateTime/add", "add()")}} or {{jsxref("Temporal/ZonedDateTime/subtract", "subtract()")}} method with the appropriate number of `weeks`.

For general information and more examples, see {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}.

## Examples

### Using weekOfYear

```js
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.weekOfYear); // 26
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
- {{jsxref("Temporal/ZonedDateTime/yearOfWeek", "Temporal.ZonedDateTime.prototype.yearOfWeek")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/weekOfYear", "Temporal.PlainDate.prototype.weekOfYear")}}
