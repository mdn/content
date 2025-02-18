---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
page-type: javascript-class
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainMonthDay
---

{{JSRef}}{{SeeCompatTable}}

The **`Temporal.PlainMonthDay`** object represents the month and day of a calendar date, without a year or time zone; for example, an event on a calendar that recurs every year and happens during the whole day. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The year is used to disambiguate the month-day in non-ISO calendar systems.

## Description

A `PlainMonthDay` is essentially the month-day part of a {{jsxref("Temporal.PlainDate")}} object, without the year. Because the meaning of a month-day can change from year to year (for example, whether it exists, or what the month-day of the next day is), this object doesn't provide much functionality on its own, such as comparison, addition, or subtraction. It doesn't even have a {{jsxref("Temporal/PlainDate/month", "month")}} property, because the month index is not meaningful without a year (for example, two months from two years with the same index can have different names in the case of leap months).

### RFC 9557 format

`PlainMonthDay` objects can be serialized and parsed using the [RFC 9557](https://datatracker.ietf.org/doc/html/rfc9557) format, an extension to the [ISO 8601 / RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format. The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
YYYY-MM-DD [u-ca=calendar_id]
```

- `YYYY` {{optional_inline}}
  - : Either a four-digit number, or a six-digit number with a `+` or `-` sign. It is required for non-ISO calendars, and optional otherwise. If omitted, you can either replace `YYYY-` with `--` (so the string looks like `--MM-DD` or `--MMDD`), or omit the `YYYY-` part entirely (so the string looks like `MM-DD` or `MMDD`). Note that the reference year actually stored may be different from the one you provide, but the represented month-day is the same. See {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} for more information.
- `MM`
  - : A two-digit number from `01` to `12`.
- `DD`
  - : A two-digit number from `01` to `31`. The `YYYY`, `MM`, and `DD` components can be separated by `-` or nothing.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Replace `calendar_id` with the calendar to use. May have a _critical flag_ by prefixing the key with `!`: e.g., `[!u-ca=iso8601]`. This flag generally tells other systems that it cannot be ignored if they don't support it. The `Temporal` parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Defaults to `[u-ca=iso8601]`. Note that the `YYYY-MM-DD` is always interpreted as an ISO 8601 calendar date and then converted to the specified calendar.

As an input, you may optionally include the time, offset, and time zone identifier, in the same format as [`PlainDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#rfc_9557_format), but they will be ignored. Other annotations in the `[key=value]` format are also ignored, and they must not have the critical flag.

When serializing, you can configure whether to display the calendar ID, and whether to add a critical flag for it.

## Constructor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainMonthDay` object by directly supplying the underlying data.

## Static methods

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}} {{experimental_inline}}
  - : Creates a new `Temporal.PlainMonthDay` object from another `Temporal.PlainMonthDay` object, an object with month and day properties, or an [RFC 9557](#rfc_9557_format) string.

## Instance properties

These properties are defined on `Temporal.PlainMonthDay.prototype` and shared by all `Temporal.PlainMonthDay` instances.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}} {{experimental_inline}}
  - : Returns a string representing the [calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars) used to interpret the internal ISO 8601 date.
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainMonthDay` instances, the initial value is the {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} constructor.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}} {{experimental_inline}}
  - : Returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Generally starts at 1 and is continuous, but not always.
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}} {{experimental_inline}}
  - : Returns a calendar-specific string representing the month of this date. [Calendar](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal#calendars)-dependent. Usually it is `M` plus a two-digit month number. For leap months, it is the previous month's code followed by `L`. If the leap month is the first month of the year, the code is `M00L`.
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainMonthDay"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}} {{experimental_inline}}
  - : Returns `true` if this month-day is equivalent in value to another month-day (in a form convertible by {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}), and `false` otherwise. They are compared both by their date values and their calendars.
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}} {{experimental_inline}}
  - : Returns a string representing this month-day in the same [RFC 9557 format](#rfc_9557_format) as calling {{jsxref("Temporal/PlainMonthDay/toString", "toString()")}}. Intended to be implicitly called by {{jsxref("JSON.stringify()")}}.
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}} {{experimental_inline}}
  - : Returns a string with a language-sensitive representation of this month-day.
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}} {{experimental_inline}}
  - : Returns a new {{jsxref("Temporal.PlainDate")}} object representing this month-day and a supplied year in the same calendar system.
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}} {{experimental_inline}}
  - : Returns a string representing this month-day in the [RFC 9557 format](#rfc_9557_format).
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}} {{experimental_inline}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainMonthDay` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}} {{experimental_inline}}
  - : Returns a new `Temporal.PlainMonthDay` object representing this month-day with some fields replaced by new values.

## Examples

### Getting the next occurrence of a festival

```js
// Chinese New Years are on 1/1 in the Chinese calendar
const chineseNewYear = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: "chinese",
});
const currentYear = Temporal.Now.plainDateISO().withCalendar("chinese").year;
let nextCNY = chineseNewYear.toPlainDate({ year: currentYear });
if (Temporal.PlainDate.compare(nextCNY, Temporal.Now.plainDateISO()) <= 0) {
  nextCNY = nextCNY.add({ years: 1 });
}
console.log(
  `The next Chinese New Year is on ${nextCNY.withCalendar("iso8601").toLocaleString()}`,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal")}}
- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.PlainYearMonth")}}
