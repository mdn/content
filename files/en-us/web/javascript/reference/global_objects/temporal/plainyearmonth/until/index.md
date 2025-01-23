---
title: Temporal.PlainYearMonth.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/until
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainYearMonth.until
---

{{JSRef}}{{SeeCompatTable}}

The **`until()`** method of {{jsxref("Temporal.PlainYearMonth")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this year-month to another year-month (in a form convertible by {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}). The duration is positive if the other month is after this month, and negative if before.

This method does `other - this`. To do `this - other`, use the {{jsxref("Temporal/PlainYearMonth/since", "since()")}} method.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainYearMonth")}} instance representing a year-month to subtract this year-month from. It is converted to a `Temporal.PlainYearMonth` object using the same algorithm as {{jsxref("Temporal/PlainYearMonth/from", "Temporal.PlainYearMonth.from()")}}. It must have the same calendar as `this`.
- `options` {{optional_inline}}
  - : The same options as [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since#options).

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration from this year-month _until_ `other`. The duration is positive if `other` is after this year-month, and negative if before.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `other` has a different calendar than `this`.
    - Any of the options is invalid.

## Examples

### Using until()

```js
const launch = Temporal.PlainYearMonth.from("2035-01");
const now = Temporal.Now.plainDateISO().toPlainYearMonth();
const duration = now.until(launch);
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

For more examples, see [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/since).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainYearMonth/add", "Temporal.PlainYearMonth.prototype.add()")}}
- {{jsxref("Temporal/PlainYearMonth/subtract", "Temporal.PlainYearMonth.prototype.subtract()")}}
- {{jsxref("Temporal/PlainYearMonth/since", "Temporal.PlainYearMonth.prototype.since()")}}
