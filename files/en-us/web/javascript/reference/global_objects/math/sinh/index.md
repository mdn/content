---
title: Math.sinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/sinh
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.sinh
---
{{JSRef}}

The **`Math.sinh()`** function returns the hyperbolic sine of a
number, that can be expressed using the {{jsxref("Math.E", "constant e", "", 1)}}:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="thinmathspace">Math.sinh(x)</mo>
</mstyle><mo>=</mo>
<mfrac><mrow><msup><mi>e</mi>
<mi>x</mi>
</msup><mo>-</mo>
<msup><mi>e</mi>
<mrow><mo>-</mo>
<mi>x</mi>
</mrow></msup></mrow><mn>2</mn>
</mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.sinh(x)}} = \frac{e^x -
e^{-x}}{2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sinh.html")}}

## Syntax

```js
Math.sinh(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The hyperbolic sine of the given number.

## Description

Because `sinh()` is a static method of `Math`, you always use it
as `Math.sinh()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Examples

### Using Math.sinh()

```js
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.sinh` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.asinh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.tanh()")}}
