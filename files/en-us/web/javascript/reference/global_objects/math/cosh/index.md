---
title: Math.cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.cosh
---
{{JSRef}}

The **`Math.cosh()`** function returns the hyperbolic cosine of
a number, that can be expressed using the {{jsxref("Math.E", "constant e", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.cosh(x)</mo>
</mstyle><mo>=</mo>
<mfrac><mrow><msup><mi>e</mi>
<mi>x</mi>
</msup><mo>+</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>x</mi>
</mrow></msup></mrow><mn>2</mn>
</mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh(x)}} = \frac{e^x +
e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cosh.html")}}

## Syntax

```js
Math.cosh(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The hyperbolic cosine of the given number.

## Description

Because `cosh()` is a static method of `Math`, you always use it
as `Math.cosh()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.cosh()

```js
Math.cosh(0);  // 1
Math.cosh(1);  // 1.5430806348152437
Math.cosh(-1); // 1.5430806348152437
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.cosh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
