---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.hypot
---
{{JSRef}}

The **`Math.hypot()`** function returns the square root of the
sum of squares of its arguments, that is:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo>
<mo stretchy="false">(</mo>
<msub><mi>v</mi>
<mn>1</mn>
</msub><mo>,</mo>
<msub><mi>v</mi>
<mn>2</mn>
</msub><mo>,</mo>
<mo>…</mo>
<mo>,</mo>
<msub><mi>v</mi>
<mi>n</mi>
</msub><mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<msqrt><mrow><munderover><mo>∑</mo>
<mrow><mi>i</mi>
<mo>=</mo>
<mn>1</mn>
</mrow><mi>n</mi>
</munderover><msubsup><mi>v</mi>
<mi>i</mi>
<mn>2</mn>
</msubsup></mrow></msqrt><mo>=</mo>
<msqrt><mrow><msubsup><mi>v</mi>
<mn>1</mn>
<mn>2</mn>
</msubsup><mo>+</mo>
<msubsup><mi>v</mi>
<mn>2</mn>
<mn>2</mn>
</msubsup><mo>+</mo>
<mo>…</mo>
<mo>+</mo>
<msubsup><mi>v</mi>
<mi>n</mi>
<mn>2</mn>
</msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v*1, v_2, \dots, v_n)}
= \sqrt{\sum*{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## Syntax

```js
Math.hypot()
Math.hypot(value0)
Math.hypot(value0, value1)
Math.hypot(value0, value1, /* … ,*/ valueN)
```

### Parameters

- `value1`, …, `valueN`
  - : Numbers.

### Return value

The square root of the sum of squares of the given arguments. If at least one of the
arguments cannot be converted to a number, {{jsxref("NaN")}} is returned.

## Description

Calculating the hypotenuse of a right triangle, or the magnitude of a complex number,
uses the formula `Math.sqrt(v1*v1 + v2*v2)`, where v1 and v2 are the lengths
of the triangle's legs, or the complex number's real and complex components. The
corresponding distance in 2 or more dimensions can be calculated by adding more squares
under the square root: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

This function makes this calculation easier and faster; you call
`Math.hypot(v1, v2)` , or `Math.hypot(v1, /* … ,*/, vN)`.

`Math.hypot` also avoids overflow/underflow problems if the magnitude of
your numbers is very large. The largest number you can represent in JS is
`Number.MAX_VALUE`, which is around 10^308. If your numbers are
larger than about 10^154, taking the square of them will result in Infinity.
For example, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. If you use
`hypot()` instead, you get better answer:
`Math.hypot(1e200, 1e200) = 1.4142...e+200` . This is also true with very
small numbers. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, but
`Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

Because `hypot()` is a static method of `Math`, you always use it
as `Math.hypot()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

If no arguments are given, the result is +0. If any of the arguments is ±Infinity, the
result is Infinity. If any of the arguments is NaN (unless another argument is
±Infinity), the result is NaN. If at least one of the arguments cannot be converted to a
number, the result is {{jsxref("NaN")}}.

With one argument, `Math.hypot()` is equivalent to `Math.abs()`.

## Examples

### Using Math.hypot()

```js
Math.hypot(3, 4);          // 5
Math.hypot(3, 4, 5);       // 7.0710678118654755
Math.hypot();              // 0
Math.hypot(NaN);           // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, 'foo');   // NaN, since +'foo' => NaN
Math.hypot(3, 4, '5');     // 7.0710678118654755, +'5' => 5
Math.hypot(-3);            // 3, the same as Math.abs(-3)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.hypot` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
