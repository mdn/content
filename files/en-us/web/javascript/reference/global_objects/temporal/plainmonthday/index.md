---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.PlainMonthDay
---

{{JSRef}}

The **`Temporal.PlainMonthDay`** object represents the month and day of a calendar date, without a year or time zone; for example, an event on a calendar that recurs every year and happens during the whole day. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The year is used to disambiguate the month-day in some calendar systems.

## Description

### ISO 8601 format

`PlainMonthDay` objects can be serialized and parsed using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) (with some extensions specified by ECMAScript). The string has the following form (spaces are only for readability and should not be present in the actual string):

```plain
MM-DD [u-ca=calendar_id]
```

- `MM`
  - : A two-digit number from `01` to `12`. It may be prefixed by `--`, indicating that the year is unknown.
- `DD`
  - : A two-digit number from `01` to `31`. The `MM` and `DD` components can be separated by `-` or nothing.
- `[u-ca=calendar_id]` {{optional_inline}}
  - : Replace `calendar_id` with the calendar to use. May have a _critical flag_ by prefixing the key with `!`: e.g., `[!u-ca=iso8601]`. This flag generally tells other systems that it cannot be ignored if they don't support it. The `Temporal` parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Defaults to `[u-ca=iso8601]`. Note that the `MM-DD` is always interpreted in ISO and then converted to the specified calendar.

As an input, you may optionally include the year, time, offset, and time zone identifier, in the same format as [`PlainDateTime`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime#iso_8601_format), but they will be ignored. Other annotations in the `[key=value]` format are also ignored, and they must not have the critical flag.

When serializing, you can configure whether to display the calendar ID, and whether to add a critical flag for it.

## Constructor

- {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}}
  - : Creates a new `Temporal.PlainMonthDay` object.

## Static methods

- {{jsxref("Temporal/PlainMonthDay/from", "Temporal.PlainMonthDay.from()")}}
  - : Creates a new `Temporal.PlainMonthDay` object from another `Temporal.PlainMonthDay` object, an object with month and day properties, or an ISO 8601 string.

## Instance properties

These properties are defined on `Temporal.PlainMonthDay.prototype` and shared by all `Temporal.PlainMonthDay` instances.

- {{jsxref("Temporal/PlainMonthDay/calendarId", "Temporal.PlainMonthDay.prototype.calendarId")}}
  - : TODO
- {{jsxref("Object/constructor", "Temporal.PlainMonthDay.prototype.constructor")}}
  - : The constructor function that created the instance object. For `Temporal.PlainMonthDay` instances, the initial value is the {{jsxref("Temporal/PlainMonthDay/PlainMonthDay", "Temporal.PlainMonthDay()")}} constructor.
- {{jsxref("Temporal/PlainMonthDay/day", "Temporal.PlainMonthDay.prototype.day")}}
  - : TODO
- {{jsxref("Temporal/PlainMonthDay/monthCode", "Temporal.PlainMonthDay.prototype.monthCode")}}
  - : TODO
- `Temporal.PlainMonthDay.prototype[Symbol.toStringTag]`
  - : The initial value of the [`[Symbol.toStringTag]`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) property is the string `"Temporal.PlainMonthDay"`. This property is used in {{jsxref("Object.prototype.toString()")}}.

## Instance methods

- {{jsxref("Temporal/PlainMonthDay/equals", "Temporal.PlainMonthDay.prototype.equals()")}}
  - : TODO
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
  - : TODO
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
  - : TODO
- {{jsxref("Temporal/PlainMonthDay/toPlainDate", "Temporal.PlainMonthDay.prototype.toPlainDate()")}}
  - : TODO
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
  - : TODO
- {{jsxref("Temporal/PlainMonthDay/valueOf", "Temporal.PlainMonthDay.prototype.valueOf()")}}
  - : Throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainMonthDay` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.
- {{jsxref("Temporal/PlainMonthDay/with", "Temporal.PlainMonthDay.prototype.with()")}}
  - : TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
