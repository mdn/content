---
title: Temporal.Now.plainDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateTimeISO
page-type: javascript-static-method
browser-compat: javascript.builtins.Temporal.Now.plainDateTimeISO
---

{{JSRef}}

The **`Temporal.Now.plainDateTimeISO()`** static method returns the current date and time as a {{jsxref("Temporal.PlainDateTime")}} object, in the ISO 8601 calendar and the specified time zone.

## Syntax

```js-nolint
Temporal.Now.plainDateTimeISO()
Temporal.Now.plainDateTimeISO(timeZone)
```

### Parameters

- `timeZone` {{optional_inline}}
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to interpret the system time in. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it must be a valid [time zone identifier](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

### Return value

The current date and time in the specified time zone, as a {{jsxref("Temporal.PlainDateTime")}} object using the ISO 8601 calendar.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.plainDateTimeISO()

```js
// The current date and time in the system's time zone
const dateTime = Temporal.Now.plainDateTimeISO();
console.log(dateTime); // e.g.: 2021-10-01T6:00:00

// The current date and time in the "America/New_York" time zone
const dateTimeInNewYork = Temporal.Now.plainDateTimeISO("America/New_York");
console.log(dateTimeInNewYork); // e.g.: 2021-09-30T23:00:00
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
