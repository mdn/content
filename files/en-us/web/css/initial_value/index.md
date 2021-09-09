---
title: Initial value
slug: Web/CSS/initial_value
tags:
  - CSS
  - Guide
  - Reference
---
{{CSSRef}}

The **initial value** of a [CSS](/en-US/docs/Web/CSS) property is its default value, as listed in its definition table in the specification. The usage of the initial value depends on whether a property is inherited or not:

- For [inherited properties](/en-US/docs/CSS/inheritance#Inherited_properties), the initial value is used on the _root element only_, as long as no [specified value](/en-US/docs/Web/CSS/specified_value) is supplied.
- For [non-inherited properties](/en-US/docs/CSS/inheritance#Non-inherited_properties), the initial value is used on _all elements_, as long as no [specified value](/en-US/docs/Web/CSS/specified_value) is supplied.

You can explicitly specify the initial value by using the {{cssxref("initial")}} keyword.

> **Note:** The initial value should not be confused with the value specified by the browser's style sheet.

## Specifications

| **Specification**                                                                                    | **Status**                   | **Comment**              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------ |
| **[CSS Cascade 4](https://drafts.csswg.org/css-cascade-4/#initial-values)**                          |                              | **Formal definition.**   |
| **{{SpecName("CSS2.1", "cascade.html#specified-value", "initial value")}}** | **{{Spec2("CSS2.1")}}** | **Implicit definition.** |

## See also

- **{{cssxref("initial")}}**
- **{{CSS_key_concepts}}**
