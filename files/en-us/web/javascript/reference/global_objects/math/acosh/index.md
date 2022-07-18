---
title: Math.acosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/acosh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.acosh
---
{{JSRef}}

The **`Math.acosh()`** function returns the hyperbolic
arc-cosine of a number, that is

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>≥</mo>
<mn>1</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.acosh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="thinmathspace">arcosh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>≥</mo>
<mn>0</mn>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">cosh</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \geq 1, \mathtt{\operatorname{Math.acosh}(x)} =
\operatorname{arcosh}(x) = \text{ the unique } \; y \geq 0 \; \text{such that} \;
\cosh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-acosh.html")}}

## Syntax

```js
Math.acosh(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The hyperbolic arc-cosine of the given number. If the number is less than
**1**, {{jsxref("NaN")}}.

## Description

Because `acosh()` is a static method of `Math`, you always use it
as `Math.acosh()`, rather than as a method of a `Math` object you
created (`Math` is no constructor).

## Examples

### Using Math.acosh()

```js
Math.acosh(-1);  // NaN
Math.acosh(0);   // NaN
Math.acosh(0.5); // NaN
Math.acosh(1);   // 0
Math.acosh(2);   // 1.3169578969248166
```

For values less than 1 `Math.acosh()` returns {{jsxref("NaN")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.acosh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
