---
title: Temporal.PlainDate.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/until
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainDate.until
---

{{JSRef}}{{SeeCompatTable}}

The **`until()`** method of {{jsxref("Temporal.PlainDate")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this date to another date (in a form convertible by {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}). The duration is positive if the other date is after this date, and negative if before.

This method does `other - this`. To do `this - other`, use the {{jsxref("Temporal/PlainDate/since", "since()")}} method.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainDate")}} instance representing a date to subtract this date from. It is converted to a `Temporal.PlainDate` object using the same algorithm as {{jsxref("Temporal/PlainDate/from", "Temporal.PlainDate.from()")}}. It must have the same calendar as `this`.
- `options` {{optional_inline}}
  - : The same options as [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since#options).

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration from this date _until_ `other`. The duration is positive if `other` is after this date, and negative if before.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `other` has a different calendar than `this`.
    - Any of the options is invalid.

## Examples

### Using until()

```js
const launch = Temporal.PlainDate.from("2035-01-01");
const now = Temporal.Now.plainDateISO();
const duration = now.until(launch);
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

For more examples, see [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/since).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainDate/add", "Temporal.PlainDate.prototype.add()")}}
- {{jsxref("Temporal/PlainDate/subtract", "Temporal.PlainDate.prototype.subtract()")}}
- {{jsxref("Temporal/PlainDate/since", "Temporal.PlainDate.prototype.since()")}}
