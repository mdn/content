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

## Polyfill

`Math.asinh` can be emulated with the following function:

```js
if (!Math.asinh) Math.asinh = function(x) {
    var absX = Math.abs(x), w
    if (absX < 3.725290298461914e-9) // |x| < 2^-28
        return x
    if (absX > 268435456) // |x| > 2^28
        w = Math.log(absX) + Math.LN2
    else if (absX > 2) // 2^28 >= |x| > 2
        w = Math.log(2 * absX + 1 / (Math.sqrt(x * x + 1) + absX))
    else
        var t = x * x, w = Math.log1p(absX + t / (1 + Math.sqrt(1 + t)))

    return x > 0 ? w : -w
}
```

`Math.log1p` may also have to be polyfilled; see [Math.log1p](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p)
for details.

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
