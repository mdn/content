---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.exp
---

{{JSRef}}

The **`Math.exp()`** static method returns [e](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E) raised to the power of a number. That is

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.exp}(x)} = \mathrm{e}^x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## Syntax

```js-nolint
Math.exp(x)
```

### Parameters

- `x`
  - : A number.

### Return value

A nonnegative number representing e<sup>x</sup>, where e is [the base of the natural logarithm](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E).

## Description

Because `exp()` is a static method of `Math`, you always use it as `Math.exp()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

Beware that `e` to the power of a number very close to 0 will be very close to 1 and suffer from loss of precision. In this case, you may want to use {{jsxref("Math.expm1")}} instead, and obtain a much higher-precision fractional part of the answer.

## Examples

### Using Math.exp()

```js
Math.exp(-Infinity); // 0
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
Math.exp(Infinity); // Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
