---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
page-type: web-api-interface
tags:
  - API
  - CSS Typed Object Model API
  - CSSStyleValue
  - Experimental
  - Houdini
  - Interface
  - Reference
browser-compat: api.CSSStyleValue
---
{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

The **`CSSStyleValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Object_Model#css_typed_object_model) is the base class of all CSS values accessible through the Typed OM API. An instance of this class may be used anywhere a string is expected.

## Interfaces based on CSSStyleValue

Below is a list of interfaces based on the `CSSStyleValue` interface.

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}

## Methods

- {{domxref("CSSStyleValue.parse()")}}
  - : Sets a specific CSS property to the specified values and returns the first value as a {{domxref('CSSStyleValue')}} object.
- {{domxref("CSSStyleValue.parseAll()")}}
  - : Sets all occurrences of a specific CSS property to the specified value and returns an array of {{domxref('CSSStyleValue')}} objects, each containing one of the supplied values.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
