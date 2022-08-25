---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Property
  - Polyfill
browser-compat: javascript.builtins.Number.MAX_SAFE_INTEGER
---
{{JSRef}}

The **`Number.MAX_SAFE_INTEGER`** constant represents the maximum safe integer in JavaScript (2<sup>53</sup> – 1).

For larger integers, consider using {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

The `MAX_SAFE_INTEGER` constant has a value of `9007199254740991` (9,007,199,254,740,991 or \~9 quadrillion). The reasoning behind that number is that JavaScript uses [double-precision floating-point format numbers](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) as specified in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point) and can only safely represent integers between -(2<sup>53</sup> – 1) and 2<sup>53</sup> – 1.

Safe in this context refers to the ability to represent integers exactly and to correctly compare them. For example, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` will evaluate to true, which is mathematically incorrect. See {{jsxref("Number.isSafeInteger()")}} for more information.

This field does not exist in old browsers. Using it without checking its existence, such as `Math.max(Number.MAX_SAFE_INTEGER, 2)`, will yield undesired results such as NaN.

Because `MAX_SAFE_INTEGER` is a static property of {{jsxref("Number")}}, you always use it as `Number.MAX_SAFE_INTEGER`, rather than as a property of a {{jsxref("Number")}} object you created.

## Examples

### Return value of MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Numbers higher than safe integer

This returns 2 because in floating points, the value is actually the decimal trailing "1" except for in subnormal precision cases such as zero.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 2
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Number.MAX_SAFE_INTEGER` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number.MIN_SAFE_INTEGER")}}
- {{jsxref("Number.isSafeInteger()")}}
- {{jsxref("BigInt")}}
