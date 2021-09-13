---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSGroupingRule
---
{{ APIRef("CSSOM") }}

The **`CSSGroupingRule`** interface of the {{domxref("CSS Object Model")}} represents any CSS {{CSSXref("at-rule")}} that contains other rules nested within it.

## Properties

_This interface also inherits properties from {{domxref("CSSRule")}}._

- {{domxref("CSSGroupingRule.cssRules")}}{{readonlyinline}}
  - : Returns a {{domxref("CSSRuleList")}} of the CSS rules in the media rule.

## Methods

_This interface also inherits methods from {{domxref("CSSRule")}}._

- {{domxref("CSSGroupingRule.deleteRule")}}
  - : Deletes a rule from the style sheet.
- {{domxref("CSSGroupingRule.insertRule")}}
  - : Inserts a new style rule into the current style sheet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
