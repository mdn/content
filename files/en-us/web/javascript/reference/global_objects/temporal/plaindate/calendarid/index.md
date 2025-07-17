---
title: Temporal.PlainDate.prototype.calendarId
short-title: calendarId
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/calendarId
page-type: javascript-instance-accessor-property
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.calendarId
sidebar: jsref
---

{{SeeCompatTable}}

The **`calendarId`** accessor property of {{jsxref("Temporal.PlainDate")}} instances returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.

See [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) for a list of commonly supported calendar types.

The set accessor of `calendarId` is `undefined`. You cannot change this property directly. Use the {{jsxref("Temporal/PlainDate/withCalendar", "withCalendar()")}} method to create a new `Temporal.PlainDate` object with the desired new value.

## Examples

### Using calendarId

```js
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.calendarId); // "iso8601"; default

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.calendarId); // "chinese"

const date3 = date2.withCalendar("hebrew");
console.log(date3.calendarId); // "hebrew"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
