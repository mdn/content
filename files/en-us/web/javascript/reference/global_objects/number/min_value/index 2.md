---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
tags:
  - JavaScript
  - Number
  - Property
browser-compat: javascript.builtins.Number.MIN_VALUE
---
{{JSRef}}

The **`Number.MIN_VALUE`** property represents the smallest positive numeric value representable in JavaScript.

{{EmbedInteractiveExample("pages/js/number-min-value.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

`Number.MIN_VALUE` is the smallest positive number (not the most negative number) that can be represented within float precision — in other words, the number closest to 0. That’s approximately `5E-324`. The ECMAScript spec doesn’t define a precise value that implementations are required to support — instead the spec says, _“must be the smallest non-zero positive value that can actually be represented by the implementation”_. But in practice, its precise value in browsers and in Node.js is `2^-1074`.

Because `MIN_VALUE` is a static property of {{jsxref("Number")}}, you always use it as `Number.MIN_VALUE`, rather than as a property of a {{jsxref("Number")}} object you created.

## Examples

### Using MIN_VALUE

The following code divides two numeric values. If the result is greater than or equal to `MIN_VALUE`, the `func1` function is called; otherwise, the `func2` function is called.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
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

- {{jsxref("Number.MAX_VALUE")}}
