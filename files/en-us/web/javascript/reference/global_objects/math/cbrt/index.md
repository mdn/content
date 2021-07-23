---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
tags:
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.cbrt
---
{{JSRef}}

The **`Math.cbrt()`** function returns the cube root of a
number, that is

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi>
<mi>a</mi>
<mi>t</mi>
<mi>h</mi>
<mo>.</mo>
<mi>c</mi>
<mi>b</mi>
<mi>r</mi>
<mi>t</mi>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<mroot><mi>x</mi>
<mn>3</mn>
</mroot><mo>=</mo>
<mtext>the unique</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><msup><mi>y</mi>
<mn>3</mn>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique}
\; y \; \text{such that} \; y^3 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}

## Syntax

```js
Math.cbrt(x)
```

### Parameters

- _x_
  - : A number.

### Return value

The cube root of the given number.

## Description

Because `cbrt()` is a static method of `Math`, you always use it
as `Math.cbrt()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

## Polyfill

For all <math><semantics><mrow><mi>x</mi>
<mo>≥</mo>
<mn>0</mn>
</mrow><annotation encoding="TeX">x \geq 0</annotation>
</semantics></math>, have <math><semantics><mrow><mroot><mi>x</mi>
<mn>3</mn>
</mroot><mo>=</mo>
<msup><mi>x</mi>
<mrow><mn>1</mn>
<mo>/</mo>
<mn>3</mn>
</mrow></msup></mrow><annotation encoding="TeX">\sqrt[3]{x} = x^{1/3}</annotation>
</semantics></math> so this can be emulated by the following function:

```js
if (!Math.cbrt) {
  Math.cbrt = (function(pow) {
    return function cbrt(x){
      // ensure negative numbers remain negative:
      return x < 0 ? -pow(-x, 1/3) : pow(x, 1/3);
    };
  })(Math.pow); // localize Math.pow to increase efficiency
}
```

## Examples

### Using Math.cbrt()

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2);  // 1.2599210498948732
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- A polyfill of `Math.cbrt` is available in [`core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
