---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
tags:
  - JavaScript
  - Math
  - Method
  - Reference
browser-compat: javascript.builtins.Math.sqrt
---
{{JSRef}}

The **`Math.sqrt()`** function returns the square root of a
number, that is

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>≥</mo>
<mn>0</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mi>M</mi>
<mi>a</mi>
<mi>t</mi>
<mi>h</mi>
<mo>.</mo>
<mi>s</mi>
<mi>q</mi>
<mi>r</mi>
<mi>t</mi>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<msqrt><mi>x</mi>
</msqrt><mo>=</mo>
<mtext>the unique</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mo>≥</mo>
<mn>0</mn>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>y</mi>
<mn>2</mn>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x \geq 0, \mathtt{Math.sqrt(x)} = \sqrt{x} =
\text{the unique} \; y \geq 0 \; \text{such that} \; y^2 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt.html")}}

## Syntax

```js
Math.sqrt(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The square root of the given number. If the number is negative, {{jsxref("NaN")}} is
returned.

## Description

If the value of `x` is negative, `Math.sqrt()` returns
{{jsxref("NaN")}}.

Because `sqrt()` is a static method of `Math`, you always use it
as `Math.sqrt()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.sqrt()

```js
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.cbrt()")}}
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.pow()")}}
