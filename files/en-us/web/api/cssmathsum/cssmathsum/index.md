---
title: "CSSMathSum: CSSMathSum() constructor"
short-title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CSSMathSum.CSSMathSum
---

{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSMathSum()`** constructor creates a new {{domxref("CSSMathSum")}} object that represents the result obtained by calling {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}.

## Syntax

```js-nolint
new CSSMathSum(values)
```

### Parameters

- `values`
  - : One or more numbers (which are wrapped into {{domxref("CSSUnitValue")}}s of `unit: "number"`) or {{domxref("CSSNumericValue")}} objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
