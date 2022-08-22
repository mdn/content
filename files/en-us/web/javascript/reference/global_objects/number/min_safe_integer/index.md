---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Property
  - Polyfill
browser-compat: javascript.builtins.Number.MIN_SAFE_INTEGER
---
{{JSRef}}

The **`Number.MIN_SAFE_INTEGER`** constant represents the minimum safe integer in JavaScript, or -(2<sup>53</sup> - 1).

To represent integers smaller than this, consider using {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

The `MIN_SAFE_INTEGER` constant has a value of `-9007199254740991` (-9,007,199,254,740,991 or about -9 quadrillion). The reasoning behind that number is that JavaScript uses [double-precision floating-point format numbers](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) as specified in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point) and can only safely represent numbers between -(2<sup>53</sup> - 1) and 2<sup>53</sup> - 1. See {{jsxref("Number.isSafeInteger()")}} for more information.

Because `MIN_SAFE_INTEGER` is a static property of {{jsxref("Number")}}, you always use it as `Number.MIN_SAFE_INTEGER`, rather than as a property of a {{jsxref("Number")}} object you created.

## Examples

### Using MIN_SAFE_INTEGER

```js
Number.MIN_SAFE_INTEGER // -9007199254740991
-(Math.pow(2, 53) - 1)  // -9007199254740991
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.MIN_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MAX_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
