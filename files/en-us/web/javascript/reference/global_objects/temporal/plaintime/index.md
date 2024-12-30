---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.PlainTime
---

{{JSRef}}

The **`Temporal.PlainTime`** object represents a time without a date or time zone; for example, a recurring event that happens at the same time every day. It is fundamentally represented as a combination of hour, minute, second, millisecond, microsecond, and nanosecond values.

### ISO 8601 format

`PlainTime` objects can be serialized and parsed using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) (with some extensions specified by ECMAScript). The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
HH:MM:SS.sssssssss
```

- `HH`
  - : A two-digit number from `00` to `23`. It may be prefixed by the time designator `T` or `t`.
- `MM` {{optional_inline}}
  - : A two-digit number from `00` to `59`. Defaults to `00`.
- `SS.sssssssss` {{optional_inline}}
  - : A two-digit number from `00` to `59`. May optionally be followed by a `.` or `,` and one to nine digits. Defaults to `00`. The `HH`, `MM`, and `SS` components can be separated by `:` or nothing. You can omit either just `SS` or both `SS` and `MM`, so the time can be one of three forms: `HH`, `HH:MM`, or `HH:MM:SS.sssssssss`.

As an input, you may optionally include the date, offset, time zone identifier, and calendar, in the same format as [`PlainDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#iso_8601_format), but they will be ignored. A date-only string will be rejected. Other annotations in the `[key=value]` format are also ignored, and they must not have the critical flag.

When serializing, you can configure the fractional second digits.

## Constructor

- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
  - : Creates a new `Temporal.PlainTime` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/PlainTime/compare", "Temporal.PlainTime.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first time comes before, is the same as, or comes after the second time. Equivalent to comparing the hour, minute, second, millisecond, microsecond, and nanosecond fields one by one.
- {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}
  - : Creates a new `Temporal.PlainTime` object from another `Temporal.PlainTime` object, an object with time properties, or an ISO 8601 string.

## Instance properties

These properties are defined on `Temporal.PlainTime.prototype` and shared by all `Temporal.PlainTime` instances.

- {{jsxref("Object/constructor", "Temporal.PlainTime.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainTime` instances, the initial value is the {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}} constructor.
- {{jsxref("Temporal/PlainTime/hour", "Temporal.PlainTime.prototype.hour")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/microsecond", "Temporal.PlainTime.prototype.microsecond")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/millisecond", "Temporal.PlainTime.prototype.millisecond")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/minute", "Temporal.PlainTime.prototype.minute")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/nanosecond", "Temporal.PlainTime.prototype.nanosecond")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/second", "Temporal.PlainTime.prototype.second")}}
  - : TODO
- `Temporal.PlainTime.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainTime"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/equals", "Temporal.PlainTime.prototype.equals()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/round", "Temporal.PlainTime.prototype.round()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/toJSON", "Temporal.PlainTime.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/toLocaleString", "Temporal.PlainTime.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/toString", "Temporal.PlainTime.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/until", "Temporal.PlainTime.prototype.until()")}}
  - : TODO
- {{jsxref("Temporal/PlainTime/valueOf", "Temporal.PlainTime.prototype.valueOf()")}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainTime` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
  - : TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
