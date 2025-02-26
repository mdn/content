---
title: Temporal.ZonedDateTime.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.ZonedDateTime.until
---

{{JSRef}}{{SeeCompatTable}}

The **`until()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this date-time to another date-time (in a form convertible by {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}). The duration is positive if the other date-time is after this date-time, and negative if before.

This method does `other - this`. To do `this - other`, use the {{jsxref("Temporal/ZonedDateTime/since", "since()")}} method.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.ZonedDateTime")}} instance representing a date-time to subtract this date-time from. It is converted to a `Temporal.ZonedDateTime` object using the same algorithm as {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}}. It must have the same calendar as `this`.
- `options` {{optional_inline}}
  - : The same options as [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since#options).

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration from this date-time _until_ `other`. The duration is positive if `other` is after this date-time, and negative if before.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `other` has a different calendar than `this`.
    - Any of the options is invalid.
    - `other` has a different time zone than `this`, and `largestUnit` is `"days"` or above.

## Examples

### Using until()

```js
const flight = Temporal.ZonedDateTime.from(
  "2024-12-21T13:31:00-05:00[America/New_York]",
);
const now = Temporal.Now.zonedDateTimeISO("America/New_York").round("second");
if (Temporal.ZonedDateTime.compare(flight, now) < 0) {
  console.error(
    "The flight is already in the past. The result may not make sense.",
  );
}
const duration = now.until(flight, { largestUnit: "days" });
console.log(`The flight is in ${duration.toLocaleString("en-US")}`);
```

For more examples, see [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/since).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/ZonedDateTime/add", "Temporal.ZonedDateTime.prototype.add()")}}
- {{jsxref("Temporal/ZonedDateTime/subtract", "Temporal.ZonedDateTime.prototype.subtract()")}}
- {{jsxref("Temporal/ZonedDateTime/since", "Temporal.ZonedDateTime.prototype.since()")}}
