---
title: Temporal.PlainDateTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.PlainDateTime
---

{{JSRef}}

The **`Temporal.PlainDateTime`** object represents a date (calendar date) and time (wall-clock time) without a timezone. It is fundamentally represented as a combination of a [date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate) (with an associated calendar system) and a [time](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime).

## Constructor

- {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}}
  - : Creates a new `Temporal.PlainDateTime` object.

## Static methods

- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first datetime comes before, is the same as, or comes after the second datetime. Equivalent to first comparing their dates, then their times in case of a tie.
- {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}
  - : Creates a new `Temporal.PlainDateTime` object from another `Temporal.PlainDateTime` object, an object with date and time properties, or an ISO 8601 string.

## Instance properties

These properties are defined on `Temporal.PlainDateTime.prototype` and shared by all `Temporal.PlainDateTime` instances.

- {{jsxref("Temporal/PlainDateTime/calendarId", "Temporal.PlainDateTime.prototype.calendarId")}}
  - : TODO
- {{jsxref("Object/constructor", "Temporal.PlainDateTime.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainDateTime` instances, the initial value is the {{jsxref("Temporal/PlainDateTime/PlainDateTime", "Temporal.PlainDateTime()")}} constructor.
- {{jsxref("Temporal/PlainDateTime/day", "Temporal.PlainDateTime.prototype.day")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/dayOfWeek", "Temporal.PlainDateTime.prototype.dayOfWeek")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/dayOfYear", "Temporal.PlainDateTime.prototype.dayOfYear")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/daysInMonth", "Temporal.PlainDateTime.prototype.daysInMonth")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/daysInWeek", "Temporal.PlainDateTime.prototype.daysInWeek")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/daysInYear", "Temporal.PlainDateTime.prototype.daysInYear")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/era", "Temporal.PlainDateTime.prototype.era")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/eraYear", "Temporal.PlainDateTime.prototype.eraYear")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/hour", "Temporal.PlainDateTime.prototype.hour")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/inLeapYear", "Temporal.PlainDateTime.prototype.inLeapYear")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/microsecond", "Temporal.PlainDateTime.prototype.microsecond")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/millisecond", "Temporal.PlainDateTime.prototype.millisecond")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/minute", "Temporal.PlainDateTime.prototype.minute")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/month", "Temporal.PlainDateTime.prototype.month")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/monthCode", "Temporal.PlainDateTime.prototype.monthCode")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/monthsInYear", "Temporal.PlainDateTime.prototype.monthsInYear")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/nanosecond", "Temporal.PlainDateTime.prototype.nanosecond")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/second", "Temporal.PlainDateTime.prototype.second")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/weekOfYear", "Temporal.PlainDateTime.prototype.weekOfYear")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/year", "Temporal.PlainDateTime.prototype.year")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/yearOfWeek", "Temporal.PlainDateTime.prototype.yearOfWeek")}}
  - : TODO
- `Temporal.PlainDateTime.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainDateTime"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainDateTime/add", "Temporal.PlainDateTime.prototype.add()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/equals", "Temporal.PlainDateTime.prototype.equals()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/round", "Temporal.PlainDateTime.prototype.round()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/since", "Temporal.PlainDateTime.prototype.since()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/subtract", "Temporal.PlainDateTime.prototype.subtract()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/toJSON", "Temporal.PlainDateTime.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/toLocaleString", "Temporal.PlainDateTime.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/toPlainDate", "Temporal.PlainDateTime.prototype.toPlainDate()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/toPlainTime", "Temporal.PlainDateTime.prototype.toPlainTime()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/toString", "Temporal.PlainDateTime.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/toZonedDateTime", "Temporal.PlainDateTime.prototype.toZonedDateTime()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/until", "Temporal.PlainDateTime.prototype.until()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/valueOf", "Temporal.PlainDateTime.prototype.valueOf()")}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainDateTime` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainDateTime/with", "Temporal.PlainDateTime.prototype.with()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/withCalendar", "Temporal.PlainDateTime.prototype.withCalendar()")}}
  - : TODO
- {{jsxref("Temporal/PlainDateTime/withPlainTime", "Temporal.PlainDateTime.prototype.withPlainTime()")}}
  - : TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
