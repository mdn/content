---
title: "CSSMathProduct: CSSMathProduct() constructor"
short-title: CSSMathProduct()
slug: Web/API/CSSMathProduct/CSSMathProduct
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CSSMathProduct.CSSMathProduct
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}{{SeeCompatTable}}

The **`CSSMathProduct()`** constructor creates a {{domxref("CSSMathProduct")}} object that multiplies the arguments passed into it.

## Syntax

```js-nolint
new CSSMathProduct(arg1)
new CSSMathProduct(arg1, arg2)
new CSSMathProduct(arg1, arg2, /* …, */ argN)
```

### Parameters

- `arg1`, …, `argN`
  - : A list of numbers or {{domxref("CSSNumericValue")}} objects.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if no arguments are passed.
- {{jsxref("TypeError")}}
  - : Thrown if `arg1`, …, `argN` have incompatible types, so they cannot be multiplied.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
