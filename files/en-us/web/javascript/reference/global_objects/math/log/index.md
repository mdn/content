---
title: Math.log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.log
---
{{JSRef}}

The **`Math.log()`** function returns the natural logarithm
(base {{jsxref("Math.E", "e")}}) of a number, that is

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>></mo>
<mn>0</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="0em">ln</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>the unique</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>e</mi>
<mi>y</mi>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log}(x)} =
\ln(x) = \text{the unique} \; y \; \text{such that} \; e^y = x</annotation></semantics></math>

The JavaScript **`Math.log()`** function is equivalent to
_ln(x)_ in mathematics.

{{EmbedInteractiveExample("pages/js/math-log.html")}}

## Syntax

```js
Math.log(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The natural logarithm (base {{jsxref("Math.E", "e")}}) of the given number. If the
number is negative, {{jsxref("NaN")}} is returned.

## Description

If the value of `x` is 0, the return value is always
{{jsxref("Number.NEGATIVE_INFINITY", "-Infinity")}}.

If the value of `x` is negative, the return value is always
{{jsxref("NaN")}}.

Because `log()` is a static method of `Math`, you always use it
as `Math.log()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

If you need the natural log of 2 or 10, use the constants {{jsxref("Math.LN2")}} or
{{jsxref("Math.LN10")}}. If you need a logarithm to base 2 or 10, use
{{jsxref("Math.log2()")}} or {{jsxref("Math.log10()")}}. If you need a logarithm to
other bases, use Math.log(x) / Math.log(otherBase) as in the example below; you might
want to precalculate 1 / Math.log(otherBase).

Beware that positive numbers very close to 1 can suffer from loss of precision and make its natural logarithm less accurate. In this case, you may want to use {{jsxref("Math.log1p")}} instead.

## Examples

### Using Math.log()

```js
Math.log(-1); // NaN, out of range
Math.log(0);  // -Infinity
Math.log(1);  // 0
Math.log(10); // 2.302585092994046
```

### Using Math.log() with a different base

The following function returns the logarithm of `y` with base
`x` (i.e. <math><semantics><mrow><msub><mo>log</mo>
<mi>x</mi>
</msub><mi>y</mi>
</mrow><annotation encoding="TeX">\log_x y</annotation>
</semantics></math>):

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

If you run `getBaseLog(10, 1000)` it returns `2.9999999999999996`
due to floating-point rounding, which is very close to the actual answer of 3.

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
