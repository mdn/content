---
title: Temporal.PlainMonthDay
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.PlainMonthDay
---

{{JSRef}}

The **`Temporal.PlainMonthDay`** object represents the month and day of a calendar date, without a year or timezone; for example, an event on a calendar that recurs every year and happens during the whole day. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The year is used to disambiguate the month-day in some calendar systems.

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
