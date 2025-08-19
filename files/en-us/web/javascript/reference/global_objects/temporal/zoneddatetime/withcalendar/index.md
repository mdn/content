---
title: Temporal.ZonedDateTime.prototype.withCalendar()
short-title: withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.withCalendar
sidebar: jsref
---

{{SeeCompatTable}}

The **`withCalendar()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a new `Temporal.ZonedDateTime` object representing this date-time interpreted in the new calendar system. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the date-time's {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} property.

To replace the date-time component properties, use the {{jsxref("Temporal/ZonedDateTime/with", "with()")}} method. To replace its time zone, use the {{jsxref("Temporal/ZonedDateTime/withTimeZone", "withTimeZone()")}} method.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameters

- `calendar`
  - : A string that corresponds to the {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} property. See [`Intl.supportedValuesOf()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_calendar_types) for a list of commonly supported calendar types.

### Return value

A new `Temporal.ZonedDateTime` object, representing the date-time specified by the original `ZonedDateTime`, interpreted in the new calendar system.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `calendar` is not a string.
- {{jsxref("RangeError")}}
  - : Thrown if `calendar` is not a valid calendar identifier.

## Examples

### Using withCalendar()

```js
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);
const newZDT = zdt.withCalendar("islamic-umalqura");
console.log(newZDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM EDT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/with", "Temporal.ZonedDateTime.prototype.with()")}}
- {{jsxref("Temporal/ZonedDateTime/withTimeZone", "Temporal.ZonedDateTime.prototype.withTimeZone()")}}
- {{jsxref("Temporal/ZonedDateTime/withPlainTime", "Temporal.ZonedDateTime.prototype.withPlainTime()")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
- {{jsxref("Temporal/ZonedDateTime/calendarId", "Temporal.ZonedDateTime.prototype.calendarId")}}
