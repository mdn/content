---
title: Temporal.Duration.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/Duration/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.Duration.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Temporal.Duration")}} instances throws a {{jsxref("TypeError")}}, which prevents `Temporal.Duration` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

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

Because both [primitive conversion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) and [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) call `valueOf()` before `toString()`, if `valueOf()` is absent, then an expression like `duration1 > duration2` would implicitly compare them as strings, which may have unexpected results such as `"PT3S" > "PT1M"`. By throwing a `TypeError`, `Temporal.Duration` instances prevent such implicit conversions. You need to explicitly convert them to numbers using {{jsxref("Temporal/Duration/total", "Temporal.Duration.prototype.total()")}}, or use the {{jsxref("Temporal.Duration.compare()")}} static method to compare them.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.Duration")}}
- {{jsxref("Temporal.Duration.prototype.toString()")}}
- {{jsxref("Temporal.Duration.prototype.toJSON()")}}
- {{jsxref("Temporal.Duration.prototype.toLocaleString()")}}
