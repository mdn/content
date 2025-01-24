---
title: Temporal.PlainMonthDay.prototype.monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/monthCode
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainMonthDay.monthCode
---

{{JSRef}}{{SeeCompatTable}}

The **`monthCode`** accessor property of {{jsxref("Temporal.PlainMonthDay")}} instances returns a calendar-specific string representing the month of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

Usually it is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L` (even if it's conceptually a derivative of the following month; for example, in the Hebrew calendar, Adar I has code `M05L` but Adar II has code `M06`). If the leap month is the first month of the year, the code is `M00L`.

Because {{jsxref("Temporal/PlainDate/month", "month")}} is an index within a year, but `PlainMonthDay` doesn't have a year, there's no `month` property for `PlainMonthDay`. Therefore, `monthCode` is used to represent the month in a way that is independent of the year.

The set accessor of `monthCode` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainMonthDay/with", "with()")}} method to create a new `Temporal.PlainMonthDay` object with the desired new value.

For general information and more examples, see {{jsxref("Temporal/PlainDate/monthCode", "Temporal.PlainDate.prototype.monthCode")}}.

## Examples

### Using monthCode

```js
const md = Temporal.PlainMonthDay.from("07-01"); // ISO 8601 calendar
console.log(md.monthCode); // "M07"

const md2 = Temporal.PlainMonthDay.from("2021-05-01[u-ca=chinese]");
console.log(md2.monthCode); // "M03"

const md3 = Temporal.PlainMonthDay.from("2023-04-01[u-ca=chinese]");
console.log(md3.monthCode); // "M02L"
```

### Changing monthCode

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md.with({ monthCode: "M03" });
console.log(newMD.toString()); // 03-01
```

For other calendars, as long as there exists a year in which the month-day is valid, the month-day is considered valid, and the underlying reference year may therefore change. For example:

```js
const md = Temporal.PlainMonthDay.from({
  monthCode: "M02",
  day: 30,
  calendar: "hebrew",
});
console.log(md.toString()); // 1971-11-18[u-ca=hebrew]
console.log(md.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Heshvan
// 30 Heshvan only exists in 1971, but this year is not a leap year
const newMD = md.with({ monthCode: "M05L" });
console.log(newMD.toString()); // 1970-03-08[u-ca=hebrew]
console.log(newMD.toLocaleString("en-US", { calendar: "hebrew" })); // 30 Adar I
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
