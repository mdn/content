---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Property
  - Reference
browser-compat: javascript.builtins.Number.NEGATIVE_INFINITY
---

{{JSRef}}

The **`Number.NEGATIVE_INFINITY`** property represents the negative Infinity value.

{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

The value of `Number.NEGATIVE_INFINITY` is the same as the negative value of the global object's {{jsxref("Infinity")}} property.

This value behaves slightly differently than mathematical infinity:

- Any positive value, including {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, multiplied by `NEGATIVE_INFINITY` is `NEGATIVE_INFINITY`.
- Any negative value, including `NEGATIVE_INFINITY`, multiplied by `NEGATIVE_INFINITY` is {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Any positive value divided by `NEGATIVE_INFINITY` is negative zero.
- Any negative value divided by `NEGATIVE_INFINITY` is positive zero.
- Zero multiplied by `NEGATIVE_INFINITY` is {{jsxref("NaN")}}.
- {{jsxref("NaN")}} multiplied by `NEGATIVE_INFINITY` is {{jsxref("NaN")}}.
- `NEGATIVE_INFINITY`, divided by any negative value except `NEGATIVE_INFINITY`, is {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- `NEGATIVE_INFINITY`, divided by any positive value except {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, is `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY`, divided by either `NEGATIVE_INFINITY` or {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, is {{jsxref("NaN")}}.

You might use the `Number.NEGATIVE_INFINITY` property to indicate an error condition that returns a finite number in case of success. Note, however, that {{jsxref("isFinite")}} would be more appropriate in such a case.

Because `NEGATIVE_INFINITY` is a static property of {{jsxref("Number")}}, you always use it as `Number.NEGATIVE_INFINITY`, rather than as a property of a {{jsxref("Number")}} object you created.

## Examples

### Using NEGATIVE_INFINITY

In the following example, the variable `smallNumber` is assigned a value that is smaller than the minimum value. When the {{jsxref("Statements/if...else", "if")}} statement executes, `smallNumber` has the value `-Infinity`, so `smallNumber` is set to a more manageable value before continuing.

```js
var smallNumber = -Number.MAX_VALUE * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Global_Objects/Infinity", "Infinity")}}
- {{jsxref("Global_Objects/isFinite", "isFinite()")}}
