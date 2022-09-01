---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.SQRT1_2
---
{{JSRef}}

The **`Math.SQRT1_2`** property represents the square root of 1/2 which is approximately 0.707:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0.707</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html", "shorter")}}{{js_property_attributes(0, 0, 0)}}

## Description

`Math.SQRT1_2` is a constant and a more performant equivalent to [`Math.sqrt(0.5)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

Because `SQRT1_2` is a static property of `Math`, you always use it as `Math.SQRT1_2`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.SQRT1_2

The following function returns 1 over the square root of 2:

```js
function getRoot1_2() {
  return Math.SQRT1_2;
}

getRoot1_2(); // 0.7071067811865476
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
