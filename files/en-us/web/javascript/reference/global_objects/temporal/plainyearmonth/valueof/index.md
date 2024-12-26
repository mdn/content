---
title: Temporal.PlainYearMonth.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainYearMonth.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Temporal.PlainYearMonth")}} instances throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainYearMonth` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

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

Because both [primitive conversion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) and [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) call `valueOf()` before `toString()`, if `valueOf()` is absent, then an expression like `yearMonth1 > yearMonth2` would implicitly compare them as strings, which may have unexpected results. By throwing a `TypeError`, `Temporal.PlainTime` instances prevent such implicit conversions. You need to explicitly convert them to strings using {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}, or use the {{jsxref("Temporal/PlainYearMonth/compare", "Temporal.PlainYearMonth.compare()")}} static method to compare them.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainYearMonth")}}
- {{jsxref("Temporal/PlainYearMonth/toString", "Temporal.PlainYearMonth.prototype.toString()")}}
- {{jsxref("Temporal/PlainYearMonth/toJSON", "Temporal.PlainYearMonth.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainYearMonth/toLocaleString", "Temporal.PlainYearMonth.prototype.toLocaleString()")}}
