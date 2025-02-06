---
title: Temporal.PlainDate.prototype.day
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.day
---

{{JSRef}}{{SeeCompatTable}}

The **`day`** accessor property of {{jsxref("Temporal.PlainDate")}} instances returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

It generally starts at 1 and is continuous, but not always. If you want to loop through all the days in a month, first use {{jsxref("Temporal/PlainDate/with", "with()")}} with `{ day: 1 }` (which sets to the beginning of the month, even if the actual number is not `1`), then repeatedly use {{jsxref("Temporal/PlainDate/add", "add()")}} with `{ days: 1 }`, until the month changes.

> [!NOTE]
> Usually, the day index only changes when transitioning from one calendar system into another, such as [from the Julian to the Gregorian calendar](https://en.wikipedia.org/wiki/Adoption_of_the_Gregorian_calendar). In practice, all currently built-in calendars are [proleptic](https://en.wikipedia.org/wiki/Proleptic_Gregorian_calendar), meaning the calendar system is extended indefinitely into the past and future. Assuming `day` is non-continuous guards against future introductions of non-proleptic calendars.

The set accessor of `day` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainDate/with", "with()")}} method to create a new `Temporal.PlainDate` object with the desired new value.

## Examples

### Using day

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.day); // 1

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.day); // 22; it is May 22 in the Chinese calendar
```

### Looping through all days in a month

```js
const month = Temporal.PlainDate.from("2021-07-14"); // An arbitrary date in the month
for (
  let day = month.with({ day: 1 });
  day.month === month.month;
  day = day.add({ days: 1 })
) {
  console.log(day.day);
}
```

### Changing day

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ day: 15 });
console.log(newDate.toString()); // 2021-07-15
```

You can also use {{jsxref("Temporal/PlainDate/add", "add()")}} or {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} to move a certain number of days from the current date.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ days: 14 });
console.log(newDate.toString()); // 2021-07-15
```

By default, `with()` constrains the day to the range of valid values. So you can use `{ day: 1 }` to set the day to the first day of the month, even if the first day does not have the number `1`. Similarly, the following will set the day to the last day of the month:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastDay = date.with({ day: Number.MAX_VALUE }); // 2021-07-31
```

> [!NOTE]
> Avoid using {{jsxref("Temporal/PlainDate/daysInMonth", "daysInMonth")}} to set the day to the last day of the month. The last day of the month is not always the same as the number of days in the month, in the rare case where a month may have a few days skipped.

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
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/dayOfWeek", "Temporal.PlainDate.prototype.dayOfWeek")}}
- {{jsxref("Temporal/PlainDate/dayOfYear", "Temporal.PlainDate.prototype.dayOfYear")}}
