---
title: CSSStyleValue
slug: Web/API/CSSStyleValue
page-type: web-api-interface
browser-compat: api.CSSStyleValue
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`CSSStyleValue`** interface of the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API) is the base class of all CSS values accessible through the Typed OM API.
An instance of this class may be used anywhere a string is expected.

## Static methods

- [`CSSStyleValue.parse()`](/en-US/docs/Web/API/CSSStyleValue/parse_static)
  - : Sets a specific CSS property to the specified values and returns the first value as a `CSSStyleValue` object.
- [`CSSStyleValue.parseAll()`](/en-US/docs/Web/API/CSSStyleValue/parseAll_static)
  - : Sets all occurrences of a specific CSS property to the specified value and returns an array of `CSSStyleValue` objects, each containing one of the supplied values.

## Instance methods

- {{domxref("CSSStyleValue.toString()")}}
  - : A {{Glossary("stringifier")}} that returns the value formatted as a string of standard CSS text.

## Interfaces based on CSSStyleValue

- {{domxref('CSSImageValue')}}
- {{domxref('CSSKeywordValue')}}
- {{domxref('CSSNumericValue')}}
- {{domxref('CSSPositionValue')}}
- {{domxref('CSSTransformValue')}}
- {{domxref('CSSUnparsedValue')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
