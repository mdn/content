---
title: CSSMathSum()
slug: Web/API/CSSMathSum/CSSMathSum
page-type: web-api-constructor
tags:
  - API
  - CSS Typed Object Model API
  - CSSMathSum
  - CSSUnparsedValue
  - Constructor
  - Experimental
  - Houdini
  - Reference
browser-compat: api.CSSMathSum.CSSMathSum
---
{{APIRef("CSS Typed Object Model API")}}{{SeeCompatTable}}

The **`CSSMathSum()`** constructor creates a
new {{domxref("CSSMathSum")}} object which creates a new {{domxref('CSSKeywordValue')}}
object which represents the result obtained by calling
{{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}},
or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}.

## Syntax

```js
new CSSMathSum(values)
```

### Parameters

- `values`
  - : One or more double integers or {{domxref('CSSNumericValue')}} objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
