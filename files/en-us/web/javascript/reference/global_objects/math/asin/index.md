---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.asin
---
{{JSRef}}

The **`Math.asin()`** function returns the arcsine (in radians)
of a number, that is

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>∊</mo>
<mo stretchy="false">[</mo>
<mrow><mo>-</mo>
<mn>1</mn>
</mrow><mo>;</mo>
<mn>1</mn>
<mo stretchy="false">]</mo>
<mo>,</mo>
<mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">arcsin</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>∊</mo>
<mrow><mo>[</mo>
<mrow><mo>-</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac><mo>;</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac></mrow><mo>]</mo>
</mrow><mspace width="thinmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \in
[{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique }
\; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y)
= x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asin.html")}}

## Syntax

```js
Math.asin(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The arcsine (in radians) of the given number if it's between **-1** and
**1**; otherwise, {{jsxref("NaN")}}.

## Description

The `Math.asin()` method returns a numeric value between <math><semantics><mrow><mo>-</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation>
</semantics></math> and <math><semantics><mfrac><mi>π</mi>
<mn>2</mn>
</mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation>
</semantics></math> radians for _x_ between -1 and 1. If the value of _x_ is
outside this range, it returns {{jsxref("NaN")}}.

Because `asin()` is a static method of `Math`, you always use it
as `Math.asin()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.asin()

```js
Math.asin(-2);  // NaN
Math.asin(-1);  // -1.5707963267948966 (-pi/2)
Math.asin(0);   // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1);   // 1.5707963267948966 (pi/2)
Math.asin(2);   // NaN
```

For values less than -1 or greater than 1, `Math.asin()` returns
{{jsxref("NaN")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
