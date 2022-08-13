---
title: Math.expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.expm1
---
{{JSRef}}

The **`Math.expm1()`** function returns e<sup>x</sup> - 1, where x is the argument, and {{jsxref("Math.E", "e", "", 1)}} is the base of natural logarithms.

{{EmbedInteractiveExample("pages/js/math-expm1.html")}}

## Syntax

```js
Math.expm1(x)
```

### Parameters

- `x`
  - : A number.

### Return value

A number representing e<sup>x</sup> - 1, where e is {{jsxref("Math.E", "the base of natural logarithms", "", 1)}} and x is the argument.

## Description

For very small values of _x_, adding 1 can reduce or eliminate precision. The double floats used in JS give you about 15 digits of precision. 1 + 1e-15 \= 1.000000000000001, but 1 + 1e-16 = 1.000000000000000 and therefore exactly 1.0 in that arithmetic, because digits past 15 are rounded off.

When you calculate <math display="inline"><semantics><msup><mrow><mi mathvariant="normal">e</mi></mrow><mi>x</mi></msup><annotation encoding="TeX">\mathrm{e}^x</annotation></semantics></math> where x is a number very close to 0, you should get an answer very close to 1 + x, because <math display="inline"><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><msup><mrow><mi mathvariant="normal">e</mi></mrow><mi>x</mi></msup><mo>−</mo><mn>1</mn><mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\mathrm{e}^x - 1}{x} = 1</annotation></semantics></math>. If you calculate `Math.exp(1.1111111111e-15) - 1`, you should get an answer close to `1.1111111111e-15`. Instead, due to the highest significant figure in the result of `Math.exp` being the units digit `1`, the final value ends up being `1.1102230246251565e-15`, with only 3 correct digits. If, instead, you calculate `Math.exp1m(1.1111111111e-15)`, you will get a much more accurate answer `1.1111111111000007e-15`, with 11 correct digits of precision.

Because `expm1()` is a static method of `Math`, you always use it as `Math.expm1()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.expm1()

```js
Math.expm1(-1); // -0.6321205588285577
Math.expm1(0);  // 0
Math.expm1(1);  // 1.718281828459045
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.expm1` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.E")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
