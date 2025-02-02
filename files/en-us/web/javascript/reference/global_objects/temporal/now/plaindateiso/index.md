---
title: Temporal.Now.plainDateISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateISO
page-type: javascript-static-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Now.plainDateISO
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Now.plainDateISO()`** static method returns the current date as a {{jsxref("Temporal.PlainDate")}} object, in the ISO 8601 calendar and the specified time zone.

## Syntax

```js-nolint
Temporal.Now.plainDateISO()
Temporal.Now.plainDateISO(timeZone)
```

### Parameters

- `timeZone` {{optional_inline}}
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to interpret the system time in. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see [time zones and offsets](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) for more information).

### Return value

The current date in the specified time zone, as a {{jsxref("Temporal.PlainDate")}} object using the ISO 8601 calendar.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.plainDateISO()

```js
// The current date in the system's time zone
const date = Temporal.Now.plainDateISO();
console.log(date); // e.g.: 2021-10-01

// The current date in the "America/New_York" time zone
const dateInNewYork = Temporal.Now.plainDateISO("America/New_York");
console.log(dateInNewYork); // e.g.: 2021-09-30
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.PlainDate")}}
