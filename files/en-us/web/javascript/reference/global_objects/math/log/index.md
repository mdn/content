---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.log
---

{{JSRef}}

The **`Math.log()`** static method returns the natural logarithm (base [e](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) of a number. That is

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;such that&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique } y \text{ such that } e^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("JavaScript Demo: Math.log()")}}

```js interactive-example
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// Expected output: 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// Expected output: 4
```

## Syntax

```js-nolint
Math.log(x)
```

### Parameters

- `x`
  - : A number greater than or equal to 0.

### Return value

The natural logarithm (base [e](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) of `x`. If `x` is ±0, returns [`-Infinity`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY). If `x < 0`, returns {{jsxref("NaN")}}.

## Description

Because `log()` is a static method of `Math`, you always use it as `Math.log()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

If you need the natural log of 2 or 10, use the constants {{jsxref("Math.LN2")}} or {{jsxref("Math.LN10")}}. If you need a logarithm to base 2 or 10, use {{jsxref("Math.log2()")}} or {{jsxref("Math.log10()")}}. If you need a logarithm to other bases, use `Math.log(x) / Math.log(otherBase)` as in the example below; you might want to precalculate `1 / Math.log(otherBase)` since multiplication in `Math.log(x) * constant` is much faster.

Beware that positive numbers very close to 1 can suffer from loss of precision and make its natural logarithm less accurate. In this case, you may want to use {{jsxref("Math.log1p")}} instead.

## Examples

### Using Math.log()

```js
Math.log(-1); // NaN
Math.log(-0); // -Infinity
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
Math.log(Infinity); // Infinity
```

### Using Math.log() with a different base

The following function returns the logarithm of `y` with base `x` (i.e. <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

If you run `getBaseLog(10, 1000)`, it returns `2.9999999999999996` due to floating-point rounding, but still very close to the actual answer of 3.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
