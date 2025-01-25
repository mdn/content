---
title: Temporal.ZonedDateTime.prototype.yearOfWeek
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/yearOfWeek
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.yearOfWeek
---

{{JSRef}}{{SeeCompatTable}}

The **`yearOfWeek`** accessor property of {{jsxref("Temporal.ZonedDateTime")}} instances returns an integer representing the year to be paired with the {{jsxref("Temporal/ZonedDateTime/weekOfYear", "weekOfYear")}} of this date, or `undefined` if the calendar does not have a well-defined week system. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

The set accessor of `yearOfWeek` is `undefined`. You cannot change this property directly.

For general information and more examples, see {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/year", "Temporal.ZonedDateTime.prototype.year")}}
- {{jsxref("Temporal/ZonedDateTime/weekOfYear", "Temporal.ZonedDateTime.prototype.weekOfYear")}}
- {{jsxref("Temporal/ZonedDateTime/dayOfWeek", "Temporal.ZonedDateTime.prototype.dayOfWeek")}}
- {{jsxref("Temporal/ZonedDateTime/daysInWeek", "Temporal.ZonedDateTime.prototype.daysInWeek")}}
- {{jsxref("Temporal/ZonedDateTime/daysInYear", "Temporal.ZonedDateTime.prototype.daysInYear")}}
- {{jsxref("Temporal/PlainDate/yearOfWeek", "Temporal.PlainDate.prototype.yearOfWeek")}}
