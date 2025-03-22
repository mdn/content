---
title: Temporal.Now.plainDateTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateTimeISO
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Now.plainDateTimeISO
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Now.plainDateTimeISO()`** static method returns the current date and time as a {{jsxref("Temporal.PlainDateTime")}} object, in the ISO 8601 calendar and the specified time zone.

## Syntax

```js-nolint
Temporal.Now.plainDateTimeISO()
Temporal.Now.plainDateTimeISO(timeZone)
```

### Parameters

- `timeZone` {{optional_inline}}
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to interpret the system time in. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information).

### Return value

The current date and time in the specified time zone, as a {{jsxref("Temporal.PlainDateTime")}} object using the ISO 8601 calendar. Has the same precision as {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}}.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.plainDateTimeISO()

```js
// The current date and time in the system's time zone
const dateTime = Temporal.Now.plainDateTimeISO();
console.log(dateTime); // e.g.: 2021-10-01T06:12:34.567890123

// The current date and time in the "America/New_York" time zone
const dateTimeInNewYork = Temporal.Now.plainDateTimeISO("America/New_York");
console.log(dateTimeInNewYork); // e.g.: 2021-09-30T23:12:34.567890123
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.PlainDateTime")}}
