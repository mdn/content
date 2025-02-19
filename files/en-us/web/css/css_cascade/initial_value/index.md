---
title: Initial value
slug: Web/CSS/CSS_cascade/initial_value
page-type: guide
spec-urls:
  - https://www.w3.org/TR/CSS22/cascade.html#specified-value
  - https://drafts.csswg.org/css-cascade-5/#specified-value
---

{{CSSRef}}

The **initial value** of a [CSS](/en-US/docs/Web/CSS) property is its default value, as listed in its definition table in the specification. The usage of the initial value depends on whether a property is inherited or not:

- For [inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#inherited_properties), the initial value is used on the _root element only_, as long as no [specified value](/en-US/docs/Web/CSS/CSS_cascade/specified_value) is supplied.
- For [non-inherited properties](/en-US/docs/Web/CSS/CSS_cascade/Inheritance#non-inherited_properties), the initial value is used on _all elements_, as long as no [specified value](/en-US/docs/Web/CSS/CSS_cascade/specified_value) is supplied.

You can explicitly specify the initial value by using the {{cssxref("initial")}} keyword.

> [!NOTE]
> The initial value should not be confused with the value specified by the browser's style sheet.

## Specifications

{{Specifications}}

## See also

- {{cssxref("initial")}}
- CSS key concepts:
  - [CSS syntax](/en-US/docs/Web/CSS/CSS_syntax/Syntax)
  - [At-rules](/en-US/docs/Web/CSS/CSS_syntax/At-rule)
  - [Comments](/en-US/docs/Web/CSS/CSS_syntax/Comments)
  - [Specificity](/en-US/docs/Web/CSS/CSS_cascade/Specificity)
  - [Inheritance](/en-US/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box model](/en-US/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout modes](/en-US/docs/Web/CSS/Layout_mode)
  - [Visual formatting models](/en-US/docs/Web/CSS/Visual_formatting_model)
  - [Margin collapsing](/en-US/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Values
    - [Computed values](/en-US/docs/Web/CSS/CSS_cascade/computed_value)
    - [Used values](/en-US/docs/Web/CSS/CSS_cascade/used_value)
    - [Resolved values](/en-US/docs/Web/CSS/resolved_value)
    - [Actual values](/en-US/docs/Web/CSS/CSS_cascade/actual_value)
  - [Value definition syntax](/en-US/docs/Web/CSS/Value_definition_syntax)
  - [Shorthand properties](/en-US/docs/Web/CSS/Shorthand_properties)
  - [Replaced elements](/en-US/docs/Web/CSS/Replaced_element)
