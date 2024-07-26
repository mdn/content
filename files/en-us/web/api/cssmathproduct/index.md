---
title: CSSMathProduct
slug: Web/API/CSSMathProduct
page-type: web-api-interface
browser-compat: api.CSSMathProduct
---

{{APIRef("CSS Typed Object Model API")}}

The **`CSSMathProduct`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the result obtained by calling {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}. It inherits properties and methods from its parent {{domxref('CSSNumericValue')}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathProduct.CSSMathProduct", "CSSMathProduct()")}} {{Experimental_Inline}}
  - : Creates a new `CSSMathProduct` object.

## Instance properties

- {{domxref('CSSMathProduct.values')}}
  - : Returns a {{domxref('CSSNumericArray')}} object which contains one or more {{domxref('CSSNumericValue')}} objects.

## Static methods

_The interface may also inherit methods from its parent interface, {{domxref("CSSMathValue")}}._

## Instance methods

_The interface may also inherit methods from its parent interface, {{domxref("CSSMathValue")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
