---
title: Temporal.PlainDate.prototype.equals()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/equals
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.equals
---

{{JSRef}}{{SeeCompatTable}}

The **`equals()`** method of {{jsxref("Temporal.PlainDate")}} instances returns `true` if this date is equivalent in value to another date (in a form convertible by {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}), and `false` otherwise. They are compared both by their date values and their calendars, so two dates from different calendars may be considered equal by {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} but not by `equals()`.

## Syntax

```js-nolint
equals(other)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainDate")}} instance representing the other date to compare. It is converted to a `Temporal.PlainDate` object using the same algorithm as {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}.

### Return value

`true` if this date is equal to `other` both in their date value and their calendar, `false` otherwise.

## Examples

### Using equals()

```js
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
console.log(date1.equals(date2)); // true

const date3 = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
console.log(date1.equals(date3)); // false

const date4 = Temporal.PlainDate.from("2021-08-02");
console.log(date1.equals(date4)); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}}
