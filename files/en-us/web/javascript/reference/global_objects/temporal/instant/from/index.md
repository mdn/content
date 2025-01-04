---
title: Temporal.Instant.from()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/from
page-type: javascript-static-method
browser-compat: javascript.builtins.Temporal.Instant.from
---

{{JSRef}}

The **`Temporal.Instant.from()`** static method creates a new `Temporal.Instant` object from another `Temporal.Instant` object, or an ISO 8601 string.

## Syntax

```js-nolint
Temporal.Instant.from(info)
```

### Parameters

- `info`
  - : One of the following:
    - A {{jsxref("Temporal.Instant")}} instance, which creates a copy of the instance.
    - An [ISO 8601](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant#iso_8601_format) string containing a date, time, and time zone offset. The time zone name is ignored; only the offset is used.

### Return value

A new `Temporal.Instant` object representing the instant in time specified by `info`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `info` is not a `Temporal.Instant` instance or a string.
- {{jsxref("RangeError")}}
  - : Thrown if the string is not a valid ISO 8601 string, or if the date and time are outside the range of representable instants (±10<sup>8</sup> days).

## Examples

### Creating an instant from a string

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
console.log(instant.toString()); // 1970-01-01T00:00:00Z

const instant2 = Temporal.Instant.from("1970-01-01T00+08:00");
console.log(instant.toString()); // 1969-12-31T16:00:00Z

// America/New_York is UTC-5 in January 1970, not UTC+8
const instant3 = Temporal.Instant.from("1970-01-01T00+08:00[America/New_York]");
console.log(instant.toString()); // 1969-12-31T16:00:00Z; the time zone name is ignored
```

### Creating an instant from another instant

```js
const instant = Temporal.Instant.from("1970-01-01T00Z");
const instant2 = Temporal.Instant.from(instant);
console.log(instant2.toString()); // 1970-01-01T00:00:00Z
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
