---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.Duration
---

{{JSRef}}

The **`Temporal.Duration`** object represents a difference between two time points, which can be used in datetime arithmetic. It is fundamentally represented as a combination of years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, and nanoseconds values.

## Description

### Duration balancing

TODO

## Constructor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}
  - : Creates a new `Temporal.Duration` object.

## Static methods

- {{jsxref("Temporal.Duration.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first duration is shorter, equal to, or longer than the second duration.
- {{jsxref("Temporal.Duration.from()")}}
  - : Creates a new `Temporal.Duration` object from another `Temporal.Duration` object, an object with duration properties, or an ISO 8601 string.

## Instance properties

These properties are defined on `Temporal.Duration.prototype` and shared by all `Temporal.Duration` instances.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}}
  - : Returns a boolean that is `true` if this duration represents a zero duration, and `false` otherwise. Equivalent to `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.Duration` instances, the initial value is the {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} constructor.
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}}
  - : Returns an integer representing the number of days in the duration.
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}}
  - : Returns an integer representing the number of hours in the duration.
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}}
  - : Returns an integer representing the number of microseconds in the duration.
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}}
  - : Returns an integer representing the number of milliseconds in the duration.
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}}
  - : Returns an integer representing the number of minutes in the duration.
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}}
  - : Returns an integer representing the number of months in the duration.
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}}
  - : Returns an integer representing the number of nanoseconds in the duration.
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}}
  - : Returns an integer representing the number of seconds in the duration.
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}}
  - : Returns `1` if this duration is positive, `-1` if negative, and `0` if zero.
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}}
  - : Returns an integer representing the number of weeks in the duration.
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}}
  - : Returns an integer representing the number of years in the duration.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.Duration"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}}
  - : Returns a new `Temporal.Duration` object with the absolute value of this duration (all fields keep the same magnitude, but sign becomes positive).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}}
  - : Returns a new `Temporal.Duration` object with the sum of this duration and a given duration (in a form convertible by {{jsxref("Temporal.Duration.from()")}}). The result is balanced.
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
  - : Returns a new `Temporal.Duration` object with the negated value of this duration (all fields keep the same magnitude, but sign becomes reversed).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
  - : Returns a new `Temporal.Duration` object with the duration rounded to the given smallest unit and/or balanced to the given largest unit.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
  - : Returns a new `Temporal.Duration` object with the difference between this duration and a given duration (in a form convertible by {{jsxref("Temporal.Duration.from()")}}). Equivalent to [adding](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) the [negated](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) value of the other duration.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
  - : Returns a number representing the total duration in the given unit.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}}
  - : TODO
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
  - : Returns a new `Temporal.Duration` object representing this duration with some fields replaced by new values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
