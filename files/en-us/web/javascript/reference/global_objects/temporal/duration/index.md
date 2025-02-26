---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
page-type: javascript-class
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Duration
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.Duration`** object represents a difference between two time points, which can be used in date/time arithmetic. It is fundamentally represented as a combination of years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, and nanoseconds values.

## Description

### ISO 8601 duration format

`Duration` objects can be serialized and parsed using the [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations) (with some extensions specified by ECMAScript). The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
±P nY nM nW nD T nH nM nS
```

- `±` {{optional_inline}}
  - : An optional sign character (`+` or `-`), which represents positive or negative duration. Default is positive.
- `P`
  - : A literal character `P` or `p` that stands for "period".
- `nY`, `nM`, `nW`, `nD`, `nH`, `nM`, `nS`
  - : A number followed by a literal character, which represents the number of years (`Y`), months (`M`), weeks (`W`), days (`D`), hours (`H`), minutes (`M`), or seconds (`S`), respectively. All except the last existing component must be an integer. The last component, if it is a time component (hours, minutes, or seconds), may have a fractional part of 1 to 9 digits, led by a dot or a comma, such as `PT0.0021S` or `PT1.1H`. Any zero components may be omitted, but at least one component should be present (even if it has value zero, in which case the duration is zero).
- `T`
  - : A literal character `T` or `t` that separates the date part from the time part, which should be present if and only if there's at least one component after it.

Here are some examples:

| ISO 8601           | Meaning                                                                  |
| ------------------ | ------------------------------------------------------------------------ |
| `P1Y1M1DT1H1M1.1S` | 1 year, 1 month, 1 day, 1 hour, 1 minute, 1 second, and 100 milliseconds |
| `P40D`             | 40 days                                                                  |
| `P1Y1D`            | 1 year and 1 day                                                         |
| `P3DT4H59M`        | 3 days, 4 hours and 59 minutes                                           |
| `PT2H30M`          | 2 hours and 30 minutes                                                   |
| `P1M`              | 1 month                                                                  |
| `PT1M`             | 1 minute                                                                 |
| `PT0.0021S`        | 2.1 milliseconds (2 milliseconds and 100 microseconds)                   |
| `PT0S`             | Zero (canonical representation)                                          |
| `P0D`              | Zero                                                                     |

> [!NOTE]
> According to the ISO 8601-1 standard, weeks are not allowed to appear together with any other units, and durations can only be positive. As extensions to the standard, ISO 8601-2, which Temporal uses, allows a sign character at the start of the string, and allows combining weeks with other units. Therefore, if your duration is serialized to a string like `P3W1D`, `+P1M`, or `-P1M`, note that other programs may not accept it.

When serializing, the output respects the stored components as much as possible, preserving [unbalanced](#duration_balancing) components. However, subsecond components are serialized as a single fractional second, so their precise values, if unbalanced may be lost. The plus sign is omitted for positive durations. The zero duration is always serialized as `PT0S`.

### Calendar durations

A _calendar duration_ is one that contains any of the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) units: weeks, months, and years. A non-calendar duration is portable and can participate in date/time arithmetic without any calendar information, because they unambiguously represent a fixed amount of time. However, a calendar duration is not portable because the number of days in a month or year depends on the calendar system and the reference time point. Therefore, attempting to perform any arithmetic operation on a calendar durations throws an error because durations don't keep track of a calendar themselves. For example, if we are in May of the Gregorian calendar, then "1 month" is "31 days", but if we are in April, then "1 month" becomes "30 days". To add or subtract calendar durations, you need to add them to dates instead:

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: for calendar duration arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Other operations, `round()`, `total()`, and `compare()`, take a `relativeTo` option to provide the necessary calendar and reference time information. This option can be a {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}}, or otherwise an object or string that's convertible using {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (if the `timeZone` option is provided or the string contains time zone annotation) or {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

Note that `days` to `hours` conversion is also technically ambiguous because the length of a day may vary due to offset changes, such as daylight saving time. You can provide a zoned `relativeTo` to account for these changes; otherwise 24-hour days are assumed.

### Duration balancing

There are many ways to represent the same duration: for example, "1 minute and 30 seconds" and "90 seconds" are equivalent. However, depending on the context, one representation may be more appropriate than the other. Therefore, generally, the `Duration` object preserves the input values as much as possible, so that when you format it, it will be displayed as you expect.

