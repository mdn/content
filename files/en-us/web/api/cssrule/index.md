---
title: CSSRule
slug: Web/API/CSSRule
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSRule
---
{{APIRef("CSSOM")}}

The **`CSSRule`** interface represents a single CSS rule. There are several types of rules which inherit properties from `CSSRule`.

- {{DOMXRef("CSSStyleRule")}}
- {{DOMXRef("CSSImportRule")}}
- {{DOMXRef("CSSMediaRule")}}
- {{DOMXRef("CSSFontFaceRule")}}
- {{DOMXRef("CSSPageRule")}}
- {{DOMXRef("CSSNamespaceRule")}}
- {{DOMXRef("CSSKeyframesRule")}}
- {{DOMXRef("CSSKeyframeRule")}}
- {{DOMXRef("CSSCounterStyleRule")}}
- {{DOMXRef("CSSDocumentRule")}}
- {{DOMXRef("CSSSupportsRule")}}
- {{DOMXRef("CSSFontFeatureValuesRule")}}
- {{DOMXRef("CSSViewportRule")}}

## Properties common to all CSSRule instances

The `CSSRule` interface specifies the properties common to all rules, while properties unique to specific rule types are specified in the more specialized interfaces for those rules' respective types.

- {{domxref("CSSRule.cssText")}}
  - : Represents the textual representation of the rule, e.g. "`h1,h2 { font-size: 16pt }`" or "`@import 'url'`". To access or modify parts of the rule (e.g. the value of "font-size" in the example) use the properties on the [specialized interface for the rule's type](#type_constants).
- {{domxref("CSSRule.parentRule")}} {{ReadOnlyInline}}
  - : Returns the containing rule, otherwise `null`. E.g. if this rule is a style rule inside an {{cssxref("@media")}} block, the parent rule would be that {{domxref("CSSMediaRule")}}.
- {{domxref("CSSRule.parentStyleSheet")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("CSSStyleSheet")}} object for the style sheet that contains this rule
- {{domxref("CSSRule.type")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Returns one of the Type constants to determine which type of rule is represented.

## Examples

References to a `CSSRule` may be obtained by looking at a {{domxref("CSSStyleSheet")}}'s `cssRules` list.

```js
let myRules = document.styleSheets[0].cssRules; // Returns a CSSRuleList
console.log(myRules);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
