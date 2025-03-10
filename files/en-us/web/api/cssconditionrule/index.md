---
title: CSSConditionRule
slug: Web/API/CSSConditionRule
page-type: web-api-interface
browser-compat: api.CSSConditionRule
---

{{ APIRef("CSSOM") }}

An object implementing the **`CSSConditionRule`** interface represents a single condition CSS [at-rule](/en-US/docs/Web/CSS/CSS_syntax/At-rule), which consists of a condition and a statement block.

Three objects derive from `CSSConditionRule`: {{domxref("CSSMediaRule")}}, {{domxref("CSSContainerRule")}} and {{domxref("CSSSupportsRule")}}.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its ancestors {{domxref("CSSGroupingRule")}} and {{domxref("CSSRule")}}._

- {{domxref("CSSConditionRule.conditionText")}} {{ReadOnlyInline}}
  - : Represents the text of the condition of the rule.

## Instance methods

_Inherits methods from its ancestors {{domxref("CSSGroupingRule")}} and {{domxref("CSSRule")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using dynamic styling information](/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
