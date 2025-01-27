---
title: Temporal.PlainTime.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/until
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.PlainTime.until
---

{{JSRef}}{{SeeCompatTable}}

The **`until()`** method of {{jsxref("Temporal.PlainTime")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this time to another time (in a form convertible by {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}). The duration is positive if the other time is after this time, and negative if before.

This method does `other - this`. To do `this - other`, use the {{jsxref("Temporal/PlainTime/since", "since()")}} method.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameters

- `other`
  - : A string, an object, or a {{jsxref("Temporal.PlainTime")}} instance representing a time to subtract this time from. It is converted to a `Temporal.PlainTime` object using the same algorithm as {{jsxref("Temporal/PlainTime/from", "Temporal.PlainTime.from()")}}. It must have the same calendar as `this`.
- `options` {{optional_inline}}
  - : The same options as [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since#options).

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration from this time _until_ `other`. The duration is positive if `other` is after this time, and negative if before.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Examples

### Using until()

```js
const lunchTime = Temporal.PlainTime.from("12:30:00");
const now = Temporal.Now.plainTimeISO();
const duration = now.until(lunchTime);
console.log(`It will be ${duration.toLocaleString("en-US")} until lunch`);
// Example output: "It will be 3 hr, 42 min, 21 sec, 343 ms, 131 μs, 718 ns until lunch"
```

For more examples, see [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/since).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainTime")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/PlainTime/add", "Temporal.PlainTime.prototype.add()")}}
- {{jsxref("Temporal/PlainTime/subtract", "Temporal.PlainTime.prototype.subtract()")}}
- {{jsxref("Temporal/PlainTime/since", "Temporal.PlainTime.prototype.since()")}}
