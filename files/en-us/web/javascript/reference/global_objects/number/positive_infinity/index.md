---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Property
  - Reference
browser-compat: javascript.builtins.Number.POSITIVE_INFINITY
---

{{JSRef}}

The **`Number.POSITIVE_INFINITY`** property represents the positive Infinity value.

{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

The value of `Number.POSITIVE_INFINITY` is the same as the value of the global object's {{jsxref("Infinity")}} property.

This value behaves slightly differently than mathematical infinity:

- Any positive value, including `POSITIVE_INFINITY`, multiplied by `POSITIVE_INFINITY` is `POSITIVE_INFINITY`.
- Any negative value, including {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multiplied by `POSITIVE_INFINITY` is {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Any positive number divided by `POSITIVE_INFINITY` is positive Zero.
- Any negative number divided by `POSITIVE_INFINITY` is negative Zero.
- Zero multiplied by `POSITIVE_INFINITY` is {{jsxref("NaN")}}.
- {{jsxref("Global_Objects/NaN", "NaN")}} multiplied by `POSITIVE_INFINITY` is {{jsxref("NaN")}}.
- `POSITIVE_INFINITY`, divided by any negative value except {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, is {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- `POSITIVE_INFINITY`, divided by any positive value except `POSITIVE_INFINITY`, is `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY`, divided by either {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} or `POSITIVE_INFINITY`, is {{jsxref("NaN")}}.

You might use the `Number.POSITIVE_INFINITY` property to indicate an error condition that returns a finite number in case of success. Note, however, that {{jsxref("isFinite")}} would be more appropriate in such a case.

Because `POSITIVE_INFINITY` is a static property of {{jsxref("Number")}}, you always use it as `Number.POSITIVE_INFINITY`, rather than as a property of a {{jsxref("Number")}} object you created.

## Examples

### Using POSITIVE_INFINITY

In the following example, the variable `bigNumber` is assigned a value that is larger than the maximum value. When the {{jsxref("Statements/if...else", "if")}} statement executes, `bigNumber` has the value `Infinity`, so `bigNumber` is set to a more manageable value before continuing.

```js
var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
