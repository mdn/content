---
title: "CSSMathSum: CSSMathSum() constructor"
short-title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CSSMathSum.CSSMathSum
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}{{SeeCompatTable}}

The **`CSSMathSum()`** constructor creates a new {{domxref("CSSMathSum")}} object that represents the result obtained by calling {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}.

## Syntax

```js-nolint
new CSSMathSum(arg1)
new CSSMathSum(arg1, arg2)
new CSSMathSum(arg1, arg2, /* …, */ argN)
```

### Parameters

- `arg1`, …, `argN`
  - : One or more numbers (which are wrapped into {{domxref("CSSUnitValue")}}s of `unit: "number"`) or {{domxref("CSSNumericValue")}} objects.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if no arguments are passed.
- {{jsxref("TypeError")}}
  - : Thrown if `arg1`, …, `argN` have incompatible types, so they cannot be summed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
