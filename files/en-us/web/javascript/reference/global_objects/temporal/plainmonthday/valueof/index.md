---
title: Temporal.PlainMonthDay.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.Temporal.PlainMonthDay.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("Temporal.PlainMonthDay")}} instances throws a {{jsxref("TypeError")}}, which prevents `Temporal.PlainMonthDay` instances from being [implicitly converted to primitives](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) when used in arithmetic or comparison operations.

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

Because both [primitive conversion](/en-US/docs/Web/JavaScript/Data_structures#primitive_coercion) and [number conversion](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) call `valueOf()` before `toString()`, if `valueOf()` is absent, then an expression like `monthDay1 > monthDay2` would implicitly compare them as strings, which may have unexpected results. By throwing a `TypeError`, `Temporal.PlainMonthDay` instances prevent such implicit conversions. You need to explicitly convert them to strings using {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Temporal.PlainMonthDay")}}
- {{jsxref("Temporal/PlainMonthDay/toString", "Temporal.PlainMonthDay.prototype.toString()")}}
- {{jsxref("Temporal/PlainMonthDay/toJSON", "Temporal.PlainMonthDay.prototype.toJSON()")}}
- {{jsxref("Temporal/PlainMonthDay/toLocaleString", "Temporal.PlainMonthDay.prototype.toLocaleString()")}}
