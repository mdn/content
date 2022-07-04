---
title: Math.atanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/atanh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.atanh
---
{{JSRef}}

The **`Math.atanh()`** function returns the hyperbolic
arctangent of a number, that is

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>∊</mo>
<mrow><mo>(</mo>
<mrow><mo>-</mo>
<mn>1</mn>
<mo>,</mo>
<mn>1</mn>
</mrow><mo>)</mo>
</mrow><mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atanh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="thinmathspace">arctanh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tanh</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \in \left( -1, 1 \right),
\mathtt{\operatorname{Math.atanh}(x)} = \operatorname{arctanh}(x) = \text{ the
unique } \; y \; \text{such that} \; \tanh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atanh.html")}}

## Syntax

```js
Math.atanh(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The hyperbolic arctangent of the given number.

## Description

Because `atanh()` is a static method of `Math`, you always use it
as `Math.atanh()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.atanh()

```js
Math.atanh(-2);  // NaN
Math.atanh(-1);  // -Infinity
Math.atanh(0);   // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1);   // Infinity
Math.atanh(2);   // NaN
```

For values greater than 1 or less than -1, {{jsxref("NaN")}} is returned.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.atanh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
