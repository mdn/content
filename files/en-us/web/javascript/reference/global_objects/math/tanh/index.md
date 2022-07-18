---
title: Math.tanh()
slug: Web/JavaScript/Reference/Global_Objects/Math/tanh
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.tanh
---
{{JSRef}}

The **`Math.tanh()`** function returns the hyperbolic tangent
of a number, that is

<math display="block"><semantics><mrow><mo lspace="0em" rspace="0em">tanh</mo>
<mi>x</mi>
<mo>=</mo>
<mfrac><mrow><mo lspace="0em" rspace="0em">sinh</mo>
<mi>x</mi>
</mrow><mrow><mo lspace="0em" rspace="0em">cosh</mo>
<mi>x</mi>
</mrow></mfrac><mo>=</mo>
<mfrac><mrow><msup><mi>e</mi>
<mi>x</mi>
</msup><mo>-</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>x</mi>
</mrow></msup></mrow><mrow><msup><mi>e</mi>
<mi>x</mi>
</msup><mo>+</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>x</mi>
</mrow></msup></mrow></mfrac><mo>=</mo>
<mfrac><mrow><msup><mi>e</mi>
<mrow><mn>2</mn>
<mi>x</mi>
</mrow></msup><mo>-</mo>
<mn>1</mn>
</mrow><mrow><msup><mi>e</mi>
<mrow><mn>2</mn>
<mi>x</mi>
</mrow></msup><mo>+</mo>
<mn>1</mn>
</mrow></mfrac></mrow><annotation encoding="TeX">\tanh x = \frac{\sinh x}{\cosh x} = \frac {e^x - e^{-x}}
{e^x + e^{-x}} = \frac{e^{2x} - 1}{e^{2x}+1}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-tanh.html")}}

## Syntax

```js
Math.tanh(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The hyperbolic tangent of the given number.

## Description

Because `tanh()` is a static method of `Math`, you always use it
as `Math.tanh()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.tanh()

```js
Math.tanh(0);        // 0
Math.tanh(Infinity); // 1
Math.tanh(1);        // 0.7615941559557649
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.tanh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
