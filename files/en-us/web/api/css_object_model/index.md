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

The **CSS Object Model** is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.

The values of CSS are represented untyped, that is using {{JSxRef("String")}} objects.

## Reference

- {{DOMxRef("AnimationEvent")}}
- {{DOMxRef("CaretPosition")}}
- {{DOMxRef("CSS")}}
- {{DOMxRef("CSSConditionRule")}}
- {{DOMxRef("CSSCounterStyleRule")}}
- {{DOMxRef("CSSFontFaceRule")}}
- {{DOMxRef("CSSFontFeatureValuesMap")}}
- {{DOMxRef("CSSFontFeatureValuesRule")}}
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
- {{DOMxRef("FontFace")}}
- {{DOMxRef("FontFaceSet")}}
- {{DOMxRef("FontFaceSetLoadEvent")}}
- {{DOMxRef("MediaList")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("StyleSheet")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("TransitionEvent")}}
- {{DOMxRef("VisualViewport")}}

Several other interfaces are also extended by the CSSOM-related specifications: {{DOMxRef("Document")}}, {{DOMxRef("Window")}}, {{DOMxRef("Element")}}, {{DOMxRef("HTMLElement")}}, {{DOMxRef("HTMLImageElement")}}, {{DOMxRef("Range")}}, {{DOMxRef("MouseEvent")}}, and {{DOMxRef("SVGElement")}}.

### CSS Typed Object Model

- {{DOMxRef("CSSImageValue")}}
- {{DOMxRef("CSSKeywordValue")}}
- {{DOMxRef("CSSMathInvert")}}
- {{DOMxRef("CSSMathMax")}}
- {{DOMxRef("CSSMathMin")}}
- {{DOMxRef("CSSMathNegate")}}
- {{DOMxRef("CSSMathProduct")}}
- {{DOMxRef("CSSMathSum")}}
- {{DOMxRef("CSSMathValue")}}
- {{DOMxRef("CSSMatrixComponent")}}
- {{DOMxRef("CSSNumericArray")}}
- {{DOMxRef("CSSNumericValue")}}
- {{DOMxRef("CSSPerspective")}}
- {{DOMxRef("CSSPositionValue")}}
- {{DOMxRef("CSSRotate")}}
- {{DOMxRef("CSSScale")}}
- {{DOMxRef("CSSSkew")}}
- {{DOMxRef("CSSSkewX")}}
- {{DOMxRef("CSSSkewY")}}
- {{DOMxRef("CSSStyleValue")}}
- {{DOMxRef("CSSTransformComponent")}}
- {{DOMxRef("CSSTransformValue")}}
- {{DOMxRef("CSSTranslate")}}
- {{DOMxRef("CSSUnitValue")}}
- {{DOMxRef("CSSUnparsedValue")}}
- {{DOMxRef("CSSVariableReferenceValue")}}
- {{DOMxRef("StylePropertyMap")}}
- {{DOMxRef("StylePropertyMapReadOnly")}}

### Obsolete CSSOM interfaces {{deprecated_inline}}

{{deprecated_header}}

- {{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValueList")}} {{deprecated_inline}}

## Tutorials

- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## Specifications

{{Specifications}}

## Browser compatibility

All these features have been added little by little over the years to the different browsers: it was a quite complex process that can't be summarized in a simple table. Please refer to the specific interfaces for its availability.

## See also

- [Document Object Model (DOM)](/en-US/docs/Web/API/Document_Object_Model)
- [Houdini APIs](/en-US/docs/Web/API/Houdini_APIs)
