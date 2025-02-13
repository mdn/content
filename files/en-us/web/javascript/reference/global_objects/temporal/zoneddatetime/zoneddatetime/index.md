---
title: Temporal.ZonedDateTime()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
page-type: javascript-constructor
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.ZonedDateTime
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.ZonedDateTime()`** constructor creates {{jsxref("Temporal.ZonedDateTime")}} objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other `Temporal` classes, you should usually construct `Temporal.ZonedDateTime` objects using the {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} static method, which can handle a variety of input types.

## Syntax

```js-nolint
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

> **Note:** `Temporal.ZonedDateTime()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `epochNanoseconds`
  - : A [BigInt](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) that corresponds to the {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "epochNanoseconds")}} property.
- `timeZone`
  - : A string that corresponds to the {{jsxref("Temporal/ZonedDateTime/timeZoneId", "timeZoneId")}} property. Unlike all other `Temporal` APIs, it must be a valid time zone identifier (either named or offset) as-is, and cannot be a `Temporal.ZonedDateTime` instance or a date-time string.
- `calendar` {{optional_inline}}
  - : A string that corresponds to the {{jsxref("Temporal/ZonedDateTime/calendarId", "calendarId")}} property. Defaults to `"iso8601"`.

### Return value

A new `Temporal.ZonedDateTime` object, representing the specific instant specified by the parameters.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `timeZone` or `calendar` is not a string.
- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `epochNanoseconds` is not in the [representable range](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#representable_dates), which is ±10<sup>8</sup> days, or about ±273,972.6 years, from the Unix epoch.
    - `timeZone` is not a valid time zone identifier.
    - `calendar` is not a valid calendar identifier.

## Examples

### Using Temporal.ZonedDateTime()

```js
const zdt = new Temporal.ZonedDateTime(0n, "America/New_York");
console.log(zdt.toString()); // '1969-12-31T19:00:00-05:00[America/New_York]'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}
