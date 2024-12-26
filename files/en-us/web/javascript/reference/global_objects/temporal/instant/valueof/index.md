---
title: Temporal.Instant.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Instant/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.Instant.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Temporal.Instant")}} instances throws a {{jsxref("TypeError")}}, which prevents `Temporal.Instant` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

None.

### Exceptions

- {{jsxref("TypeError")}}
  - : Always thrown.

## Description

Because both [primitive conversion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) and [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) call `valueOf()` before `toString()`, if `valueOf()` is absent, then an expression like `instant1 > instant2` would implicitly compare them as strings, which may have unexpected results. By throwing a `TypeError`, `Temporal.Instant` instances prevent such implicit conversions. You need to explicitly convert them to numbers using {{jsxref("Temporal/Instant/epochNanoseconds", "Temporal.Instant.prototype.epochNanoseconds")}}, or use the {{jsxref("Temporal/Instant/compare", "Temporal.Instant.compare()")}} static method to compare them.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Instant")}}
- {{jsxref("Temporal/Instant/toString", "Temporal.Instant.prototype.toString()")}}
- {{jsxref("Temporal/Instant/toJSON", "Temporal.Instant.prototype.toJSON()")}}
- {{jsxref("Temporal/Instant/toLocaleString", "Temporal.Instant.prototype.toLocaleString()")}}
