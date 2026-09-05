---
title: CSS Object Model (CSSOM)
slug: Web/API/CSS_Object_Model
page-type: web-api-overview
spec-urls:
  - https://drafts.csswg.org/cssom/
  - https://drafts.csswg.org/cssom-view/
  - https://drafts.css-houdini.org/css-typed-om/
---

{{DefaultAPISidebar("CSSOM")}}

The **CSS Object Model** is a set of APIs and interfaces allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.

The values of CSS are represented untyped, that is using {{JSxRef("String")}} objects (except when using the [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)).

## Guides

- [CSS Declaration](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration)
- [CSS Declaration Block](/en-US/docs/Web/API/CSS_Object_Model/CSS_Declaration_Block)
- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
- [CSS value serialization](/en-US/docs/Web/API/CSS_Object_Model/CSS_value_serialization)

## Interfaces

These interfaces are defined in the CSSOM specification:

- {{DOMxRef("AnimationEvent")}}
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSSConditionRule")}}
- {{DOMxRef("CSSCounterStyleRule")}}
- {{DOMxRef("CSSFontFaceDescriptors")}}
- {{DOMxRef("CSSFontFaceRule")}}
- {{DOMxRef("CSSFontFeatureValuesMap")}}
- {{DOMxRef("CSSFontFeatureValuesRule")}}
- {{DOMxRef("CSSFunctionDeclarations")}}
- {{DOMxRef("CSSFunctionDescriptors")}}
- {{DOMxRef("CSSFunctionRule")}}
- {{DOMxRef("CSSGroupingRule")}}
- {{DOMxRef("CSSImportRule")}}
- {{DOMxRef("CSSKeyframeRule")}}
- {{DOMxRef("CSSKeyframesRule")}}
- {{DOMxRef("CSSMarginRule")}}
- {{DOMxRef("CSSMediaRule")}}
- {{DOMxRef("CSSNamespaceRule")}}
- {{DOMxRef("CSSPageRule")}}
- {{DOMxRef("CSSPositionTryRule")}}
- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSStartingStyleRule")}}
- {{DOMxRef("CSSStyleDeclaration")}}
- {{DOMxRef("CSSStyleSheet")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSSupportsRule")}}
- {{DOMXRef("CSSNestedDeclarations")}}
- {{DOMxRef("MediaList")}}
- {{DOMxRef("StyleSheet")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("TransitionEvent")}}

Several other interfaces are also extended by the CSSOM-related specifications: {{DOMxRef("Document")}}, {{DOMxRef("Window")}}, {{DOMxRef("Element")}}, {{DOMxRef("HTMLElement")}}, {{DOMxRef("HTMLImageElement")}}, {{DOMxRef("Range")}}, {{DOMxRef("MouseEvent")}}, and {{DOMxRef("SVGElement")}}.

### Obsolete CSSOM interfaces {{deprecated_inline}}

- {{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValueList")}} {{deprecated_inline}}

### CSSOM APIs

- [CSS Font Loading API](/en-US/docs/Web/API/CSS_Font_Loading_API)
  - : Provides mechanisms for dynamically loading font resources.

- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
  - : simplifies CSS property manipulation by exposing CSS values as typed JavaScript objects rather than strings.

- [CSSOM view API](/en-US/docs/Web/API/CSSOM_view_API)
  - : Enables manipulation of the visual view of a document, including getting the position of element layout boxes, obtaining the width or height of the viewport through script, and also scrolling an element.

## Specifications

{{Specifications}}

## Browser compatibility

All these features have been added little by little over the years to the different browsers: it was a quite complex process that can't be summarized in a simple table. Please refer to the specific interfaces for its availability.

## See also

- [Document Object Model (DOM)](/en-US/docs/Web/API/Document_Object_Model)
- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)
