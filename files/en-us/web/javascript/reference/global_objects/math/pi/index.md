---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.PI
---

{{JSRef}}

The **`Math.PI`** static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.

{{EmbedInteractiveExample("pages/js/math-pi.html")}}

## Value

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙿𝙸</mi><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{Math.PI} = \pi \approx 3.14159</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

Because `PI` is a static property of `Math`, you always use it as `Math.PI`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.PI

The following function uses `Math.PI` to calculate the circumference of a circle with a passed radius.

```js
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1); // 6.283185307179586
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math")}}
