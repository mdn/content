---
title: Math.log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log10
---

{{JSRef}}

The **`Math.log10()`** static method returns the base 10 logarithm of a number. That is

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log_{10}(x) = \text{the unique } y \text{ such that } 10^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-log10.html")}}

## Syntax

```js-nolint
Math.log10(x)
```

### Parameters

- `x`
  - : A number greater than or equal to 0.

### Return value

The base 10 logarithm of `x`. If `x < 0`, returns {{jsxref("NaN")}}.

## Description

Because `log10()` is a static method of `Math`, you always use it as `Math.log10()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

This function is the equivalent of `Math.log(x) / Math.log(10)`. For `log10(e)`, use the constant {{jsxref("Math.LOG10E")}}, which is 1 / {{jsxref("Math.LN10")}}.

## Examples

### Using Math.log10()

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.log10` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
