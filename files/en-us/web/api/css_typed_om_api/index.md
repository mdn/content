---
title: CSS Typed Object Model API
slug: Web/API/CSS_Typed_OM_API
page-type: web-api-overview
tags:
  - CSS Typed OM
  - CSS Typed Object Model API
  - Houdini
  - Reference
browser-compat:
  - api.CSSStyleValue
  - api.StylePropertyMap
  - api.CSSUnparsedValue
  - api.CSSKeywordValue
---
{{DefaultAPISidebar("CSS Typed Object Model API")}}

The CSS Typed Object Model API simplifies CSS property manipulation by exposing CSS values as typed JavaScript objects rather than strings. This not only simplifies CSS manipulation, but also lessens the negative impact on performance as compared to {{domxref('HTMLElement.style')}}.

Generally, CSS values can be read and written in JavaScript as strings, which can be slow and cumbersome. CSS Typed Object Model API provides interfaces to interact with underlying values, by representing them with specialized JS objects that can be manipulated and understood more easily and more reliably than string parsing and concatenation. This is easier for authors (for example, numeric values are reflected with actual JS numbers, and have unit-aware mathematical operations defined for them). It is also generally faster, as values can be directly manipulated and then cheaply translated back into underlying values without having to both build and parse strings of CSS.

CSS Typed OM both allows for the performant manipulation of values assigned to CSS properties while enabling maintainable code that is both more understandable and easier to write.

## Interfaces

### `CSSStyleValue`

The {{domxref('CSSStyleValue')}} interface of the CSS Typed Object Model API is the base class of all CSS values accessible through the Typed OM API. An instance of this class may be used anywhere a string is expected.

- {{domxref('CSSStyleValue.parse()', 'CSSStyleValue.parse(property, cssText)')}}
  - : The parse() method of the CSSStyleValue interface allows a CSSNumericValue to be constructed from a CSS string. It sets a specific CSS property to the specified values and returns the first value as a CSSStyleValue object.
- {{domxref('CSSStyleValue.parseAll()')}}
  - : The parseAll() method of the CSSStyleValue interface sets all occurrences of a specific CSS property to the specified value and returns an array of CSSStyleValue objects, each containing one of the supplied values.

### `StylePropertyMap`

The {{domxref('StylePropertyMap')}} interface of the CSS Typed Object Model API provides a representation of a CSS declaration block that is an alternative to CSSStyleDeclaration.

- {{domxref('StylePropertyMap.set()')}}
  - : Method of StylePropertyMap interface that changes the CSS declaration with the given property to the value given.
- {{domxref('StylePropertyMap.append()')}}
  - : Method that adds a new CSS declaration to the StylePropertyMap with the given property and value.
- {{domxref('StylePropertyMap.delete()')}}
  - : Method that removes the CSS declaration with the given property from the StylePropertyMap.
- {{domxref('StylePropertyMap.clear()')}}
  - : Method that removes all declarations in the StylePropertyMap.

### `CSSUnparsedValue`

The {{domxref('CSSUnparsedValue')}} interface of the CSS Typed Object Model API represents property values that reference custom properties. It consists of a list of string fragments and variable references.

- {{domxref("CSSUnparsedValue.CSSUnparsedValue", "CSSUnparsedValue()")}} constructor
  - : Creates a new CSSUnparsedValue object which represents property values that reference custom properties.
- {{domxref('CSSUnparsedValue.entries()')}}
  - : Method returning an array of a given object's own enumerable property \[key, value] pairs in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
- {{domxref('CSSUnparsedValue.forEach()')}}
  - : Method executing a provided function once for each element of the CSSUnparsedValue.
- {{domxref('CSSUnparsedValue.keys()')}}
  - : Method returning a new _array iterator_ object that contains the keys for each index in the array.

### `CSSKeywordValue` Serialization

The {{domxref('CSSKeywordValue')}} interface of the CSS Typed Object Model API creates an object to represent CSS keywords and other identifiers.

