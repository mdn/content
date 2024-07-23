---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.SQRT1_2
---

{{JSRef}}

The **`Math.SQRT1_2`** static data property represents the square root of 1/2, which is approximately 0.707.

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html", "shorter")}}

## Value

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟷_𝟸</mi><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT1_2} = \sqrt{\frac{1}{2}} \approx 0.707</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

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
