---
title: Number.MIN_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Number.MIN_SAFE_INTEGER
---

{{JSRef}}

The **`Number.MIN_SAFE_INTEGER`** static data property represents the minimum safe integer in JavaScript, or -(2<sup>53</sup> - 1).

To represent integers smaller than this, consider using {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/number-min-safe-integer.html")}}

## Value

`-9007199254740991` (-9,007,199,254,740,991, or about -9 quadrillion).

{{js_property_attributes(0, 0, 0)}}

## Description

[Double precision floating point format](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) only has 52 bits to represent the [mantissa](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), so it can only safely represent integers between -(2<sup>53</sup> – 1) and 2<sup>53</sup> – 1. Safe in this context refers to the ability to represent integers exactly and to correctly compare them. For example, `Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2` will evaluate to true, which is mathematically incorrect. See {{jsxref("Number.isSafeInteger()")}} for more information.

Because `MIN_SAFE_INTEGER` is a static property of {{jsxref("Number")}}, you always use it as `Number.MIN_SAFE_INTEGER`, rather than as a property of a number value.

## Examples

### Using MIN_SAFE_INTEGER

```js
Number.MIN_SAFE_INTEGER; // -9007199254740991
-(2 ** 53 - 1); // -9007199254740991
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