- {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}} constructor
  - : Constructor creates a new {{domxref("CSSKeywordValue.CSSKeywordValue", "CSSKeywordValue()")}} object which represents CSS keywords and other identifiers.
- {{domxref('CSSKeywordValue.value()')}}
  - : Property of the CSSKeywordValue interface returning or setting the value of the CSSKeywordValue.

## CSSStyleValue Interfaces

CSSStyleValue is the base class through which all CSS values are expressed. Subclasses include:

- {{domxref('CSSImageValue')}} objects
  - : An interface representing values for properties that take an image, for example [`background-image`](/en-US/docs/Web/CSS/background-image), [`list-style-image`](/en-US/docs/Web/CSS/list-style-image), or [`border-image-source`](/en-US/docs/Web/CSS/border-image-source).
- {{domxref('CSSKeywordValue')}}
  - : An interface which creates an object to represent CSS keywords and other identifiers. When used where a string is expected, it will return the value of CSSKeyword.value.
- {{domxref('CSSMathValue')}}

  - : A tree of subclasses representing numeric values that are more complicated than a single value and unit, including:

    - {{domxref('CSSMathInvert')}} - represents a CSS {{cssxref("calc","calc()")}} value used as `calc(1 / <value>)`.
    - {{domxref('CSSMathMax')}} - represents the CSS {{cssxref("max","max()")}} function.
    - {{domxref('CSSMathMin')}} - represents the CSS {{cssxref("min","min()")}} function.
    - {{domxref('CSSMathNegate')}} - negates the value passed into it.
    - {{domxref('CSSMathProduct')}} - represents the result obtained by calling {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}.
    - {{domxref('CSSMathSum')}} - represents the result obtained by calling {{domxref('CSSNumericValue.add','add()')}}, {{domxref('CSSNumericValue.sub','sub()')}}, or {{domxref('CSSNumericValue.toSum','toSum()')}} on {{domxref('CSSNumericValue')}}.

- {{domxref('CSSNumericValue')}}

  - : An interface representing operations that all numeric values can perform, including:

    - {{domxref('CSSNumericValue.add')}} - Adds supplied numbers to the `CSSNumericValue`.
    - {{domxref('CSSNumericValue.sub')}} - Subtracts supplied numbers to the `CSSNumericValue`.
    - {{domxref('CSSNumericValue.mul')}} - Multiplies supplied numbers to the `CSSNumericValue`.
    - {{domxref('CSSNumericValue.div')}} - Divides a supplied number by other numbers, throwing an error if 0.
    - {{domxref('CSSNumericValue.min')}} - Returns the minimum value passed
    - {{domxref('CSSNumericValue.max')}} - Returns the maximum value passed
    - {{domxref('CSSNumericValue.equals')}} - Returns true if all the values are the exact same type and value, in the same order. Otherwise, false
    - {{domxref('CSSNumericValue.to')}} - Converts `value` into another one with the specified _unit._
    - {{domxref('CSSNumericValue.toSum')}}
    - {{domxref('CSSNumericValue.type')}}
    - {{domxref('CSSNumericValue.parse')}} - Returns a number parsed from a CSS string

- {{domxref('CSSPositionValue')}}
  - : Represents values for properties that take a position, for example object-position.
- {{domxref('CSSTransformValue')}}
  - : An interface representing a list of [`transform`](/en-US/docs/Web/CSS/transform) list values. They "contain" one or more {{domxref('CSSTransformComponent')}}s, which represent individual `transform` function values.
- {{domxref('CSSUnitValue')}}
  - : An interface representing numeric values that can be represented as a single unit, or a named number and percentage.
- {{domxref('CSSUnparsedValue')}}
  - : Represents property values that reference [custom properties](/en-US/docs/Web/CSS/--*). It consists of a list of string fragments and variable references.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [Using the CSS Typed Object Model](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Houdini](/en-US/docs/Web/Guide/Houdini)
