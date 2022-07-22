---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
tags:
  - JavaScript
  - Number
  - Property
  - Reference
browser-compat: javascript.builtins.Number.MAX_VALUE
---
{{JSRef}}

The **`Number.MAX_VALUE`** property represents the maximum numeric value representable in JavaScript.

{{EmbedInteractiveExample("pages/js/number-maxvalue.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

The `MAX_VALUE` property has a value of approximately `1.79E+308`, or 1.7976931348623157 × 10<sup>308</sup>. Values larger than `MAX_VALUE` are represented as {{jsxref("Infinity")}}.

Because `MAX_VALUE` is a static property of {{jsxref("Number")}}, you always use it as `Number.MAX_VALUE`, rather than as a property of a {{jsxref("Number")}} object you created.

## Examples

### Using MAX_VALUE

The following code multiplies two numeric values. If the result is less than or equal to `MAX_VALUE`, the `func1` function is called; otherwise, the `func2` function is called.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.MIN_VALUE")}}
- The {{jsxref("Number")}} object it belongs to
