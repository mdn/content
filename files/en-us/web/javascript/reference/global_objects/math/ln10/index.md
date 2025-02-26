---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Math.LN10
---

{{JSRef}}

The **`Math.LN10`** static data property represents the natural logarithm of 10, approximately 2.303.

{{InteractiveExample("JavaScript Demo: Math.LN10", "shorter")}}

```js interactive-example
function getNatLog10() {
  return Math.LN10;
}

console.log(getNatLog10());
// Expected output: 2.302585092994046
```

## Value

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟷𝟶</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.303</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN10} = \ln(10) \approx 2.303</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

Because `LN10` is a static property of `Math`, you always use it as `Math.LN10`, rather than as a property of a `Math` object you created (`Math` is not a constructor).

## Examples

### Using Math.LN10

The following function returns the natural log of 10:

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
