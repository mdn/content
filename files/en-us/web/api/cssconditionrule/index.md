---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
page-type: web-api-interface
tags:
  - API
  - CSSOM
  - Interface
  - Reference
browser-compat: api.CSSConditionRule
---
{{ APIRef("CSSOM") }}

An object implementing the **`CSSConditionRule`** interface represents a single condition CSS [at-rule](/en-US/docs/Web/CSS/At-rule), which consists of a condition and a statement block.

Two objects derive from `CSSConditionRule`: {{domxref("CSSMediaRule")}} and {{domxref("CSSSupportsRule")}}.

{{InheritanceDiagram}}

## Properties

_Inherits properties from its ancestors {{domxref("CSSRule")}} and {{domxref("CSSGroupingRule")}}._

- {{domxref("CSSConditionRule.conditionText")}}
  - : Represents the text of the condition of the rule.

## Methods

No specific methods; inherits methods from its ancestors {{domxref("CSSRule")}} and {{domxref("CSSGroupingRule")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
