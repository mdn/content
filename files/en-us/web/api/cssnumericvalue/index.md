---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Interface
  - Reference
browser-compat: api.CSSNumericValue
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`CSSNumericValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model) represents operations that all numeric values can perform.

{{InheritanceDiagram}}

## Interfaces based on CSSNumericValue

Below is a list of interfaces based on the CSSNumericValue interface.

- {{domxref('CSSMathClamp')}}
- {{domxref('CSSMathInvert')}}
- {{domxref('CSSMathMax')}}
- {{domxref('CSSMathMin')}}
- {{domxref('CSSMathNegate')}}
- {{domxref('CSSMathProduct')}}
- {{domxref('CSSMathSum')}}
- {{domxref('CSSMathValue')}}
- {{domxref('CSSNumericArray')}}
- {{domxref('CSSUnitValue')}}

## Properties

None.

## Methods

### Instance methods

- {{domxref('CSSNumericValue.add')}} {{Experimental_Inline}}
  - : Adds a supplied number to the `CSSNumericValue`.
- {{domxref('CSSNumericValue.sub')}} {{Experimental_Inline}}
  - : Subtracts a supplied number from the `CSSNumericValue`.
- {{domxref('CSSNumericValue.mul')}} {{Experimental_Inline}}
  - : Multiplies the `CSSNumericValue` by the supplied value.
- {{domxref('CSSNumericValue.div')}} {{Experimental_Inline}}
  - : Divides the `CSSNumericValue` by the supplied value.
- {{domxref('CSSNumericValue.min')}} {{Experimental_Inline}}
  - : Returns the minimum value passed
- {{domxref('CSSNumericValue.max')}} {{Experimental_Inline}}
  - : Returns the maximum value passed
- {{domxref('CSSNumericValue.equals')}} {{Experimental_Inline}}
  - : _True_ if all the values are the exact same type and value, in the same order. Otherwise, _false._
- {{domxref('CSSNumericValue.to')}} {{Experimental_Inline}}
  - : Converts `value` into another one with the specified _unit._
- {{domxref('CSSNumericValue.toSum')}} {{Experimental_Inline}}
  - : Converts an existing `CSSNumericValue` into a {{domxref("CSSMathSum")}} object with values of a specified unit.
- {{domxref('CSSNumericValue.type')}} {{Experimental_Inline}}
  - : Returns the type of `CSSNumericValue`, one of `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint`, or `time`.

### Static methods

- {{domxref('CSSNumericValue.parse')}} {{Experimental_Inline}}
  - : Allows a `CSSNumericValue` to be constructed directly from a string containing CSS.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}
