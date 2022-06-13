---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
browser-compat: javascript.builtins.Math.E
---
{{JSRef}}

The **`Math.E`** property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2.718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2.718</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-e.html")}}{{js_property_attributes(0, 0, 0)}}

## Description

Because `E` is a static property of `Math`, you always use it as `Math.E`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.E

The following function returns e:

```js
function getNapier() {
  return Math.E;
}

getNapier(); // 2.718281828459045
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
