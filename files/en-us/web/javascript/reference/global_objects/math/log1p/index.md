---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.log1p
---
{{JSRef}}

The **`Math.log1p()`** function returns the natural logarithm (base {{jsxref("Math.E", "e")}}) of `1 + x`, where `x` is the argument. That is

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>></mo>
<mo>-</mo>
<mn>1</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log1p</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">ln</mo>
<mo stretchy="false">(</mo>
<mn>1</mn>
<mo>+</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow><annotation encoding="TeX">\forall x > -1,
\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log1p.html")}}

## Syntax

```js
Math.log1p(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The natural logarithm (base {{jsxref("Math.E", "e")}}) of `1` plus the given number. If the number is less than `-1`, {{jsxref("NaN")}} is returned.

## Description

For very small values of _x_, adding 1 can reduce or eliminate precision. The double floats used in JS give you about 15 digits of precision.  1 + 1e-15 \= 1.000000000000001, but 1 + 1e-16 = 1.000000000000000 and therefore exactly 1.0 in that arithmetic, because digits past 15 are rounded off.

When you calculate log(1 + x) where x is a small positive number, you should get an answer very close to x, because <math display="inline"><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\log(1+x)}{x} = 1</annotation></semantics></math>. If you calculate `Math.log(1 + 1.1111111111e-15)`, you should get an answer close to `1.1111111111e-15`. Instead, you will end up taking the logarithm of `1.00000000000000111022` (the roundoff is in binary, so sometimes it gets ugly), and get the answer 1.11022…e-15, with only 3 correct digits. If, instead, you calculate `Math.log1p(1.1111111111e-15)`, you will get a much more accurate answer `1.1111111110999995e-15`, with 15 correct digits of precision (actually 16 in this case).

If the value of `x` is less than -1, the return value is always {{jsxref("NaN")}}.

Because `log1p()` is a static method of `Math`, you always use it as `Math.log1p()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using `Math.log1p()`

```js
Math.log1p(1);  // 0.6931471805599453
Math.log1p(0);  // 0
Math.log1p(-1); // -Infinity
Math.log1p(-2); // NaN
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.log1p` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
