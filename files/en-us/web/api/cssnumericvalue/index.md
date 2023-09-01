---
title: CSSNumericValue
slug: Web/API/CSSNumericValue
page-type: web-api-interface
browser-compat: api.CSSNumericValue
---

{{APIRef("CSS Typed OM")}}

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

## Instance properties

None.

## Static methods

- {{domxref('CSSNumericValue/parse_static', 'CSSNumericValue.parse')}}
  - : Allows a `CSSNumericValue` to be constructed directly from a string containing CSS.

## Instance methods

- {{domxref('CSSNumericValue.add')}}
  - : Adds a supplied number to the `CSSNumericValue`.
- {{domxref('CSSNumericValue.sub')}}
  - : Subtracts a supplied number from the `CSSNumericValue`.
- {{domxref('CSSNumericValue.mul')}}
  - : Multiplies the `CSSNumericValue` by the supplied value.
- {{domxref('CSSNumericValue.div')}}
  - : Divides the `CSSNumericValue` by the supplied value.
- {{domxref('CSSNumericValue.min')}}
  - : Returns the minimum value passed
- {{domxref('CSSNumericValue.max')}}
  - : Returns the maximum value passed
- {{domxref('CSSNumericValue.equals')}}
  - : _True_ if all the values are the exact same type and value, in the same order. Otherwise, _false._
- {{domxref('CSSNumericValue.to')}}
  - : Converts `value` into another one with the specified _unit._
- {{domxref('CSSNumericValue.toSum')}}
  - : Converts an existing `CSSNumericValue` into a {{domxref("CSSMathSum")}} object with values of a specified unit.
- {{domxref('CSSNumericValue.type')}}
  - : Returns the type of `CSSNumericValue`, one of `angle`, `flex`, `frequency`, `length`, `resolution`, `percent`, `percentHint`, or `time`.

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
