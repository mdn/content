---
title: Temporal.PlainDate.prototype.withCalendar()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.withCalendar
---

{{JSRef}}{{SeeCompatTable}}

The **`withCalendar()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new `Temporal.PlainDate` object representing this date interpreted in the new calendar system. Because all `Temporal` objects are designed to be immutable, this method essentially functions as the setter for the date's {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} property.

To replace the date component properties, use the {{jsxref("Temporal/PlainDate/with", "with()")}} method instead.

## Syntax

```js-nolint
withCalendar(calendar)
```

### Parameters

- `calendar`
  - : A string that corresponds to the {{jsxref("Temporal/PlainDate/calendarId", "calendarId")}} property.

### Return value

A new `Temporal.PlainDate` object, representing the date specified by the original `PlainDate`, interpreted in the new calendar system.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `calendar` is not a string.
- {{jsxref("RangeError")}}
  - : Thrown if `calendar` is not a valid calendar identifier.

## Examples

### Using withCalendar()

```js
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.withCalendar("islamic");
console.log(newDate.toLocaleString("en-US", { calendar: "islamic" }));
// 11/21/1442 AH
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/with", "Temporal.PlainDate.prototype.with()")}}
- {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}
- {{jsxref("Temporal/PlainDate/calendarId", "Temporal.PlainDate.prototype.calendarId")}}
