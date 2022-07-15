---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.asinh
---
{{JSRef}}

The **`Math.asinh()`** function returns the hyperbolic arcsine
of a number, that is

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mo lspace="0em" rspace="thinmathspace">arsinh</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo>
<mo stretchy="false">(</mo>
<mi>y</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} =
\operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \;
\sinh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

## Syntax

```js
Math.asinh(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The hyperbolic arcsine of the given number.

## Description

Because `asinh()` is a static method of `Math`, you always use it
as `Math.asinh()`, rather than as a method of a `Math` object
you created (`Math` is not a constructor).

## Examples

### Using Math.asinh()

```js
Math.asinh(1);  // 0.881373587019543
Math.asinh(0);  // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.asinh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
