---
title: Math.sqrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/sqrt
page-type: javascript-static-method
browser-compat: javascript.builtins.Math.sqrt
---

{{JSRef}}

The **`Math.sqrt()`** static method returns the square root of a number. That is

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚜𝚚𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msqrt><mi>x</mi></msqrt><mo>=</mo><mtext>the unique&nbsp;</mtext><mi>y</mi><mo>≥</mo><mn>0</mn><mtext>&nbsp;such that&nbsp;</mtext><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \geq 0,\;\mathtt{\operatorname{Math.sqrt}(x)} = \sqrt{x} = \text{the unique } y \geq 0 \text{ such that } y^2 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt.html")}}

## Syntax

```js-nolint
Math.sqrt(x)
```

### Parameters

- `x`
  - : A number greater than or equal to 0.

### Return value

The square root of `x`, a nonnegative number. If `x < 0`, returns {{jsxref("NaN")}}.

## Description

Because `sqrt()` is a static method of `Math`, you always use it as `Math.sqrt()`, rather than as a method of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.sqrt()

```js
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
Math.sqrt(0); // 0
Math.sqrt(1); // 1
Math.sqrt(2); // 1.414213562373095
Math.sqrt(9); // 3
Math.sqrt(Infinity); // Infinity
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
