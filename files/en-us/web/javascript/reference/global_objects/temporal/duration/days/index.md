---
title: Temporal.Duration.prototype.days
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/days
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration.days
---

{{JSRef}}{{SeeCompatTable}}

The **`days`** accessor property of {{jsxref("Temporal.Duration")}} instances returns an integer representing the number of days in the duration.

Unless the duration is [balanced](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration#duration_balancing), you cannot assume the range of this value, but you can know its sign by checking the duration's [`sign`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign) property. If it is balanced to a unit above days, the `days` absolute value's range depends on the calendar (how many days are in a week or month).

The set accessor of `days` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/Duration/with", "with()")}} method to create a new `Temporal.Duration` object with the desired new value.

## Examples

### Using days

```js
const d1 = Temporal.Duration.from({ weeks: 1, days: 1 });
const d2 = Temporal.Duration.from({ weeks: -1, days: -1 });
const d3 = Temporal.Duration.from({ weeks: 1 });
const d4 = Temporal.Duration.from({ days: 7 });

console.log(d1.days); // 1
console.log(d2.days); // -1
console.log(d3.days); // 0
console.log(d4.days); // 7

// Balance d4
const d4Balanced = d4.round({
  largestUnit: "weeks",
  relativeTo: Temporal.PlainDate.from("2021-01-01"), // ISO 8601 calendar
});
console.log(d4Balanced.days); // 0
console.log(d4Balanced.weeks); // 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}}
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
