---
title: Temporal.Now.plainTimeISO()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainTimeISO
page-type: javascript-static-method
browser-compat: javascript.builtins.Temporal.Now.plainTimeISO
---

{{JSRef}}

The **`Temporal.Now.plainTimeISO()`** static method returns the current time as a {{jsxref("Temporal.PlainTime")}} object, in the specified time zone.

Note that although the method contains "ISO" in its name, {{jsxref("Temporal.PlainTime")}} objects do not have associated calendars, as the time format is not calendar-dependent.

## Syntax

```js-nolint
Temporal.Now.plainTimeISO()
Temporal.Now.plainTimeISO(timeZone)
```

### Parameters

- `timeZone` {{optional_inline}}
  - : Either a string or a {{jsxref("Temporal.ZonedDateTime")}} instance representing the time zone to interpret the system time in. If a `Temporal.ZonedDateTime` instance, its time zone is used. If a string, it must be a valid [time zone identifier](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets).

### Return value

The current time in the specified time zone, as a {{jsxref("Temporal.PlainTime")}} object.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.plainTimeISO()

```js
// The current time in the system's time zone
const time = Temporal.Now.plainTimeISO();
console.log(time); // e.g.: 06:00:00

// The current time in the "America/New_York" time zone
const timeInNewYork = Temporal.Now.plainTimeISO("America/New_York");
console.log(timeInNewYork); // e.g.: 23:00:00
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Now")}}
- {{jsxref("Temporal.PlainTime")}}
