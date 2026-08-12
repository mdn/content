---
title: Temporal.PlainDate.prototype.monthCode
short-title: monthCode
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/monthCode
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.Temporal.PlainDate.monthCode
sidebar: jsref
---

The **`monthCode`** accessor property of {{jsxref("Temporal.PlainDate")}} instances returns a calendar-specific string representing the month of this date. It is [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent.

## Value

The basic format of `monthCode` is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L` (even if it's conceptually a derivative of the following month; for example, in the Hebrew calendar, Adar I has code `M05L` but Adar II has code `M06`).

All calendars have at least 12 months, with codes from `"M01"` to `"M12"`.

All [specified calendars](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) have month codes fully defined by the spec. Most don't have month rules distinct from `iso8601`. The `coptic`, `ethioaa`, and `ethiopic` calendars have an additional `M13` month. The `chinese` and `dangi` calendars have 12 additional leap months possible, with codes from `"M01L"` to `"M12L"`. The `hebrew` calendar has one leap month, `"M05L"` (Adar I).

> [!NOTE]
> Don't assume that `monthCode` is a user-friendly string; use `toLocaleString()` to format your date instead. Generally, don't cache the name of months in an array or object. Even though `monthCode` usually maps to the month's name within one calendar, we recommend always computing the month's name using, for example, `date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" })`.

The set accessor of `monthCode` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainDate/with", "with()")}} method to create a new `Temporal.PlainDate` object with the desired new value.

When setting the date to a different year, the `monthCode` remains the same, but the `month` may change if the target year has a different leap month structure. If the current `monthCode` does not exist in the target year and the method is not configured to reject, then for the `chinese` and `dangi` calendars, the previous month is used instead (e.g., from `"M03L"` to `"M03"`, which is from 闰三月 to 三月). For `hebrew`, the _next_ month is used instead (from `"M05L"` to `"M06"`, which is from Adar I to Adar II).

## Examples

### Using monthCode

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

### Changing monthCode

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

### Formatting month names

Don't do this:

<!-- prettier-ignore -->
```js example-bad
const names = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const date = Temporal.PlainDate.from("2021-07-01");
console.log(names[date.month - 1]); // July
```

Also don't do this:

<!-- prettier-ignore -->
```js example-bad
const names = {
  "M01": "January", "M02": "February", "M03": "March", "M04": "April",
  "M05": "May", "M06": "June", "M07": "July", "M08": "August",
  "M09": "September", "M10": "October", "M11": "November", "M12": "December",
};

const date = Temporal.PlainDate.from("2021-07-01");
console.log(names[date.monthCode]); // July
```

Instead, always do this, which is more user-friendly and less error-prone, and easily generalizes to other calendars:

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(
  date.toLocaleString("en-US", { calendar: date.calendarId, month: "long" }),
); // July
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
- {{jsxref("Temporal/PlainDate/month", "Temporal.PlainDate.prototype.month")}}
- {{jsxref("Temporal/PlainDate/daysInMonth", "Temporal.PlainDate.prototype.daysInMonth")}}
- {{jsxref("Temporal/PlainDate/monthsInYear", "Temporal.PlainDate.prototype.monthsInYear")}}
