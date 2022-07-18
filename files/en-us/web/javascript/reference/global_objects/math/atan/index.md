---
title: Math.atan()
slug: Web/JavaScript/Reference/Global_Objects/Math/atan
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.atan
---
{{JSRef}}

The **`Math.atan()`** function returns the arctangent (in
radians) of a number, that is

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.atan</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">arctan</mo>
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
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">tan</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.atan}(x)} = \arctan(x) =
\text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \,
\text{such that} \; \tan(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-atan.html")}}

## Syntax

```js
Math.atan(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The arctangent (in radians) of the given number.

## Description

The `Math.atan()` method returns a numeric value between <math>
<semantics><mrow><mo>-</mo>
<mfrac><mi>π</mi>
<mn>2</mn>
</mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation>
</semantics></math> and <math>
<semantics><mfrac><mi>π</mi>
<mn>2</mn>
</mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation>
</semantics></math> radians.

Because `atan()` is a static method of `Math`, you always use it
as `Math.atan()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.atan()

```js
Math.atan(1);   // 0.7853981633974483
Math.atan(0);   // 0
Math.atan(-0);  // -0

Math.atan(Infinity);   //  1.5707963267948966
Math.atan(-Infinity);  // -1.5707963267948966

// The angle that the line [(0,0);(x,y)] forms with the x-axis in a Cartesian coordinate system
Math.atan(y / x);
```

Note that you may want to avoid using **±**`Infinity` for
stylistic reasons. In this case, {{jsxref("Math.atan2()")}} with `0` as the
second argument may be a better solution.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
