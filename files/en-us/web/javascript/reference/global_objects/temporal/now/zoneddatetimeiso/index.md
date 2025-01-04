---
title: Temporal.Now.zonedDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/zonedDateTimeISO
page-type: javascript-static-method
browser-compat: javascript.builtins.Temporal.Now.zonedDateTimeISO
---

{{JSRef}}

The **`Temporal.Now.zonedDateTimeISO()`** static method returns the current date and time as a {{jsxref("Temporal.ZonedDateTime")}} object, in the ISO 8601 calendar and the specified time zone.

## Syntax

```js-nolint
Temporal.Now.zonedDateTimeISO()
Temporal.Now.zonedDateTimeISO(timeZone)
```

### Parameters

- `timeZone` {{optional_inline}}
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to interpret the system time in. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it must be a valid [time zone identifier](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

### Return value

The current date and time in the specified time zone, as a {{jsxref("Temporal.ZonedDateTime")}} object using the ISO 8601 calendar.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.zonedDateTimeISO()

```js
// The current date and time in the system's time zone
const dateTime = Temporal.Now.zonedDateTimeISO();
console.log(dateTime); // e.g.: 2021-10-01T6:00:00+03:00

// The current date and time in the "America/New_York" time zone
const dateTimeInNewYork = Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(dateTimeInNewYork); // e.g.: 2021-09-30T23:00:00-04:00
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.ZonedDateTime")}}
