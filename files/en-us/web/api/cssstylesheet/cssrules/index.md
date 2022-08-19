---
title: CSSStyleSheet.cssRules
slug: Web/API/CSSStyleSheet/cssRules
page-type: web-api-instance-property
tags:
  - API
  - CSS
  - CSSOM
  - CSSOM API
  - CSSStyleSheet
  - Layout
  - Object Model
  - Property
  - Read-only
  - Reference
  - StyleSheet
browser-compat: api.CSSStyleSheet.cssRules
---
{{APIRef("CSSOM")}}

The read-only {{domxref("CSSStyleSheet")}} property
**`cssRules`** returns a live {{domxref("CSSRuleList")}} which
provides a real-time, up-to-date list of every CSS rule which comprises the
stylesheet. Each item in the list is a {{domxref("CSSRule")}} defining a single
rule.

## Value

A live-updating {{domxref("CSSRuleList")}} containing each of the CSS rules making up
the stylesheet. Each entry in the rule list is a {{domxref("CSSRule")}} object
describing one rule making up the stylesheet.

## Examples

Individual rules within the stylesheet can then be accessed by index:

```js
const ruleList = document.styleSheets[0].cssRules;

for (let i=0; i < ruleList.length; i++) {
  processRule(ruleList[i]);
}
```

Rules can also be accessed using {{jsxref("Statements/for...of", "for...of")}}:

```js
const ruleList = document.styleSheets[0].cssRules;

for (const rule of ruleList) {
  processRule(rule);
}
```

However, because `CSSRule` is not a proper array, you can't use
{{jsxref("Array.forEach", "forEach()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model)
- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
