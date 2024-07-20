---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log2
---

{{JSRef}}

The **`Math.log2()`** static method returns the base 2 logarithm of a number. That is

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟸</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{the unique } y \text{ such that } 2^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Syntax

```js-nolint
Math.log2(x)
```

### Parameters

- `x`
  - : A number greater than or equal to 0.

### Return value

The base 2 logarithm of `x`. If `x < 0`, returns {{jsxref("NaN")}}.

## Description

Because `log2()` is a static method of `Math`, you always use it as `Math.log2()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

This function is the equivalent of `Math.log(x) / Math.log(2)`. For `log2(e)`, use the constant {{jsxref("Math.LOG2E")}}, which is 1 / {{jsxref("Math.LN2")}}.

## Examples

### Using Math.log2()

```js
Math.log2(-2); // NaN
Math.log2(-0); // -Infinity
Math.log2(0); // -Infinity
Math.log2(1); // 0
Math.log2(2); // 1
Math.log2(3); // 1.584962500721156
Math.log2(1024); // 10
Math.log2(Infinity); // Infinity
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.log2` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
