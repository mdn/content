---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.SQRT2
---

{{JSRef}}

The **`Math.SQRT2`** static data property represents the square root of 2, approximately 1.414.

{{EmbedInteractiveExample("pages/js/math-sqrt2.html", "shorter")}}

## Value

<math display="block"><semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟸</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1.414</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Description

`Math.SQRT2` is a constant and a more performant equivalent to [`Math.sqrt(2)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt).

Because `SQRT2` is a static property of `Math`, you always use it as `Math.SQRT2`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.SQRT2

The following function returns the square root of 2:

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
