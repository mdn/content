---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
page-type: javascript-class
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Instant`** object represents a unique point in history, with nanosecond precision. It is fundamentally represented as the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC), without any time zone or calendar system.

## Description

`Temporal.Instant` is semantically the same as {{jsxref("Date")}}. They both encapsulate a single point in time, but `Temporal.Instant` is more precise because it stores nanoseconds rather than milliseconds. `Temporal.Instant` also avoids pitfalls of `Date` because it does not assume any calendar or time zone information—if you want to read any date or time information such as year or month, you need to convert it to a {{jsxref("Temporal.ZonedDateTime")}} first, using {{jsxref("Temporal/Instant/toZonedDateTimeISO()", "toZonedDateTimeISO()")}}.

You can convert from `Date` to `Temporal.Instant` using the {{jsxref("Date.prototype.toTemporalInstant()")}} method, which should be preferred over other methods such as {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} because the former involves less user code and may be more optimized. You can also convert from `Temporal.Instant` to `Date` using its epoch milliseconds, such as `new Date(instant.epochMilliseconds)`.

### RFC 9557 format

`Instant` objects can be serialized and parsed using the [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) format, an extension to the [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format. The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm
```

- `YYYY`
  - : Either a four-digit number, or a six-digit number with a `+` or `-` sign.
- `MM`
  - : A two-digit number from `01` to `12`.
- `DD`
  - : A two-digit number from `01` to `31`. The `YYYY`, `MM`, and `DD` components can be separated by `-` or nothing.
- `T`
  - : The date-time separator, which can be `T`, `t`, or a space.
- `HH`
  - : A two-digit number from `00` to `23`.
- `mm` {{optional_inline}}
  - : A two-digit number from `00` to `59`. Defaults to `00`.
- `ss.sssssssss` {{optional_inline}}
  - : A two-digit number from `00` to `59`. May optionally be followed by a `.` or `,` and one to nine digits. Defaults to `00`. The `HH`, `mm`, and `ss` components can be separated by `:` or nothing. You can omit either just `ss` or both `ss` and `mm`, so the time can be one of three forms: `HH`, `HH:mm`, or `HH:mm:ss.sssssssss`.
- `Z/±HH:mm`
  - : Either the UTC designator `Z` or `z`, or an offset from UTC in the form `+` or `-` followed by the same format as the time component. Note that subminute precision (`:ss.sssssssss`) may be unsupported by other systems, and is accepted but never output. If an offset is provided, the time is interpreted in the specified offset.

As an input, you may optionally include the time zone identifier and calendar, in the same format as [`ZonedDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime#rfc_9557_format), but they will be ignored. Other annotations in the `[key=value]` format are also ignored, and they must not have the critical flag.

When serializing, you can configure the fractional second digits and offset.

## Constructor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} {{experimental_inline}}
  - : Creates a new `Temporal.Instant` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} {{experimental_inline}}
  - : Returns a number (-1, 0, or 1) indicating whether the first instant comes before, is the same as, or comes after the second instant. Equivalent to comparing the {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} of the two instants.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}} {{experimental_inline}}
  - : Creates a new `Temporal.Instant` object from another `Temporal.Instant` object, or an [RFC 9557](#rfc_9557_format) string.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}} {{experimental_inline}}
  - : Creates a new `Temporal.Instant` object from the number of milliseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}} {{experimental_inline}}
  - : Creates a new `Temporal.Instant` object from the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC).

## Instance properties

These properties are defined on `Temporal.Instant.prototype` and shared by all `Temporal.Instant` instances.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.Instant` instances, the initial value is the {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} constructor.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}} {{experimental_inline}}
  - : Returns an integer representing the number of milliseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant. Equivalent to dividing `epochNanoseconds` by `1e6` and flooring it.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}} {{experimental_inline}}
  - : Returns a {{jsxref("BigInt")}} representing the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.Instant"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Instant` object representing this instant moved forward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}} {{experimental_inline}}
  - : Returns `true` if this instant is equivalent in value to another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}), and `false` otherwise. They are compared by their epoch nanoseconds. Equivalent to `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Instant` object representing this instant rounded to the given unit.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) to this instant. The duration is positive if the other instant is before this instant, and negative if after.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Instant` object representing this instant moved backward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}).
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}} {{experimental_inline}}
  - : Returns a string representing this instant in the same [RFC 9557 format](#rfc_9557_format) as calling {{jsxref("Temporal/Instant/toString", "toString()")}}. Intended to be implicitly called by {{jsxref("JSON.stringify()")}}.
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Returns a string with a language-sensitive representation of this instant. In implementations with [`Intl.DateTimeFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) support, this method delegates to `Intl.DateTimeFormat`.
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}} {{experimental_inline}}
  - : Returns a string representing this instant in the [RFC 9557 format](#rfc_9557_format) using the specified time zone.
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.ZonedDateTime")}} object representing this instant in the specified time zone using the ISO 8601 calendar system.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this instant to another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}). The duration is positive if the other instant is after this instant, and negative if before.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}} {{experimental_inline}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.Instant` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.ZonedDateTime")}}
