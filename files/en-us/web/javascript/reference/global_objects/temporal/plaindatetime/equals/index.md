---
title: Temporal.PlainDateTime.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/equals
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDateTime.equals
---

{{JSRef}}{{SeeCompatTable}}

The **`equals()`** method of {{jsxref("Temporal.PlainDateTime")}} instances returns `true` if this date-time is equivalent in value to another date-time (in a form convertible by {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDateTime.from()")}}), and `false` otherwise. They are compared both by their date and time values and their calendars, so two date-times from different calendars may be considered equal by {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}} but not by `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainDateTime")}} instance representing the other date-time to compare. It is converted to a `Temporal.PlainDateTime` object using the same algorithm as {{jsxref("Temporal/PlainDateTime/from", "Temporal.PlainDateTime.from()")}}.

### Return value

`true` if this date-time is equal to `other` both in their date/time value and their calendar, `false` otherwise.

## Examples

### Using equals()

```js
const dt1 = Temporal.PlainDateTime.from("2021-08-01");
const dt2 = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
console.log(dt1.equals(dt2)); // true

const dt3 = Temporal.PlainDateTime.from("2021-08-01[u-ca=japanese]");
console.log(dt1.equals(dt3)); // false

const dt4 = Temporal.PlainDateTime.from("2021-08-01T01:00:00");
console.log(dt1.equals(dt4)); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDateTime")}}
- {{jsxref("Temporal/PlainDateTime/compare", "Temporal.PlainDateTime.compare()")}}
