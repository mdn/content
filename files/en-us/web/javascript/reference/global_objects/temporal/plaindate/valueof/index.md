---
title: Temporal.PlainDate.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainDate.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Temporal.PlainDate")}} instances throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainDate` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

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

Because both [primitive conversion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) and [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) call `valueOf()` before `toString()`, if `valueOf()` is absent, then an expression like `date1 > date2` would implicitly compare them as strings, which may have unexpected results. By throwing a `TypeError`, `Temporal.PlainDate` instances prevent such implicit conversions. You need to explicitly convert them to strings using {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}, or use the {{jsxref("Temporal/PlainDate/compare", "Temporal.PlainDate.compare()")}} static method to compare them.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainDate")}}
- {{jsxref("Temporal/PlainDate/toString", "Temporal.PlainDate.prototype.toString()")}}
- {{jsxref("Temporal/PlainDate/toJSON", "Temporal.PlainDate.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainDate/toLocaleString", "Temporal.PlainDate.prototype.toLocaleString()")}}
