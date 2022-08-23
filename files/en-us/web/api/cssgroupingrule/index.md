---
title: CSSGroupingRule
slug: Web/API/CSSGroupingRule
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSGroupingRule
---
{{ APIRef("CSSOM") }}

The **`CSSGroupingRule`** interface of the [CSS Object Model](/en-US/docs/Web/API/CSS_Object_Model) represents any CSS [at-rule](/en-US/docs/Web/CSS/At-rule) that contains other rules nested within it.

{{InheritanceDiagram}}

## Properties

_This interface also inherits properties from {{domxref("CSSRule")}}._

- {{domxref("CSSGroupingRule.cssRules")}} {{ReadOnlyInline}}
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
