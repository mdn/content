---
title: CSSMathClamp
slug: Web/API/CSSMathClamp
page-type: web-api-interface
browser-compat: api.CSSMathClamp
---

{{APIRef("CSS Typed Object Model API")}}

The **`CSSMathClamp`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model) represents the CSS {{CSSXref("clamp","clamp()")}} function. It inherits properties and methods from its parent {{domxref("CSSNumericValue")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CSSMathClamp.CSSMathClamp", "CSSMathClamp()")}} {{Experimental_Inline}}
  - : Creates a new `CSSMathClamp` object.

## Instance properties

- {{domxref("CSSMathClamp.lower")}}
  - : Returns a {{domxref("CSSNumericValue")}} object containing the minimum value.
- {{domxref("CSSMathClamp.value")}}
  - : Returns a {{domxref("CSSNumericValue")}} object containing the preferred value.
- {{domxref("CSSMathClamp.upper")}}
  - : Returns a {{domxref("CSSNumericValue")}} object containing the upper value.

## Static methods

_The interface also inherits methods from its parent interface, {{domxref("CSSMathValue")}}._

## Instance methods

_The interface also inherits methods from its parent interface, {{domxref("CSSMathValue")}}._

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSMathMax")}}
- {{domxref("CSSMathMin")}}
