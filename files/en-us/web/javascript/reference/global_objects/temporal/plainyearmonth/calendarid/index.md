---
title: Temporal.PlainYearMonth.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/calendarId
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.calendarId
---

{{JSRef}}{{SeeCompatTable}}

The **`calendarId`** accessor property of {{jsxref("Temporal.PlainYearMonth")}} instances returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.

For a list of commonly supported values, see {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

The set accessor of `calendarId` is `undefined`. You cannot change this property directly. There's no obvious way to create a new `Temporal.PlainYearMonth` object with a different calendar that represents the same year-month, so you need to convert it to a {{jsxref("Temporal.PlainDate")}} object first using {{jsxref("Temporal/PlainYearMonth/toPlainDate", "toPlainDate()")}}, change the calendar, and then convert it back.

## Examples

### Using calendarId

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.calendarId); // "iso8601"; default

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
console.log(ym2.calendarId); // "chinese"
```

### Changing calendarId

```js
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym
  .toPlainDate({ day: 1 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM.year, newYM.monthCode); // 2021 "M05"

const newYM2 = ym
  .toPlainDate({ day: 31 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM2.year, newYM2.monthCode); // 2021 "M06"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
