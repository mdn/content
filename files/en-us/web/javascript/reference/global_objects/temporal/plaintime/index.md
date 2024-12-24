---
title: Temporal.PlainTime
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
page-type: javascript-class
browser-compat: javascript.builtins.Temporal.PlainTime
---

{{JSRef}}

The **`Temporal.PlainTime`** object represents a time without a date or timezone; for example, a recurring event that happens at the same time every day. It is fundamentally represented as a combination of hour, minute, second, millisecond, microsecond, and nanosecond values.

## Constructor

- {{jsxref("Temporal/PlainTime/PlainTime", "Temporal.PlainTime()")}}
  - : Creates a new `Temporal.PlainTime` object.

## Static methods

- {{jsxref("Temporal.PlainTime.compare()")}}
  - : Returns a number (-1, 0, 1) indicating whether the first time comes before, is the same as, or comes after the second time. Equivalent to comparing the hour, minute, second, millisecond, microsecond, and nanosecond fields one by one.
- {{jsxref("Temporal.PlainTime.from()")}}
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
  - : TODO
- {{jsxref("Temporal/PlainTime/with", "Temporal.PlainTime.prototype.with()")}}
  - : TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- TODO
