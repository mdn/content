---
title: Initial value
slug: Web/CSS/initial_value
tags:
  - CSS
  - Guide
  - Reference
spec-urls: https://www.w3.org/TR/CSS22/cascade.html#specified-value
---
{{CSSRef}}

The **initial value** of a [CSS](/en-US/docs/Web/CSS) property is its default value, as listed in its definition table in the specification. The usage of the initial value depends on whether a property is inherited or not:

- For [inherited properties](/en-US/docs/Web/CSS/inheritance#inherited_properties), the initial value is used on the _root element only_, as long as no [specified value](/en-US/docs/Web/CSS/specified_value) is supplied.
- For [non-inherited properties](/en-US/docs/Web/CSS/inheritance#non-inherited_properties), the initial value is used on _all elements_, as long as no [specified value](/en-US/docs/Web/CSS/specified_value) is supplied.

You can explicitly specify the initial value by using the {{cssxref("initial")}} keyword.

> **Note:** The initial value should not be confused with the value specified by the browser's style sheet.

## Specifications

{{Specifications}}

## See also

- {{cssxref("initial")}}
- {{CSS_key_concepts}}
