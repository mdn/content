---
title: Number.MAX_SAFE_INTEGER
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Number.MAX_SAFE_INTEGER
---

{{JSRef}}

The **`Number.MAX_SAFE_INTEGER`** static data property represents the maximum safe integer in JavaScript (2<sup>53</sup> – 1).

For larger integers, consider using {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/number-maxsafeinteger.html")}}

## Value

`9007199254740991` (9,007,199,254,740,991, or \~9 quadrillion).

{{js_property_attributes(0, 0, 0)}}

## Description

[Double precision floating point format](https://en.wikipedia.org/wiki/Double_precision_floating-point_format) only has 52 bits to represent the [mantissa](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding), so it can only safely represent integers between -(2<sup>53</sup> – 1) and 2<sup>53</sup> – 1. "Safe" in this context refers to the ability to represent integers exactly and to compare them correctly. For example, `Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2` will evaluate to true, which is mathematically incorrect. See {{jsxref("Number.isSafeInteger()")}} for more information.

Because `MAX_SAFE_INTEGER` is a static property of {{jsxref("Number")}}, you always use it as `Number.MAX_SAFE_INTEGER`, rather than as a property of a number value.

## Examples

### Return value of MAX_SAFE_INTEGER

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

### Relationship between MAX_SAFE_INTEGER and EPSILON

{{jsxref("Number.EPSILON")}} is 2<sup>-52</sup>, while `MAX_SAFE_INTEGER` is 2<sup>53</sup> – 1 — both of them are derived from the width of the mantissa, which is 53 bits (with the highest bit always being 1). Multiplying them will give a value very close — but not equal — to 2.

```js
Number.MAX_SAFE_INTEGER * Number.EPSILON; // 1.9999999999999998
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
