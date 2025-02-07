---
title: Temporal.Instant.prototype.until()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/until
page-type: javascript-instance-method
status:
  - experimental
browser-compat: javascript.builtins.Temporal.Instant.until
---

{{JSRef}}{{SeeCompatTable}}

The **`until()`** method of {{jsxref("Temporal.Instant")}} instances returns a new {{jsxref("Temporal.Duration")}} object representing the duration from this instant to another instant (in a form convertible by {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}). The duration is positive if the other instant is after this instant, and negative if before.

This method does `other - this`. To do `this - other`, use the {{jsxref("Temporal/Instant/since", "since()")}} method.

## Syntax

```js-nolint
until(other)
until(other, options)
```

### Parameters

- `other`
  - : A string or a {{jsxref("Temporal.Instant")}} instance representing an instant to subtract this instant from. It is converted to a `Temporal.Instant` object using the same algorithm as {{jsxref("Temporal/Instant/from", "Temporal.Instant.from()")}}.
- `options` {{optional_inline}}
  - : The same options as [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since#options).

### Return value

A new {{jsxref("Temporal.Duration")}} object representing the duration from this instant _until_ `other`. The duration is positive if `other` is after this instant, and negative if before.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown if any of the options is invalid.

## Examples

### Using until()

```js
const launch = Temporal.Instant.fromEpochMilliseconds(2051222400000);
const now = Temporal.Now.instant();
const duration = now.until(launch, { smallestUnit: "minutes" });
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

For more examples, see [`since()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/since).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal/Instant/add", "Temporal.Instant.prototype.add()")}}
- {{jsxref("Temporal/Instant/subtract", "Temporal.Instant.prototype.subtract()")}}
- {{jsxref("Temporal/Instant/since", "Temporal.Instant.prototype.since()")}}
