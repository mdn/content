---
title: Temporal.ZonedDateTime.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.ZonedDateTime.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Temporal.ZonedDateTime")}} instances throws a {{jsxref("TypeError")}}, which prevents `Temporal.ZonedDateTime` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

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

Because both [primitive conversion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) and [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) call `valueOf()` before `toString()`, if `valueOf()` is absent, then an expression like `yearMonth1 > yearMonth2` would implicitly compare them as strings, which may have unexpected results. By throwing a `TypeError`, `Temporal.PlainTime` instances prevent such implicit conversions. You need to explicitly convert them to numbers using {{jsxref("Temporal/ZonedDateTime/epochNanoseconds", "Temporal.ZonedDateTime.prototype.epochNanoseconds")}}, or use the {{jsxref("Temporal/ZonedDateTime/compare", "Temporal.ZonedDateTime.compare()")}} static method to compare them.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.ZonedDateTime")}}
- {{jsxref("Temporal/ZonedDateTime/toString", "Temporal.ZonedDateTime.prototype.toString()")}}
- {{jsxref("Temporal/ZonedDateTime/toJSON", "Temporal.ZonedDateTime.prototype.toJSON()")}}
- {{jsxref("Temporal/ZonedDateTime/toLocaleString", "Temporal.ZonedDateTime.prototype.toLocaleString()")}}
