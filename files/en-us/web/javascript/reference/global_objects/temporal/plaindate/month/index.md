---
title: Temporal.PlainDate.prototype.month
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/month
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.month
---

{{JSRef}}{{SeeCompatTable}}

The **`month`** accessor property of {{jsxref("Temporal.PlainDate")}} instances returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is `1`, and the last month is the {{jsxref("Temporal/PlainDate/monthsInYear", "monthsInYear")}}. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

Note that unlike {{jsxref("Date.prototype.getMonth()")}}, the index is 1-based. If the calendar has leap months, then the month with the same {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} may have different `month` indexes for different years.

> [!NOTE]
> Do not use this property to identify the actual month, including its name. Use {{jsxref("Temporal/PlainDate/monthCode", "monthCode")}} for that purpose. Use `month` only for identifying months within the context of a year, or to figure out their order.

The set accessor of `month` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainDate/with", "with()")}} method to create a new `Temporal.PlainDate` object with the desired new value.

## Examples

### Using month

```js
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.monthCode); // "M07"
console.log(date.month); // 7

const date2 = Temporal.PlainDate.from("2021-05-01[u-ca=chinese]");
console.log(date2.monthCode); // "M03"
console.log(date2.month); // 3; it is March 20 in the Chinese calendar

const date3 = Temporal.PlainDate.from("2023-05-01[u-ca=chinese]");
console.log(date3.monthCode); // "M03"
console.log(date3.month); // 4, although it is also March (M03)!

const date4 = Temporal.PlainDate.from("2023-04-01[u-ca=chinese]");
console.log(date4.monthCode); // "M02L"
console.log(date4.month); // 3, this month is a leap month, i.e. a duplicate February
```

### Looping through all months in a year

```js
const year = Temporal.PlainDate.from("2021-07-14"); // An arbitrary date in the year
for (
  let month = year.with({ month: 1 });
  month.year === year.year;
  month = month.add({ months: 1 })
) {
  console.log(month.month);
}
```

Alternatively, this is also a safe way (unlike the [day example](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day#looping_through_all_days_in_a_month)):

```js
for (let month = 1; month <= year.monthsInYear; month++) {
  const monthDate = year.with({ month });
}
```

### Changing month

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ month: 2 });
console.log(newDate.toString()); // 2021-02-01
```

You can also use {{jsxref("Temporal/PlainDate/add", "add()")}} or {{jsxref("Temporal/PlainDate/subtract", "subtract()")}} to move a certain number of months from the current date.

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ months: 3 });
console.log(newDate.toString()); // 2021-10-01
```

By default, `with()` constrains the day to the range of valid values. Both of the following will set the month to the last month of the year:

```js
const date = Temporal.PlainDate.from("2021-07-01");
const lastMonth = date.with({ month: date.monthsInYear }); // 2021-12-01
const lastMonth2 = date.with({ month: Number.MAX_VALUE }); // 2021-12-01
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
- {{jsxref("Temporal/PlainDate/day", "Temporal.PlainDate.prototype.day")}}
- {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
