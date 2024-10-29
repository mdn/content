---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log1p
---

{{JSRef}}

The **`Math.log1p()`** static method returns the natural logarithm (base [e](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) of `1 + x`, where `x` is the argument. That is:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1,\;\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-log1p.html")}}

## Syntax

```js-nolint
Math.log1p(x)
```

### Parameters

- `x`
  - : A number greater than or equal to -1.

### Return value

The natural logarithm (base [e](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) of `x + 1`. If `x` is -1, returns [`-Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY). If `x < -1`, returns {{jsxref("NaN")}}.

## Description

For very small values of _x_, adding 1 can reduce or eliminate precision. The double floats used in JS give you about 15 digits of precision. 1 + 1e-15 \= 1.000000000000001, but 1 + 1e-16 = 1.000000000000000 and therefore exactly 1.0 in that arithmetic, because digits past 15 are rounded off.

<!-- prettier-ignore-start -->
When you calculate log(1 + _x_), where _x_ is a small positive number, you should get an answer very close to _x_ because: <math><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\log(1+x)}{x} = 1</annotation></semantics></math>. If you calculate `Math.log(1 + 1.1111111111e-15)`, you should get an answer close to `1.1111111111e-15`. Instead, you will end up taking the logarithm of `1.00000000000000111022` (the roundoff is in binary, so sometimes it gets ugly), and get the answer 1.11022…e-15, with only 3 correct digits. If you calculate `Math.log1p(1.1111111111e-15)` instead, you will get a much more accurate answer, `1.1111111110999995e-15`, with 15 correct digits of precision (actually 16 in this case).
<!-- prettier-ignore-end -->

If the value of `x` is less than -1, the return value is always {{jsxref("NaN")}}.

Because `log1p()` is a static method of `Math`, you always use it as `Math.log1p()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.log1p()

```js
Math.log1p(-2); // NaN
Math.log1p(-1); // -Infinity
Math.log1p(-0); // -0
Math.log1p(0); // 0
Math.log1p(1); // 0.6931471805599453
Math.log1p(Infinity); // Infinity
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
