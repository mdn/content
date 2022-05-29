---
title: CSSNumericValue.div()
slug: Web/API/CSSNumericValue/div
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - div()
browser-compat: api.CSSNumericValue.div
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`div()`** method of the
{{domxref("CSSNumericValue")}} interface divides the `CSSNumericValue` by the
supplied value.

## Syntax

```js
div(number)
```

### Parameters

- `number`
  - : Either a number or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathProduct')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

```js
let mathProduct = CSS.px("24").div(CSS.percent("4"));
// Prints "calc(24px / 4%)"
mathProduct.toString();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
