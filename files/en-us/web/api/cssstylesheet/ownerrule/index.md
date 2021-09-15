---
title: CSSStyleSheet.ownerRule
slug: Web/API/CSSStyleSheet/ownerRule
tags:
  - '@import'
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
  - import
  - ownerRule
browser-compat: api.CSSStyleSheet.ownerRule
---
{{APIRef("CSSOM")}}

The read-only {{domxref("CSSStyleSheet")}} property
**`ownerRule`** returns the {{domxref("CSSImportRule")}}
corresponding to the {{cssxref("@import")}} at-rule which imported the stylesheet into
the document. If the stylesheet wasn't imported into the document using
`@import`, the returned value is `null`.

## Syntax

```js
var ownerRule = cssStyleSheet.ownerRule;
```

### Value

A {{domxref("CSSImportRule")}} corresponding to the {{cssxref("@import")}} rule which
imported the stylesheet into the document. If the stylesheet wasn't imported into the
document using `@import`, the returned value is `null`.

## Examples

This snippet of code looks for rules which were not imported into the document using an
`@import` at-rule.

```js
let ruleList = document.styleSheets[0].cssRules;

for (let rule of ruleList) {
  if (!rule.ownerRule) {
    /* rule is not imported */
  }
}
```

This snipped obtains a reference to the stylesheet associated with the
`@import` and processes it in some manner:

```js
let ruleList = document.styleSheets[0].cssRules;

for (let rule of ruleList) {
  if (rule.ownerRule) {
    checkStylesheet(rule.ownerRule.styleSheet);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model)
- [Using
  dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
