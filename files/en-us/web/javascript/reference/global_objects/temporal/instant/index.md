---
title: Temporal.Instant
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.Instant
---

{{JSRef}}

The **`Temporal.Instant`** object represents a unique point in history, with nanosecond precision. It is fundamentally represented as the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC), without any time zone or calendar system.

## Constructor

- {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}}
  - : Creates a new `Temporal.Instant` object.

## Static methods

- {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first instant comes before, is the same as, or comes after the second instant. Equivalent to comparing the {{jsxref("Temporal/Instant/epochNanoseconds", "epochNanoseconds")}} of the two instants.
- {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}
  - : Creates a new `Temporal.Instant` object from another `Temporal.Instant` object, or an ISO 8601 string.
- {{jsxref("Temporal/Instant/fromEpochMilliseconds", "Temporal.Instant.fromEpochMilliseconds()")}}
  - : Creates a new `Temporal.Instant` object from the number of milliseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC).
- {{jsxref("Temporal/Instant/fromEpochNanoseconds", "Temporal.Instant.fromEpochNanoseconds()")}}
  - : Creates a new `Temporal.Instant` object from the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC).

## Instance properties

These properties are defined on `Temporal.Instant.prototype` and shared by all `Temporal.Instant` instances.

- {{jsxref("Object/constructor", "Temporal.Instant.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.Instant` instances, the initial value is the {{jsxref("Temporal/Instant/Instant", "Temporal.Instant()")}} constructor.
- {{jsxref("Temporal/Instant/epochMilliseconds", "Temporal.Instant.prototype.epochMilliseconds")}}
  - : Returns an integer representing the number of milliseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant. Equivalent to dividing `epochNanoseconds` by `1e6` and flooring it.
- {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}
  - : Returns a {{jsxref("BigInt")}} representing the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.
- `Temporal.Instant.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.Instant"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
  - : Returns a new `Temporal.Instant` object representing adding a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) to this instant.
- {{jsxref("Temporal/Instant/equals", "Temporal.Instant.prototype.equals()")}}
  - : Returns `true` if this instant is equal to another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}), and `false` otherwise. Equivalent to `Temporal.Instant.compare(this, other) === 0`.
- {{jsxref("Temporal/Instant/round", "Temporal.Instant.prototype.round()")}}
  - : Returns a new `Temporal.Instant` object representing this instant rounded to the given unit.
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}) to this instant. The duration is positive if the other instant is before this instant, and negative if after.
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
  - : Returns a new `Temporal.Instant` object representing subtracting a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}) from this instant.
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/Instant/toZonedDateTimeISO", "Temporal.Instant.prototype.toZonedDateTimeISO()")}}
  - : Returns a new {{jsxref("Temporal.ZonedDateTime")}} object representing this instant in the specified time zone using the ISO 8601 calendar system.
- {{jsxref("Temporal/Instant/until", "Temporal.Instant.prototype.until()")}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this instant to another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}). The duration is positive if the other instant is after this instant, and negative if before.
- {{jsxref("Temporal/Instant/valueOf", "Temporal.Instant.prototype.valueOf()")}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.Instant` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
