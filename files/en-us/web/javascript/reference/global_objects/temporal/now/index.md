---
title: Temporal.Now
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Now
page-type: javascript-namespace
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Now
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Now`** object provides methods for getting the current time in various formats.

## Description

Unlike most global objects, `Temporal.Now` is not a constructor. You cannot use it with the [`new` operator](/en-US/docs/Web/JavaScript/Reference/Operators/new) or invoke the `Temporal.Now` object as a function. All properties and methods of `Temporal.Now` are static (just like the {{jsxref("Math")}} object).

Most fundamentally, the system time is returned by the operating system as a time since the Unix epoch (usually millisecond-level precision, but might be nanosecond-level too). {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} returns this time as a {{jsxref("Temporal.Instant")}} object.

An instant can be interpreted in a time zone (which is the system time zone {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} by default) in the same fashion as {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}. To get a {{jsxref("Temporal.ZonedDateTime")}} object, you can use {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}}. You can also get different parts of the date and time, using {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}}, {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}}, and {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}}.

For example, if the computer is set to the time zone "America/New_York", `Temporal.Now.zonedDateTimeISO()` returns a zoned date-time like: `2021-08-01T10:40:12.345-04:00[America/New_York]`. In this case, `Temporal.Now.plainTimeISO()` would return the time part of this zoned date-time: `10:40:12.345`. However, if you call `Temporal.Now.plainTimeISO("UTC")`, it returns the time part of the zoned date-time in the UTC time zone: `14:40:12.345`. This is especially useful for cross-system communication where the other end may be expecting the time in a different time zone.

### Reduced time precision

To offer protection against timing attacks and [fingerprinting](/en-US/docs/Glossary/Fingerprinting), the precision of the `Temporal.Now` functions might get rounded depending on browser settings. In Firefox, the `privacy.reduceTimerPrecision` preference is enabled by default and defaults to 2ms. You can also enable `privacy.resistFingerprinting`, in which case the precision will be 100ms or the value of `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, whichever is larger.

For example, with reduced time precision, the result of `Temporal.Now.instant().epochMilliseconds` will always be a multiple of 2, or a multiple of 100 (or `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) with `privacy.resistFingerprinting` enabled.

```js
// reduced time precision (2ms) in Firefox 60
Temporal.Now.instant().epochMilliseconds;
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
Temporal.Now.instant().epochMilliseconds;
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Static properties

- `Temporal.Now[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.Now"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Static methods

- {{jsxref("Temporal/Now/instant", "Temporal.Now.instant()")}} {{experimental_inline}}
  - : Returns the current time as a {{jsxref("Temporal.Instant")}} object.
- {{jsxref("Temporal/Now/plainDateISO", "Temporal.Now.plainDateISO()")}} {{experimental_inline}}
  - : Returns the current date as a {{jsxref("Temporal.PlainDate")}} object, in the ISO 8601 calendar and the specified time zone.
- {{jsxref("Temporal/Now/plainDateTimeISO", "Temporal.Now.plainDateTimeISO()")}} {{experimental_inline}}
  - : Returns the current date and time as a {{jsxref("Temporal.PlainDateTime")}} object, in the ISO 8601 calendar and the specified time zone.
- {{jsxref("Temporal/Now/plainTimeISO", "Temporal.Now.plainTimeISO()")}} {{experimental_inline}}
  - : Returns the current time as a {{jsxref("Temporal.PlainTime")}} object, in the specified time zone.
- {{jsxref("Temporal/Now/timeZoneId", "Temporal.Now.timeZoneId()")}} {{experimental_inline}}
  - : Returns a [time zone identifier](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#time_zones_and_offsets) representing the system's current time zone.
- {{jsxref("Temporal/Now/zonedDateTimeISO", "Temporal.Now.zonedDateTimeISO()")}} {{experimental_inline}}
  - : Returns the current date and time as a {{jsxref("Temporal.ZonedDateTime")}} object, in the ISO 8601 calendar and the specified time zone.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.ZonedDateTime")}}