Each component of a duration has its optimal range; hours should be from 0 to 23, minutes from 0 to 59, and so on. When a component overflows its optimal range, the excess may be "carried" into the next larger component. To carry over, we need to answer the question of "how many X are in a Y?", which is a complicated question for [calendar units](#calendar_durations), so in this case a calendar is needed. Also note that by default, `days` are directly carried into `months`; the weeks unit is only carried into if explicitly requested. If we carry as much as possible, the eventual result where all components are within their optimal range is called a "balanced" duration. Unbalanced durations usually come in the "top-heavy" form, where the largest unit is unbalanced (e.g., "27 hours and 30 minutes"); other forms, such as "23 hours and 270 minutes", are rarely seen.

The {{jsxref("Temporal/Duration/round", "round()")}} method always balances the duration into the "top-heavy" form, up to the `largestUnit` option. With a manual `largestUnit` option that's large enough, you can fully balance the duration. Similarly, the {{jsxref("Temporal/Duration/add", "add()")}} and {{jsxref("Temporal/Duration/subtract", "subtract()")}} methods balance the result duration to the largest unit of the input durations.

Note that because the ISO 8601 duration format represents subsecond components as one single fraction number, it is not possible to preserve unbalanced subsecond components during serialization using the default format. For example, "1000 milliseconds" is serialized as `"PT1S"`, and then deserialized as "1 second". If you need to preserve the subsecond components' magnitudes, you need to manually serialize it as a JSON object instead (because by default the {{jsxref("Temporal/Duration/toJSON", "toJSON()")}} method serializes the duration in the ISO 8601 format).

### Duration sign

Because a duration is a difference between two time points, it can be positive, negative, or zero. For example, if you are displaying event times in relative time, then negative durations may represent events in the past, and positive durations for the future. In our representation using a combination of time components, the sign is stored within each component: a negative duration always has all components negative (or zero), and a positive duration always has all components positive (or zero). Constructing a duration with components of mixed signs is invalid and will be rejected by the constructor or the {{jsxref("Temporal/Duration/with", "with()")}} method. The `add()` and `subtract()` methods will balance the result duration to avoid mixed signs.

## Constructor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} {{experimental_inline}}
  - : Creates a new `Temporal.Duration` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}} {{experimental_inline}}
  - : Returns a number (-1, 0, or 1) indicating whether the first duration is shorter, equal to, or longer than the second duration.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}} {{experimental_inline}}
  - : Creates a new `Temporal.Duration` object from another `Temporal.Duration` object, an object with duration properties, or an ISO 8601 string.

## Instance properties

These properties are defined on `Temporal.Duration.prototype` and shared by all `Temporal.Duration` instances.

- {{jsxref("Temporal/Duration/blank", "Temporal.Duration.prototype.blank")}} {{experimental_inline}}
  - : Returns a boolean that is `true` if this duration represents a zero duration, and `false` otherwise. Equivalent to `duration.sign === 0`.
- {{jsxref("Object/constructor", "Temporal.Duration.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.Duration` instances, the initial value is the {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}} constructor.
- {{jsxref("Temporal/Duration/days", "Temporal.Duration.prototype.days")}} {{experimental_inline}}
  - : Returns an integer representing the number of days in the duration.
- {{jsxref("Temporal/Duration/hours", "Temporal.Duration.prototype.hours")}} {{experimental_inline}}
  - : Returns an integer representing the number of hours in the duration.
- {{jsxref("Temporal/Duration/microseconds", "Temporal.Duration.prototype.microseconds")}} {{experimental_inline}}
  - : Returns an integer representing the number of microseconds in the duration.
- {{jsxref("Temporal/Duration/milliseconds", "Temporal.Duration.prototype.milliseconds")}} {{experimental_inline}}
  - : Returns an integer representing the number of milliseconds in the duration.
- {{jsxref("Temporal/Duration/minutes", "Temporal.Duration.prototype.minutes")}} {{experimental_inline}}
  - : Returns an integer representing the number of minutes in the duration.
- {{jsxref("Temporal/Duration/months", "Temporal.Duration.prototype.months")}} {{experimental_inline}}
  - : Returns an integer representing the number of months in the duration.
- {{jsxref("Temporal/Duration/nanoseconds", "Temporal.Duration.prototype.nanoseconds")}} {{experimental_inline}}
  - : Returns an integer representing the number of nanoseconds in the duration.
- {{jsxref("Temporal/Duration/seconds", "Temporal.Duration.prototype.seconds")}} {{experimental_inline}}
  - : Returns an integer representing the number of seconds in the duration.
- {{jsxref("Temporal/Duration/sign", "Temporal.Duration.prototype.sign")}} {{experimental_inline}}
  - : Returns `1` if this duration is positive, `-1` if negative, and `0` if zero.
- {{jsxref("Temporal/Duration/weeks", "Temporal.Duration.prototype.weeks")}} {{experimental_inline}}
  - : Returns an integer representing the number of weeks in the duration.
- {{jsxref("Temporal/Duration/years", "Temporal.Duration.prototype.years")}} {{experimental_inline}}
  - : Returns an integer representing the number of years in the duration.
- `Temporal.Duration.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.Duration"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/Duration/abs", "Temporal.Duration.prototype.abs()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Duration` object with the absolute value of this duration (all fields keep the same magnitude, but sign becomes positive).
- {{jsxref("Temporal/Duration/add", "Temporal.Duration.prototype.add()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Duration` object with the sum of this duration and a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}). The result is [balanced](#duration_balancing).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Duration` object with the negated value of this duration (all fields keep the same magnitude, but sign becomes reversed).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Duration` object with the duration rounded to the given smallest unit and/or [balanced](#duration_balancing) to the given largest unit.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Duration` object with the difference between this duration and a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}). Equivalent to [adding](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) the [negated](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) value of the other duration.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}} {{experimental_inline}}
  - : Returns a string representing this duration in the same [ISO 8601 format](#iso_8601_duration_format) as calling {{jsxref("Temporal/Duration/toString", "toString()")}}. Intended to be implicitly called by {{jsxref("JSON.stringify()")}}.
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Returns a string with a language-sensitive representation of this duration. In implementations with [`Intl.DurationFormat` API](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat) support, this method delegates to `Intl.DurationFormat`.
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}} {{experimental_inline}}
  - : Returns a string representing this duration in the [ISO 8601 format](#iso_8601_duration_format).
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}} {{experimental_inline}}
  - : Returns a number representing the total duration in the given unit.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}} {{experimental_inline}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.Duration` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}} {{experimental_inline}}
  - : Returns a new `Temporal.Duration` object representing this duration with some fields replaced by new values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
