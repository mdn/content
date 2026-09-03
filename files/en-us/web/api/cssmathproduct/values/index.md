---
title: "CSSMathProduct: values property"
short-title: values
slug: Web/API/CSSMathProduct/values
page-type: web-api-instance-property
browser-compat: api.CSSMathProduct.values
---

{{APIRef("CSS Typed Object Model API")}}{{AvailableInWorkers}}

The **`values`** read-only property of the {{domxref("CSSMathProduct")}} interface returns a {{domxref("CSSNumericArray")}} containing the {{domxref("CSSNumericValue")}} objects being multiplied together.

## Value

A {{domxref('CSSNumericArray')}}.

## Examples

### Basic usage

The following code creates a `CSSMathProduct` object and logs its `values` and length.

```js
const product = new CSSMathProduct(CSS.px(10), CSS.percent(50));

console.log(product.values);
// CSSNumericArray {0: CSSUnitValue, 1: CSSUnitValue, length: 2}
console.log(product.values.length); // 2
```

We then iterate over the `values`, logging their type, value, unit, and stringified text.
Each of these matches the {{domxref("CSSNumericValue")}} objects that were passed into the constructor (or the terms of the multiplication/division it represents), in the same order.

```js
for (const value of product.values) {
  console.log(
    `${value.constructor.name}: ${value.value} ${value.unit} (${value})`,
  );
}

// CSSUnitValue: 10 px (10px)
// CSSUnitValue: 50 percent (50%)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
