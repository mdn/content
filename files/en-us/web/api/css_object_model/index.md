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
- {{DOMxRef("CSSCharsetRule")}}
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
- {{DOMxRef("CSSRule")}}
- {{DOMxRef("CSSRuleList")}}
- {{DOMxRef("CSSStyleDeclaration")}}
- {{DOMxRef("CSSStyleSheet")}}
- {{DOMxRef("CSSStyleRule")}}
- {{DOMxRef("CSSSupportsRule")}}
- {{DOMxRef("CSSVariablesMap")}}
- {{DOMxRef("CSSViewportRule")}}
- {{DOMxRef("FontFace")}}
- {{DOMxRef("FontFaceSet")}}
- {{DOMxRef("FontFaceSetLoadEvent")}}
- {{DOMxRef("GetStyleUtils")}}
- {{DOMxRef("MediaList")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("StyleSheet")}}
- {{DOMxRef("StyleSheetList")}}
- {{DOMxRef("TransitionEvent")}}

Several other interfaces are also extended by the CSSOM-related specifications: {{DOMxRef("Document")}}, {{DOMxRef("Window")}}, {{DOMxRef("Element")}}, {{DOMxRef("HTMLElement")}}, {{DOMxRef("HTMLImageElement")}}, {{DOMxRef("Range")}}, {{DOMxRef("MouseEvent")}}, and {{DOMxRef("SVGElement")}}.

### CSS Typed Object Model {{Experimental_Inline}}

{{SeeCompatTable}}

- {{DOMxRef("CSSImageValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSKeywordValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathInvert")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathMax")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathMin")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathNegate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathProduct")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathSum")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMathValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSMatrixComponent")}} {{Experimental_Inline}}
- {{DOMxRef("CSSNumericArray")}} {{Experimental_Inline}}
- {{DOMxRef("CSSNumericValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSPerspective")}} {{Experimental_Inline}}
- {{DOMxRef("CSSPositionValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSRotate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSScale")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkew")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkewX")}} {{Experimental_Inline}}
- {{DOMxRef("CSSSkewY")}} {{Experimental_Inline}}
- {{DOMxRef("CSSStyleValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTransformComponent")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTransformValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSTranslate")}} {{Experimental_Inline}}
- {{DOMxRef("CSSUnitValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSUnparsedValue")}} {{Experimental_Inline}}
- {{DOMxRef("CSSVariableReferenceValue")}} {{Experimental_Inline}}
- {{DOMxRef("StylePropertyMap")}} {{Experimental_Inline}}
- {{DOMxRef("StylePropertyMapReadOnly")}} {{Experimental_Inline}}

### Obsolete CSSOM interfaces {{deprecated_inline}}

{{deprecated_header}}

- {{DOMxRef("CSSPrimitiveValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValue")}} {{deprecated_inline}}
- {{DOMxRef("CSSValueList")}} {{deprecated_inline}}

## Tutorials

- [Determining the dimensions of elements](/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements) (it needs some updating as it was made in the DHTML/Ajax era)
- [Managing screen orientation](/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)

## Specifications

{{Specifications}}

## Browser compatibility

All these features have been added little by little over the years to the different browsers: it was a quite complex process that can't be summarized in a simple table. Please refer to the specific interfaces for its availability.

## See also

- [Document Object Model (DOM)](/en-US/docs/Web/API/Document_Object_Model)
- [Houdini](/en-US/docs/Web/Guide/Houdini)
