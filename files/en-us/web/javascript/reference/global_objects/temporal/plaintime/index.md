---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
page-type: javascript-class
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainTime`** object represents a time without a date or time zone; for example, a recurring event that happens at the same time every day. It is fundamentally represented as a combination of hour, minute, second, millisecond, microsecond, and nanosecond values.

## Description

A `PlainTime` is essentially the time part of a {{jsxref("Temporal.PlainDateTime")}} object, with the date information removed. Because the date and time information don't have much interaction, all general information about time properties is documented here.

### RFC 9557 format

`PlainTime` objects can be serialized and parsed using the [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) format, an extension to the [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format. The string has the following form:

```plain
HH:mm:ss.sssssssss
```

- `HH`
  - : A two-digit number from `00` to `23`. It may be prefixed by the time designator `T` or `t`.
- `mm` {{optional_inline}}
  - : A two-digit number from `00` to `59`. Defaults to `00`.
- `ss.sssssssss` {{optional_inline}}
  - : A two-digit number from `00` to `59`. May optionally be followed by a `.` or `,` and one to nine digits. Defaults to `00`. The `HH`, `mm`, and `ss` components can be separated by `:` or nothing. You can omit either just `ss` or both `ss` and `mm`, so the time can be one of three forms: `HH`, `HH:mm`, or `HH:mm:ss.sssssssss`.

As an input, you may optionally include the date, offset, time zone identifier, and calendar, in the same format as [`PlainDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format), but they will be ignored. A date-only string will be rejected. Other annotations in the `[key=value]` format are also ignored, and they must not have the critical flag.

When serializing, you can configure the fractional second digits.

## Constructor

- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainTime` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}} {{experimental_inline}}
  - : Returns a number (-1, 0, or 1) indicating whether the first time comes before, is the same as, or comes after the second time. Equivalent to comparing the hour, minute, second, millisecond, microsecond, and nanosecond fields one by one.
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainTime` object from another `Temporal.PlainTime` object, an object with time properties, or an [RFC 9557](#rfc_9557_format) string.

## Instance properties

These properties are defined on `Temporal.PlainTime.prototype` and shared by all `Temporal.PlainTime` instances.

- {{jsxref("Object/constructor", "Temporal.PlainTime.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainTime` instances, the initial value is the {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}} constructor.
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}} {{experimental_inline}}
  - : Returns a integer from 0 to 23 representing the hour component of this time.
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}} {{experimental_inline}}
  - : Returns a integer from 0 to 999 representing the microsecond (10<sup>-6</sup> second) component of this time.
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}} {{experimental_inline}}
  - : Returns a integer from 0 to 999 representing the millisecond (10<sup>-3</sup> second) component of this time.
- {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}} {{experimental_inline}}
  - : Returns a integer from 0 to 59 representing the minute component of this time.
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}} {{experimental_inline}}
  - : Returns a integer from 0 to 999 representing the nanosecond (10<sup>-9</sup> second) component of this time.
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}} {{experimental_inline}}
  - : Returns a integer from 0 to 59 representing the second component of this time.
- `Temporal.PlainTime.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainTime"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainTime` object representing this time moved forward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}), wrapping around the clock if necessary.
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}} {{experimental_inline}}
  - : Returns `true` if this time is equivalent in value to another time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}), and `false` otherwise. They are compared by their time values. Equivalent to `Temporal.PlainTime.compare(this, other) === 0`.
- {{jsxref("Temporal/PlainTime/round", "Temporal.PlainTime.prototype.round()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainTime` object representing this time rounded to the given unit.
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from another time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}) to this time. The duration is positive if the other time is before this time, and negative if after.
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainTime` object representing this time moved backward by a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}), wrapping around the clock if necessary.
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}} {{experimental_inline}}
  - : Returns a string representing this time in the same [RFC 9557 format](#rfc_9557_format) as calling {{jsxref("Temporal/PlainTime/toString", "toString()")}}. Intended to be implicitly called by {{jsxref("JSON.stringify()")}}.
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Returns a string with a language-sensitive representation of this time.
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}} {{experimental_inline}}
  - : Returns a string representing this time in the [RFC 9557 format](#rfc_9557_format).
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this time to another time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}). The duration is positive if the other time is after this time, and negative if before.
- {{jsxref("Temporal/PlainTime/valueOf", "Temporal.PlainTime.prototype.valueOf()")}} {{experimental_inline}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainTime` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainTime` object representing this time with some fields replaced by new values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.PlainDateTime")}}
