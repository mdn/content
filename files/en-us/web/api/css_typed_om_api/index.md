---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
page-type: web-api-overview
browser-compat:
  - api.CSSStyleValue
  - api.StylePropertyMap
  - api.CSSUnparsedValue
  - api.CSSKeywordValue
---

{{DefaultAPISidebar("CSS Typed Object Model API")}}

The CSS Typed Object Model API simplifies CSS property manipulation by exposing CSS values as typed JavaScript objects rather than strings. This not only simplifies CSS manipulation, but also lessens the negative impact on performance as compared to {{domxref('HTMLElement.style')}}.

## Concepts and usage

Generally, CSS values can be read and written in JavaScript as strings, which can be slow and cumbersome. CSS Typed Object Model API provides interfaces to interact with underlying values, by representing them with specialized JS objects that can be manipulated and understood more easily and more reliably than string parsing and concatenation. This is easier for authors (for example, numeric values are reflected with actual JS numbers, and have unit-aware mathematical operations defined for them). It is also generally faster, as values can be directly manipulated and then cheaply translated back into underlying values without having to both build and parse strings of CSS.

CSS Typed OM both allows for the performant manipulation of values assigned to CSS properties while enabling maintainable code that is both more understandable and easier to write.

## Guides

- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
  - : An introduction to the main features of the typed object model.

## Interfaces

- {{domxref('CSSImageValue')}}
  - : Represents values for properties that take an image, such as {{cssxref("background-image")}}, {{cssxref("list-style-image")}}, or {{cssxref("border-image-source")}}.
- {{domxref('CSSKeywordValue')}}
  - : Represent the value of a CSS keyword or other identifier, such as `initial`, or `auto`.
    When used where a string is expected, it will return the value of `CSSKeyword.value`.
- {{domxref('CSSMathClamp')}}
  - : Represents the CSS {{cssxref("clamp","clamp()")}} function.
- {{domxref('CSSMathInvert')}}
  - : represents a CSS {{cssxref("calc","calc()")}} value used as `calc(1 / <value>)`. This type is used internally by {{domxref('CSSNumericValue.div','div()')}}, to create an appropriate {{domxref('CSSMathProduct')}}.
- {{domxref('CSSMathMax')}}
  - : represents the CSS {{cssxref("max","max()")}} function.
- {{domxref('CSSMathMin')}}
  - : represents the CSS {{cssxref("min","min()")}} function.
- {{domxref('CSSMathNegate')}}
  - : negates the value passed into it.
- {{domxref('CSSMathProduct')}}
  - : represents the result obtained by calling {{domxref('CSSNumericValue.mul','mul()')}} or {{domxref('CSSNumericValue.div','div()')}} on {{domxref('CSSNumericValue')}}.
- {{domxref('CSSMathSum')}}
  - : represents the result obtained by calling {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}.
- {{domxref('CSSMathValue')}}
  - : The base class for numeric values that are more complicated than a single value and unit, such as `CSSMathMax` and `CSSMathSum`
- {{domxref('CSSMatrixComponent')}}
  - : TBD
- {{domxref('CSSNumericArray')}}
  - : TBD
- {{domxref('CSSNumericValue')}}
  - : An interface representing operations that all numeric values can perform, such as addition, multiplication, and so on.
- {{domxref('CSSPerspective')}}
  - : TBD
- {{domxref('CSSPositionValue')}}
  - : Represents values for properties that take a position, for example object-position.
- {{domxref('CSSRotate')}}
  - : TBD
- {{domxref('CSSScale')}}
  - : TBD
- {{domxref('CSSSkew')}}
  - : TBD
- {{domxref('CSSSkewX')}}
  - : TBD
- {{domxref('CSSSkewY')}}
  - : TBD
- {{domxref('CSSStyleValue')}}
  - : Base class of all CSS values accessible through the Typed OM API.
    An instance of this class may be used anywhere a string is expected.
- {{domxref('CSSTransformComponent')}}
  - : TBD
- {{domxref('CSSTransformValue')}}
  - : An interface representing a list of {{cssxref("transform")}} list values. They "contain" one or more {{domxref('CSSTransformComponent')}}s, which represent individual `transform` function values.
- {{domxref('CSSTranslate')}}
  - : TBD
- {{domxref('CSSUnitValue')}}
  - : An interface representing numeric values that can be represented as a single unit, or a named number and percentage.
- {{domxref('CSSUnparsedValue')}}
  - : Represents property values that reference [custom properties](/en-US/docs/Web/CSS/Reference/Properties/--*). It consists of a list of string fragments and variable references. Represents property values that reference custom properties. It consists of a list of string fragments and variable references.
- {{domxref('CSSVariableReferenceValue')}}
  - : TBD
- {{domxref('StylePropertyMap')}}
  - : The {{domxref('StylePropertyMap')}} interface of the CSS Typed Object Model API provides a representation of a CSS declaration block that is an alternative to `CSSStyleDeclaration`.
- {{domxref('StylePropertyMapReadOnly')}}
  - : TBD

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/en-US/docs/Web/API/Houdini_APIs)
