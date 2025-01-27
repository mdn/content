---
title: Temporal.PlainMonthDay.prototype.calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/calendarId
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainMonthDay.calendarId
---

{{JSRef}}{{SeeCompatTable}}

The **`calendarId`** accessor property of {{jsxref("Temporal.PlainMonthDay")}} instances returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.

For a list of commonly supported values, see {{jsxref("Intl/Locale/getCalendars", "Intl.Locale.prototype.getCalendars()")}}.

The set accessor of `calendarId` is `undefined`. You cannot change this property directly. There's no obvious way to create a new `Temporal.PlainMonthDay` object with a different calendar that represents the same month-day, so you need to convert it to a {{jsxref("Temporal.PlainDate")}} object first using {{jsxref("Temporal/PlainMonthDay/toPlainDate", "toPlainDate()")}}, change the calendar, and then convert it back.

## Examples

### Using calendarId

```js
const md = Temporal.PlainMonthDay.from("07-01");
console.log(md.calendarId); // "iso8601"; default

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md2.calendarId); // "chinese"
```

### Changing calendarId

```js
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md
  .toPlainDate({ year: 2021 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD.monthCode, newMD.day); // "M05" 22

const newMD2 = md
  .toPlainDate({ year: 2022 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD2.monthCode, newMD2.day); // "M06" 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainMonthDay")}}
