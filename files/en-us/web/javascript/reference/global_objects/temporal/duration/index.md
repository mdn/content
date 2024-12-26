---
title: Temporal.Duration
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.Duration
---

{{JSRef}}

The **`Temporal.Duration`** object represents a difference between two time points, which can be used in datetime arithmetic. It is fundamentally represented as a combination of years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, and nanoseconds values.

## Description

### ISO 8601 duration format

`Duration` objects can be serialized and parsed using the [ISO 8601 duration format](https://en.wikipedia.org/wiki/ISO_8601#Durations). The string has the following form:

```plain
PnYnMnWnDTnHnMnS
```

Where any uppercase letter is a literal character, and any lowercase `n` represents the number of years (`Y`), months (`M`), weeks (`W`), days (`D`), hours (`H`), minutes (`M`), or seconds (`S`), respectively. Only the seconds component may have a fractional part led by a dot, such as `0.0021S`. Any zero components may be omitted, but at least one component should be present (even if it has value zero, in which case the duration is zero). The `P` at the beginning is a literal character that stands for "period". The `T` is a literal character that separates the date part from the time part, which should be present if and only if there's at least one component after it. Here are some examples:

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
> According to the ISO 8601-1 standard, weeks are not allowed to appear together with any other units, and durations can only be positive. As extensions to the standard, ISO 8601-2 allows a sign character at the start of the string, and allows combining weeks with other units. Therefore, if your duration is serialized to a string like `P3W1D`, `+P1M`, or `-P1M`, note that other programs may not accept it.

### Calendar durations

A _calendar duration_ is one that contains any of the calendar units: weeks, months, and years. A non-calendar duration is portable and can participate in datetime arithmetic without any calendar information, because they unambiguously represent a fixed amount of time. However, a calendar duration is not portable because the number of days in a month or year depends on the calendar system and the reference time point. Therefore, attempting to perform any arithmetic operation on a calendar durations throws an error because durations don't keep track of a calendar themselves. For example, if we are in May of the Gregorian calendar, then "1 month" is "31 days", but if we are in April, then "1 month" becomes "30 days". To add or subtract calendar durations, you need to add them to dates instead (which, by nature of date calculations, returns you a non-calendar duration):

```js
const dur1 = Temporal.Duration.from({ years: 1 });
const dur2 = Temporal.Duration.from({ months: 1 });

dur1.add(dur2); // RangeError: For years, months, or weeks arithmetic, use date arithmetic relative to a starting point

const startingPoint = Temporal.PlainDate.from("2021-01-01"); // ISO 8601 calendar
startingPoint.add(dur1).add(dur2).since(startingPoint); // "P396D"
```

Other operations, including `round()`, `total()`, and `compare()`, take a `relativeTo` option to provide the necessary calendar and reference time information. This option can be a {{jsxref("Temporal.PlainDate")}}, {{jsxref("Temporal.PlainDateTime")}}, {{jsxref("Temporal.ZonedDateTime")}}, or otherwise an object or string that's convertible using {{jsxref("Temporal/ZonedDateTime/from", "Temporal.ZonedDateTime.from()")}} (if the `timeZone` option is provided or the string contains timezone annotation) or {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}. A plain date(time) only provides the calendar information (and the time itself does not matter), while a zoned datetime also provides an instant to account for any occasional changes such as daylight saving time.

Note that `days` to `hours` conversion is also technically ambiguous because the length of a day may vary due to offset changes, such as daylight saving time. You can provide a zoned `relativeTo` to account for these changes; otherwise 24-hour days are assumed.

### Duration balancing

There are many ways to represent the same duration: for example, "1 minute and 30 seconds" and "90 seconds" are equivalent. However, depending on the context, one representation may be more appropriate than the other. Therefore, generally, the `Duration` object preserves the input values as much as possible, so that when you format it, it will be displayed as you expect.

More formally, each component of a duration has its optimal range; hours should be from 0 to 23, minutes from 0 to 59, and so on. When a component overflows its optimal range, the excess is "carried" into the next larger component. To carry over, we need to answer the question of "how many X are in a Y?", which is a complicated question for [calendar units](#calendar_durations). Also note that by default, `days` are directly carried into `months`. The weeks unit is only carried into if explicitly requested.

If we carry as much as possible, the eventual result where all components are within their optimal range is called a "balanced" duration. Unbalanced durations usually come in the "top-heavy" form, where the largest unit is unbalanced (e.g., "27 hours and 30 minutes"); other forms, such as "23 hours and 270 minutes", are rarely seen.

The {{jsxref("Temporal/Duration/round", "round()")}} method always balances the duration into the "top-heavy" form, up to the `largestUnit` option. With a manual `largestUnit` option that's large enough, you can fully balance the duration, such as "90 seconds" to "1 minute and 30 seconds". Similarly, the {{jsxref("Temporal/Duration/add", "add()")}} and {{jsxref("Temporal/Duration/subtract", "subtract()")}} methods balance the result duration to the largest unit of the input durations, or to the `largestUnit` option if provided.

Note that because the ISO 8601 duration format represents subsecond components as one single fraction number, it is not possible to preserve unbalanced subsecond components during serialization using the default format. For example, "1000 milliseconds" is serialized as `"PT1S"`, and then deserialized as "1 second". If you need to preserve the subsecond components, you need to serialize it as JSON instead.

### Duration sign

Because a duration is a difference between two time points, it can be positive, negative, or zero. For example, if you are displaying event times in relative time, then negative durations may represent events in the past, and positive durations for the future. In our representation using a combination of time components, the sign is stored within each component: a negative duration always has all components negative (or zero), and a positive duration always has all components positive (or zero). Constructing a duration with components of mixed signs is invalid and will be rejected by the constructor or the {{jsxref("Temporal/Duration/with", "with()")}} method. The `add()` and `subtract()` methods will balance the result duration to avoid mixed signs.

## Constructor

- {{jsxref("Temporal/Duration/Duration", "Temporal.Duration()")}}
  - : Creates a new `Temporal.Duration` object.

## Static methods

- {{jsxref("Temporal/Duration/compare", "Temporal.Duration.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first duration is shorter, equal to, or longer than the second duration.
- {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}
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
  - : Returns a new `Temporal.Duration` object with the sum of this duration and a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}). The result is [balanced](#duration_balancing).
- {{jsxref("Temporal/Duration/negated", "Temporal.Duration.prototype.negated()")}}
  - : Returns a new `Temporal.Duration` object with the negated value of this duration (all fields keep the same magnitude, but sign becomes reversed).
- {{jsxref("Temporal/Duration/round", "Temporal.Duration.prototype.round()")}}
  - : Returns a new `Temporal.Duration` object with the duration rounded to the given smallest unit and/or [balanced](#duration_balancing) to the given largest unit.
- {{jsxref("Temporal/Duration/subtract", "Temporal.Duration.prototype.subtract()")}}
  - : Returns a new `Temporal.Duration` object with the difference between this duration and a given duration (in a form convertible by {{jsxref("Temporal/Duration/from", "Temporal.Duration.from()")}}). Equivalent to [adding](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/add) the [negated](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/negated) value of the other duration.
- {{jsxref("Temporal/Duration/toJSON", "Temporal.Duration.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/Duration/toLocaleString", "Temporal.Duration.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/Duration/toString", "Temporal.Duration.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}
  - : Returns a number representing the total duration in the given unit.
- {{jsxref("Temporal/Duration/valueOf", "Temporal.Duration.prototype.valueOf()")}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.Duration` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/Duration/with", "Temporal.Duration.prototype.with()")}}
  - : Returns a new `Temporal.Duration` object representing this duration with some fields replaced by new values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
