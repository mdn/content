---
title: Math.log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
tags:
  - ECMAScript 2015
  - JavaScript
  - Math
  - Method
  - Reference
  - Polyfill
browser-compat: javascript.builtins.Math.log2
---
{{JSRef}}

The **`Math.log2()`** function returns the base 2 logarithm of
a number, that is

<math display="block"><semantics><mrow><mo>∀</mo>
<mi>x</mi>
<mo>></mo>
<mn>0</mn>
<mo>,</mo>
<mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.log2</mo>
<mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
</mrow></mstyle><mo>=</mo>
<msub><mo lspace="0em" rspace="0em">log</mo>
<mn>2</mn>
</msub><mo stretchy="false">(</mo>
<mi>x</mi>
<mo stretchy="false">)</mo>
<mo>=</mo>
<mtext>the unique</mtext>
<mspace width="thickmathspace"></mspace><mi>y</mi>
<mspace width="thickmathspace"></mspace><mtext>such that</mtext>
<mspace width="thickmathspace"></mspace><msup><mn>2</mn>
<mi>y</mi>
</msup><mo>=</mo>
<mi>x</mi>
</mrow><annotation encoding="TeX">\forall x > 0, \mathtt{\operatorname{Math.log2}(x)} =
\log_2(x) = \text{the unique} \; y \; \text{such that} \; 2^y = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2.html")}}

## Syntax

```js
Math.log2(x)
```

### Parameters

- `x`
  - : A number.

### Return value

The base 2 logarithm of the given number. If the number is negative, {{jsxref("NaN")}}
is returned.

## Description

If the value of `x` is less than 0, the return value is always
{{jsxref("NaN")}}.

Because `log2()` is a static method of `Math`, you always use it
as `Math.log2()`, rather than as a method of a `Math` object you
created (`Math` is not a constructor).

This function is the equivalent of Math.log(x) / Math.log(2). For log2(e) use the
constant {{jsxref("Math.LOG2E")}} which is 1 / {{jsxref("Math.LN2")}}.

## Examples

### Using Math.log2()

```js
Math.log2(3);    // 1.584962500721156
Math.log2(2);    // 1
Math.log2(1);    // 0
Math.log2(0);    // -Infinity
Math.log2(-2);   // NaN
Math.log2(1024); // 10
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `Math.log2` in `core-js`](https://github.com/zloirock/core-js#ecmascript-math)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.pow()")}}
