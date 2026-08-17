---
title: "CSSMathMin: values property"
short-title: values
slug: Web/API/CSSMathMin/values
page-type: web-api-instance-property
browser-compat: api.CSSMathMin.values
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`values`** read-only property of the {{domxref("CSSMathMin")}} interface returns a {{domxref("CSSNumericArray")}} containing the {{domxref("CSSNumericValue")}} objects being compared to find the minimum.

## Value

A {{domxref('CSSNumericArray')}}.

## Examples

### Basic usage

The following code creates a `CSSMathMin` object and logs its `values` and length.

```js
const min = new CSSMathMin(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(min.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, 2: CSSUnitValue, length: 3}
console.log(min.values.length); // 3
```

We then iterate over the `values`, logging their type, value, unit, and stringified text.
Each of these matches the {{domxref("CSSNumericValue")}} objects that were passed into the constructor (or the operands of the CSS {{cssxref("min", "min()")}} function it represents), in the same order.

```js
for (const value of min.values) {
  console.log(
    `${value.constructor.name}: ${value.value} ${value.unit} (${value})`,
  );
}

// CSSUnitValue: 10 px (10px)
// CSSUnitValue: 5 em (5em)
// CSSUnitValue: 50 percent (50%)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
