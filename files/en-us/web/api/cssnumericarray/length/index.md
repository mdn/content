---
title: "CSSNumericArray: length property"
short-title: length
slug: Web/API/CSSNumericArray/length
page-type: web-api-instance-property
browser-compat: api.CSSNumericArray.length
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`length`** read-only property of the {{domxref("CSSNumericArray")}} interface returns the number of items in the object.

## Value

An integer.

## Examples

### Basic usage

In this example, we read the `length` of the {{domxref("CSSNumericArray")}} returned by the `values` property of a {{domxref("CSSMathSum")}}:

```js
const sum = new CSSMathSum(CSS.px(10), CSS.em(5), CSS.percent(50));

console.log(sum.values.length); // 3
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSNumericArray.entries()")}}
- {{domxref("CSSNumericArray.forEach()")}}
- {{domxref("CSSNumericArray.keys()")}}
- {{domxref("CSSNumericArray.values()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
